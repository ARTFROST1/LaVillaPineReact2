# La Villa Pine - AI Agent Instructions

## Project Overview
**La Villa Pine** is a luxury guest house booking platform built as a monolithic full-stack React/Express.js application. It features a modern SPA frontend with comprehensive SEO, Russian-language content, Yandex services integration, and multi-channel contact forms.

## Architecture Essentials

### Monolithic Structure with Clear Separation
- **Frontend**: React 18 SPA in `/client/src` built with Vite
- **Backend**: Express.js server in `/server` 
- **Shared**: Type-safe schemas in `/shared/schema.ts` using Drizzle + Zod
- **Build Output**: Frontend → `dist/public`, Backend → `dist/index.js`

**Key Insight**: This is NOT a Next.js app - it's a custom monolith where Express serves the built React app AND provides REST APIs. The server handles both API routes (`/api/*`) and serves static frontend files.

### Critical Path Aliases
```typescript
"@" → "client/src"              // Frontend code
"@shared" → "shared"            // Shared schemas/types  
"@assets" → "attached_assets"   // Static assets
```

Always use these aliases in imports - never use relative paths across these boundaries.

## Development Workflow

### Running the Application
```bash
# Development (hot reload both frontend + backend)
npm run dev

# Production build + start
npm run build
npm start

# Type checking only (no build)
npm run check
```

**Important**: `npm run dev` uses `tsx` to run TypeScript directly with hot reload. In production, we compile with esbuild.

### Database Workflow
Database uses **in-memory storage** (`MemStorage` class) by default:
- No external DB needed for development
- Data persists only during server runtime
- Contact messages and users stored in-memory

To add Drizzle ORM with real PostgreSQL:
```bash
npm run db:push  # Push schema changes to Neon DB
```

## Code Patterns & Conventions

### Component Structure (React)
- **Pages**: `/client/src/pages/*.tsx` - route-level components
- **UI Components**: `/client/src/components/ui/*.tsx` - shadcn/ui based, highly reusable
- **Layout**: `/client/src/components/layout/*.tsx` - Header/Footer wrappers
- **Contexts**: `/client/src/contexts/*.tsx` - React Context API for global state

**Pattern**: Pages import from `@/components/ui`, never the reverse. UI components are framework-agnostic where possible.

### Routing Pattern (Wouter)
```tsx
// In App.tsx
<Switch>
  <Route path="/" component={Home} />
  <Route path="/about" component={About} />
  // ... more routes
</Switch>
```

**Not React Router** - We use Wouter (lightweight, hook-based). Use `import { Link } from "wouter"` for navigation.

### Styling Pattern (Tailwind + cn)
```tsx
import { cn } from "@/lib/utils";

<div className={cn(
  "base-classes",
  condition && "conditional-classes",
  className  // Always accept className prop for composition
)} />
```

**Pattern**: All UI components accept optional `className` prop. Use `cn()` utility (clsx + tailwind-merge) for conditional classes.

### Data Fetching Pattern (TanStack Query)
```tsx
import { useQuery } from "@tanstack/react-query";

const { data, isLoading, error } = useQuery({
  queryKey: ['contact-messages'],
  queryFn: async () => {
    const res = await fetch('/api/contact-messages');
    return res.json();
  }
});
```

**No Redux/Zustand** - State management is TanStack Query for server state + React Context for UI state (scroll position, etc).

### Form Validation Pattern (React Hook Form + Zod)
```tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema } from "@shared/schema";

const form = useForm({
  resolver: zodResolver(insertContactMessageSchema)
});
```

**Pattern**: Schemas defined in `@shared/schema.ts` using Drizzle's `createInsertSchema()`. Reused on frontend and backend for type safety.

### API Routes Pattern (Express)
```typescript
// In server/routes.ts
app.post("/api/contact", async (req, res) => {
  const validatedData = insertContactMessageSchema.parse(req.body);
  const message = await storage.createContactMessage(validatedData);
  res.json({ success: true, id: message.id });
});
```

**Pattern**: All API routes start with `/api/`. Validation uses Zod schemas from `@shared/schema.ts`. Multiple notification channels attempted in parallel (Email, Telegram, EmailJS, etc).

## External Integrations

### Yandex Ecosystem (Primary Analytics/Maps)
- **Yandex.Metrika**: Analytics counter ID `103308092` - configured in `/client/src/lib/yandex-metrika.ts`
- **Goal Tracking**: Use `reachGoal()` from yandex-metrika lib for conversion tracking
- **Yandex Maps**: Component at `/client/src/components/ui/yandex-map.tsx`
- **Yandex Reviews**: Widget at `/client/src/components/ui/yandex-reviews.tsx`

**Critical**: When tracking user actions (phone clicks, form submits, messenger opens), ALWAYS call `reachGoal()` with appropriate goal name from `GOALS` constant.

### Multi-Channel Contact Form Strategy
Contact form in `/server/routes.ts` attempts to send notifications through **7 parallel channels**:
1. SMTP (Nodemailer)
2. Telegram Bot
3. EmailJS
4. Formspree
5. FormSubmit
6. Submit Form webhook
7. Netlify Forms

