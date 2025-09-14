import { Router } from 'express';
import { createContact, getContacts, updateContactStatus } from '../controllers/contactController';
import { validateContact } from '../middleware/validation';

const router = Router();

// POST /api/contacts - Create new contact
router.post('/', validateContact, createContact);

// GET /api/contacts - Get all contacts (admin)
router.get('/', getContacts);

// PUT /api/contacts/:id/status - Update contact status (admin)
router.put('/:id/status', updateContactStatus);

export default router;

