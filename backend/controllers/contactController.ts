import { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import Contact, { IContact } from '../models/Contact';

const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: 'urbanpac20@gmail.com',
    pass: 'txwy ywhl avow hbcr',
  },
});

export const createContact = async (req: Request, res: Response) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Save to database
    const contact = new Contact({
      name,
      email,
      phone,
      subject,
      message
    });

    await contact.save();

    // Send email notification
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
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    });

    res.status(201).json({ 
      success: true, 
      message: 'Contact form submitted successfully',
      id: contact._id 
    });
  } catch (error) {
    console.error('Contact creation error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getContacts = async (req: Request, res: Response) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    console.error('Get contacts error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const updateContactStatus = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const contact = await Contact.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' });
    }

    res.json(contact);
  } catch (error) {
    console.error('Update contact status error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

