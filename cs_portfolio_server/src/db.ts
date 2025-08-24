import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const DB_HOST = process.env.DB_HOST || '127.0.0.1';
const DB_PORT = Number(process.env.DB_PORT || 3306);
const DB_USER = process.env.DB_USER || 'root';
const DB_PASSWORD = process.env.DB_PASSWORD || '77fWQ9bgV^xB^3&';
const DB_NAME = process.env.DB_NAME || 'cs_portfolio';

export const pool = mysql.createPool({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export async function ensureUsersTable(): Promise<void> {
  const conn = await pool.getConnection();
  try {
    // Check if users table exists, if not create a basic one
    const [tables] = await conn.query(`
      SELECT TABLE_NAME 
      FROM INFORMATION_SCHEMA.TABLES 
      WHERE TABLE_SCHEMA = ? AND TABLE_NAME = 'users'
    `, [DB_NAME]);
    
    const tableExists = (tables as Array<{TABLE_NAME: string}>).length > 0;
    
    if (!tableExists) {
      // Create basic users table - will work with existing schema or create new one
      const createSql = `
        CREATE TABLE IF NOT EXISTS users (
          id INT AUTO_INCREMENT PRIMARY KEY,
          username VARCHAR(255) NOT NULL UNIQUE,
          first_name VARCHAR(255),
          last_name VARCHAR(255),
          email VARCHAR(255) NOT NULL UNIQUE,
          password VARCHAR(255) NOT NULL,
          unhashed_password VARCHAR(255),
          role ENUM('admin', 'user') DEFAULT 'user',
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
      `;
      await conn.query(createSql);
      console.log('Users table created');
    } else {
      console.log('Users table already exists');
    }
  } finally {
    conn.release();
  }
}
