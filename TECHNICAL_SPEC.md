# Hotel Ad Copy Generator — Technical Specification
## For Claude Code

**Version:** 1.0  
**Date:** April 2026  
**Stack:** Node.js + Fastify + Prisma + Supabase (PostgreSQL) + Vite + React  
**Deployment:** Render (monorepo)

---

## 1. Repository Structure

```
hotel-ad-copy-generator/
├── apps/
│   ├── api/                        # Fastify backend
│   │   ├── src/
│   │   │   ├── domain/             # DDD domain layer
│   │   │   │   ├── hotel/
│   │   │   │   ├── generation/
│   │   │   │   ├── tone-config/
│   │   │   │   └── project/
│   │   │   ├── application/        # Use cases / command handlers
│   │   │   ├── infrastructure/     # DB, AI proxy, file parsing
│   │   │   │   ├── prisma/
│   │   │   │   ├── ai/
│   │   │   │   └── xlsx/
│   │   │   ├── interface/          # Fastify routes + schemas
│   │   │   └── index.ts
│   │   ├── prisma/
│   │   │   └── schema.prisma
│   │   └── package.json
│   └── web/                        # Vite + React frontend
│       ├── src/
│       │   ├── pages/
│       │   ├── components/
│       │   ├── hooks/
│       │   ├── services/           # API client
│       │   └── main.tsx
│       └── package.json
├── packages/
│   └── shared/                     # Shared TypeScript types
│       ├── src/
│       │   ├── types/
│       │   └── constants/          # Character limits, language codes, variant labels
│       └── package.json
├── turbo.json
├── package.json                    # Workspace root
└── render.yaml                     # Render deployment config
```

---

## 2. Tech Stack

| Layer | Technology |
|---|---|
| Monorepo | Turborepo |
| Backend runtime | Node.js 20 |
| Backend framework | Fastify 4 |
| ORM | Prisma 5 |
| Database | Supabase (PostgreSQL 15) |
| Auth | JWT (jsonwebtoken) + bcrypt |
| Frontend | Vite 5 + React 18 + TypeScript |
| HTTP client | Axios |
| State management | Zustand |
| UI / Design system | Neat (Derbysoft) — NPM package |
| File parsing | xlsx (SheetJS) |
| CSV export | papaparse |
| Analytics | PostHog (free tier, browser SDK) |
| Deployment | Render |

---

## 3. Environment Variables

### API (`apps/api/.env`)

```env
DATABASE_URL=postgresql://...          # Supabase connection string (pooled)
DIRECT_URL=postgresql://...            # Supabase direct connection (for migrations)
JWT_SECRET=...
JWT_EXPIRES_IN=8h
ADMIN_REGISTRATION_SECRET=...          # Guards POST /auth/register
AI_BASE_URL=https://...                # Internal AI proxy base URL
AI_API_KEY=...                         # Internal AI proxy key
AI_MODEL=...                           # Model name to use
POSTHOG_API_KEY=...                    # Server-side PostHog key
```

### Web (`apps/web/.env`)

```env
VITE_API_URL=https://...               # API base URL
VITE_POSTHOG_KEY=...                   # Browser PostHog key
VITE_POSTHOG_HOST=https://app.posthog.com
```

---

## 4. Database Schema (Prisma)

