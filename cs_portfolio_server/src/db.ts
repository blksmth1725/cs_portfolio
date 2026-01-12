import mysql from 'mysql2/promise';
import { DATABASE_CONFIG } from './config/database';

export const pool = mysql.createPool({
  host: DATABASE_CONFIG.HOST,
  port: DATABASE_CONFIG.PORT,
  user: DATABASE_CONFIG.USER,
  password: DATABASE_CONFIG.PASSWORD,
  database: DATABASE_CONFIG.NAME,
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
    `, [DATABASE_CONFIG.NAME]);
    
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
