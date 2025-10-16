# La Villa Pine - Project Structure

## Overview
This document provides a comprehensive breakdown of the La Villa Pine project structure, explaining the purpose and organization of each directory and file.

---

## Root Directory Structure

```
LaVillaPineReact2/
├── client/                 # Frontend React application
├── server/                 # Backend Express.js server
├── shared/                 # Shared code (schemas, types)
├── public/                 # Static assets
├── docs/                   # Documentation files
├── attached_assets/        # Additional assets
├── migrations/             # Database migrations
├── dist/                   # Build output (generated)
├── node_modules/           # Dependencies (generated)
├── .git/                   # Git repository
├── .windsurf/              # Windsurf AI configuration
├── vscode/                 # VS Code settings
├── .env                    # Environment variables (local)
├── package.json            # Project dependencies and scripts
├── package-lock.json       # Dependency lock file
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite build configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── drizzle.config.ts       # Drizzle ORM configuration
├── render.yaml             # Render deployment config
├── README.md               # Project overview
└── replit.md               # Replit documentation
```

---

## Detailed Directory Breakdown

### 1. `/client` - Frontend Application

```
client/
├── index.html              # Main HTML entry point
└── src/                    # Source code
    ├── main.tsx            # Application entry point
    ├── App.tsx             # Root component with routing
    ├── index.css           # Global styles (Tailwind imports)
    │
    ├── components/         # Reusable components
    │   ├── layout/         # Layout components
    │   │   ├── header.tsx  # Site header with navigation
    │   │   └── footer.tsx  # Site footer with links
    │   │
    │   ├── seo/            # SEO components
    │   │   └── PageMeta.tsx # Dynamic meta tags
    │   │
    │   └── ui/             # UI component library
    │       ├── accordion.tsx
    │       ├── alert-dialog.tsx
    │       ├── alert.tsx
    │       ├── aspect-ratio.tsx
    │       ├── avatar.tsx
    │       ├── avito-icon.tsx         # Custom Avito icon
    │       ├── badge.tsx
    │       ├── booking-date-notice.tsx # Booking notice banner
    │       ├── breadcrumb.tsx
    │       ├── button.tsx
    │       ├── calendar.tsx
    │       ├── card.tsx
    │       ├── carousel-hero.tsx       # Homepage hero carousel
    │       ├── carousel.tsx            # Generic carousel
    │       ├── chart.tsx
    │       ├── checkbox.tsx
    │       ├── collapsible.tsx
    │       ├── coming-soon-banner.tsx  # Coming soon feature banner
    │       ├── command.tsx
    │       ├── contact-form.tsx        # Contact form component
    │       ├── context-menu.tsx
    │       ├── cookie-consent.tsx      # GDPR cookie consent
    │       ├── custom-tree-icon.tsx    # Custom tree logo icon
    │       ├── dialog.tsx
    │       ├── drawer.tsx
    │       ├── dropdown-menu.tsx
    │       ├── dynamic-image.tsx       # Dynamic image loader
    │       ├── form.tsx
    │       ├── hover-card.tsx
    │       ├── image-gallery.tsx       # Photo gallery component
    │       ├── input-otp.tsx
    │       ├── input.tsx
    │       ├── label.tsx
    │       ├── lazy-image.tsx          # Lazy loading image
    │       ├── menubar.tsx
    │       ├── navigation-menu.tsx
    │       ├── pagination.tsx
    │       ├── popover.tsx
    │       ├── progress.tsx
    │       ├── radio-group.tsx
    │       ├── resizable.tsx
    │       ├── scroll-area.tsx
    │       ├── select.tsx
    │       ├── separator.tsx
    │       ├── sheet.tsx
    │       ├── sidebar.tsx
    │       ├── skeleton.tsx
    │       ├── slider.tsx
    │       ├── stacked-amenities.tsx   # Amenities showcase
    │       ├── switch.tsx
    │       ├── table.tsx
    │       ├── tabs.tsx
    │       ├── textarea.tsx
    │       ├── toast.tsx
    │       ├── toaster.tsx
    │       ├── toggle-group.tsx
    │       ├── toggle.tsx
    │       ├── tooltip.tsx
    │       ├── yandex-map.tsx          # Yandex Maps integration
    │       └── yandex-reviews.tsx      # Yandex Reviews widget
    │
    ├── pages/              # Page components
    │   ├── home.tsx        # Homepage
    │   ├── about.tsx       # About page
    │   ├── gallery.tsx     # Photo gallery page
    │   ├── contacts.tsx    # Contact page
    │   ├── booking.tsx     # Booking page
    │   ├── rules.tsx       # House rules page
    │   ├── admin.tsx       # Admin panel
    │   ├── consent.tsx     # User consent page
    │   ├── privacy-policy.tsx      # Privacy policy
    │   ├── legal-documents.tsx     # Legal documents
    │   └── not-found.tsx   # 404 page
    │
    ├── contexts/           # React contexts
    │   └── scroll-context.tsx      # Scroll position management
    │
    ├── hooks/              # Custom React hooks
    │   ├── use-mobile.tsx          # Mobile detection
    │   ├── use-scroll-to-top.tsx   # Auto scroll on navigation
    │   ├── use-toast.ts            # Toast notifications
    │   └── useDynamicContrast.ts   # Dynamic color contrast
    │
    └── lib/                # Utility libraries
        ├── constants.ts            # App constants
        ├── image-loader.ts         # Image loading utilities
        ├── queryClient.ts          # TanStack Query client
        ├── seo-constants.ts        # SEO metadata
        └── utils.ts                # General utilities (cn, etc.)
```

