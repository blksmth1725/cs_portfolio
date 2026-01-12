# Database Configuration Setup

## 🔧 Initial Setup

1. **Copy the example configuration file:**
   ```bash
   cp src/config/database.example.ts src/config/database.ts
   ```

2. **Update `src/config/database.ts` with your actual credentials:**
   ```typescript
   export const DATABASE_CONFIG = {
     HOST: 'your_database_host',      // e.g., '127.0.0.1' or 'your-db-server.com'
     PORT: 3306,                      // MySQL default port
     USER: 'your_database_user',      // e.g., 'root' or your MySQL username
     PASSWORD: 'your_database_password', // Your actual MySQL password
     NAME: 'your_database_name'       // e.g., 'cs_portfolio'
   };

   export const JWT_CONFIG = {
     SECRET: 'your_strong_jwt_secret_key_here', // Change this to a strong secret
     EXPIRES_IN: '24h'                          // Token expiration time
   };
   ```

## 🛡️ Security Notes

- The `database.ts` file is automatically gitignored for security
- Never commit actual credentials to version control
- Use strong, unique passwords and JWT secrets
- The `database.example.ts` file shows the structure without sensitive data

## 🗄️ Database Setup Options

### Option 1: Local MySQL
```bash
# Install MySQL and create database
mysql -u root -p
CREATE DATABASE cs_portfolio;
```

### Option 2: Docker MySQL
```bash
docker run --name mysql-cs-portfolio \
  -e MYSQL_ROOT_PASSWORD=yourpassword \
  -e MYSQL_DATABASE=cs_portfolio \
  -p 3306:3306 -d mysql:8.0
```

### Option 3: Cloud Database
Update the `DATABASE_CONFIG.HOST` to your cloud database URL.

## 🚀 Running the Server

After configuration:
```bash
npm run dev  # Development mode
npm start    # Production mode
```

The application will automatically create the required `users` table on first connection.