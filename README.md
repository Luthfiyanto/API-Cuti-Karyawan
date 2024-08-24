# API Cuti Karyawan

a simple REST API which made using Express.js and Sequelize

## Development

Here the step to run the project locally

1. Clone the project
   ```bash
   git clone https://github.com/Luthfiyanto/API-Cuti-Karyawan.git
   ```
2. Change directory to the project
   ```bash
   cd API-Cuti-Karyawan
   ```
3. Install dependencies
   ```bash
   npm install
   ```
4. Check your credentials on `.env.development`. Make sure you have the correct credentials for your PostgreSQL database. Or create `.env.local` so that it doesn't get tracked by git.
5. Create DB if not exists
   ```bash
   npm run db:create
   ```
6. Run migrations
   ```bash
   npm run db:migrate
   ```
7. Run seeders
   ```bash
   npm run db:seed
   ```
8. Run the app
   ```bash
   npm run dev
   ```
