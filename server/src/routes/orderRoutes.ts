import { Router } from 'express';
import {
  createOrder,
  getMyOrderNotifications,
  getMyOrders,
  getOrders,
  markMyOrderNotificationRead,
  updateOrderStatus
} from '../controllers/orderController';
import { authenticateToken, requireAdmin } from '../middleware/authMiddleware';

const router = Router();

router.post('/', authenticateToken, createOrder);
router.get('/mine/notifications', authenticateToken, getMyOrderNotifications);
router.patch('/mine/notifications/:notificationId/read', authenticateToken, markMyOrderNotificationRead);
router.get('/mine', authenticateToken, getMyOrders);
router.get('/', authenticateToken, requireAdmin, getOrders);
router.patch('/:id/status', authenticateToken, requireAdmin, updateOrderStatus);

export default router;