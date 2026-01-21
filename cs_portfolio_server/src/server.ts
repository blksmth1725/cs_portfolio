import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';

import authRouter from './routes/auth';
import contactRouter from './routes/contact';
import { ensureUsersTable } from './db';

// Load .env only in local/dev
if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

const app = express();

// Elastic Beanstalk provides PORT (fallback to 8080)
const PORT = Number.parseInt(process.env.PORT ?? '8080', 10);

// --------------------
// Middleware
// --------------------
app.use(helmet());

app.use(cors({
  origin: process.env.CORS_ORIGIN
    ? process.env.CORS_ORIGIN.split(',')
    : true,
  credentials: true,
}));

app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// --------------------
// Routes
// --------------------
app.get('/', (_req, res) => {
  res.json({ message: 'CS Portfolio API is running!' });
});

// Health check (must ALWAYS work)
app.get('/health', (_req, res) => {
  res.status(200).json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

// API routes
app.use('/api/auth', authRouter);
app.use('/api/contact', contactRouter);

app.get('/api/projects', (_req, res) => {
  res.json({
    message: 'Projects endpoint - coming soon!',
    data: [],
  });
});

app.get('/api/about', (_req, res) => {
  res.json({
    message: 'About endpoint - coming soon!',
    data: {},
  });
});

// --------------------
// 404 handler
// --------------------
app.use((_req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// --------------------
// Error handler
// --------------------
app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error(err);
  res.status(500).json({ error: 'Something went wrong!' });
});

// --------------------
// Start server FIRST
// --------------------
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server listening on port ${PORT}`);
});

// --------------------
// Then init DB safely
// --------------------
(async () => {
  try {
    await ensureUsersTable();
    console.log('Database initialized successfully');
  } catch (err) {
    console.error('Database init failed (server still running):', err);
  }
})();

export default app;