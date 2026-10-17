import { Request, Response } from 'express';
import { pool } from '../config/db';

// GET /api/cart - Fetch cart items for the logged-in user
export const getCart = async (req: any, res: Response) => {
  try {
    const userId = req.user.id; // From auth middleware token verification
    const result = await pool.query(
      `SELECT c.id, c.quantity, m.id as item_id, m.name, m.price, m.image_url 
       FROM cart c 
       JOIN menu_items m ON c.item_id = m.id 
       WHERE c.user_id = $1`,
      [userId]
    );

    // Format response to match your frontend CartItem structure
    const cartItems = result.rows.map(row => ({
      item: {
        id: row.item_id,
        name: row.name,
        price: Number(row.price),
        image: row.image_url
      },
      quantity: row.quantity
    }));

    return res.status(200).json(cartItems);
  } catch (error) {
    console.error('Error fetching cart:', error);
    return res.status(500).json({ message: 'Server error fetching cart.' });
  }
};

// POST /api/cart - Add or update cart item
export const addToCart = async (req: any, res: Response) => {
  try {
    const userId = req.user.id;
    const { itemId, quantity } = req.body;

    const existing = await pool.query(
      'SELECT * FROM cart WHERE user_id = $1 AND item_id = $2',
      [userId, itemId]
    );

    if (existing.rows.length > 0) {
      await pool.query(
        'UPDATE cart SET quantity = quantity + $1 WHERE user_id = $2 AND item_id = $3',
        [quantity || 1, userId, itemId]
      );
    } else {
      await pool.query(
        'INSERT INTO cart (user_id, item_id, quantity) VALUES ($1, $2, $3)',
        [userId, itemId, quantity || 1]
      );
    }

    return res.status(200).json({ message: 'Cart updated successfully.' });
  } catch (error) {
    console.error('Error adding to cart:', error);
    return res.status(500).json({ message: 'Server error updating cart.' });
  }
};

// DELETE /api/cart/:itemId - Remove item from cart
export const removeFromCart = async (req: any, res: Response) => {
  try {
    const userId = req.user.id;
    const { itemId } = req.params;

    await pool.query('DELETE FROM cart WHERE user_id = $1 AND item_id = $2', [userId, itemId]);
    return res.status(200).json({ message: 'Item removed from cart.' });
  } catch (error) {
    console.error('Error removing cart item:', error);
    return res.status(500).json({ message: 'Server error removing item.' });
  }
};