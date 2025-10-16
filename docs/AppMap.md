# La Villa Pine - Application Map

## Overview
La Villa Pine is a luxury guest house booking platform featuring two premium loft-style accommodations with saunas, heated pools, and forest locations. The application provides a seamless booking experience, contact management, and comprehensive information about the facilities.

---

## Application Architecture

### High-Level Architecture
```
┌─────────────────────────────────────────────────────────────────┐
│                        Client (React SPA)                        │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────────┐  │
│  │   Pages      │  │  Components  │  │   State Management   │  │
│  │  - Home      │  │  - Header    │  │  - TanStack Query    │  │
│  │  - Gallery   │  │  - Footer    │  │  - React Contexts    │  │
│  │  - Contacts  │  │  - Forms     │  │  - React Hook Form   │  │
│  │  - Booking   │  │  - UI Lib    │  │                      │  │
│  └──────────────┘  └──────────────┘  └──────────────────────┘  │
└──────────────────────────────┬──────────────────────────────────┘
                               │ HTTP/REST API
┌──────────────────────────────┴──────────────────────────────────┐
│                    Server (Express.js)                           │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────────┐  │
│  │   Routes     │  │  Services    │  │   External APIs      │  │
│  │  - Contact   │  │  - Email     │  │  - Yandex Maps       │  │
│  │  - IndexNow  │  │  - Telegram  │  │  - HomeReserve       │  │
│  │  - Sitemap   │  │  - Storage   │  │  - Email Services    │  │
│  └──────────────┘  └──────────────┘  └──────────────────────┘  │
└──────────────────────────────┬──────────────────────────────────┘
                               │
┌──────────────────────────────┴──────────────────────────────────┐
│              Database (PostgreSQL - Neon)                        │
│  ┌──────────────┐  ┌──────────────┐                             │
│  │    Users     │  │   Messages   │                             │
│  └──────────────┘  └──────────────┘                             │
└─────────────────────────────────────────────────────────────────┘
```

---

## Application Flow

### 1. User Journey Flow

#### **Home Page Flow**
```
User Visit → Home Page
    ↓
┌───────────────────────────────┐
│   Hero Carousel (6 images)    │
│   - Automatic rotation        │
│   - Touch/swipe support       │
└───────────────────────────────┘
    ↓
┌───────────────────────────────┐
│   Main Content                │
│   - Property description      │
│   - Amenities showcase        │
│   - Location highlights       │
└───────────────────────────────┘
    ↓
User Action → Navigate to:
    - Gallery (view more photos)
    - Booking (make reservation)
    - Contacts (send inquiry)
```

#### **Booking Flow**
```
User → Booking Page
    ↓
┌───────────────────────────────┐
│  HomeReserve Widget Loaded    │
│  - Date selection             │
│  - Guest information          │
│  - Payment processing         │
└───────────────────────────────┘
    ↓
External Redirect → HomeReserve
    ↓
Booking Confirmation
```

#### **Contact Flow**
```
User → Contact Page
    ↓
┌───────────────────────────────┐
│   Contact Form                │
│   - Name (required)           │
│   - Phone (required)          │
│   - Message (required)        │
└───────────────────────────────┘
    ↓
Form Validation (Zod)
    ↓
Submit → API POST /api/contact
    ↓
┌───────────────────────────────┐
│   Server Processing           │
│   1. Save to Database         │
│   2. Send Notifications:      │
│      - Email (SMTP)           │
│      - Telegram Bot           │
│      - Fallback services      │
└───────────────────────────────┘
    ↓
Success Toast → User Notification
```

#### **Gallery Flow**
```
User → Gallery Page
    ↓
┌───────────────────────────────┐
│   Image Grid Display          │
│   - Lazy loading              │
│   - Responsive layout         │
│   - 40+ images                │
└───────────────────────────────┘
    ↓
User Click → Image
    ↓
┌───────────────────────────────┐
│   Lightbox Modal              │
│   - Full-screen view          │
│   - Navigation controls       │
│   - Keyboard support          │
│   - Close on backdrop click   │
└───────────────────────────────┘
```

---

## Data Flow Architecture

### Request-Response Cycle

#### **Frontend → Backend → Database**
```
[React Component]
    ↓ (user action)
[React Hook Form] → Validation (Zod)
    ↓ (valid data)
[TanStack Query] → HTTP Request
    ↓
[Express Routes] → Request Handler
    ↓
[Business Logic] → Data Processing
    ↓
[Drizzle ORM] → SQL Query
    ↓
[PostgreSQL] → Data Persistence
    ↓
[Response] → JSON
    ↓
[React Query Cache] → UI Update
    ↓
[Component Re-render] → User sees result
```

### State Management Flow

