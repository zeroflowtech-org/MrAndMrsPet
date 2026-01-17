# Project Setup Guide

This guide will help you complete the setup of the MrAndMrsPet API project.

## Prerequisites

1. **Node.js** (v14 or higher) - Already installed ✓
2. **PostgreSQL** (v12 or higher) - Needs to be installed
3. **npm** - Already installed ✓

## Step 1: Install PostgreSQL

If you don't have PostgreSQL installed:

### Windows
1. Download PostgreSQL from [https://www.postgresql.org/download/windows/](https://www.postgresql.org/download/windows/)
2. Run the installer and follow the setup wizard
3. Remember the password you set for the `postgres` user (you'll need it for the `.env` file)
4. PostgreSQL will run on port `5432` by default

### Alternative: Using Docker
```bash
docker run --name postgres-mrnmrspet -e POSTGRES_PASSWORD=your_password -e POSTGRES_DB=mrnmrspet -p 5432:5432 -d postgres
```

## Step 2: Create the Database

1. Open PostgreSQL command line (psql) or use a GUI tool like pgAdmin
2. Connect to PostgreSQL (default user is `postgres`)
3. Run the following command to create the database:

```sql
CREATE DATABASE mrnmrspet_db;
```

Or using psql command line:
```bash
psql -U postgres -c "CREATE DATABASE mrnmrspet;"
```

## Step 3: Configure Environment Variables

1. Open `API/.env` file
2. Update the following values with your PostgreSQL credentials:

```env
DB_NAME=mrnmrspet
DB_USER=postgres
DB_PASSWORD=your_actual_postgres_password
DB_HOST=localhost
DB_PORT=5432
```

3. **IMPORTANT**: Generate secure random strings for JWT secrets:

```env
JWT_ACCESS_SECRET=generate_a_strong_random_string_here
JWT_REFRESH_SECRET=generate_another_strong_random_string_here
```

You can generate random strings using:
- Online tool: [https://randomkeygen.com/](https://randomkeygen.com/)
- Node.js: `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`

## Step 4: Run Database Migrations

Run the migration to create the database tables:

```bash
cd API
npm run db:migrate
```

This will create the `Users` table in your database.

## Step 5: Start the Development Server

```bash
cd API
npm run dev
```

The server should start on `http://localhost:4000` (or the port specified in your `.env` file).

You should see:
```
Database connection established successfully.
API running on port 4000
```

## Troubleshooting

### Database Connection Error

If you see "Unable to connect to the database":
1. Verify PostgreSQL is running
2. Check your `.env` file has correct credentials
3. Verify the database `mrnmrspet_db` exists
4. Check if PostgreSQL is listening on port 5432

### Migration Errors

If migrations fail:
1. Ensure the database exists
2. Check your database credentials in `.env`
3. Verify you have proper permissions on the database

### Port Already in Use

If port 4000 is already in use:
1. Change `PORT` in your `.env` file to a different port (e.g., 4001)
2. Or stop the process using port 4000

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build TypeScript to JavaScript
- `npm start` - Start production server (requires build first)
- `npm run db:migrate` - Run database migrations
- `npm run db:migrate:undo` - Undo last migration
- `npm run db:seed` - Run database seeders (if any)

## Project Structure

```
API/
├── src/
│   ├── config/          # Configuration files
│   ├── migrations/      # Database migrations
│   ├── modules/         # Feature modules (auth, users, pets)
│   ├── middlewares/     # Express middlewares
│   └── utils/           # Utility functions
├── .env                 # Environment variables (not in git)
├── .env.example         # Environment variables template
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies and scripts
```

## Next Steps

After successful setup:
1. Test the API endpoints using Postman or similar tool
2. The `/api/auth/login` endpoint is available
3. Check `API/src/modules/auth/auth.routes.ts` for available routes


