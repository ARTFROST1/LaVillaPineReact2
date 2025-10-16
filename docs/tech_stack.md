# La Villa Pine - Technology Stack

## Overview
La Villa Pine is built with modern, production-ready technologies that prioritize performance, developer experience, and maintainability. This document details every technology used in the project with links to official documentation.

---

## Frontend Stack

### Core Framework

#### **React 18.3.1**
- **Purpose**: UI library for building component-based interfaces
- **Why chosen**: Industry standard, excellent ecosystem, virtual DOM performance
- **Documentation**: https://react.dev/
- **Getting Started**: https://react.dev/learn

**Key Features Used**:
- Functional components with hooks
- Concurrent features (React 18)
- Suspense and lazy loading
- Context API for state management

---

#### **TypeScript 5.6.3**
- **Purpose**: Type-safe JavaScript superset
- **Why chosen**: Catch errors at compile-time, better IDE support, self-documenting code
- **Documentation**: https://www.typescriptlang.org/docs/
- **Handbook**: https://www.typescriptlang.org/docs/handbook/intro.html

**Configuration**:
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "jsx": "react-jsx",
    "strict": true
  }
}
```

---

### Build Tool

#### **Vite 5.4.19**
- **Purpose**: Next-generation frontend build tool
- **Why chosen**: Lightning-fast HMR, optimized builds, native ES modules
- **Documentation**: https://vitejs.dev/
- **Guide**: https://vitejs.dev/guide/

**Features**:
- Instant server start
- Hot Module Replacement (HMR)
- Optimized production builds
- Native ES modules support

**Plugins Used**:
- `@vitejs/plugin-react` - React Fast Refresh support
- `@replit/vite-plugin-runtime-error-modal` - Error overlay
- `@replit/vite-plugin-cartographer` - Replit integration

---

### Routing

#### **Wouter 3.3.5**
- **Purpose**: Lightweight client-side routing
- **Why chosen**: Tiny bundle size (~1.5KB), React Hooks API, no dependencies
- **Documentation**: https://github.com/molefrog/wouter
- **Examples**: https://github.com/molefrog/wouter#hook-based-api

**Routes Implemented**:
```typescript
/ → Home
/about → About
/gallery → Gallery
/contacts → Contact Form
/booking → Booking Widget
/rules → House Rules
/admin → Admin Panel
/privacy-policy → Privacy Policy
/consent → User Consent
/legal-documents → Legal Documents
```

---

### Styling

#### **Tailwind CSS 3.4.17**
- **Purpose**: Utility-first CSS framework
- **Why chosen**: Rapid development, consistent design, small production bundle
- **Documentation**: https://tailwindcss.com/docs
- **Core Concepts**: https://tailwindcss.com/docs/utility-first

**Plugins**:
- `@tailwindcss/typography` - Beautiful typographic defaults
- `@tailwindcss/vite` - Vite integration
- `tailwindcss-animate` - Animation utilities
- `autoprefixer` - Automatic vendor prefixes

**Custom Configuration**:
```typescript
theme: {
  extend: {
    colors: { /* Custom brand colors */ },
    fontFamily: { /* Custom fonts */ },
    animation: { /* Custom animations */ }
  }
}
```

---

#### **PostCSS 8.4.47**
- **Purpose**: CSS transformation tool
- **Documentation**: https://postcss.org/
- **Plugins**: Tailwind CSS, Autoprefixer

---

### UI Component Library

#### **shadcn/ui**
- **Purpose**: Re-usable component library built on Radix UI
- **Why chosen**: Accessible, customizable, owns the code (not npm dependency)
- **Documentation**: https://ui.shadcn.com/
- **Components**: https://ui.shadcn.com/docs/components

**Components Used** (50+ components):
- Accordion, Alert, Badge, Button, Card, Carousel
- Dialog, Drawer, Dropdown Menu, Form, Input
- Select, Sheet, Skeleton, Tabs, Toast, Tooltip
- And many more...

---

#### **Radix UI**
- **Purpose**: Unstyled, accessible UI primitives
- **Why chosen**: WAI-ARIA compliant, keyboard navigation, focus management
- **Documentation**: https://www.radix-ui.com/primitives
- **Primitives**: https://www.radix-ui.com/primitives/docs/overview/introduction

**Primitives Used**:
```typescript
@radix-ui/react-accordion
@radix-ui/react-alert-dialog
@radix-ui/react-dialog
@radix-ui/react-dropdown-menu
@radix-ui/react-toast
@radix-ui/react-tooltip
// ... and 20+ more primitives
```

---

### State Management

#### **TanStack Query 5.60.5** (React Query)
- **Purpose**: Server state management
- **Why chosen**: Automatic caching, background refetching, optimistic updates
- **Documentation**: https://tanstack.com/query/latest
- **Getting Started**: https://tanstack.com/query/latest/docs/react/overview

**Used For**:
- Contact form submissions
- API key fetching
- Admin message retrieval
- Cache management

---

#### **React Hook Form 7.55.0**
- **Purpose**: Performant form validation
- **Why chosen**: Minimal re-renders, easy validation, great DX
- **Documentation**: https://react-hook-form.com/
- **Get Started**: https://react-hook-form.com/get-started

**Integration**:
- Zod resolver for validation
- Controlled and uncontrolled inputs
- Error handling and display

---

### Validation

#### **Zod 3.24.2**
- **Purpose**: TypeScript-first schema validation
- **Why chosen**: Type inference, composable schemas, runtime validation
- **Documentation**: https://zod.dev/
- **Basic Usage**: https://zod.dev/?id=basic-usage

**Used For**:
- Form validation
- API request validation
- Database schema validation
- Type-safe data parsing

---

### Icons & Assets

#### **Lucide React 0.453.0**
- **Purpose**: Beautiful, customizable icon library
- **Why chosen**: Tree-shakeable, consistent design, extensive collection
- **Documentation**: https://lucide.dev/
- **Icons**: https://lucide.dev/icons/

---

#### **React Icons 5.4.0**
- **Purpose**: Additional icon sets (Font Awesome, etc.)
- **Documentation**: https://react-icons.github.io/react-icons/

---

### Animation

#### **Framer Motion 11.13.1**
- **Purpose**: Production-ready animation library
- **Why chosen**: Declarative animations, gesture support, layout animations
- **Documentation**: https://www.framer.com/motion/
- **Introduction**: https://www.framer.com/motion/introduction/

---

#### **Embla Carousel 8.6.0**
- **Purpose**: Lightweight carousel library
- **Why chosen**: Touch-friendly, performant, flexible
- **Documentation**: https://www.embla-carousel.com/
- **Get Started**: https://www.embla-carousel.com/get-started/

---

### Utilities

#### **date-fns 3.6.0**
- **Purpose**: Modern JavaScript date utility library
- **Documentation**: https://date-fns.org/
- **Functions**: https://date-fns.org/docs/Getting-Started

---

#### **clsx 2.1.1** & **tailwind-merge 2.6.0**
- **Purpose**: Conditional CSS class management
- **clsx**: https://github.com/lukeed/clsx
- **tailwind-merge**: https://github.com/dcastil/tailwind-merge

---

## Backend Stack

### Runtime & Server

#### **Node.js 20.16.11**
- **Purpose**: JavaScript runtime for backend
- **Why chosen**: Non-blocking I/O, large ecosystem, JavaScript everywhere
- **Documentation**: https://nodejs.org/docs/
- **API Reference**: https://nodejs.org/api/

---

#### **Express.js 4.21.2**
- **Purpose**: Web application framework
- **Why chosen**: Minimalist, flexible, well-documented, large community
- **Documentation**: https://expressjs.com/
- **Guide**: https://expressjs.com/en/guide/routing.html

**Middleware Used**:
- `express.json()` - JSON body parsing
- `express.urlencoded()` - URL-encoded body parsing
- `express.static()` - Static file serving
- Custom logging middleware
- Error handling middleware

---

#### **tsx 4.20.3**
- **Purpose**: TypeScript execution for Node.js
- **Why chosen**: Fast, supports ES modules, no build step for dev
- **Documentation**: https://github.com/privatenumber/tsx

---

#### **esbuild 0.25.0**
- **Purpose**: Extremely fast bundler for production
- **Why chosen**: Speed (100x faster than webpack), minimal config
- **Documentation**: https://esbuild.github.io/
- **API**: https://esbuild.github.io/api/

---

### Database

#### **PostgreSQL** (via Neon Serverless)
- **Purpose**: Relational database
- **Why chosen**: ACID compliance, powerful queries, JSON support
- **Documentation**: https://www.postgresql.org/docs/
- **Neon**: https://neon.tech/docs/introduction

---

#### **Drizzle ORM 0.39.1**
- **Purpose**: TypeScript ORM for SQL databases
- **Why chosen**: Type-safe, lightweight, SQL-like syntax, edge-ready
- **Documentation**: https://orm.drizzle.team/docs/overview
- **Quick Start**: https://orm.drizzle.team/docs/quick-start

**Features**:
- Type inference from schema
- Migration generation
- Relational queries
- Edge runtime support

**Database Provider**:
- `@neondatabase/serverless` - Neon serverless PostgreSQL driver

---

#### **Drizzle Kit 0.30.4**
- **Purpose**: CLI for Drizzle ORM migrations
- **Documentation**: https://orm.drizzle.team/kit-docs/overview
- **Commands**: `drizzle-kit push`, `drizzle-kit generate`

---

### Email Services

#### **Nodemailer 7.0.5**
- **Purpose**: Primary email sending (SMTP)
- **Why chosen**: Reliable, supports all major email services, streaming
- **Documentation**: https://nodemailer.com/
- **Usage**: https://nodemailer.com/usage/

**Configuration**:
```typescript
service: 'yandex',
host: 'smtp.yandex.ru',
port: 465,
secure: true
```

---

#### **SendGrid 8.1.5**
- **Purpose**: Email API fallback
- **Documentation**: https://docs.sendgrid.com/
- **Node.js**: https://github.com/sendgrid/sendgrid-nodejs

---

### Notification Services

#### **Telegram Bot API**
- **Purpose**: Alternative notification channel
- **Why chosen**: Instant notifications, reliable, free
- **Documentation**: https://core.telegram.org/bots/api
- **Bot Setup**: https://core.telegram.org/bots/tutorial

**Used For**:
- Contact form notifications
- Admin alerts
- Backup notification channel

---

### Session Management

#### **express-session 1.18.1**
- **Purpose**: Session middleware for Express
- **Documentation**: https://github.com/expressjs/session

---

#### **memorystore 1.6.7**
- **Purpose**: In-memory session store
- **Documentation**: https://github.com/roccomuso/memorystore

---

### Authentication (Admin)

#### **Passport.js 0.7.0**
- **Purpose**: Authentication middleware
- **Documentation**: http://www.passportjs.org/
- **Strategies**: http://www.passportjs.org/packages/

---

#### **passport-local 1.0.0**
- **Purpose**: Local username/password strategy
- **Documentation**: http://www.passportjs.org/packages/passport-local/

---

## External APIs & Services

### Maps

#### **Yandex Maps API**
- **Purpose**: Interactive map integration
- **Documentation**: https://yandex.com/dev/maps/jsapi/
- **Getting Started**: https://yandex.com/dev/maps/jsapi/doc/2.1/quick-start/

**Features Used**:
- Map display with custom markers
- Location highlighting
- Zoom controls
- Touch gestures

---

### Booking

#### **HomeReserve**
- **Purpose**: Booking management widget
- **Integration**: Widget embed
- **Documentation**: Proprietary integration

---

### Analytics

#### **Yandex Metrika**
- **Purpose**: Web analytics
- **Documentation**: https://yandex.com/support/metrica/
- **Counter Setup**: https://yandex.com/support/metrica/quick-start.html

**Tracking**:
- Page views
- User sessions
- Goal conversions
- User behavior

---

### Reviews

#### **Yandex Reviews Widget**
- **Purpose**: Display customer reviews
- **Documentation**: https://yandex.ru/support/reviews/

---

### SEO

#### **IndexNow Protocol**
- **Purpose**: Instant search engine indexing
- **Why chosen**: Faster indexing than traditional crawling
- **Documentation**: https://www.indexnow.org/
- **Yandex**: https://yandex.com/support/webmaster/indexnow/intro.html

**Supported Engines**:
- Yandex
- Bing
- Seznam

---

## Development Tools

### Package Manager

#### **npm** (Node Package Manager)
- **Purpose**: Dependency management
- **Documentation**: https://docs.npmjs.com/
- **CLI**: https://docs.npmjs.com/cli/

---

### Code Quality

#### **TypeScript** (see Frontend Stack)
- **Purpose**: Static type checking
- **Config**: `tsconfig.json`

---

### Environment Variables

#### **dotenv** (built into Node.js)
- **Purpose**: Environment variable management
- **File**: `.env` (local development)
- **Documentation**: https://nodejs.org/api/process.html#processenv

---

## Deployment & Hosting

### Platform

#### **Render.com**
- **Purpose**: Cloud hosting platform
- **Why chosen**: Free tier, auto-deploy from Git, SSL, easy config
- **Documentation**: https://render.com/docs
- **Web Services**: https://render.com/docs/web-services

**Deployment Config**: `render.yaml`
```yaml
services:
  - type: web
    name: lavillapine
    env: node
    buildCommand: npm install && npm run build
    startCommand: npm start
