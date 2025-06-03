# TrackWell Backend

This is the backend service for **TrackWell**, built with [NestJS](https://nestjs.com/) and [PostgreSQL](https://www.postgresql.org/). It includes database migration support using [Knex.js](https://knexjs.org/), environment-specific configuration, and code formatting with Prettier.

---

## 🛠️ Tech Stack

- **NestJS** – Progressive Node.js framework
- **Knex.js** – SQL query builder for migrations
- **PostgreSQL** – Relational database
- **Prettier** – Code formatter
- **cross-env** – Environment variable support for scripts

---
## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/raiResham/trackwell-backend.git
cd trackwell-backend
```

### 2. Install dependencies

```bash
npm install
```
### 3.  Environment Setup

All required environment variables for development, QA, and production are stored in a single .env file.

Steps  
1. Copy the example file:
``` bash
cp .env.example .env
```
2. Open `.env` and fill in the appropriate values:
``` bash
# Environment for running the app
# (e.g., development, qa, production)
NODE_ENV=development

# Development environment database URL
DATABASE_URL=postgres://dev_user:dev_pass@localhost:5432/dev_db

# QA environment database URL
QA_DATABASE_URL=postgres://qa_user:qa_pass@qa-host:5432/qa_db

# Production environment database URL
PROD_DATABASE_URL=postgres://prod_user:prod_pass@prod-host:5432/prod_db

# Port for the backend NestJS server (default is 3000 if not specified)
PORT=4000
```
The application reads the appropriate values from .env based on the NODE_ENV at runtime. There’s no need for separate .env files for each environment.
You can customize varibales as needed.

### 4. Build
``` bash
npm run build
```

### 5.Start Server by Environment
``` bash
npm run start:dev:local # For local development
npm run start:dev       # Uses NODE_ENV=development
npm run start:qa        # Uses NODE_ENV=qa
npm run start:prod      # Uses NODE_ENV=production
```


### 6. Format Code
``` bash
npm run format         # Auto-formats code
npm run format:check   # Checks formatting without modifying files
```

## 🗃️ Database Migrations (Knex)
### Create a New Migration
``` bash
npx knex migrate:make <migration_name>

```
Note: Replace `<migration_name>` with a descriptive name for your migration. For example, if you're creating a table for users, you might use create_users_table.

### Apply Migrations
``` bash
npm run migrate:dev
npm run migrate:qa
npm run migrate:prod
```

### Rollback Last Batch Of Migrations
``` bash
npm run rollback:dev
npm run rollback:qa
npm run rollback:prod
```

### Rollback All Migrations
``` bash
npm run rollback:dev:all
npm run rollback:qa:all
npm run rollback:prod:all
``` 


## License

Licensed under the [MIT License](LICENSE).

