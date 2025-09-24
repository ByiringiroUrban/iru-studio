// backend/controllers/contactController.ts
import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import nodemailer from 'nodemailer';

const prisma = new PrismaClient();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: { user: 'urbanpac20@gmail.com', pass: 'txwy ywhl avow hbcr' },
});

export const createContact = async (req: Request, res: Response) => {
  try {
    const { name, email, phone, subject, message } = req.body;
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const contact = await prisma.contact.create({
      data: { name, email, phone, subject, message },
    });

    await transporter.sendMail({
      from: 'Frame & Tune Studio <urbanpac20@gmail.com>',
      to: 'frameandtunestudio@gmail.com',
      subject: `[Contact] ${subject}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${String(message).replace(/\n/g, '<br>')}</p>
      `,
    });

    res.status(201).json({ success: true, id: contact.id });
  } catch (error) {
    console.error('Contact creation error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getContacts = async (_req: Request, res: Response) => {
  try {
    const contacts = await prisma.contact.findMany({ orderBy: { createdAt: 'desc' } });
    res.json(contacts);
  } catch (error) {
    console.error('Get contacts error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const updateContactStatus = async (req: Request, res: Response) => {
  try {
    const { id } = req.params; // this is the Prisma id (cuid)
    const { status } = req.body; // 'NEW' | 'READ' | 'REPLIED'
    const updated = await prisma.contact.update({ where: { id }, data: { status } });
    res.json(updated);
  } catch (error) {
    console.error('Update contact status error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};