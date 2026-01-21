import { Router, Request, Response } from 'express';
import { pool, ensureUsersTable } from '../db';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const router = Router();
const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-change-me';

// Helper: do not leak DB error details in production
function errorResponse(err: unknown) {
  const isProd = process.env.NODE_ENV === 'production';

  if (isProd) {
    return { error: 'Internal server error' as const };
  }

  const e = err as any;
  return {
    error: 'Internal server error' as const,
    details: {
      message: e?.message,
      code: e?.code,
      errno: e?.errno,
      sqlState: e?.sqlState,
      sqlMessage: e?.sqlMessage,
    },
  };
}

router.post('/signup', async (req: Request, res: Response) => {
  const { name, email, password } = req.body as {
    name?: string;
    email?: string;
    password?: string;
  };

  if (!name || !email || !password) {
    return res.status(400).json({ error: 'name, email and password are required' });
  }

  try {
    await ensureUsersTable();

    const conn = await pool.getConnection();
    try {
      const [existing] = await conn.query(
        'SELECT id FROM users WHERE email = ?',
        [email]
      );

      const rows = existing as Array<{ id: number }>;
      if (rows.length > 0) {
        return res.status(409).json({ error: 'Email already in use' });
      }

      const passwordHash = await bcrypt.hash(password, 10);

      const nameParts = name.trim().split(' ');
      const firstName = nameParts[0] || '';
      const lastName = nameParts.slice(1).join(' ') || '';

      let username = email.split('@')[0];

      const [existingUsername] = await conn.query(
        'SELECT id FROM users WHERE username = ?',
        [username]
      );

      const usernameRows = existingUsername as Array<{ id: number }>;
      if (usernameRows.length > 0) {
        username = `${username}_${Date.now()}`;
      }

      const [result] = await conn.query(
        'INSERT INTO users (username, first_name, last_name, email, password, unhashed_password, role) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [username, firstName, lastName, email, passwordHash, password, 'user']
      );

      const insertResult = result as { insertId: number };
      const userId = insertResult.insertId;

      const token = jwt.sign({ userId, email }, JWT_SECRET, { expiresIn: '7d' });

      return res.status(201).json({
        id: userId,
        name,
        email,
        token,
      });
    } finally {
      conn.release();
    }
  } catch (err) {
    console.error('Signup error:', err);
    return res.status(500).json(errorResponse(err));
  }
});

router.post('/login', async (req: Request, res: Response) => {
  const { email, password } = req.body as {
    email?: string;
    password?: string;
  };

  if (!email || !password) {
    return res.status(400).json({ error: 'email and password are required' });
  }

  try {
    await ensureUsersTable();

    const conn = await pool.getConnection();
    try {
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
        password: string;
      }>;

      if (users.length === 0) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      const user = users[0];

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      const fullName = `${user.first_name} ${user.last_name}`.trim();

      const token = jwt.sign(
        { userId: user.id, email: user.email },
        JWT_SECRET,
        { expiresIn: '7d' }
      );

      return res.json({
        id: user.id,
        name: fullName || user.username,
        email: user.email,
        token,
      });
    } finally {
      conn.release();
    }
  } catch (err) {
    console.error('Login error:', err);
    return res.status(500).json(errorResponse(err));
  }
});

export default router;