```prisma
// apps/api/prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider  = "postgresql"
  url       = env("DATABASE_URL")
  directUrl = env("DIRECT_URL")
}

model User {
  id           String    @id @default(cuid())
  email        String    @unique
  passwordHash String
  name         String
  createdAt    DateTime  @default(now())
  updatedAt    DateTime  @updatedAt
  projects     Project[]
  events       DomainEvent[]
}

model Project {
  id          String        @id @default(cuid())
  name        String
  userId      String
  user        User          @relation(fields: [userId], references: [id])
  status      ProjectStatus @default(DRAFT)
  createdAt   DateTime      @default(now())
  updatedAt   DateTime      @updatedAt
  hotels      HotelProfile[]
  generations Generation[]
  toneConfigs ToneConfig[]
  events      DomainEvent[]
}

enum ProjectStatus {
  DRAFT
  GENERATING
  COMPLETE
}

model HotelProfile {
  id           String    @id @default(cuid())
  projectId    String
  project      Project   @relation(fields: [projectId], references: [id], onDelete: Cascade)
  hotelCode    String
  hotelName    String
  chain        String
  brand        String
  country      String
  city         String
  starRating   String?
  roomCount    Int?
  googlePlaceId String?
  description  String?
  categories   Json      // { airportHotel: boolean, beachFront: boolean, ... }
  amenities    Json      // { freeWifi: boolean, pool: boolean, ... }
  urls         Json      // { en: { homepage: string, rooms: string, ... }, ja: {...}, ... }
  localNames   Json      // { ja: { hotelName, brand, chain, country, city }, zh_tw: {...}, ... }
  notes        String?   // Manual enrichment notes
  included     Boolean   @default(true)
  createdAt    DateTime  @default(now())
  updatedAt    DateTime  @updatedAt

  @@unique([projectId, hotelCode])
}

model ToneConfig {
  id           String          @id @default(cuid())
  projectId    String
  project      Project         @relation(fields: [projectId], references: [id], onDelete: Cascade)
  level        ToneConfigLevel // CHAIN or BRAND
  entityName   String          // e.g. "KYORITSU MAINTENANCE" or "dormy inn"
  tone         String          // e.g. "warm, accessible, modern"
  prohibitedWords   String[]
  mandatoryIncludes String[]
  copyStyle    String          // e.g. "benefit-led"
  notes        String?
  createdAt    DateTime        @default(now())
  updatedAt    DateTime        @updatedAt

  @@unique([projectId, level, entityName])
}

enum ToneConfigLevel {
  CHAIN
  BRAND
}

model Generation {
  id          String           @id @default(cuid())
  projectId   String
  project     Project          @relation(fields: [projectId], references: [id], onDelete: Cascade)
  status      GenerationStatus @default(PENDING)
  triggeredAt DateTime         @default(now())
  completedAt DateTime?
  errorMessage String?
  assets      GeneratedAsset[]
}

enum GenerationStatus {
  PENDING
  RUNNING
  COMPLETE
  FAILED
}

model GeneratedAsset {
  id           String     @id @default(cuid())
  generationId String
  generation   Generation @relation(fields: [generationId], references: [id], onDelete: Cascade)
  hotelCode    String
  assetType    AssetType
  variantCode  String     // e.g. "01", "02", ... "15"
  variantLabel String     // e.g. "Name", "Access", "Membership"
  copies       Json       // { en: string, ja: string, zh_tw: string, zh_cn: string, ko: string, it: string, pt: string, ru: string, es: string, de: string, fr: string, tr: string, el: string }
  isEdited     Boolean    @default(false)
  createdAt    DateTime   @default(now())
  updatedAt    DateTime   @updatedAt

  @@unique([generationId, hotelCode, assetType, variantCode])
}

enum AssetType {
  HEADLINE
  DESCRIPTION
  LONG_HEADLINE
}

// Domain event log — append-only audit trail
model DomainEvent {
  id          String   @id @default(cuid())
  eventType   String   // e.g. "generation.triggered", "asset.edited", "tone_config.updated"
  aggregateId String   // projectId, generationId, etc.
  aggregateType String // "Project", "Generation", "GeneratedAsset", "ToneConfig"
  userId      String?
  user        User?    @relation(fields: [userId], references: [id])
  projectId   String?
  project     Project? @relation(fields: [projectId], references: [id])
  payload     Json     // Event-specific data
  occurredAt  DateTime @default(now())

  @@index([aggregateId])
  @@index([projectId])
  @@index([userId])
  @@index([eventType])
}
```

---

## 5. Domain Events Catalogue

All events are written to the `DomainEvent` table and also fired to PostHog.

| Event Type | Trigger | Payload |
|---|---|---|
| `project.created` | New project started | `{ projectName }` |
| `file.imported` | XLSX uploaded and parsed | `{ hotelCount, sheetsParsed, validationErrors }` |
| `tone_config.created` | Tone config saved | `{ level, entityName }` |
| `tone_config.updated` | Tone config edited | `{ level, entityName, changedFields }` |
| `generation.triggered` | User clicks Generate | `{ hotelCount, assetTypes, languages }` |
| `generation.completed` | All assets produced | `{ durationMs, assetCount }` |
| `generation.failed` | Generation errored | `{ errorMessage }` |
| `asset.edited` | Inline copy edited | `{ assetType, variantCode, language, hotelCode }` |
| `asset.regenerated` | Single asset re-run | `{ assetType, variantCode, hotelCode }` |
| `export.triggered` | CSV export downloaded | `{ assetType, hotelCount, languages }` |
| `selection.all` | Select all clicked | `{}` |
| `selection.none` | Select none clicked | `{}` |

