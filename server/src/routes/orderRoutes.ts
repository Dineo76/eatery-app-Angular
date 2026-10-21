import { Router } from 'express';
import { createOrder, getOrders, updateOrderStatus } from '../controllers/orderController';
import { authenticateToken, requireAdmin } from '../middleware/authMiddleware';

const router = Router();

router.post('/', createOrder);
router.get('/', authenticateToken, requireAdmin, getOrders);
router.patch('/:id/status', authenticateToken, requireAdmin, updateOrderStatus);

export default router;