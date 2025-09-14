import { Request, Response, NextFunction } from 'express';

export const validateContact = (req: Request, res: Response, next: NextFunction) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ 
      error: 'Missing required fields',
      required: ['name', 'email', 'subject', 'message']
    });
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  next();
};

export const validateBooking = (req: Request, res: Response, next: NextFunction) => {
  const { name, email, items } = req.body;

  if (!name || !email || !items || !Array.isArray(items)) {
    return res.status(400).json({ 
      error: 'Missing required fields',
      required: ['name', 'email', 'items']
    });
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  // Validate items array
  if (items.length === 0) {
    return res.status(400).json({ error: 'At least one item is required' });
  }

  for (const item of items) {
    if (!item.service || !item.quantity || item.quantity < 1) {
      return res.status(400).json({ error: 'Invalid item data' });
    }
  }

  next();
};

