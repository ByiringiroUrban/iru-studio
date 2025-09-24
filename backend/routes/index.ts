import { Router, Request, Response } from 'express';
import contactRoutes from './contactRoutes';
import bookingRoutes from './bookingRoutes';
import authRoutes from './authRoutes';

const router = Router();

// Health check
router.get('/health', (req: Request, res: Response) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// API routes
router.use('/contacts', contactRoutes);
router.use('/bookings', bookingRoutes);
router.use('/auth', authRoutes);

export default router;