#### **Global State**
```
App.tsx
    ↓
QueryClientProvider (TanStack Query)
    ├── Server State Management
    │   ├── Contact messages
    │   ├── API keys
    │   └── Configuration
    ↓
ScrollProvider (Context)
    ├── Scroll position tracking
    └── Smooth scroll behavior
    ↓
TooltipProvider (Radix UI)
    └── Tooltip state management
```

#### **Local Component State**
- **Forms**: React Hook Form + Zod validation
- **UI State**: useState, useEffect hooks
- **Side Effects**: useQuery, useMutation (TanStack Query)

---

## Routing Architecture

### Client-Side Routing (Wouter)

```javascript
Routes Map:
├── / (Home)
├── /about (About Us)
├── /gallery (Photo Gallery)
├── /contacts (Contact Form)
├── /booking (Booking Widget)
├── /rules (House Rules)
├── /admin (Admin Panel)
├── /privacy-policy (Privacy Policy)
├── /consent (User Consent)
├── /legal-documents (Legal Info)
└── /* (404 Not Found)
```

### Server-Side Route Handling

```javascript
Valid Routes:
- API routes: /api/*
- Static files: /images/*, /fonts/*
- Vite dev: /@*, /src/*
- Client routes: SPA routes above

404 Handling:
- Invalid routes return JSON error
- Valid SPA routes serve index.html
```

---

## Component Hierarchy

### Page Components
```
App
└── Router
    ├── Header
    │   ├── Logo
    │   ├── Navigation
    │   └── Mobile Menu
    ├── Main Content
    │   └── [Dynamic Page Component]
    │       ├── Home
    │       │   ├── CarouselHero
    │       │   ├── StackedAmenities
    │       │   └── CTA Buttons
    │       ├── Gallery
    │       │   └── ImageGallery
    │       ├── Contacts
    │       │   ├── ContactForm
    │       │   └── YandexMap
    │       ├── Booking
    │       │   └── HomeReserve Widget
    │       └── About
    │           └── Content sections
    ├── Footer
    │   ├── Social Links
    │   ├── Legal Links
    │   └── Copyright
    ├── Toaster (Global notifications)
    ├── CookieConsent
    └── YandexReviews (Fixed widget)
```

### Shared Components
```
UI Components (shadcn/ui + Radix UI)
├── Forms
│   ├── Input
│   ├── Textarea
│   ├── Button
│   ├── Select
│   └── Checkbox
├── Layout
│   ├── Card
│   ├── Dialog
│   ├── Sheet
│   └── Tabs
├── Feedback
│   ├── Toast
│   ├── Alert
│   └── Skeleton
└── Custom
    ├── CarouselHero
    ├── ImageGallery
    ├── ContactForm
    ├── YandexMap
    └── YandexReviews
```

---

## External Integrations

### Third-Party Services

#### **1. HomeReserve (Booking)**
```
Integration Type: Widget embed
Purpose: Booking management
Data Flow: External redirect
```

#### **2. Yandex Maps**
```
Integration Type: API
Purpose: Location display
Data Flow: Client-side API calls
API Key: Environment variable
```

#### **3. Yandex Metrika**
```
Integration Type: Script tag
Purpose: Analytics tracking
Data Flow: Client-side events
```

#### **4. Yandex Reviews**
```
Integration Type: Widget
Purpose: Social proof
Display: Fixed bottom-right widget
```

#### **5. Email Services**
```
Primary: SMTP (Nodemailer)
Fallbacks:
├── Telegram Bot API
├── EmailJS
├── Formspree
├── FormSubmit
└── Netlify Forms
```

#### **6. SEO Services**
```
IndexNow Protocol:
├── Yandex
└── Bing

Sitemap: Auto-generated XML
Robots.txt: Static file
```

---

## Image Management

### Image Structure
```
/public/images/
├── carousel/        (6 images - hero slider)
├── gallery/         (40 images - main gallery)
├── amenities/       (5 images - features)
├── rooms/           (placeholder directory)
└── icons/           (logos, favicons)
```

### Image Loading Strategy
```
1. Dynamic Import System
   ├── Check real images exist
   ├── Fallback to Unsplash
   └── Lazy loading

2. Optimization
   ├── WebP format
   ├── Responsive sizes
   └── Progressive loading

3. Performance
   ├── Lazy loading (Intersection Observer)
   ├── Blur placeholders
   └── CDN-ready
```

---

## SEO Architecture

### Meta Tags Management
```
PageMeta Component
├── Title (dynamic per page)
├── Description (unique per page)
├── Keywords (relevant per page)
├── Open Graph tags
│   ├── og:title
│   ├── og:description
│   ├── og:image
│   ├── og:url
│   └── og:type
├── Twitter Card tags
└── Canonical URLs
```

