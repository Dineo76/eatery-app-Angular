// controllers/orderController.ts
import { Request, Response } from 'express';
import { pool } from '../config/db';

export const createOrder = async (req: Request, res: Response) => {
  const client = await pool.connect();

  try {
    const { delivery, payment, items, subtotal, deliveryFee, total } = req.body;

    if (!delivery || !items || items.length === 0) {
      return res.status(400).json({ message: 'Invalid order payload.' });
    }

    await client.query('BEGIN');

    // 1. Insert into orders table
    const orderQuery = `
      INSERT INTO orders (full_name, phone, address, notes, payment_method, subtotal, delivery_fee, total_amount)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING id, created_at;
    `;

    const orderValues = [
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