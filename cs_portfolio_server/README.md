# CS Portfolio Server

A Node.js backend API for the CS Portfolio project.

## Features

- Express.js server with TypeScript
- Security middleware (Helmet)
- CORS enabled
- Request logging (Morgan)
- Environment variable support
- Health check endpoint
- Basic API structure

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file (copy from `.env.example`):
   ```bash
   cp .env.example .env
   ```

3. Configure environment variables in `.env`:
   ```
   PORT=5000
   NODE_ENV=development
   ```

## Development

Start the development server with hot reload:
```bash
npm run dev
```

## Build

Build the TypeScript code:
```bash
npm run build
```

## Production

Start the production server:
```bash
npm start
```

## API Endpoints

- `GET /` - Welcome message
- `GET /health` - Health check
- `GET /api/projects` - Projects endpoint (coming soon)
- `GET /api/about` - About endpoint (coming soon)

## Port

The server runs on port 5000 by default, but you can change it via the `PORT` environment variable.
