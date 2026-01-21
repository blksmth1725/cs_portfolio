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

// Beanstalk provides PORT
const PORT = Number(process.env.PORT) || 5001;

// Middleware
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

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'CS Portfolio API is running!' });
});

// Health check
app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

// API routes
app.use('/api/auth', authRouter);
app.use('/api/contact', contactRouter);

app.get('/api/projects', (req, res) => {
  res.json({
    message: 'Projects endpoint - coming soon!',
    data: [],
  });
});

app.get('/api/about', (req, res) => {
  res.json({
    message: 'About endpoint - coming soon!',
    data: {},
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error handler
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server AFTER DB check
async function start() {
  try {
    await ensureUsersTable();

    const PORT = Number(process.env.PORT) || 5001;

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (err) {
    console.error('Startup failed:', err);
    process.exit(1);
  }
}

start();

export default app;