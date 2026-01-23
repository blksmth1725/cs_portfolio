// Load environment variables FIRST using dotenv/config
// This runs immediately when the module loads, before any other imports
import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import path from 'path';

import authRouter from './routes/auth';
import contactRouter from './routes/contact';
import { ensureUsersTable } from './db';

// Determine environment
const isDevelopment = process.env.NODE_ENV !== 'production';

// In development, try to load .env from server directory
// dotenv/config looks in process.cwd(), but when running from project root via npm scripts,
// we need to look in the cs_portfolio_server directory
if (isDevelopment) {
  const fs = require('fs');
  const possiblePaths = [
    path.resolve(process.cwd(), 'cs_portfolio_server/.env'),  // From project root (npm run dev)
    path.resolve(process.cwd(), '.env'),                       // Current working directory
    path.resolve(__dirname, '../.env'),                        // Relative to compiled dist folder
    path.resolve(__dirname, '../../.env'),                     // If running from src folder
  ];

  // Check if DB_PASSWORD is already loaded, if not try loading from server directory
  if (!process.env.DB_PASSWORD) {
    for (const envPath of possiblePaths) {
      if (fs.existsSync(envPath)) {
        const result = dotenv.config({ path: envPath, override: false });
        if (!result.error) {
          console.log(`✓ Loaded .env from: ${envPath}`);
          break;
        }
      }
    }
  }

  // Debug: Show if DB_PASSWORD was loaded
  console.log(`DB_PASSWORD loaded: ${!!process.env.DB_PASSWORD}`);
}

const app = express();

// Port configuration:
// - Local dev: 5001 (default) - can be overridden with PORT env var
// - Production (AWS EB): Use PORT from environment (defaults to 8080 for EB)
const PORT = isDevelopment
  ? Number.parseInt(process.env.PORT || '5001', 10)
  : Number.parseInt(process.env.PORT || '8080', 10);

console.log(`Environment: ${isDevelopment ? 'development' : 'production'}`);
console.log(`Server port: ${PORT}`);

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