---

### 2. `/server` - Backend Application

```
server/
├── index.ts                # Express server entry point
├── routes.ts               # API route handlers
├── storage.ts              # Database abstraction layer
├── vite.ts                 # Vite dev server integration
│
├── email.ts                # Email sending (Nodemailer SMTP)
├── emailjs-service.ts      # EmailJS & Formspree fallback
├── simple-email.ts         # FormSubmit & Netlify Forms
├── telegram-bot.ts         # Telegram Bot notifications
│
├── indexnow.ts             # IndexNow protocol (SEO)
└── sitemap-generator.ts    # Sitemap generation utility
```

#### **Server File Purposes**

| File | Purpose |
|------|---------|
| `index.ts` | Main Express server setup, middleware, error handling |
| `routes.ts` | All API endpoints and route handlers |
| `storage.ts` | Database operations using Drizzle ORM |
| `vite.ts` | Vite middleware for development HMR |
| `email.ts` | Primary email service (SMTP with Nodemailer) |
| `emailjs-service.ts` | Fallback email services (EmailJS, Formspree) |
| `simple-email.ts` | Additional fallbacks (FormSubmit, Netlify) |
| `telegram-bot.ts` | Telegram notifications for contact forms |
| `indexnow.ts` | Search engine indexing notifications |
| `sitemap-generator.ts` | Dynamic sitemap.xml generation |

---

### 3. `/shared` - Shared Code

```
shared/
└── schema.ts               # Database schema & Zod validation schemas
```

**Purpose**: Code shared between client and server
- Database table definitions (Drizzle ORM)
- Zod validation schemas
- TypeScript types for data models

---

### 4. `/public` - Static Assets

