import { Router, Request, Response } from 'express';
import { pool, ensureUsersTable } from '../db';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const router = Router();
const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-change-me';

router.post('/signup', async (req: Request, res: Response) => {
  const { name, email, password } = req.body as { name?: string; email?: string; password?: string };
  if (!name || !email || !password) {
    return res.status(400).json({ error: 'name, email and password are required' });
  }

  try {
    await ensureUsersTable();

    const conn = await pool.getConnection();
    try {
      // Check if email already exists
      const [existing] = await conn.query('SELECT id FROM users WHERE email = ?', [email]);
      const rows = existing as Array<{ id: number }>;
      if (rows.length > 0) {
        return res.status(409).json({ error: 'Email already in use' });
      }

      // Hash the password before storing
      const passwordHash = await bcrypt.hash(password, 10);
      
      // Split name into first and last name for your table structure
      const nameParts = name.trim().split(' ');
      const firstName = nameParts[0] || '';
      const lastName = nameParts.slice(1).join(' ') || '';
      const username = email.split('@')[0]; // Use email prefix as username
      
      // Insert new user with your table structure
      const [result] = await conn.query(
        'INSERT INTO users (username, first_name, last_name, email, password, role) VALUES (?, ?, ?, ?, ?, ?)',
        [username, firstName, lastName, email, passwordHash, 'user']
      );

      const insertResult = result as { insertId: number };
      const userId = insertResult.insertId;
      const token = jwt.sign({ userId, email }, JWT_SECRET, { expiresIn: '7d' });

      return res.status(201).json({ id: userId, name, email, token });
    } finally {
      conn.release();
    }
  } catch (err) {
    console.error('Signup error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/login', async (req: Request, res: Response) => {
  const { email, password } = req.body as { email?: string; password?: string };
  if (!email || !password) {
    return res.status(400).json({ error: 'email and password are required' });
  }

  try {
    const conn = await pool.getConnection();
    try {
      // Get user from database using your actual table structure
      const [rows] = await conn.query(
        'SELECT id, username, first_name, last_name, email, password FROM users WHERE email = ?', 
        [email]
      );
      const users = rows as Array<{ 
        id: number; 
        username: string; 
        first_name: string; 
        last_name: string; 
        email: string; 
        password: string 
      }>;
      
      if (users.length === 0) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      const user = users[0];
      
      // Compare the plain text password with the hashed password from database
      const isPasswordValid = await bcrypt.compare(password, user.password);
      
      if (!isPasswordValid) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      // Combine first and last name for frontend compatibility
      const fullName = `${user.first_name} ${user.last_name}`.trim();

      // Generate JWT token
      const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET, { expiresIn: '7d' });
      
      return res.json({ 
        id: user.id, 
        name: fullName || user.username, 
        email: user.email, 
        token 
      });
    } finally {
      conn.release();
    }
  } catch (err) {
    console.error('Login error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;