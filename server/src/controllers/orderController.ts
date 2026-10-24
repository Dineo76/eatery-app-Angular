// controllers/orderController.ts
import { Request, Response } from 'express';
import { pool } from '../config/db';
import { AuthenticatedRequest } from '../middleware/authMiddleware';

export const ORDER_STATUSES = [
  'PENDING',
  'CONFIRMED',
  'PREPARING',
  'READY',
  'COMPLETED',
  'CANCELLED'
] as const;

export type OrderStatus = typeof ORDER_STATUSES[number];

export const createOrder = async (req: AuthenticatedRequest, res: Response) => {
  const client = await pool.connect();

  try {
    const { delivery, payment, items, subtotal, deliveryFee, total } = req.body;

    if (!req.user || !delivery || !payment || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ message: 'Invalid order payload.' });
    }

    await client.query('BEGIN');

    // 1. Insert into orders table
    const orderQuery = `
      INSERT INTO orders (user_id, full_name, phone, address, notes, payment_method, subtotal, delivery_fee, total_amount, status)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, 'PENDING')
      RETURNING id, created_at;
    `;
    const orderValues = [
      req.user.id,
      delivery.fullName,
      delivery.phone,
      delivery.address,
      delivery.notes || null,
      payment.paymentMethod,
      subtotal,
      deliveryFee,
      total
    ];

    const orderResult = await client.query(orderQuery, orderValues);
    const orderId = orderResult.rows[0].id;

    // 2. Insert line items into order_items table
    const itemQuery = `
      INSERT INTO order_items (order_id, item_name, quantity, price)
      VALUES ($1, $2, $3, $4);
    `;

    for (const item of items) {
      await client.query(itemQuery, [
        orderId,
        item.item.name,
        item.quantity,
        item.item.price
      ]);
    }

    await client.query('COMMIT');

    res.status(201).json({
      success: true,
      message: 'Order placed successfully',
      orderId
    });

  } catch (error) {
    await client.query('ROLLBACK');
    console.error('Order creation error:', error);
    res.status(500).json({ message: 'Internal server error while placing order.' });
  } finally {
    client.release();
  }
};

export const getOrders = async (_req: Request, res: Response) => {
  try {
    const result = await pool.query(
      `SELECT
         o.id,
         o.full_name,
         o.phone,
         o.address,
         o.notes,
         o.payment_method,
         o.subtotal,
         o.delivery_fee,
         o.total_amount,
         o.status,
         o.created_at,
         COALESCE(
           JSON_AGG(
             JSON_BUILD_OBJECT(
               'name', oi.item_name,
               'quantity', oi.quantity,
               'price', oi.price
             )
           ) FILTER (WHERE oi.order_id IS NOT NULL),
           '[]'::json
         ) AS items
       FROM orders o
       LEFT JOIN order_items oi ON oi.order_id = o.id
       GROUP BY o.id
       ORDER BY o.created_at DESC`
    );

    const orders = result.rows.map((order) => ({
      ...order,
      subtotal: Number(order.subtotal),
      delivery_fee: Number(order.delivery_fee),
      total_amount: Number(order.total_amount),
      items: order.items.map((item: { price: string | number }) => ({
        ...item,
        price: Number(item.price)
      }))
    }));

    return res.status(200).json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    return res.status(500).json({ message: 'Server error fetching orders.' });
  }
};