```
public/
├── images/                 # Image assets
│   ├── carousel/           # Homepage carousel images (6)
│   │   ├── 1.webp
│   │   ├── 2.webp
│   │   ├── 3.webp
│   │   ├── 4.webp
│   │   ├── 5.webp
│   │   └── 6.webp
│   │
│   ├── gallery/            # Gallery images (40)
│   │   ├── 1.webp
│   │   ├── 2.webp
│   │   └── ... (up to 40.webp)
│   │
│   ├── amenities/          # Amenity feature images (5)
│   │   ├── 1.webp
│   │   ├── 2.webp
│   │   ├── 3.webp
│   │   ├── 4.webp
│   │   └── 5.webp
│   │
│   ├── rooms/              # Room-specific images (placeholder)
│   │   └── .gitkeep
│   │
│   ├── icons/              # Logos and icons
│   │   ├── logo.png
│   │   ├── logo.webp
│   │   ├── icon-192x192.png
│   │   └── icon-512x512.png
│   │
│   ├── favicon.png         # Favicon
│   ├── og-preview.jpg      # Open Graph preview image
│   └── README.md           # Image management instructions
│
├── fonts/                  # Custom fonts
│   └── rocket-wildness.ttf # Brand font
│
├── favicon.ico             # Browser favicon
├── apple-touch-icon.png    # iOS home screen icon
├── robots.txt              # Search engine crawling rules
├── sitemap.xml             # XML sitemap for SEO
├── indexnow-key.txt        # IndexNow verification key
├── site.webmanifest        # PWA manifest
├── og-image.jpg            # Social media preview image
├── test-og.html            # Open Graph testing page
└── yandex_*.html           # Yandex verification file
```

---

### 5. `/docs` - Documentation

```
docs/
├── AppMap.md                           # Application architecture map
├── project_structure.md                 # This file
├── tech_stack.md                        # Technology stack documentation
├── API_documentation.md                 # API reference
├── features.md                          # Feature list
├── UI_UX_doc.md                         # Design system
├── architecture.md                      # System architecture
│
├── DEPLOYMENT_GUIDE.md                  # Deployment instructions
├── DEPLOYMENT_IMAGES_FIX.md             # Image deployment fixes
├── DEPLOY_SUMMARY.md                    # Deployment summary
├── EMAIL_SETUP_INSTRUCTIONS.md          # Email configuration
├── IMAGE_DEPLOYMENT_FIX.md              # Image handling guide
├── INDEXNOW_SETUP.md                    # IndexNow configuration
├── MIGRATION_TO_LOCAL.md                # Local setup guide
├── OG_PREVIEW_TESTING.md                # Open Graph testing
├── RENDER_DEPLOY_GUIDE.md               # Render.com guide
├── SOCIAL_MEDIA_CACHE_REFRESH.md        # Social media cache
├── TELEGRAM_TROUBLESHOOTING.md          # Telegram bot issues
├── WINDOWS_FIX.md                       # Windows-specific fixes
├── YANDEX_SMTP_TROUBLESHOOTING.md       # Email troubleshooting
│
├── ИЗОБРАЖЕНИЯ_ИНСТРУКЦИИ.md            # Image instructions (RU)
├── ИНСТРУКЦИЯ_ОТКЛЮЧЕНИЯ_БАННЕРА.md     # Banner disable (RU)
└── ИНСТРУКЦИЯ_УПРАВЛЕНИЯ_ИЗОБРАЖЕНИЯМИ.md # Image management (RU)
```

---

### 6. `/attached_assets` - Additional Assets

```
attached_assets/
└── [Additional project assets]
```

**Purpose**: Extra assets not served directly by the app
- Design files
- Documentation assets
- Reference materials

---

### 7. `/migrations` - Database Migrations

```
migrations/
└── [Drizzle ORM migration files]
```

**Purpose**: Database schema version control
- Generated by `drizzle-kit`
- Applied with `npm run db:push`

---

### 8. `/.windsurf` - AI Configuration

```
.windsurf/
└── rules/
    └── generatefile.md     # AI documentation rules
```

**Purpose**: Configuration for Windsurf AI assistant

---

### 9. `/dist` - Build Output (Generated)

```
dist/
├── public/                 # Compiled frontend assets
│   ├── assets/             # JS, CSS bundles
│   └── index.html          # Built HTML
│
├── index.js                # Compiled server code
└── [other server files]
```

