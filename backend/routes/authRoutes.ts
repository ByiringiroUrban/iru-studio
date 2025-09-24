import { Router } from 'express';
import { register, login, me, verifyOtp, requestPasswordReset, confirmPasswordReset } from '../controllers/authController';
import { authMiddleware } from '../middleware/auth';

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.post('/verify-otp', verifyOtp);
router.post('/forgot', requestPasswordReset);
router.post('/reset', confirmPasswordReset);
router.get('/me', authMiddleware, me);

export default router;


