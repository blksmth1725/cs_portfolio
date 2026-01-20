import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import path from 'path';
import authRouter from './routes/auth';
import contactRouter from './routes/contact';

// Load environment variables from project root
// Debug: Show current working directory
console.log('Current working directory:', process.cwd());
console.log('__dirname:', __dirname);

// Try multiple possible paths to find the .env file
const possiblePaths = [
  path.resolve(process.cwd(), '.env'),           // Current working directory
  path.resolve(__dirname, '../.env'),           // Relative to compiled dist folder
  path.resolve(__dirname, '../../.env'),        // If running from src folder
];

console.log('Trying to load .env from paths:', possiblePaths);

let envLoaded = false;
for (const envPath of possiblePaths) {
  const fs = require('fs');
  const exists = fs.existsSync(envPath);
  console.log(`  Checking: ${envPath} - ${exists ? 'EXISTS' : 'NOT FOUND'}`);

  if (exists) {
    const result = dotenv.config({ path: envPath });
    if (!result.error) {
      console.log('✓ Loaded .env from:', envPath);
      envLoaded = true;
      break;
    } else {
      console.log('  Error loading:', result.error.message);
    }
  }
}

if (!envLoaded) {
  console.warn('⚠ Warning: Could not find .env file. Tried paths:', possiblePaths);
}

// Debug: Log what environment variables were loaded
console.log('Environment variables loaded from .env:');
const envKeys = Object.keys(process.env).filter(key =>
  key.includes('RESEND') || key.includes('resend') || key.includes('API')
);
if (envKeys.length > 0) {
  console.log('  Found related keys:', envKeys);
  envKeys.forEach(key => {
    const value = process.env[key];
    console.log(`  ${key} = ${value ? (value.substring(0, 20) + '...') : 'undefined'}`);
  });
} else {
  console.log('  No RESEND/API related keys found');
}

console.log('RESEND_API_KEY loaded:', !!process.env.RESEND_API_KEY);
if (!process.env.RESEND_API_KEY) {
  console.warn('⚠ RESEND_API_KEY is missing!');
  console.warn('⚠ Make sure .env file contains exactly: RESEND_API_KEY=re_81EWDLDt_MfWHQpuVymPkiPdLsAfP4Rex');
  console.warn('⚠ No spaces around =, no quotes, no extra characters');
}

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(helmet()); // Security headers
app.use(cors()); // Enable CORS
app.use(morgan('combined')); // HTTP request logging
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'CS Portfolio API is running!' });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// API routes
app.use('/api/auth', authRouter);
app.use('/api/contact', contactRouter);

app.get('/api/projects', (req, res) => {
  res.json({
    message: 'Projects endpoint - coming soon!',
    data: []
  });
});

app.get('/api/about', (req, res) => {
  res.json({
    message: 'About endpoint - coming soon!',
    data: {}
  });
});

// 404 handler (must be last): use bare middleware instead of "*" path
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/health`);
  console.log(`API base: http://localhost:${PORT}/api`);
});

export default app;
