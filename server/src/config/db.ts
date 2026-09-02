import process = require("process");

const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

module.exports = { pool };

pool.on('connect', () => {
  console.log('Connected to PostgreSQL database');
});