```

---

### Database Hosting

#### **Neon**
- **Purpose**: Serverless PostgreSQL hosting
- **Why chosen**: Generous free tier, edge-ready, auto-scaling
- **Documentation**: https://neon.tech/docs
- **Postgres**: https://neon.tech/docs/postgres/introduction

**Features**:
- Serverless compute
- Automatic backups
- Connection pooling
- Edge-compatible driver

---

### Version Control

#### **Git & GitHub**
- **Purpose**: Source code management
- **Git Docs**: https://git-scm.com/doc
- **GitHub**: https://docs.github.com/

---

## PWA Support (Progressive Web App)

### Manifest

#### **site.webmanifest**
- **Purpose**: PWA configuration
- **Documentation**: https://developer.mozilla.org/en-US/docs/Web/Manifest
- **Icons**: https://developer.mozilla.org/en-US/docs/Web/Manifest/icons

**Features**:
- Installable web app
- Custom icons (192x192, 512x512)
- Standalone display mode
- Theme colors

---

## Performance & Optimization

### Image Optimization

#### **WebP Format**
- **Purpose**: Modern image format (30% smaller than JPEG)
- **Documentation**: https://developers.google.com/speed/webp

---

#### **Lazy Loading**
- **Purpose**: Load images only when visible
- **Implementation**: Intersection Observer API
- **Documentation**: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

---

### Code Splitting

#### **Vite Code Splitting**
- **Purpose**: Split code into smaller chunks
- **Documentation**: https://vitejs.dev/guide/features.html#async-chunk-loading-optimization

---

### Caching

#### **React Query Cache**
- **Purpose**: Automatic request caching
- **Documentation**: https://tanstack.com/query/latest/docs/react/guides/caching

---

## SEO Technologies

### Meta Tags

#### **Open Graph Protocol**
- **Purpose**: Rich social media previews
- **Documentation**: https://ogp.me/
- **Testing**: https://www.opengraph.xyz/

---

#### **Twitter Cards**
- **Purpose**: Twitter-specific previews
- **Documentation**: https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards
- **Validator**: https://cards-dev.twitter.com/validator

---

### Structured Data

#### **JSON-LD**
- **Purpose**: Search engine structured data
- **Documentation**: https://json-ld.org/
- **Schema.org**: https://schema.org/

---

### Sitemap & Robots

#### **XML Sitemap**
- **Purpose**: Search engine site structure
- **Documentation**: https://www.sitemaps.org/
- **File**: `/public/sitemap.xml`

---

#### **robots.txt**
- **Purpose**: Search engine crawling rules
- **Documentation**: https://developers.google.com/search/docs/crawling-indexing/robots/intro
- **File**: `/public/robots.txt`

---

## Type System

### Validation & Types

#### **Drizzle Zod 0.7.0**
- **Purpose**: Generate Zod schemas from Drizzle tables
- **Documentation**: https://orm.drizzle.team/docs/zod

---

#### **zod-validation-error 3.4.0**
- **Purpose**: User-friendly Zod error messages
- **Documentation**: https://github.com/causaly/zod-validation-error

---

#### **@hookform/resolvers 3.10.0**
- **Purpose**: React Hook Form validation resolvers
- **Documentation**: https://github.com/react-hook-form/resolvers

---

## Utilities & Helpers

### Class Name Management

#### **class-variance-authority 0.7.1**
- **Purpose**: Component variant management
- **Documentation**: https://cva.style/docs

---

### Command Palette

#### **cmdk 1.1.1**
- **Purpose**: Fast, composable command menu
- **Documentation**: https://cmdk.paco.me/

---

### Cross-Platform Support

#### **cross-env 7.0.3**
- **Purpose**: Cross-platform environment variables
- **Documentation**: https://github.com/kentcdodds/cross-env

---

## Testing & Quality Assurance

### Type Checking

```bash
npm run check  # TypeScript type checking
```

### Manual Testing
- Browser testing across devices
- Lighthouse audits
- Accessibility testing

---

## Technology Comparison & Alternatives

### Why These Choices?

| Category | Chosen | Alternative | Why Not Alternative |
|----------|--------|-------------|-------------------|
| **Frontend** | React | Vue, Svelte | Larger ecosystem, team familiarity |
| **Routing** | Wouter | React Router | Smaller bundle, simpler API |
| **Styling** | Tailwind | CSS-in-JS | Faster builds, smaller runtime |
| **State** | TanStack Query | Redux | Built for async, less boilerplate |
| **ORM** | Drizzle | Prisma | Lighter, edge-compatible |
| **Build** | Vite | Webpack | Faster dev server, simpler config |
| **Server** | Express | Fastify, Hono | Maturity, middleware ecosystem |
| **Hosting** | Render | Vercel, Railway | Free PostgreSQL, monorepo support |

---

## Version Compatibility Matrix

| Package | Version | Node.js | TypeScript | React |
|---------|---------|---------|------------|-------|
| React | 18.3.1 | ≥16 | ≥4.7 | - |
| Vite | 5.4.19 | ≥18 | ≥5.0 | - |
| Express | 4.21.2 | ≥14 | ≥4.0 | - |
| Drizzle ORM | 0.39.1 | ≥16 | ≥5.0 | - |
| TanStack Query | 5.60.5 | ≥16 | ≥4.7 | ≥18 |
| Tailwind CSS | 3.4.17 | ≥14 | - | - |

---

## Installation Guide

### Prerequisites

```bash
Node.js: v20.16.11 or higher
npm: v10 or higher
PostgreSQL: Latest (via Neon)
Git: Latest
```

### Installation Steps

```bash
# 1. Clone repository
git clone <repository-url>
cd LaVillaPineReact2

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# Edit .env with your credentials

