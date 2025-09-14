import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import nodemailer from 'nodemailer';

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI || '';

mongoose
  .connect(MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error', err));

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'urbanpac20@gmail.com',
    pass: 'txwy ywhl avow hbcr',
  },
});

app.get('/api/health', (_, res) => res.json({ ok: true }));

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, subject, message } = req.body || {};
  if (!name || !email || !subject || !message) return res.status(400).json({ error: 'Missing fields' });
  try {
    await transporter.sendMail({
      from: 'Frame & Tune Studio <urbanpac20@gmail.com>',
      to: 'frameandtunestudio@gmail.com',
      subject: `[Contact] ${subject}`,
      text: `From: ${name} <${email}>\nPhone: ${phone || '-'}\n\n${message}`,
    });
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ error: 'Email failed' });
  }
});

app.post('/api/bookings', async (req, res) => {
  const { name, email, items } = req.body || {};
  if (!name || !email || !Array.isArray(items)) return res.status(400).json({ error: 'Invalid payload' });
  try {
    await transporter.sendMail({
      from: 'Frame & Tune Studio <urbanpac20@gmail.com>',
      to: 'frameandtunestudio@gmail.com',
      subject: '[Booking] New booking/cart submission',
      text: `Customer: ${name} <${email}>\nItems: ${JSON.stringify(items, null, 2)}`,
    });
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ error: 'Email failed' });
  }
});

app.listen(PORT, () => console.log(`Server running on ${PORT}`));