---

## 6. API Routes

### Auth

```
POST   /auth/register          # Admin only (requires ADMIN_REGISTRATION_SECRET header)
POST   /auth/login             # Returns JWT
GET    /auth/me                # Returns current user
```

### Projects

```
GET    /projects               # List user's projects
POST   /projects               # Create project
GET    /projects/:id           # Get project detail
DELETE /projects/:id           # Delete project
```

### Import

```
POST   /projects/:id/import    # Upload XLSX, parse all sheets, upsert HotelProfiles
GET    /projects/:id/hotels    # List hotel profiles for project
PATCH  /projects/:id/hotels/:hotelCode   # Edit hotel profile field / notes
```

### Tone Config

```
GET    /projects/:id/tone-configs                    # List tone configs for project
POST   /projects/:id/tone-configs                    # Create tone config
PUT    /projects/:id/tone-configs/:toneConfigId      # Update tone config
DELETE /projects/:id/tone-configs/:toneConfigId      # Delete tone config
```

### Generation

```
POST   /projects/:id/generations                     # Trigger generation (all/none selection in body)
GET    /projects/:id/generations/:generationId       # Poll status
GET    /projects/:id/generations/:generationId/assets  # Get all generated assets
PATCH  /projects/:id/generations/:generationId/assets/:assetId  # Inline edit single asset
POST   /projects/:id/generations/:generationId/assets/:assetId/regenerate  # Regenerate single asset
```

### Export

```
GET    /projects/:id/generations/:generationId/export?assetType=HEADLINE   # Download CSV
```

### Events (internal audit log)

```
GET    /projects/:id/events    # List domain events for project (for version timeline UI)
```

---

## 7. File Import Logic

### Sheet Parsing

The XLSX has a 3-row header structure:
- Row 0: Section group labels (merged cells)
- Row 1: Column headers
- Row 2: Instructions/validation notes
- Row 3+: Data rows

Parse rows from index 3 onwards. Use row 1 values as column keys.

### Sheet Merging

Merge all sheets by `Hotel Code` (exact match, string). If a row has no `Hotel Code`, skip it and log a validation warning.

### Column Mappings

**Hotel Basic Info sheet** — use as-is, columns are named:
`Hotel`, `Hotel Code`, `Chain`, `Brand`, `Country`, `City`, `Japanese Brand`, `Japanese Chain`, `Japanese Hotel Name`, `Japanese Country`, `Japanese City`, `Chinese (traditional) Brand`... etc.

Normalise localised name fields into the `localNames` JSON structure:
```json
{
  "ja": { "hotelName": "...", "brand": "...", "chain": "...", "country": "...", "city": "..." },
  "zh_tw": { ... },
  "zh_cn": { ... },
  "ko": { ... },
  "it": { ... },
  "pt": { ... },
  "ru": { ... },
  "es": { ... },
  "de": { ... },
  "fr": { ... },
  "tr": { ... },
  "el": { ... }
}
```

**Categories sheet** — boolean flags, normalise `TRUE`/`FALSE` strings to booleans. Keys:
`airportHotel`, `allInclusive`, `allSuite`, `bandB`, `beachFront`, `businessHotel`, `casinoHotel`, `extendedStay`, `golfResort`, `japaneseInn`, `resortHotel`, `servicedApartment`, `skiHotel`, `spaHotel`, `vacationRental`

**Amenities sheet** — boolean flags grouped into:
`activities`, `businessAndEvents`, `internet`, `foodAndDrink`, `parkingAndTransport`, `pool`, `policies`, `rooms`, `services`, `wellness`

**URLs sheet** — normalise into per-language objects using language codes. URL type groups: `homepage`, `rooms`, `gallery`, `dining`, `amenities`, `location`, `reviews`, `offers`, `events`.

**Additional Information sheet** — `googlePlaceId`, `stars` (normalise to `"1 Star"` → `1`, `"N/A"` → `null`), `rooms` (integer).

**Description sheet** — single free-text field per hotel.

### Validation Rules

- Missing `Hotel Code` → skip row, log warning
- Missing `Hotel Name` → skip row, log warning
- Description > 750 chars (CJK double-count applied) → flag warning (do not skip)
- Return validation summary in API response: `{ imported: N, skipped: N, warnings: [...] }`

---

## 8. Character Limit Validation

Implement a shared utility in `packages/shared`:

