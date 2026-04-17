# Hotel Ad Copy Generator

Internal web application for digital marketing managers to generate Google Ads copy for hotel portfolios.

## Stack

- **Monorepo**: Turborepo + npm workspaces
- **API**: Fastify 4 + Prisma 5 + Supabase (PostgreSQL)
- **Web**: Vite 5 + React 18 + TypeScript
- **Auth**: JWT
- **Deployment**: Render

## Setup

### 1. Clone and install

```bash
git clone <repo-url>
cd hotel-ad-copy-generator
npm install
```

### 2. Configure environment variables

```bash
# API
cp apps/api/.env.example apps/api/.env
# Edit apps/api/.env with your Supabase connection strings, JWT secret, AI proxy config

# Web
cp apps/web/.env.example apps/web/.env
# Edit apps/web/.env with your API URL and PostHog key
```

### 3. Run database migrations

```bash
cd apps/api
npx prisma migrate dev
cd ../..
```

### 4. Start development servers

```bash
npm run dev
```

This starts both the API (port 3001) and the web app (port 5173) concurrently via Turborepo.

## Project structure

```
hotel-ad-copy-generator/
├── apps/
│   ├── api/          # Fastify backend
│   └── web/          # Vite + React frontend
├── packages/
│   ├── shared/       # Shared TypeScript types, constants, utilities
│   └── neat-stub/    # Local stub for @derbysoft/neat (remove when real package is available)
├── turbo.json
└── render.yaml
```

## Notes

- The `@derbysoft/neat` UI package is stubbed locally at `packages/neat-stub`.
  Once the real package is available on npm, remove `packages/neat-stub`, remove the
  `@derbysoft/neat` workspace entry from `apps/web/package.json`, and run `npm install`.
- All routes except `POST /auth/login` and `POST /auth/register` require a JWT bearer token.
- Admin registration requires an `x-admin-secret` header matching `ADMIN_REGISTRATION_SECRET`.