**Why**: Redundancy ensures at least one method succeeds. Results aggregated and reported to user.

### HomeReserve Booking Widget
```tsx
// Embedded in /client/src/pages/booking.tsx
<iframe src="https://homereserve.ru/calendars/8191" />
```

External booking system - NOT built by us. Users book directly through their platform.

## SEO & Meta Management

### Dynamic SEO Pattern
```tsx
import { PageMeta } from "@/components/seo/PageMeta";

// In page component:
<PageMeta 
  title="Баня с бассейном в Московской области"
  description="Роскошная вилла..."
  keywords="баня, бассейн, аренда"
/>
```

**Pattern**: Every page MUST include `<PageMeta>` component. It handles:
- Open Graph tags
- Twitter Cards  
- Canonical URLs
- Structured data (JSON-LD)

Constants centralized in `/client/src/lib/seo-constants.ts`.

### Sitemap & IndexNow
- **Sitemap**: Auto-generated at `/public/sitemap.xml` via `/server/sitemap-generator.ts`
- **IndexNow**: Instant indexing for Yandex/Bing via `/server/indexnow.ts`
- **API Endpoints**: 
  - `POST /api/sitemap/update` - Regenerate sitemap
  - `POST /api/indexnow/notify` - Notify search engines of updates

**When to use**: After adding new pages or updating content, trigger sitemap update + IndexNow notification.

## Image Management

### Image Organization
```
/public/images/
├── carousel/          # Hero carousel (6 WebP images)
├── amenities/         # Feature icons (16 images)
├── gallery/           # Main photo gallery (200+ images)
│   ├── exterior/
│   ├── interior/
│   ├── pool/
│   └── sauna/
├── og/               # Open Graph preview images
└── icons/            # Favicon, app icons
```

**Critical**: All images MUST be WebP format for performance. Original formats documented in `/public/images/README.md`.

### Image Loading Pattern
```tsx
import { LazyImage } from "@/components/ui/lazy-image";

<LazyImage 
  src="/images/gallery/pool/image.webp"
  alt="Heated pool"
  className="w-full"
/>
```

Use `LazyImage` component (not raw `<img>`) for automatic lazy loading + placeholder.

## Deployment

### Render.com Configuration
Project auto-deploys from GitHub via `/render.yaml`:
- Build: `npm run build`
- Start: `npm start`
- Environment: `NODE_ENV=production`

**Required Env Vars**:
```bash
NODE_ENV=production
EMAIL_USER=your-smtp-user
EMAIL_PASS=your-smtp-password
TELEGRAM_BOT_TOKEN=your-bot-token
TELEGRAM_CHAT_ID=your-chat-id
```

### Static File Serving
```typescript
// In server/index.ts
app.use(express.static('dist/public'));
app.use('/images', express.static('public/images'));
```

**Pattern**: Express serves built frontend from `dist/public` AND original images from `public/images`. This is why images work without copying to dist.

## Testing & Debugging

### Common Issues
1. **Images not loading**: Check `/public/images/README.md` - some images may be placeholders
2. **Forms not submitting**: Check `.env` for SMTP/Telegram credentials
3. **Build fails**: Run `npm run check` first to catch TypeScript errors
4. **Routing 404s**: Remember Wouter uses different API than React Router

### Development Tips
- Hot reload watches both `/client` and `/server` directories
- Database changes require server restart (in-memory storage)
- Yandex.Metrika only loads in production (`NODE_ENV=production`)
- Use `console.log` freely - no Winston/Pino logging configured

## Documentation

Comprehensive docs in `/docs/`:
- `architecture.md` - System design & data flows
- `tech_stack.md` - Full technology reference with links
- `features.md` - Feature inventory with status
- `project_structure.md` - File organization guide
- `DEPLOYMENT_GUIDE.md` - Production deployment steps

**Always check these first** before making architectural changes.

## Anti-Patterns to Avoid

❌ Don't add React Router - we use Wouter  
❌ Don't add Redux/MobX - use TanStack Query + Context  
❌ Don't use raw `<img>` tags - use `LazyImage` component  
❌ Don't hardcode image paths - use constants from `@/lib/constants.ts`  
❌ Don't skip Zod validation on API routes  
❌ Don't forget to call `reachGoal()` for tracked user actions  
❌ Don't use relative imports across major directories - use aliases  
❌ Don't add i18n library - all content is Russian-only  

## Quick Reference

**Add new page**:
1. Create component in `/client/src/pages/`
2. Add route in `/client/src/App.tsx`
3. Add breadcrumb config if needed
4. Add to sitemap generator

**Add new API endpoint**:
1. Add route in `/server/routes.ts`
2. Add schema validation in `@shared/schema.ts` if needed
3. Update storage interface if database access needed

**Add new UI component**:
1. Create in `/client/src/components/ui/`
2. Follow shadcn/ui patterns (accept `className` prop)
3. Use `cn()` utility for class merging

**Update dependencies**:
```bash
npm install <package>        # Add to dependencies
npm install -D <package>     # Add to devDependencies
```

No Yarn/PNPM - use npm exclusively (lockfile is `package-lock.json`).
