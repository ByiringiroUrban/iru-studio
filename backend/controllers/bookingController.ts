// backend/controllers/bookingController.ts
import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const createBooking = async (req: Request, res: Response) => {
  try {
    const { name, email, phone, eventDate, location, message, items, totalAmount } = req.body;

    const booking = await prisma.booking.create({
      data: {
        name, email, phone,
        eventDate: eventDate ? new Date(eventDate) : null,
        location, message,
        totalAmount,
        items: {
          create: (items || []).map((it: any) => ({
            service: it.service,
            name: it.name,
            categoryId: it.categoryId,
            tier: it.tier,
            price: it.price,
            quantity: it.quantity ?? 1,
          })),
        },
      },
      include: { items: true },
    });

    return res.status(201).json(booking);
  } catch (e) {
    console.error('Create booking error:', e);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const getBookings = async (_req: Request, res: Response) => {
  const bookings = await prisma.booking.findMany({
    orderBy: { createdAt: 'desc' },
    include: { items: true },
  });
  return res.json(bookings);
};

export const updateBookingStatus = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { status } = req.body; // 'PENDING' | 'CONFIRMED' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED'
  const updated = await prisma.booking.update({ where: { id }, data: { status } });
  return res.json(updated);
};