### Search Engine Optimization
```
Static SEO Files:
├── robots.txt
├── sitemap.xml
└── indexnow-key.txt

Dynamic SEO:
├── Meta tag management
├── Structured data (JSON-LD)
└── IndexNow notifications

Accessibility:
├── Semantic HTML
├── ARIA labels
└── Alt text for images
```

---

## Security & Performance

### Security Measures
```
1. Input Validation
   ├── Zod schemas
   ├── Server-side validation
   └── SQL injection prevention (ORM)

2. Environment Variables
   ├── API keys
   ├── Database credentials
   └── Service tokens

3. CORS & Headers
   ├── Proper CORS setup
   └── Security headers

4. Route Protection
   ├── Valid route checking
   └── 404 handling
```

### Performance Optimizations
```
1. Code Splitting
   ├── Route-based splitting
   └── Component lazy loading

2. Asset Optimization
   ├── Image lazy loading
   ├── WebP format
   └── Font optimization

3. Caching Strategy
   ├── React Query cache
   ├── Browser cache
   └── Service worker (PWA ready)

4. Build Optimization
   ├── Vite build tool
   ├── Tree shaking
   └── Minification
```

---

## Deployment Flow

### Development
```
npm run dev
    ↓
tsx server/index.ts
    ↓
Vite Dev Server (HMR)
    ↓
Express Server (API)
    ↓
Local: http://localhost:5000
```

### Production Build
```
npm run build
    ↓
1. Vite Build
   ├── Client code → dist/public/
   └── Code splitting & optimization
    ↓
2. esbuild
   ├── Server code → dist/
   └── Bundle Express app
    ↓
npm start
    ↓
Node.js Production Server
    ↓
Serve static files + API
```

### Deployment (Render)
```
GitHub Push
    ↓
Render Webhook
    ↓
Build Command: npm run build
    ↓
Start Command: npm start
    ↓
Environment Variables
    ├── DATABASE_URL
    ├── EMAIL credentials
    ├── TELEGRAM tokens
    └── API keys
    ↓
Live: https://lavillapine.onrender.com
```

---

## Error Handling Flow

### Frontend Error Handling
```
User Action
    ↓
Form Validation Error
    ├── Display inline errors
    └── Prevent submission
    ↓
API Request Error
    ├── Network error → Toast notification
    ├── Validation error → Form errors
    └── Server error → Error toast
    ↓
Fallback UI
    └── Error boundaries (React)
```

### Backend Error Handling
```
Request Received
    ↓
Validation (Zod)
    ├── Invalid → 400 Bad Request
    └── Valid → Continue
    ↓
Business Logic
    ├── Error → 500 Internal Error
    └── Success → 200 OK
    ↓
Database Operation
    ├── Error → Logged & 500
    └── Success → Response sent
    ↓
Error Middleware
    └── Catch all uncaught errors
```

---

## Mobile Responsiveness

### Breakpoint Strategy
```
Tailwind CSS Breakpoints:
├── sm: 640px   (small tablets)
├── md: 768px   (tablets)
├── lg: 1024px  (laptops)
├── xl: 1280px  (desktops)
└── 2xl: 1536px (large screens)

Mobile-First Approach:
- Base styles for mobile
- Progressive enhancement
- Touch-optimized controls
```

### Mobile Features
```
1. Touch Gestures
   ├── Carousel swipe
   ├── Gallery pinch/zoom
   └── Drawer navigation

2. Mobile Menu
   ├── Hamburger icon
   ├── Slide-out drawer
   └── Touch-friendly buttons

3. Mobile Forms
   ├── Large input fields
   ├── Appropriate keyboards
   └── Easy submission
```

---

## Analytics & Monitoring

### Yandex Metrika Integration
```
Tracking:
├── Page views
├── User sessions
├── Goal conversions
│   ├── Contact form submissions
│   ├── Booking clicks
│   └── Gallery interactions
├── User behavior
│   ├── Scroll depth
│   ├── Click tracking
│   └── Time on page
└── Traffic sources
```

### Logging
```
Server Logs:
├── API requests
├── Response times
├── Error tracking
└── Email notifications

Client Logs:
└── Console errors (dev only)
```

---

## Future Enhancements

### Planned Features
- [ ] Real-time booking calendar
- [ ] Multi-language support (English)
- [ ] Virtual tours (360° images)
- [ ] Guest reviews system
- [ ] Payment integration
- [ ] Email templates
- [ ] Admin dashboard improvements
- [ ] Progressive Web App (PWA)
- [ ] Push notifications

---

## Summary

**La Villa Pine Application Map** provides a comprehensive overview of:
- System architecture and component relationships
- Data flow and state management
- User journeys and interaction patterns
- External integrations and APIs
- Performance and security considerations
- Deployment and error handling strategies

This map serves as a reference for developers to understand how all pieces of the application work together to deliver a seamless luxury booking experience.
