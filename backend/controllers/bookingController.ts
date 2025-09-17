import { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import Booking, { IBooking, IBookingItem } from '../models/Booking';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'urbanpac20@gmail.com',
    pass: 'txwy ywhl avow hbcr',
  },
});

export const createBooking = async (req: Request, res: Response) => {
  try {
    const { name, email, phone, eventDate, location, message, items } = req.body;

    if (!name || !email || !items || !Array.isArray(items)) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Calculate total amount (simplified - you might want to add proper pricing logic)
    const totalAmount = items.reduce((total: number, item: IBookingItem) => {
      const price = parseFloat(item.price?.replace(/[^\d.]/g, '') || '0');
      return total + (price * item.quantity);
    }, 0);

    // Save to database
    const booking = new Booking({
      name,
      email,
      phone,
      eventDate: eventDate ? new Date(eventDate) : undefined,
      location,
      message,
      items,
      totalAmount
    });

    await booking.save();

    // Send confirmation email to customer
    await transporter.sendMail({
      from: 'Frame & Tune Studio <urbanpac20@gmail.com>',
      to: email,
      subject: 'Booking Confirmation - Frame & Tune Studio',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Booking Confirmation</h2>
          <p>Dear ${name},</p>
          <p>Thank you for your booking with Frame & Tune Studio! We have received your request and will review it shortly.</p>
          
          <h3>Booking Details:</h3>
          <ul>
            ${items.map((item: IBookingItem) => `
              <li><strong>${item.name || item.service}</strong> - ${item.tier || 'Standard'} (Qty: ${item.quantity})</li>
            `).join('')}
          </ul>
          
          ${eventDate ? `<p><strong>Event Date:</strong> ${new Date(eventDate).toLocaleDateString()}</p>` : ''}
          ${location ? `<p><strong>Location:</strong> ${location}</p>` : ''}
          ${message ? `<p><strong>Additional Notes:</strong> ${message}</p>` : ''}
          
          <p><strong>Total Amount:</strong> ${totalAmount.toLocaleString()} RWF</p>
          
          <p>Our team will contact you within 24 hours to confirm the details and discuss next steps.</p>
          
          <p>If you have any questions, please don't hesitate to contact us:</p>
          <ul>
            <li>Phone: +250 795 381 733</li>
            <li>Email: info@frameandtunestudio.com</li>
          </ul>
          
          <p>Best regards,<br>Frame & Tune Studio Team</p>
        </div>
      `
    });

    // Send notification email to admin
    await transporter.sendMail({
      from: 'Frame & Tune Studio <urbanpac20@gmail.com>',
      to: 'frameandtunestudio@gmail.com',
      subject: `[New Booking] ${name} - ${items.length} item(s)`,
      html: `
        <h3>New Booking Received</h3>
        <p><strong>Customer:</strong> ${name} (${email})</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        ${eventDate ? `<p><strong>Event Date:</strong> ${new Date(eventDate).toLocaleDateString()}</p>` : ''}
        ${location ? `<p><strong>Location:</strong> ${location}</p>` : ''}
        
        <h4>Items:</h4>
        <ul>
          ${items.map((item: IBookingItem) => `
            <li><strong>${item.name || item.service}</strong> - ${item.tier || 'Standard'} (Qty: ${item.quantity}) - ${item.price || 'Price TBD'}</li>
          `).join('')}
        </ul>
        
        <p><strong>Total Amount:</strong> ${totalAmount.toLocaleString()} RWF</p>
        ${message ? `<p><strong>Notes:</strong> ${message}</p>` : ''}
        
        <p><strong>Booking ID:</strong> ${booking._id}</p>
      `
    });

    res.status(201).json({ 
      success: true, 
      message: 'Booking created successfully',
      bookingId: booking._id 
    });
  } catch (error) {
    console.error('Booking creation error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getBookings = async (req: Request, res: Response) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (error) {
    console.error('Get bookings error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const updateBookingStatus = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const booking = await Booking.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }

    res.json(booking);
  } catch (error) {
    console.error('Update booking status error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

