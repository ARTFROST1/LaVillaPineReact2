# La Villa Pine - System Architecture

## Overview
La Villa Pine is a **modern full-stack web application** built as a monolithic architecture with clear separation between frontend and backend concerns. The system emphasizes performance, scalability, and maintainability while providing a luxury booking experience.

---

## Table of Contents
1. [High-Level Architecture](#high-level-architecture)
2. [Frontend Architecture](#frontend-architecture)
3. [Backend Architecture](#backend-architecture)
4. [Database Architecture](#database-architecture)
5. [External Integrations](#external-integrations)
6. [Deployment Architecture](#deployment-architecture)
7. [Security Architecture](#security-architecture)
8. [Performance Architecture](#performance-architecture)
9. [Scalability Considerations](#scalability-considerations)

---

## High-Level Architecture

### System Diagram

```
┌─────────────────────────────────────────────────────────────────────┐
│                           CLIENT LAYER                               │
│  ┌────────────────────────────────────────────────────────────────┐ │
│  │  Browser (React SPA)                                           │ │
│  │  - React 18                                                    │ │
│  │  - Wouter (Routing)                                           │ │
│  │  - TanStack Query (State)                                     │ │
│  │  - Tailwind CSS (Styling)                                     │ │
│  └────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────┬───────────────────────────────────────┘
                              │ HTTPS / REST API
┌─────────────────────────────┴───────────────────────────────────────┐
│                         APPLICATION LAYER                            │
│  ┌────────────────────────────────────────────────────────────────┐ │
│  │  Node.js Server (Express.js)                                  │ │
│  │  - API Routes                                                 │ │
│  │  - Business Logic                                             │ │
│  │  - Middleware                                                 │ │
│  │  - Static File Serving                                        │ │
│  └────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────┬───────────────────────────────────────┘
                              │ SQL / ORM
┌─────────────────────────────┴───────────────────────────────────────┐
│                           DATA LAYER                                 │
│  ┌────────────────────────────────────────────────────────────────┐ │
│  │  PostgreSQL Database (Neon)                                   │ │
│  │  - Users                                                      │ │
│  │  - Contact Messages                                           │ │
│  │  - Drizzle ORM                                                │ │
│  └────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│                       EXTERNAL SERVICES                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐             │
│  │ Yandex Maps  │  │ HomeReserve  │  │  Telegram    │             │
│  │   Metrika    │  │   Widget     │  │     Bot      │             │
│  │   Reviews    │  │              │  │              │             │
│  └──────────────┘  └──────────────┘  └──────────────┘             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐             │
│  │    Email     │  │   IndexNow   │  │   Formspree  │             │
│  │   Services   │  │  (Yandex)    │  │   EmailJS    │             │
│  │   (SMTP)     │  │   (Bing)     │  │              │             │
│  └──────────────┘  └──────────────┘  └──────────────┘             │
└─────────────────────────────────────────────────────────────────────┘
```

### Architecture Style

**Pattern**: **Monolithic + Microservices Hybrid**

- **Monolithic Core**: Single deployable unit (frontend + backend)
- **External Microservices**: Third-party APIs for specialized functions
- **Edge Functions**: Serverless database (Neon)

**Benefits**:
- Simplified deployment
- Lower operational complexity
- Faster development iteration
- Easy local development

**Trade-offs**:
- Tighter coupling between layers
- Requires full stack restart for changes
- Scaling requires scaling entire application

---

## Frontend Architecture

### Component Architecture

```
App (Root)
├── QueryClientProvider (TanStack Query)
│   └── Server State Management
├── ScrollProvider (Context)
│   └── Scroll Behavior
├── TooltipProvider (Radix UI)
│   └── Tooltip State
├── Router (Wouter)
│   ├── Header (Layout)
│   │   ├── Navigation
│   │   └── Mobile Menu
│   ├── Pages (Dynamic)
│   │   ├── Home
│   │   ├── Gallery
│   │   ├── Contacts
│   │   ├── Booking
│   │   └── ...
│   └── Footer (Layout)
├── Toaster (Global Notifications)
├── CookieConsent (GDPR)
└── YandexReviews (Fixed Widget)
```

### State Management Strategy

#### **Server State** (TanStack Query)
```typescript
// Automatic caching, background refetching
const { data, isLoading } = useQuery({
  queryKey: ['contact-messages'],
  queryFn: fetchMessages,
  staleTime: 5 * 60 * 1000, // 5 minutes
});
```

**Managed Data**:
- API responses
- Contact messages
- Configuration (API keys)
- Admin data

**Benefits**:
- Automatic caching
- Background refetching
- Optimistic updates
- Error handling

---

#### **Local State** (React Hooks)
```typescript
// Component-specific state
const [isOpen, setIsOpen] = useState(false);
const [activeImage, setActiveImage] = useState(0);
```

**Managed Data**:
- UI state (modals, drawers)
- Form inputs (React Hook Form)
- Component visibility
- Local preferences

---

#### **Context State** (React Context)
```typescript
// Cross-component shared state
const ScrollContext = createContext();

// Used for scroll position, theme, etc.
```

**Managed Data**:
- Scroll position
- Theme preferences
- Global UI state

---

### Routing Architecture

**Client-Side Routing** (Wouter)

```typescript
// Route definitions
<Switch>
  <Route path="/" component={Home} />
  <Route path="/gallery" component={Gallery} />
  <Route path="/contacts" component={Contacts} />
  <Route path="/booking" component={Booking} />
  <Route component={NotFound} />
</Switch>
```

**Benefits**:
- Lightweight (1.5KB)
- React Hooks API
- No dependencies
- Fast route matching

**Route Guards**:
```typescript
// Server-side validation in Express
const VALID_CLIENT_ROUTES = [
  '/', '/about', '/gallery', '/contacts', '/booking', '/rules',
  '/admin', '/privacy-policy', '/consent', '/legal-documents'
];

// Return 404 for invalid routes
if (!VALID_CLIENT_ROUTES.includes(cleanPath)) {
  return res.status(404).json({ error: "Page not found" });
}
```

---

### Data Flow Architecture

```
User Action
    ↓
[Component Event Handler]
    ↓
[React Hook Form / Local State]
    ↓
[Validation (Zod)]
    ↓
[TanStack Query Mutation]
    ↓
[HTTP Request (Fetch API)]
    ↓
[Backend API Endpoint]
    ↓
[Response]
    ↓
[Query Cache Update]
    ↓
[Component Re-render]
    ↓
[UI Update + Toast Notification]
```

---

## Backend Architecture

### Layered Architecture

```
┌─────────────────────────────────────┐
│        API Layer (routes.ts)        │
│  - Route handlers                   │
│  - Request validation               │
│  - Response formatting              │
└─────────────┬───────────────────────┘
              │
┌─────────────┴───────────────────────┐
│     Business Logic Layer            │
│  - Email services                   │
│  - Telegram notifications           │
│  - IndexNow protocol                │
│  - Sitemap generation               │
└─────────────┬───────────────────────┘
              │
┌─────────────┴───────────────────────┐
│      Data Access Layer              │
│  - storage.ts (Abstraction)         │
│  - Drizzle ORM                      │
│  - Schema definitions               │
└─────────────┬───────────────────────┘
              │
┌─────────────┴───────────────────────┐
│        Database (PostgreSQL)        │
└─────────────────────────────────────┘
```

### API Route Structure

```typescript
// routes.ts - Centralized route registration
export async function registerRoutes(app: Express): Promise<Server> {
  // Contact endpoints
  app.post("/api/contact", contactHandler);
  app.get("/api/contact-messages", messagesHandler);
  
  // Configuration endpoints
  app.get("/api/yandex-maps-key", apiKeyHandler);
  
  // SEO endpoints
  app.post("/api/indexnow", indexNowHandler);
  app.post("/api/sitemap/update", sitemapHandler);
  
  return createServer(app);
}
```

**Benefits**:
- Centralized route management
- Clear API structure
- Easy to maintain
- Type-safe handlers

---

### Middleware Stack

```typescript
// Request Processing Pipeline
app.use(express.json());                  // 1. Body parsing
app.use(express.urlencoded({ extended: false })); // 2. URL encoding
app.use(loggingMiddleware);               // 3. Request logging
app.use(validationMiddleware);            // 4. Route validation (404)
app.use(viteMiddleware);                  // 5. Vite dev server (dev only)
app.use(express.static());                // 6. Static file serving (prod)
app.use(errorHandler);                    // 7. Error handling
```

---

### Service Layer Pattern

```typescript
// email.ts - Email service
export async function sendContactEmail(data: ContactData): Promise<boolean> {
  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error('Email error:', error);
    return false;
  }
}

// telegram-bot.ts - Telegram service
export async function sendTelegramNotification(data: ContactData): Promise<boolean> {
  try {
    await fetch(telegramUrl, { method: 'POST', body: message });
    return true;
  } catch (error) {
    return false;
  }
}
```

**Pattern**: Service functions return `Promise<boolean>` for success/failure
**Benefit**: Multiple services can be attempted in parallel

---

### Data Access Layer

```typescript
// storage.ts - Database abstraction
export const storage = {
  async createContactMessage(data: InsertContactMessage): Promise<ContactMessage> {
    const [message] = await db
      .insert(contactMessages)
      .values(data)
      .returning();
    return message;
  },
  
  async getContactMessages(): Promise<ContactMessage[]> {
    return await db
      .select()
      .from(contactMessages)
      .orderBy(desc(contactMessages.createdAt));
  }
};
```

**Benefits**:
- Abstracts database operations
- Easy to test
- Easy to swap database
- Type-safe queries

---

## Database Architecture

### Schema Design

```sql
-- Users table (admin authentication)
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL -- hashed with bcrypt
);

-- Contact messages table
CREATE TABLE contact_messages (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW() NOT NULL
);

-- Indexes
CREATE INDEX idx_contact_messages_created_at 
  ON contact_messages(created_at DESC);
```

### ORM Architecture (Drizzle)

```typescript
// shared/schema.ts - Type-safe schema
export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  phone: text("phone").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Automatic TypeScript types
export type ContactMessage = typeof contactMessages.$inferSelect;
export type InsertContactMessage = typeof contactMessages.$inferInsert;
```

**Benefits**:
- Type inference from schema
- SQL-like syntax
- Edge runtime compatible
- Migration generation

---

### Migration Strategy

```bash
# Generate migration from schema changes
npm run db:push

# Drizzle Kit automatically:
# 1. Compares schema with database
# 2. Generates SQL migration
# 3. Applies changes
```

**Migration Files**: `migrations/*.sql`

---

## External Integrations

### Integration Architecture

```
┌─────────────────────────────────────────────┐
│         Application Core                    │
└─────────────┬───────────────────────────────┘
              │
    ┌─────────┼─────────────┐
    │         │             │
┌───▼───┐ ┌───▼───┐    ┌───▼────┐
│ Maps  │ │Booking│    │Analytics│
│Yandex │ │HomeRes│    │ Yandex  │
└───────┘ └───────┘    └─────────┘
    │         │             │
┌───▼───┐ ┌───▼───┐    ┌───▼────┐
│Reviews│ │ Email │    │IndexNow│
│Yandex │ │ SMTP  │    │Yandex  │
└───────┘ └───────┘    └─────────┘
```

### Integration Patterns

#### **1. Widget Embed** (HomeReserve)
```html
<iframe src="https://homereserve.com/widget/..." />
```
- **Type**: Third-party widget
- **Communication**: External redirect
- **Data flow**: One-way (to external)

---

#### **2. API Integration** (Yandex Maps)
```javascript
// Client-side API call
const apiKey = await fetch('/api/yandex-maps-key');
ymaps.ready(() => {
  new ymaps.Map('map', { /* config */ });
});
```
- **Type**: Client-side SDK
- **Authentication**: API key
- **Data flow**: Client ↔ Yandex

---

#### **3. Script Tag** (Yandex Metrika)
```html
<script src="https://mc.yandex.ru/metrika/tag.js" />
```
- **Type**: Analytics snippet
- **Communication**: Automatic tracking
- **Data flow**: Client → Yandex

---

#### **4. RESTful API** (Email Services)
```typescript
await fetch('https://api.emailservice.com/send', {
  method: 'POST',
  body: JSON.stringify(emailData)
});
```
- **Type**: HTTP API
- **Authentication**: API tokens
- **Data flow**: Server → Service

---

### Fallback Strategy

**Multi-Channel Notifications**:

```typescript
// Parallel attempts with Promise.all
const [emailSent, telegramSent, emailjsSent, ...] = await Promise.all([
  sendContactEmail(data),
  sendTelegramNotification(data),
  sendEmailJSMessage(data),
  sendFormspreeMessage(data),
  // ... more fallbacks
]);

// Success if ANY method succeeds
const success = [emailSent, telegramSent, ...].some(result => result);
```

**Benefits**:
- High reliability
- No single point of failure
- Redundancy for critical operations

---

## Deployment Architecture

### Production Deployment (Render.com)

```
┌─────────────────────────────────────────────┐
│         Render.com Platform                 │
│  ┌──────────────────────────────────────┐   │
│  │  Web Service (Node.js)               │   │
│  │  - Express Server                    │   │
│  │  - Static File Serving               │   │
│  │  - API Endpoints                     │   │
│  │  - Health Checks                     │   │
│  └────────────┬─────────────────────────┘   │
│               │                              │
│  ┌────────────▼─────────────────────────┐   │
│  │  Environment Variables               │   │
│  │  - DATABASE_URL                      │   │
│  │  - EMAIL_USER, EMAIL_PASS            │   │
│  │  - TELEGRAM_BOT_TOKEN                │   │
│  │  - YANDEX_MAPS_API_KEY               │   │
│  └──────────────────────────────────────┘   │
└─────────────────┬───────────────────────────┘
                  │
┌─────────────────▼───────────────────────────┐
│        External Database (Neon)             │
│  - PostgreSQL 15                            │
│  - Serverless                               │
│  - Connection Pooling                       │
└─────────────────────────────────────────────┘
```

### Build Process

```bash
# 1. Install dependencies
npm install

# 2. Build frontend (Vite)
vite build
# Output: dist/public/

# 3. Build backend (esbuild)
esbuild server/index.ts --bundle --platform=node --outdir=dist

# 4. Production start
NODE_ENV=production node dist/index.js
```

### Deployment Pipeline

```
Git Push (main branch)
    ↓
Render Webhook
    ↓
Clone Repository
    ↓
npm install
    ↓
npm run build
    ↓
Health Check
    ↓
Traffic Switch (Blue-Green)
    ↓
Live: https://lavillapine.onrender.com
```

**Zero-Downtime Deployment**: Render uses blue-green deployment

---

### Development Environment

```
Local Machine
    ↓
npm run dev
    ↓
tsx server/index.ts (Watch Mode)
    ↓
┌─────────────────────────────────┐
│  Vite Dev Server (Port 5173)   │
│  - HMR (Hot Module Replacement) │
│  - React Fast Refresh           │
└────────────┬────────────────────┘
             │
┌────────────▼────────────────────┐
│  Express Server (Port 5000)    │
│  - API Proxy                   │
│  - Static Files (dev)          │
└─────────────────────────────────┘
```

**Development URL**: `http://localhost:5000`

---

## Security Architecture

### Security Layers

```
┌─────────────────────────────────────────┐
│  1. Transport Security (HTTPS)          │
│     - TLS 1.3                           │
│     - Certificate management (Render)   │
└─────────────┬───────────────────────────┘
              │
┌─────────────▼───────────────────────────┐
│  2. Input Validation                    │
│     - Zod schema validation             │
│     - Server-side validation            │
│     - Type checking (TypeScript)        │
└─────────────┬───────────────────────────┘
              │
┌─────────────▼───────────────────────────┐
│  3. Database Security                   │
│     - Parameterized queries (ORM)       │
│     - SQL injection prevention          │
│     - Connection encryption             │
└─────────────┬───────────────────────────┘
              │
┌─────────────▼───────────────────────────┐
│  4. Authentication (Future)             │
│     - Password hashing (bcrypt)         │
│     - Session management                │
│     - CSRF protection                   │
└─────────────────────────────────────────┘
```

### Environment Variable Security

```typescript
// .env file (NOT committed to Git)
DATABASE_URL=postgresql://...
EMAIL_USER=secret@email.com
EMAIL_PASS=app_password
TELEGRAM_BOT_TOKEN=secret_token

// Accessed server-side only
const dbUrl = process.env.DATABASE_URL;

// NEVER exposed to client
```

**Best Practices**:
- Environment variables for secrets
- `.gitignore` includes `.env`
- Different credentials per environment
- Rotate secrets regularly

---

### API Security

#### **Rate Limiting** (Future)
```typescript
// Planned implementation
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
});

app.use('/api/', limiter);
```

#### **CORS Configuration**
```typescript
// Currently: Same-origin only
// Future: Explicit CORS headers
app.use(cors({
  origin: 'https://lavillapine.onrender.com',
  credentials: true,
}));
```

---

## Performance Architecture

### Optimization Strategies

#### **1. Code Splitting**
```javascript
// Vite automatic code splitting
import { lazy, Suspense } from 'react';

const Gallery = lazy(() => import('./pages/gallery'));

<Suspense fallback={<Skeleton />}>
  <Gallery />
</Suspense>
```

**Result**:
- Main bundle: ~80KB gzipped
- Route chunks: 10-30KB each
- Vendor chunk: ~120KB (React, libraries)

---

#### **2. Image Optimization**
```typescript
// WebP format (30% smaller than JPEG)
const images = [
  '/images/gallery/1.webp',
  '/images/gallery/2.webp',
];

// Lazy loading with Intersection Observer
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      loadImage(entry.target);
    }
  });
});
```

**Strategies**:
- WebP format
- Lazy loading
- Progressive loading
- Responsive images

---

#### **3. Caching Strategy**

```
Browser Cache
    ├── Static Assets (1 year)
    │   - images/*.webp
    │   - fonts/*.ttf
    │   - assets/*.js (hashed)
    ├── HTML (no-cache)
    │   - index.html
    └── API Responses (5 min)
        - TanStack Query cache
```

**Cache Headers** (Render automatic):
```
Cache-Control: public, max-age=31536000, immutable  # Static assets
Cache-Control: no-cache  # HTML
```

---

#### **4. Database Query Optimization**

```sql
-- Index on frequently queried column
CREATE INDEX idx_contact_messages_created_at 
  ON contact_messages(created_at DESC);

-- Query optimization
SELECT * FROM contact_messages 
ORDER BY created_at DESC 
LIMIT 50;  -- Pagination
```

**Connection Pooling**: Neon handles automatically

---

### Performance Metrics

**Target Metrics** (Lighthouse):
- **Performance**: >90
- **Accessibility**: >95
- **Best Practices**: >95
- **SEO**: >95

**Current Results**:
- First Contentful Paint: <1.5s
- Largest Contentful Paint: <2.5s
- Time to Interactive: <3.0s
- Cumulative Layout Shift: <0.1

---

## Scalability Considerations

### Current Architecture Scaling

**Vertical Scaling** (Render):
- Increase server resources (CPU, RAM)
- Upgrade database plan
- Simple configuration changes

**Limitations**:
- Single server instance
- Monolithic deployment
- Database connection limits

---

### Future Scalability Path

#### **Phase 1: Horizontal Scaling**
```
Load Balancer
    ├── App Instance 1
    ├── App Instance 2
    └── App Instance 3
         ↓
  Shared Database (Neon)
```

**Changes Needed**:
- Stateless sessions (Redis)
- Database connection pooling
- Shared file storage (S3)

---

#### **Phase 2: Service Decomposition**
```
API Gateway
    ├── Contact Service
    ├── Booking Service
    ├── Email Service
    └── Search Service
         ↓
  Database per Service
```

**Benefits**:
- Independent scaling
- Technology diversity
- Fault isolation
- Team autonomy

---

#### **Phase 3: Microservices + CDN**
```
CDN (Cloudflare)
    ├── Static Assets
    └── Edge Caching
         ↓
API Gateway
    ├── Microservice 1
    ├── Microservice 2
    └── Microservice 3
         ↓
Database Cluster
```

**Advanced Features**:
- Global CDN
- Edge computing
- Auto-scaling
- Multi-region deployment

---

## Monitoring & Observability

### Current Monitoring

```
Server Logs
    ├── Request logs (console)
    ├── Error logs (console)
    └── API response times

Yandex Metrika
    ├── Page views
    ├── User sessions
    ├── Goal conversions
    └── User behavior
```

### Future Monitoring Stack

```
Application Monitoring
    ├── Error Tracking (Sentry)
    ├── Performance Monitoring (New Relic)
    └── Uptime Monitoring (UptimeRobot)

Infrastructure Monitoring
    ├── Server Metrics (Render Dashboard)
    ├── Database Metrics (Neon Console)
    └── CDN Analytics (Cloudflare)

User Analytics
    ├── Yandex Metrika
    ├── Google Analytics
    └── Custom Events
```

---

## Architectural Decisions

### Key Design Choices

#### **1. Monolithic Architecture**
**Decision**: Single application with frontend + backend
**Rationale**: 
- Simpler deployment
- Faster development
- Lower operational complexity
- Sufficient for current scale

**Trade-offs**:
- Harder to scale horizontally
- Tighter coupling
- Language lock-in (TypeScript)

---

#### **2. React SPA**
**Decision**: Single-page application with client-side routing
**Rationale**:
- Rich interactivity
- Smooth transitions
- Client-side state management
- Modern UX

**Trade-offs**:
- Initial load time
- SEO considerations (handled with meta tags)
- JavaScript required

---

#### **3. PostgreSQL + Drizzle ORM**
**Decision**: Relational database with type-safe ORM
**Rationale**:
- ACID compliance
- Complex queries support
- Type safety
- Edge runtime compatibility

**Trade-offs**:
- More complex than NoSQL
- Schema migrations required
- Vertical scaling limits

---

#### **4. Multi-Channel Notifications**
**Decision**: Parallel notification attempts with multiple services
**Rationale**:
- High reliability
- No single point of failure
- Redundancy for critical path

**Trade-offs**:
- Increased complexity
- Multiple service dependencies
- Potential duplicate notifications

---

## System Boundaries

### What the System Handles

✅ **Frontend**:
- UI rendering
- User interactions
- Client-side routing
- State management
- Form validation

✅ **Backend**:
- API endpoints
- Business logic
- Database operations
- Email sending
- SEO tools

✅ **Data**:
- Contact messages
- User authentication (future)
- Session management (future)

---

### What External Services Handle

⚡ **Booking**: HomeReserve
⚡ **Maps**: Yandex Maps
⚡ **Analytics**: Yandex Metrika
⚡ **Reviews**: Yandex Reviews
⚡ **Search Indexing**: Yandex, Bing (via IndexNow)
⚡ **Email Delivery**: SMTP, EmailJS, Formspree, etc.
⚡ **Notifications**: Telegram

---

## Summary

La Villa Pine's architecture is designed for:

✅ **Simplicity**: Monolithic structure for easy development and deployment
✅ **Performance**: Code splitting, lazy loading, optimized builds
✅ **Reliability**: Multi-channel notifications, fallback strategies
✅ **Security**: Input validation, SQL injection prevention, environment variables
✅ **Scalability**: Clear upgrade path from monolith → microservices
✅ **Maintainability**: Type safety, clear separation of concerns, modular design

**Architecture Type**: **Monolithic Full-Stack Application**
**Deployment**: **Platform-as-a-Service (Render.com)**
**Database**: **Serverless PostgreSQL (Neon)**
**Frontend**: **Single-Page Application (React)**
**Backend**: **RESTful API (Express.js)**

The architecture supports the current luxury booking experience while providing a clear path for future growth and scaling.
