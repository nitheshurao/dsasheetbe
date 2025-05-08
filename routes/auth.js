import { Router } from 'express';
import { register, login, getMe } from '../controllers/authController.js';
import auth from '../middleware/authMiddleware.js';

const router = Router();

// @route   POST /api/auth/register
// @desc    Register a new user
// @access  Public
router.post('/register', register);

// @route   POST /api/auth/login
// @desc    Login user and return JWT
// @access  Public
router.post('/login', login);

// @route   GET /api/auth/me
// @desc    Get logged-in user's data
// @access  Private
router.get('/me', auth, getMe);

export default router;