# 4. Run database migrations
npm run db:push

# 5. Start development server
npm run dev

# 6. Open browser
# http://localhost:5000
```

---

## Build Commands

```bash
# Development
npm run dev          # Start dev server (HMR enabled)

# Type checking
npm run check        # TypeScript type check

# Database
npm run db:push      # Push database schema changes

# Production build
npm run build        # Build frontend + backend

# Production start
npm start            # Start production server
```

---

## Environment Variables

### Required Variables

```bash
# Database
DATABASE_URL=postgresql://user:pass@host:5432/db

# Email (SMTP)
EMAIL_USER=your-email@yandex.com
EMAIL_PASS=your-app-password

# Telegram (optional)
TELEGRAM_BOT_TOKEN=your-bot-token
TELEGRAM_CHAT_ID=your-chat-id

# Yandex Maps
YANDEX_MAPS_API_KEY=your-api-key

# Node Environment
NODE_ENV=production
PORT=5000
```

---

## Documentation Links Summary

### Frontend
- React: https://react.dev/
- TypeScript: https://www.typescriptlang.org/docs/
- Vite: https://vitejs.dev/
- Wouter: https://github.com/molefrog/wouter
- Tailwind CSS: https://tailwindcss.com/docs
- shadcn/ui: https://ui.shadcn.com/
- Radix UI: https://www.radix-ui.com/primitives
- TanStack Query: https://tanstack.com/query/latest
- React Hook Form: https://react-hook-form.com/
- Zod: https://zod.dev/

### Backend
- Node.js: https://nodejs.org/docs/
- Express: https://expressjs.com/
- Drizzle ORM: https://orm.drizzle.team/docs/overview
- Nodemailer: https://nodemailer.com/
- Postgres: https://www.postgresql.org/docs/

### External Services
- Yandex Maps: https://yandex.com/dev/maps/jsapi/
- Yandex Metrika: https://yandex.com/support/metrica/
- IndexNow: https://www.indexnow.org/
- Telegram Bot API: https://core.telegram.org/bots/api

### Deployment
- Render: https://render.com/docs
- Neon: https://neon.tech/docs

---

## Summary

La Villa Pine uses a **modern, production-ready tech stack** optimized for:

✅ **Performance**: Vite, React 18, lazy loading, code splitting
✅ **Type Safety**: TypeScript, Zod, Drizzle ORM
✅ **Developer Experience**: HMR, TSX, type inference, excellent tooling
✅ **User Experience**: Tailwind CSS, shadcn/ui, Radix UI, animations
✅ **SEO**: Server-side rendering paths, meta tags, sitemap, IndexNow
✅ **Reliability**: PostgreSQL, Drizzle ORM, error handling, fallbacks
✅ **Scalability**: Edge-ready, serverless database, optimized builds

**Total Dependencies**: ~80 packages
**Bundle Size** (production): ~200KB gzipped (frontend)
**Build Time**: ~10-15 seconds
**Dev Server Start**: <1 second

All technologies are actively maintained, well-documented, and production-proven.
