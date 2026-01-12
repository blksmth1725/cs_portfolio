// Database Configuration Constants - EXAMPLE FILE
// Copy this file to database.ts and update with your actual credentials

export const DATABASE_CONFIG = {
  HOST: '127.0.0.1',
  PORT: 3306,
  USER: 'your_database_user',
  PASSWORD: 'your_database_password',
  NAME: 'your_database_name'
};

// JWT Configuration
export const JWT_CONFIG = {
  SECRET: 'your_jwt_secret_key_here_change_this_in_production',
  EXPIRES_IN: '24h'
};

// Server Configuration
export const SERVER_CONFIG = {
  PORT: 5001,
  NODE_ENV: 'development'
};