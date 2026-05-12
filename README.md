# Second-Hand Workshop Management System

A comprehensive workshop management system built with Next.js, Supabase, and role-based access control.

## Features

- **Role-Based Access Control**: 5 distinct user roles with specific permissions
  - **Admin**: Full system access, user management
  - **Operation Manager**: Manage workers and jobs
  - **Finance Manager**: Handle finances and invoicing
  - **Advertising Manager**: Marketing and pricing management
  - **Workers**: View tasks and log hours

- **Dashboard Pages**: Customized dashboards for each role
- **Authentication**: Secure auth with Supabase
- **Database**: PostgreSQL with Supabase
- **Frontend**: Next.js 14 with TypeScript and Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Supabase account (free tier available at supabase.com)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ayesigwa-gif/workshop-management.git
   cd workshop-management
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Supabase**
   - Create a new Supabase project at supabase.com
   - Go to SQL Editor and run the migrations:
     - `supabase/migrations/001_create_users_table.sql`
     - `supabase/migrations/002_create_roles.sql`
     - `supabase/migrations/003_create_workshop_tables.sql`
   - Copy your Supabase URL and Anon Key

4. **Configure Environment Variables**
   - Copy `.env.local.example` to `.env.local`
   - Update with your Supabase credentials:
     ```
     NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
     NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
     ```

5. **Run the Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
workshop-management/
├── app/
│   ├── auth/              # Authentication pages
│   ├── dashboard/         # Role-specific dashboards
│   └── layout.tsx         # Root layout
├── components/
│   ├── Navbar.tsx         # Navigation component
│   ├── ProtectedRoute.tsx  # Auth wrapper
│   └── RoleGuard.tsx       # Role-based access wrapper
├── lib/
│   ├── supabase.ts        # Supabase client
│   ├── auth.ts            # Authentication logic
│   └── roles.ts           # Role configuration
├── supabase/
│   └── migrations/        # Database migrations
└── public/                # Static assets
```

## Database Schema

### Users Table
- `id` (UUID): Primary key
- `email` (VARCHAR): User email
- `name` (VARCHAR): User name
- `role` (ENUM): User role
- `created_at` (TIMESTAMP): Creation date
- `updated_at` (TIMESTAMP): Last update date

### Jobs Table
- `id` (UUID): Primary key
- `title` (VARCHAR): Job title
- `description` (TEXT): Job description
- `assigned_to` (UUID): Worker assignment
- `status` (VARCHAR): Job status
- `created_at` (TIMESTAMP): Creation date

### Invoices Table
- `id` (UUID): Primary key
- `customer_name` (VARCHAR): Customer name
- `amount` (DECIMAL): Invoice amount
- `status` (VARCHAR): Invoice status
- `created_at` (TIMESTAMP): Creation date

### Work Hours Table
- `id` (UUID): Primary key
- `worker_id` (UUID): Worker reference
- `hours_logged` (DECIMAL): Hours worked
- `date` (DATE): Work date
- `created_at` (TIMESTAMP): Creation date

## Usage

### Login
1. Go to `/auth/login`
2. Enter credentials for a user in your Supabase database
3. You'll be redirected to your role-specific dashboard

### Create Test Users
Run the following SQL in Supabase SQL Editor:

```sql
-- First create auth users
INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, created_at, updated_at)
VALUES 
  ('00000000-0000-0000-0000-000000000000', gen_random_uuid(), 'authenticated', 'authenticated', 'admin@test.com', crypt('password123', gen_salt('bf')), now(), now()),
  ('00000000-0000-0000-0000-000000000000', gen_random_uuid(), 'authenticated', 'authenticated', 'worker@test.com', crypt('password123', gen_salt('bf')), now(), now());

-- Then create user records with roles
INSERT INTO users (id, email, name, role) 
SELECT id, email, 'Admin User', 'admin' FROM auth.users WHERE email = 'admin@test.com'
UNION ALL
SELECT id, email, 'Worker User', 'worker' FROM auth.users WHERE email = 'worker@test.com';
```

## Building for Production

```bash
npm run build
npm start
```

## Technologies Used

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Backend**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Database**: PostgreSQL

## Contributing

Feel free to submit issues and enhancement requests!

## License

MIT License - see LICENSE file for details

## Support

For issues and questions:
- Create an issue on GitHub
- Check existing documentation
- Review Supabase docs: https://supabase.com/docs
