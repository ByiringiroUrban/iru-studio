import { Request, Response } from 'express';
import { PrismaClient, Role } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'dev_secret_change_me';

const getTransporter = () => {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  if (!user || !pass) return null;
  return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: { user, pass },
  });
};

const otpEmail = (toName: string, code: string) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
    body{background:#f6f8fb;margin:0;padding:0;font-family:Inter,Segoe UI,Arial,sans-serif;color:#0f172a}
    .wrap{max-width:560px;margin:24px auto;background:#ffffff;border-radius:16px;box-shadow:0 10px 30px rgba(2,6,23,0.06);overflow:hidden}
    .brand{display:flex;align-items:center;padding:20px 24px;background:linear-gradient(135deg,#f59e0b,#ef4444);color:#fff}
    .brand img{width:32px;height:32px;border-radius:8px;margin-right:10px}
    .content{padding:28px 24px}
    .code{letter-spacing:6px;font-weight:800;font-size:28px;background:#f8fafc;border:1px dashed #e2e8f0;padding:14px 18px;border-radius:12px;text-align:center;color:#111827}
    .muted{color:#64748b;font-size:13px;margin-top:10px}
    .cta{display:inline-block;margin-top:18px;background:#f59e0b;color:#fff;text-decoration:none;padding:10px 14px;border-radius:10px;font-weight:600}
    .footer{padding:16px 24px;color:#94a3b8;font-size:12px;text-align:center}
  </style>
  <title>Verify your Frame & Tune Studio account</title>
  </head>
  <body>
    <div class="wrap">
      <div class="brand">
        <img src="https://raw.githubusercontent.com/aurora-assets/ftstudio/main/logo.png" alt="FTS" />
        <div>
          <div style="font-weight:800;line-height:1">Frame & Tune Studio</div>
          <div style="font-size:12px;opacity:.9">Account Verification</div>
        </div>
      </div>
      <div class="content">
        <p>Hi ${toName || 'there'},</p>
        <p>Use the verification code below to complete your sign up. This code will expire in <strong>10 minutes</strong>.</p>
        <div class="code">${code}</div>
        <p class="muted">Didn’t request this? You can safely ignore this email.</p>
        <a class="cta" href="#">Open Frame & Tune Studio</a>
      </div>
      <div class="footer">© ${new Date().getFullYear()} Frame & Tune Studio. All rights reserved.</div>
    </div>
  </body>
</html>`;

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      return res.status(409).json({ error: 'Email already in use' });
    }

    const hash = await bcrypt.hash(password, 10);
    const otp = String(Math.floor(100000 + Math.random() * 900000));
    const otpExpires = new Date(Date.now() + 10 * 60 * 1000);
    const user = await prisma.user.create({ data: { name, email, password: hash, role: Role.USER, otp, otpExpires, verified: false } });

    // send OTP
    const transporter = getTransporter();
    if (transporter) {
      await transporter.sendMail({
        from: `Frame & Tune Studio <${process.env.EMAIL_USER}>`,
        to: email,
        subject: 'Verify your Frame & Tune Studio account',
        html: otpEmail(name, otp),
      });
    } else {
      console.warn('EMAIL_USER/EMAIL_PASS not configured; skipping OTP email send');
    }

    return res.status(201).json({ pending: true, userId: user.id });
  } catch (e) {
    console.error('Register error', e);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'Missing credentials' });
    }
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(401).json({ error: 'Invalid credentials' });
    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.status(401).json({ error: 'Invalid credentials' });
  if (!user.verified) return res.status(403).json({ error: 'Account not verified' });
    const token = jwt.sign({ sub: user.id, role: user.role }, JWT_SECRET, { expiresIn: '7d' });
    return res.json({ token, user: { id: user.id, name: user.name, email: user.email, role: user.role } });
  } catch (e) {
    console.error('Login error', e);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const verifyOtp = async (req: Request, res: Response) => {
  try {
    const { userId, otp } = req.body;
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user || !user.otp || !user.otpExpires) return res.status(400).json({ error: 'Invalid request' });
    if (user.otp !== otp) return res.status(400).json({ error: 'Invalid code' });
    if (user.otpExpires < new Date()) return res.status(400).json({ error: 'Code expired' });
    const updated = await prisma.user.update({ where: { id: user.id }, data: { verified: true, otp: null, otpExpires: null } });
    const token = jwt.sign({ sub: updated.id, role: updated.role }, JWT_SECRET, { expiresIn: '7d' });
    return res.json({ token, user: { id: updated.id, name: updated.name, email: updated.email, role: updated.role } });
  } catch (e) {
    console.error('Verify OTP error', e);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const me = async (req: Request & { userId?: string }, res: Response) => {
  try {
    const id = req.userId;
    if (!id) return res.status(401).json({ error: 'Unauthorized' });
    const user = await prisma.user.findUnique({ where: { id }, select: { id: true, name: true, email: true, role: true, createdAt: true } });
    return res.json(user);
  } catch (e) {
    console.error('Me error', e);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const requestPasswordReset = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ error: 'Email is required' });
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.json({ ok: true }); // do not leak existence
    const code = String(Math.floor(100000 + Math.random() * 900000));
    const expires = new Date(Date.now() + 10 * 60 * 1000);
    await prisma.user.update({ where: { id: user.id }, data: { resetOtp: code, resetOtpExpires: expires } });
    const transporter = getTransporter();
    if (transporter) {
      await transporter.sendMail({
        from: `Frame & Tune Studio <${process.env.EMAIL_USER}>`,
        to: user.email,
        subject: 'Reset your Frame & Tune Studio password',
        html: otpEmail(user.name, code).replace('Verify your account', 'Password Reset Code'),
      });
    }
    return res.json({ ok: true });
  } catch (e) {
    console.error('Request reset error', e);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const confirmPasswordReset = async (req: Request, res: Response) => {
  try {
    const { email, code, newPassword } = req.body;
    if (!email || !code || !newPassword) return res.status(400).json({ error: 'Missing fields' });
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || !user.resetOtp || !user.resetOtpExpires) return res.status(400).json({ error: 'Invalid code' });
    if (user.resetOtp !== code) return res.status(400).json({ error: 'Invalid code' });
    if (user.resetOtpExpires < new Date()) return res.status(400).json({ error: 'Code expired' });
    const hash = await bcrypt.hash(newPassword, 10);
    await prisma.user.update({ where: { id: user.id }, data: { password: hash, resetOtp: null, resetOtpExpires: null } });
    return res.json({ ok: true });
  } catch (e) {
    console.error('Confirm reset error', e);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

