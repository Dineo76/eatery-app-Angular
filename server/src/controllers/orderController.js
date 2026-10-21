"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateOrderStatus = exports.getOrders = exports.createOrder = exports.ORDER_STATUSES = void 0;
// controllers/orderController.ts
const express_1 = require("express");
const db_1 = require("../config/db");
exports.ORDER_STATUSES = [
    'PENDING',
    'CONFIRMED',
    'PREPARING',
    'READY',
    'COMPLETED',
    'CANCELLED'
];
const createOrder = async (req, res) => {
    const client = await db_1.pool.connect();
    try {
        const { delivery, payment, items, subtotal, deliveryFee, total } = req.body;
        if (!delivery || !items || items.length === 0) {
            return res.status(400).json({ message: 'Invalid order payload.' });
        }
        await client.query('BEGIN');
        // 1. Insert into orders table
        const orderQuery = `
      INSERT INTO orders (full_name, phone, address, notes, payment_method, subtotal, delivery_fee, total_amount, status)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, 'PENDING')
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
    }
    catch (error) {
        await client.query('ROLLBACK');
        console.error('Order creation error:', error);
        res.status(500).json({ message: 'Internal server error while placing order.' });
    }
    finally {
        client.release();
    }
};
exports.createOrder = createOrder;
const getOrders = async (_req, res) => {
    try {
        const result = await db_1.pool.query(`SELECT
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
       ORDER BY o.created_at DESC`);
        const orders = result.rows.map((order) => ({
            ...order,
            subtotal: Number(order.subtotal),
            delivery_fee: Number(order.delivery_fee),
            total_amount: Number(order.total_amount),
            items: order.items.map((item) => ({
                ...item,
                price: Number(item.price)
            }))
        }));
        return res.status(200).json(orders);
    }
    catch (error) {
        console.error('Error fetching orders:', error);
        return res.status(500).json({ message: 'Server error fetching orders.' });
    }
};
exports.getOrders = getOrders;
const updateOrderStatus = async (req, res) => {
    const orderId = Number(req.params['id']);
    const status = req.body?.status;
    if (!Number.isSafeInteger(orderId) || orderId < 1) {
        return res.status(400).json({ message: 'Invalid order ID.' });
    }
    if (typeof status !== 'string' || !exports.ORDER_STATUSES.includes(status)) {
        return res.status(400).json({ message: 'Invalid order status.' });
    }
    try {
        const result = await db_1.pool.query('UPDATE orders SET status = $1 WHERE id = $2 RETURNING id, status', [status, orderId]);
        if (result.rowCount === 0) {
            return res.status(404).json({ message: 'Order not found.' });
        }
        return res.status(200).json(result.rows[0]);
    }
    catch (error) {
        console.error('Error updating order status:', error);
        return res.status(500).json({ message: 'Server error updating order status.' });
    }
};
exports.updateOrderStatus = updateOrderStatus;
//# sourceMappingURL=orderController.js.map