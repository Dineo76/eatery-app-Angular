import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { pool } from './config/db';
import authRoutes from './routes/auth.routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: 'http://localhost:4200', credentials: true }));
app.use(express.json());

// Auth Routes
app.use('/api/auth', authRoutes);

// Health Check Route
app.get('/api/health', async (req, res) => {
  try {
    const dbRes = await pool.query('SELECT NOW()');
    res.json({ message: 'Server is running', dbTime: dbRes.rows[0].now });
  } catch (err) {
    res.status(500).json({ error: 'Database connection failed' });
  }
});

app.listen(PORT, async () => {
  console.log(`Server running on http://localhost:${PORT}`);
  try {
    const res = await pool.query('SELECT NOW()');
    console.log('Connected to PostgreSQL database at:', res.rows[0].now);
  } catch (err: any) {
    console.error('❌ PostgreSQL Connection Error:', err.message || err);
  }
});