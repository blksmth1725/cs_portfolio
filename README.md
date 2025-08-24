# CS Portfolio

A full-stack portfolio application with Next.js frontend and Node.js backend.

## Project Structure

```
cs_portfolio/
├── cs_portfolio_client/    # Next.js frontend
├── cs_portfolio_server/    # Node.js backend API
├── package.json           # Root package.json for running both
└── README.md             # This file
```

## Quick Start

### Prerequisites
- Node.js >= 18.0.0
- npm >= 8.0.0
- MySQL database

### Installation
```bash
# Install all dependencies (root, client, and server)
npm run install:all
```

### Development
```bash
# Run both frontend and backend with hot reload
npm run dev
```

This will start:
- **Backend API** on `http://localhost:5001` (with nodemon hot reload)
- **Frontend** on `http://localhost:3000` (with Next.js hot reload)

### Individual Scripts

#### Development
```bash
# Run only backend
npm run server:dev

# Run only frontend  
npm run client:dev
```

#### Production
```bash
# Build both applications
npm run build

# Start both in production mode
npm start
```

#### Utilities
```bash
# Clean all node_modules and build artifacts
npm run clean

# Install dependencies for all packages
npm run install:all
```

## Database Setup

1. Create a MySQL database named `cs_portfolio`
2. Create a `.env` file in `cs_portfolio_server/`:
```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_secure_mysql_password
DB_NAME=cs_portfolio
JWT_SECRET=your_strong_jwt_secret_key
PORT=5001
```

**⚠️ IMPORTANT**: Never commit your `.env` file to version control. Replace the placeholder values with your actual credentials.

The `users` table will be created automatically when the server starts.

## Features

- **JWT Authentication** with MySQL backend
- **Hot Reload** for both client and server
- **Responsive Design** with Tailwind CSS
- **TypeScript** throughout the stack
- **Security** with Helmet, CORS, and bcrypt
- **Request Logging** with Morgan

## API Endpoints

- `POST /api/auth/login` - User login
- `POST /api/auth/signup` - User registration
- `GET /health` - Health check

## Tech Stack

### Frontend
- Next.js 15
- React 19
- TypeScript
- Tailwind CSS

### Backend  
- Node.js
- Express.js
- TypeScript
- MySQL with mysql2
- JWT authentication
- bcrypt password hashing