**Generated by**: `npm run build`
**Purpose**: Production-ready application

---

## Configuration Files

### Build & Development

| File | Purpose |
|------|---------|
| `vite.config.ts` | Vite bundler configuration (dev & build) |
| `tsconfig.json` | TypeScript compiler options |
| `tailwind.config.ts` | Tailwind CSS customization |
| `postcss.config.js` | PostCSS plugins (Tailwind, Autoprefixer) |
| `drizzle.config.ts` | Drizzle ORM database configuration |

### Package Management

| File | Purpose |
|------|---------|
| `package.json` | Dependencies, scripts, project metadata |
| `package-lock.json` | Exact dependency versions |

### Deployment

| File | Purpose |
|------|---------|
| `render.yaml` | Render.com deployment configuration |
| `.env` | Environment variables (local, not committed) |

### Version Control

| File | Purpose |
|------|---------|
| `.gitignore` | Files to exclude from Git |
| `.git/` | Git repository data |

---

## File Naming Conventions

### TypeScript/TSX Files
- **Components**: `kebab-case.tsx` (e.g., `contact-form.tsx`)
- **Pages**: `kebab-case.tsx` (e.g., `privacy-policy.tsx`)
- **Utilities**: `kebab-case.ts` (e.g., `image-loader.ts`)
- **Hooks**: `use-*.tsx` or `use-*.ts` (e.g., `use-mobile.tsx`)

### Image Files
- **Format**: `.webp` (optimized for web)
- **Naming**: Numeric sequence (`1.webp`, `2.webp`, etc.)
- **Organization**: By category folders

### Documentation
- **Uppercase**: `README.md`, `DEPLOYMENT_GUIDE.md`
- **PascalCase**: `AppMap.md`, `UI_UX_doc.md`
- **Russian**: Cyrillic naming for Russian docs

---

## Module Resolution & Aliases

### Path Aliases (from `vite.config.ts`)

```typescript
{
  "@": "client/src",         // → client/src/*
  "@shared": "shared",       // → shared/*
  "@assets": "attached_assets" // → attached_assets/*
}
```

### Usage Examples

```typescript
// Instead of: import Header from '../../components/layout/header'
import Header from '@/components/layout/header';

// Instead of: import { schema } from '../../../shared/schema'
import { schema } from '@shared/schema';

// Instead of: import asset from '../../../attached_assets/file'
import asset from '@assets/file';
```

---

## Environment-Specific Structure

### Development (`npm run dev`)
```
Process: tsx server/index.ts
├── Vite Dev Server (HMR, fast refresh)
├── Express Server (API endpoints)
├── Source Maps (debugging)
└── Hot Module Replacement
```

### Production (`npm run build` → `npm start`)
```
Build Output:
├── dist/public/          # Static frontend (served by Express)
│   ├── assets/           # Hashed bundles
│   └── index.html        # Entry point
└── dist/               # Compiled server (Node.js)
    └── index.js          # Express server

Runtime:
└── Node.js serves both static files and API
```

---

## Key File Relationships

### Entry Points Flow
```
client/index.html
    ↓ (loads)
client/src/main.tsx
    ↓ (renders)
client/src/App.tsx
    ↓ (provides routing)
client/src/pages/*.tsx
    ↓ (uses)
client/src/components/**/*.tsx
```

### Server Request Flow
```
server/index.ts
    ↓ (registers)
server/routes.ts
    ↓ (uses)
server/storage.ts
    ↓ (queries)
shared/schema.ts
    ↓ (validates)
PostgreSQL Database
```

### Style Cascade
```
tailwind.config.ts
    ↓ (configures)
postcss.config.js
    ↓ (processes)
client/src/index.css
    ↓ (imports Tailwind)
client/src/**/*.tsx
    ↓ (applies classes)
Rendered UI
```

---

## Asset Loading Strategy