```typescript
// packages/shared/src/utils/characterCount.ts

export function countCharacters(text: string): number {
  let count = 0;
  for (const char of text) {
    const code = char.codePointAt(0) ?? 0;
    // CJK Unified Ideographs, Hangul, Hiragana, Katakana (full-width only), CJK symbols
    if (isCJK(code)) {
      count += 2;
    } else {
      count += 1;
    }
  }
  return count;
}

function isCJK(code: number): boolean {
  return (
    (code >= 0x4E00 && code <= 0x9FFF) ||   // CJK Unified Ideographs
    (code >= 0x3400 && code <= 0x4DBF) ||   // CJK Extension A
    (code >= 0x3000 && code <= 0x303F) ||   // CJK Symbols and Punctuation
    (code >= 0x3040 && code <= 0x309F) ||   // Hiragana
    (code >= 0x30A0 && code <= 0x30FF) ||   // Katakana (full-width)
    (code >= 0xAC00 && code <= 0xD7AF) ||   // Hangul Syllables
    (code >= 0xFF00 && code <= 0xFFEF)      // Fullwidth Latin / Halfwidth Katakana range
  );
}

export const LIMITS = {
  HEADLINE: 30,
  DESCRIPTION: 90,
  LONG_HEADLINE: 90,
} as const;

export function validateAsset(text: string, assetType: keyof typeof LIMITS): boolean {
  return countCharacters(text) <= LIMITS[assetType];
}
```

---

## 9. Asset Variant Structure

All asset types share the same 15 variant structure. The `variantCode` and `variantLabel` are fixed constants.

```typescript
// packages/shared/src/constants/variants.ts

export const VARIANTS = [
  { code: "01", label: "Name" },
  { code: "02", label: "Access" },
  { code: "03", label: "Membership" },
  { code: "04", label: "Best Rate" },
  { code: "05", label: "WiFi" },
  { code: "06", label: "Website" },
  { code: "07", label: "Room 1" },
  { code: "08", label: "Room 2" },
  { code: "09", label: "Facility 1" },
  { code: "10", label: "Facility 2" },
  { code: "11", label: "Service 1" },
  { code: "12", label: "Service 2" },
  { code: "13", label: "Concept" },
  { code: "14", label: "Meal" },
  { code: "15", label: "Best For" },
] as const;
```

---

## 10. AI Generation

### Generation Flow

1. User triggers `POST /projects/:id/generations`
2. API creates a `Generation` record with status `PENDING`
3. API returns `generationId` immediately (202 Accepted)
4. Background job processes asynchronously:
   - For each hotel profile in the project:
     - Build prompt (hotel profile + active tone config)
     - Call AI proxy once per hotel per asset type (3 calls per hotel)
     - Parse response into 15 variants × 12 languages
     - Validate character limits on each cell
     - Upsert `GeneratedAsset` records
   - Update `Generation.status` to `COMPLETE` or `FAILED`
5. Frontend polls `GET /projects/:id/generations/:generationId` every 3 seconds until status is `COMPLETE` or `FAILED`

### Background Job

Implement as a simple async function called without awaiting in the route handler. No queue needed for the prototype. Use `Promise.allSettled` with a concurrency limit of 5 hotels at a time to avoid hammering the AI proxy.

### Prompt Structure

```typescript
// For each hotel, call the AI with this system prompt:

const systemPrompt = `
You are a Google Ads copywriter for hotel campaigns. 
You write ad copy in multiple languages simultaneously.
You must strictly follow character limits. CJK characters (Chinese, Japanese, Korean) count as 2 characters each.

Asset type: ${assetType}
Character limit: ${limit} characters (CJK double-count applied)

Output ONLY a valid JSON object with this exact structure:
{
  "01_Name": { "en": "...", "ja": "...", "zh_tw": "...", "zh_cn": "...", "ko": "...", "it": "...", "pt": "...", "ru": "...", "es": "...", "de": "...", "fr": "...", "tr": "...", "el": "..." },
  "02_Access": { ... },
  ... (all 15 variants)
}

Brand tone guidance: ${toneConfigText}
`;

const userPrompt = `
Hotel: ${hotel.hotelName}
Local names: ${JSON.stringify(hotel.localNames)}
Chain: ${hotel.chain}
Brand: ${hotel.brand}
Country: ${hotel.country}, City: ${hotel.city}
Star rating: ${hotel.starRating}
Rooms: ${hotel.roomCount}
Description: ${hotel.description}
Categories: ${activeCategoriesList}
Amenities: ${activeAmenitiesList}
Notes: ${hotel.notes}

