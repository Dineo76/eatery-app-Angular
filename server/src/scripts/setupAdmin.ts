import bcrypt from 'bcryptjs';
import { pool } from '../config/db';

const email = process.env['ADMIN_EMAIL']?.trim().toLowerCase();
const password = process.env['ADMIN_PASSWORD'];
const fullName = process.env['ADMIN_NAME']?.trim() || 'KwaJozi Admin';

async function setupAdmin(): Promise<void> {
  if (!email || !password) {
    throw new Error('Set ADMIN_EMAIL and ADMIN_PASSWORD in server/.env before running setup:admin.');
  }

  if (password.length < 12) {
    throw new Error('ADMIN_PASSWORD must be at least 12 characters long.');
  }

  const passwordHash = await bcrypt.hash(password, 12);
  const client = await pool.connect();
  let transactionStarted = false;

  try {
    await client.query('BEGIN');
    transactionStarted = true;
    await client.query('SELECT pg_advisory_xact_lock($1)', [734291]);

    const existingUser = await client.query(
      'SELECT id FROM users WHERE lower(email) = $1 FOR UPDATE',
      [email]
    );

    if (existingUser.rows.length > 0) {
      await client.query(
        'UPDATE users SET full_name = $1, email = $2, password = $3, role = $4 WHERE id = $5',
        [fullName, email, passwordHash, 'ADMIN', existingUser.rows[0].id]
      );
    } else {
      await client.query(
        'INSERT INTO users (full_name, email, password, role) VALUES ($1, $2, $3, $4)',
        [fullName, email, passwordHash, 'ADMIN']
      );
    }

    await client.query('COMMIT');
    transactionStarted = false;
    console.log('Admin account is ready.');
  } catch (error) {
    if (transactionStarted) {
      await client.query('ROLLBACK');
    }
    throw error;
  } finally {
    client.release();
    await pool.end();
  }
}

setupAdmin().catch((error: unknown) => {
  console.error('Could not set up admin account:', error);
  process.exitCode = 1;
});