### Images
```
1. Static Public Images:
   /public/images/* → Served directly by Express

2. Dynamic Import:
   client/src/lib/image-loader.ts
   ├── Check if real image exists
   ├── Fallback to Unsplash placeholder
   └── Lazy load with Intersection Observer

3. Optimization:
   ├── WebP format (smaller file size)
   ├── Lazy loading (performance)
   └── Responsive sizes (mobile-friendly)
```

### Fonts
```
/public/fonts/rocket-wildness.ttf
    ↓ (declared in)
client/src/index.css
    ↓ (used in)
Tailwind components
```

---

## Build Output Structure

### Development Build
```
No build output
Source files served directly
HMR updates in memory
```

### Production Build
```
dist/
├── public/
│   ├── assets/
│   │   ├── index-[hash].js      # Main app bundle
│   │   ├── vendor-[hash].js     # Third-party deps
│   │   └── index-[hash].css     # Compiled styles
│   └── index.html               # HTML entry
│
└── index.js                     # Express server bundle
```

---

## Database Structure

### Drizzle ORM Setup
```
drizzle.config.ts (configuration)
    ↓
shared/schema.ts (table definitions)
    ↓
migrations/ (version control)
    ↓
PostgreSQL (Neon serverless)
```

### Tables
```sql
-- users (admin authentication)
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL
);

-- contact_messages (form submissions)
CREATE TABLE contact_messages (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

---

## Code Organization Principles

### 1. **Separation of Concerns**
- Frontend (React) ↔ Backend (Express) ↔ Database (PostgreSQL)
- UI Components ↔ Business Logic ↔ Data Layer

### 2. **Component Modularity**
- Small, reusable components
- Single responsibility principle
- Composable UI elements

### 3. **Type Safety**
- TypeScript throughout
- Shared schemas for validation
- Type inference from database

### 4. **Configuration Centralization**
- Environment variables in `.env`
- Constants in `lib/constants.ts`
- SEO metadata in `lib/seo-constants.ts`

### 5. **Asset Organization**
- Images by category (carousel, gallery, amenities)
- Fonts in dedicated folder
- Static files in `/public`

---

## Development Workflow

### Local Development
```bash
1. Clone repository
2. npm install
3. Create .env file
4. npm run dev
5. Open http://localhost:5000
```

### Making Changes
```
1. Edit files in client/src/ (frontend) or server/ (backend)
2. Vite HMR auto-reloads (frontend)
3. tsx watches and restarts (backend)
4. Test changes in browser
5. Commit to Git
```

### Deployment
```
1. Push to GitHub
2. Render auto-deploys from main branch
3. npm run build (automatic)
4. npm start (automatic)
5. Live at https://lavillapine.onrender.com
```

---

## Best Practices

### File Organization
✅ Group related files by feature/domain
✅ Keep components small and focused
✅ Use index files for clean imports
✅ Separate concerns (UI, logic, data)

### Naming
✅ Descriptive, clear names
✅ Consistent conventions (kebab-case, PascalCase)
✅ Prefix hooks with `use-`
✅ Suffix components with `.tsx`

### Dependencies
✅ Use path aliases for cleaner imports
✅ Keep dependencies up to date
✅ Separate dev and production deps
✅ Document external APIs

---

## Summary

This project structure follows **modern full-stack best practices**:

- ✅ **Monorepo structure** (client + server in one repository)
- ✅ **TypeScript everywhere** (type safety)
- ✅ **Modular component architecture** (reusability)
- ✅ **Clear separation of concerns** (frontend, backend, shared)
- ✅ **Optimized asset management** (images, fonts, static files)
- ✅ **Environment-based configuration** (dev vs production)
- ✅ **Comprehensive documentation** (multiple guides and references)

The structure is designed for:
- **Developer productivity** (clear organization, HMR, TypeScript)
- **Maintainability** (modular code, documentation)
- **Performance** (optimized builds, lazy loading)
- **Scalability** (clear patterns, extensible architecture)