Generate all 15 headline variants in all 13 languages. Every value must be within the character limit.
`;
```

### AI Proxy Client

```typescript
// apps/api/src/infrastructure/ai/aiClient.ts

export class AIClient {
  constructor(
    private readonly baseUrl: string,
    private readonly apiKey: string,
    private readonly model: string
  ) {}

  async complete(systemPrompt: string, userPrompt: string): Promise<string> {
    const response = await fetch(`${this.baseUrl}/v1/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify({
        model: this.model,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
        temperature: 0.7,
        response_format: { type: "json_object" },
      }),
    });
    const data = await response.json();
    return data.choices[0].message.content;
  }
}
```

---

## 11. CSV Export

Export format mirrors the example output file exactly:

**Row 1:** Header — `Chain`, `Variant`, `English`, `Japanese`, `Chinese (Traditional)`, `Chinese (Simplified)`, `Korean`, `Italian`, `Portuguese`, `Russian`, `Spanish`, `German`, `French`, `Turkish`, `Greek`

**Row 2:** Character limit note (as in original file)

**Rows 3+:** One row per variant (15 rows), with generated copy per language column.

One CSV file per asset type. Asset type label in filename: `Headline_01_Chain_Level_{timestamp}.csv`

Character limit violations are flagged in the export API response but do NOT block export. The frontend displays a warning banner before download if any violations exist.

---

## 12. Frontend Pages & Components

### Routes

```
/login                          # Login page
/dashboard                      # Project list
/projects/new                   # Create project + import file
/projects/:id                   # Project workspace (tabbed)
  /projects/:id/hotels          # Hotel profiles tab
  /projects/:id/tone            # Tone config tab
  /projects/:id/generate        # Generate & review tab
  /projects/:id/export          # Export tab
```

### Design System

All UI is built using **Neat** — the Derbysoft design system, installed as an NPM package:

```
npm install @derbysoft/neat
```

Import components and tokens from Neat exclusively. Do not introduce Tailwind, MUI, Ant Design, or any other component library. Do not write custom CSS unless Neat provides no suitable primitive — and even then, use Neat's design tokens (spacing, colour, typography) as CSS variables.

Specific guidance for Claude Code:
- Use Neat's `Button`, `Input`, `Select`, `Table`, `Badge`, `Modal`, `Drawer`, `Tabs`, `Form`, `Tag` components throughout.
- Use Neat's `Toast` / notification system for validation warnings and success messages.
- Use Neat's layout primitives (`Stack`, `Grid`, `Card`) for page structure.
- Character count badges on `AssetReviewTable` use Neat's `Badge` with semantic colour variants (success = within limit, danger = over limit).
- Generation progress uses Neat's `Progress` component.
- File upload uses Neat's `Upload` or `Dragger` component if available; otherwise a styled `div` using Neat tokens only.

### Key Components

**`ImportDropzone`** — Neat Upload/Dragger for XLSX. Shows parsed hotel count and validation warnings via Neat Toast + inline warning list.

**`HotelProfileList`** — Neat Table of parsed hotels. Columns: chain, brand, name, city, star rating. Row expansion for notes edit. Select All / None via Neat Checkbox.

**`ToneConfigForm`** — Neat Form: tone description (Neat Textarea), prohibited words (Neat Tag input), mandatory includes (Neat Tag input), copy style (Neat Select: benefit-led / feature-led / balanced).

**`GenerationPanel`** — Neat Button to trigger + Neat Progress during polling. Shows "Generating... X / Y hotels complete". Switches to results on completion.

**`AssetReviewTable`** — Neat Table. Rows = variants, columns = languages. Inline edit on cell click (Neat Input). Neat Badge per cell: character count with success/danger variant. Neat IconButton per row to regenerate.

**`ExportPanel`** — Neat Button per asset type. Neat Badge showing violation count. Downloads CSV on click.

**`EventTimeline`** — Neat Drawer showing domain events as a chronological audit log.

---

## 13. Authentication

### Register (Postman only)

```
POST /auth/register
Header: x-admin-secret: <ADMIN_REGISTRATION_SECRET>
Body: { "email": "...", "password": "...", "name": "..." }
```

### Login

```
POST /auth/login
Body: { "email": "...", "password": "..." }
Response: { "token": "...", "user": { "id", "email", "name" } }
```

JWT stored in `localStorage` on the frontend. Axios interceptor attaches `Authorization: Bearer <token>` to all requests. On 401, redirect to `/login`.

---

## 14. Event Tracking (PostHog)

Initialise PostHog in the React app on mount. Identify user on login with `posthog.identify(userId, { email, name })`.

Track all domain events listed in Section 5 as PostHog events with the same event names. This gives you funnel analysis (import → configure → generate → export) and per-user activity.

On the backend, also write all events to the `DomainEvent` table for the project audit log.

---

## 15. Render Deployment Config

```yaml
# render.yaml

