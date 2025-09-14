import { Router } from 'express';
import { createBooking, getBookings, updateBookingStatus } from '../controllers/bookingController';
import { validateBooking } from '../middleware/validation';

const router = Router();

// POST /api/bookings - Create new booking
router.post('/', validateBooking, createBooking);

// GET /api/bookings - Get all bookings (admin)
router.get('/', getBookings);

// PUT /api/bookings/:id/status - Update booking status (admin)
router.put('/:id/status', updateBookingStatus);

export default router;