export const getMyOrders = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'Authentication required.' });
    }

    const result = await pool.query(
      `SELECT
         o.id,
         o.full_name,
         o.phone,
         o.address,
         o.notes,
         o.payment_method,
         o.subtotal,
         o.delivery_fee,
         o.total_amount,
         o.status,
         o.created_at,
         COALESCE(
           JSON_AGG(
             JSON_BUILD_OBJECT(
               'name', oi.item_name,
               'quantity', oi.quantity,
               'price', oi.price
             )
           ) FILTER (WHERE oi.order_id IS NOT NULL),
           '[]'::json
         ) AS items
       FROM orders o
       LEFT JOIN order_items oi ON oi.order_id = o.id
       WHERE o.user_id = $1
       GROUP BY o.id
       ORDER BY o.created_at DESC`,
      [req.user.id]
    );

    const orders = result.rows.map((order) => ({
      ...order,
      subtotal: Number(order.subtotal),
      delivery_fee: Number(order.delivery_fee),
      total_amount: Number(order.total_amount),
      items: order.items.map((item: { price: string | number }) => ({
        ...item,
        price: Number(item.price)
      }))
    }));

    return res.status(200).json(orders);
  } catch (error) {
    console.error('Error fetching customer orders:', error);
    return res.status(500).json({ message: 'Server error fetching your orders.' });
  }
};

export const getMyOrderNotifications = async (req: AuthenticatedRequest, res: Response) => {
  if (!req.user) {
    return res.status(401).json({ message: 'Authentication required.' });
  }

  try {
    const result = await pool.query(
      `SELECT id, order_id, previous_status, new_status, created_at, read_at
       FROM order_status_notifications
       WHERE user_id = $1
       ORDER BY created_at DESC`,
      [req.user.id]
    );

    return res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error fetching order notifications:', error);
    return res.status(500).json({ message: 'Server error fetching your notifications.' });
  }
};

export const markMyOrderNotificationRead = async (req: AuthenticatedRequest, res: Response) => {
  const notificationId = Number(req.params['notificationId']);
  if (!req.user) {
    return res.status(401).json({ message: 'Authentication required.' });
  }
  if (!Number.isSafeInteger(notificationId) || notificationId < 1) {
    return res.status(400).json({ message: 'Invalid notification ID.' });
  }

  try {
    const result = await pool.query(
      `UPDATE order_status_notifications
       SET read_at = COALESCE(read_at, CURRENT_TIMESTAMP)
       WHERE id = $1 AND user_id = $2
       RETURNING id, read_at`,
      [notificationId, req.user.id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ message: 'Notification not found.' });
    }

    return res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error('Error marking order notification as read:', error);
    return res.status(500).json({ message: 'Server error updating your notification.' });
  }
};

export const updateOrderStatus = async (req: Request, res: Response) => {
  const orderId = Number(req.params['id']);
  const status: unknown = req.body?.status;

  if (!Number.isSafeInteger(orderId) || orderId < 1) {
    return res.status(400).json({ message: 'Invalid order ID.' });
  }

  if (typeof status !== 'string' || !ORDER_STATUSES.includes(status as OrderStatus)) {
    return res.status(400).json({ message: 'Invalid order status.' });
  }

  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    const currentOrder = await client.query(
      'SELECT id, user_id, status FROM orders WHERE id = $1 FOR UPDATE',
      [orderId]
    );

    if (currentOrder.rowCount === 0) {
      await client.query('ROLLBACK');
      return res.status(404).json({ message: 'Order not found.' });
    }

    const order = currentOrder.rows[0] as {
      id: number;
      user_id: number | null;
      status: OrderStatus;
    };

    if (order.status === status) {
      await client.query('COMMIT');
      return res.status(200).json({ id: order.id, status });
    }

    await client.query(
      'UPDATE orders SET status = $1 WHERE id = $2',
      [status, orderId]
    );

    if (order.user_id !== null) {
      await client.query(
        `INSERT INTO order_status_notifications
           (user_id, order_id, previous_status, new_status)
         VALUES ($1, $2, $3, $4)`,
        [order.user_id, order.id, order.status, status]
      );
    }

    await client.query('COMMIT');
    return res.status(200).json({ id: order.id, status });
  } catch (error) {
    await client.query('ROLLBACK');
    console.error('Error updating order status:', error);
    return res.status(500).json({ message: 'Server error updating order status.' });
  } finally {
    client.release();
  }
};