import { Router } from 'express';
import { getCart, addToCart, removeFromCart } from '../controllers/cartController';
import { authenticateToken } from '../middleware/authMiddleware'; // Your JWT verify middleware

const router = Router();

// Protect all cart endpoints with authentication
router.get('/', authenticateToken, getCart);
router.post('/', authenticateToken, addToCart);
router.delete('/:itemId', authenticateToken, removeFromCart);

export default router;