services:
  - type: web
    name: hotel-ad-copy-api
    runtime: node
    buildCommand: cd apps/api && npm install && npx prisma generate && npm run build
    startCommand: cd apps/api && npx prisma migrate deploy && npm start
    envVars:
      - key: DATABASE_URL
        sync: false
      - key: DIRECT_URL
        sync: false
      - key: JWT_SECRET
        sync: false
      - key: ADMIN_REGISTRATION_SECRET
        sync: false
      - key: AI_BASE_URL
        sync: false
      - key: AI_API_KEY
        sync: false
      - key: AI_MODEL
        sync: false
      - key: POSTHOG_API_KEY
        sync: false

  - type: web
    name: hotel-ad-copy-web
    runtime: static
    buildCommand: cd apps/web && npm install && npm run build
    staticPublishPath: apps/web/dist
    envVars:
      - key: VITE_API_URL
        sync: false
      - key: VITE_POSTHOG_KEY
        sync: false
      - key: VITE_POSTHOG_HOST
        value: https://app.posthog.com
```

---

## 16. DDD Layer Responsibilities

### Domain Layer (`src/domain/`)

Pure business logic. No framework dependencies. No DB calls.

- **`hotel/HotelProfile.ts`** — entity with validation methods
- **`generation/Generation.ts`** — aggregate root; transitions status; holds assets
- **`generation/GeneratedAsset.ts`** — value object with character validation
- **`tone-config/ToneConfig.ts`** — entity
- **`project/Project.ts`** — aggregate root; owns hotels, generations, tone configs

### Application Layer (`src/application/`)

Use cases / command handlers. Orchestrates domain + infrastructure.

- `ImportHotelsUseCase`
- `ConfigureToneUseCase`
- `TriggerGenerationUseCase`
- `EditAssetUseCase`
- `RegenerateAssetUseCase`
- `ExportAssetsUseCase`

### Infrastructure Layer (`src/infrastructure/`)

- **`prisma/`** — Prisma client, repository implementations
- **`ai/`** — AIClient wrapping the internal proxy
- **`xlsx/`** — SheetJS parsing logic, sheet merging
- **`events/`** — DomainEventStore (writes to DB + PostHog)

### Interface Layer (`src/interface/`)

Fastify route handlers + JSON schema validation. Calls application use cases only. No domain logic here.

---

## 17. Key Constraints & Notes for Claude Code

1. **CJK character counting** — use the shared `countCharacters` utility everywhere. Do not use `.length`.
2. **Sheet parsing** — the XLSX has 3 header rows before data. Parse from row index 3.
3. **Hotel Code as primary key** — always use `hotelCode` for joins, not hotel name (names may have special characters).
4. **Background generation** — do not await the generation job in the route handler. Return 202 immediately with `generationId`.
5. **Concurrency** — limit AI calls to 5 concurrent hotel batches with a semaphore utility.
6. **Export column order** — must match original file: `Chain`, `Variant`, then languages in this order: English, Japanese, Chinese (Traditional), Chinese (Simplified), Korean, Italian, Portuguese, Russian, Spanish, German, French, Turkish, Greek.
7. **Variant label format** — export `Variant` column must match: `"01 - Name"`, `"02 - Access"`, etc.
8. **JWT** — use `fastify-jwt` plugin, not raw `jsonwebtoken` in routes.
9. **All routes except `/auth/login` and `/auth/register` require JWT auth.**
10. **Supabase Prisma config** — must include both `DATABASE_URL` (pooled, port 6543) and `DIRECT_URL` (direct, port 5432) for migrations to work correctly.
11. **PostHog** — import `posthog-js` in React app, initialise in `main.tsx`, wrap app in PostHog provider.
12. **Turborepo** — configure `turbo.json` with `build` and `dev` pipelines. `dev` should run api and web concurrently.
13. **Neat design system** — install `@derbysoft/neat` in `apps/web`. Do not mix in any other UI component library. If a Neat component's API is unclear, use its most conventional props pattern and leave a `// TODO: verify Neat API` comment rather than substituting another library.
