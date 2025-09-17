import { Router } from 'express';
import contactRoutes from './contactRoutes';
import bookingRoutes from './bookingRoutes';

const router = Router();

// Health check
router.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// API routes
router.use('/contacts', contactRoutes);
router.use('/bookings', bookingRoutes);

export default router;

