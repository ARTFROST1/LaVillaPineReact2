# replit.md

## Overview

La Villa Pine is a modern full-stack web application for a luxury guest house booking service. The application showcases two loft-style guest houses with premium amenities like saunas, heated pools, and forest locations. Built with React, TypeScript, Express.js, and PostgreSQL, it provides a complete booking and contact management system.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side router)
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for development and production builds
- **UI Components**: Radix UI primitives with custom styling

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Validation**: Zod for runtime type checking
- **Session Management**: In-memory storage with fallback to database

### Project Structure
```
├── client/           # React frontend application
├── server/           # Express.js backend application
├── shared/           # Shared schemas and types
├── migrations/       # Database migration files
└── dist/            # Production build output
```

## Key Components

### Frontend Components
1. **Layout Components**
   - Header with navigation and mobile menu
   - Footer with site information and links
   - Responsive design with mobile-first approach

2. **Page Components**
   - Home: Hero carousel with booking CTA
   - About: Amenities showcase and property details
   - Gallery: Image gallery with modal viewer
   - Contacts: Contact form and location information
   - Booking: Placeholder for third-party booking integration

3. **UI Components**
   - Carousel Hero: Auto-playing image carousel
   - Image Gallery: Grid layout with lightbox functionality
   - Contact Form: Validated form with toast notifications

### Backend Components
1. **API Routes**
   - POST /api/contact: Submit contact messages
   - GET /api/contact-messages: Retrieve contact messages (admin)

2. **Data Layer**
   - IStorage interface for data operations
   - MemStorage implementation for development
   - Database schemas for users and contact messages

3. **Middleware**
   - Request logging for API endpoints
   - JSON body parsing
   - Error handling with structured responses

## Data Flow

### Contact Form Submission
1. User fills out contact form on frontend
2. Form data validated using Zod schema
3. API request sent to /api/contact endpoint
4. Server validates data and stores in database
5. Success/error response sent back to client
6. Toast notification displayed to user

### Image Gallery
1. Static image URLs stored in constants
2. Gallery component renders thumbnail grid
3. Click handler opens modal with full-size image
4. Navigation controls allow browsing between images

### Booking Integration
- HomeReserve widget fully integrated with token "Aijbfbb7Zl"
- Widget loads dynamically and displays directly on background
- Contact buttons separated into dedicated section below widget
- Proper error handling and script cleanup implemented

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React 18 with React Router alternative (Wouter)
- **Styling**: Tailwind CSS with PostCSS processing
- **Components**: Radix UI primitives for accessibility
- **State Management**: TanStack Query for server state
- **Form Handling**: React Hook Form with Zod validation
- **Icons**: Lucide React and Font Awesome

### Backend Dependencies
- **Database**: Neon serverless PostgreSQL
- **ORM**: Drizzle ORM with PostgreSQL adapter
- **Validation**: Zod for schema validation
- **Build Tools**: esbuild for production builds
- **Development**: tsx for TypeScript execution

### Development Tools
- **TypeScript**: Strict type checking enabled
- **Vite**: Development server and build tool
- **ESLint**: Code linting (implied by project structure)
- **Replit Integration**: Development environment support

## Deployment Strategy

### Development Environment
- Vite dev server for frontend hot reloading
- Express server with TypeScript compilation
- Database migrations managed through Drizzle Kit
- Environment variables for database connection

### Production Build
1. Frontend built with Vite to `dist/public`
2. Backend compiled with esbuild to `dist/`
3. Static file serving from Express server
4. Database migrations applied on deployment

### Environment Configuration
- DATABASE_URL required for PostgreSQL connection
- NODE_ENV determines development/production behavior
- Build scripts configured for both environments

## Image Management System

### Structure
- **`public/images/`** - Main images directory
  - **`carousel/`** - Hero carousel images (carousel-1.jpg, carousel-2.jpg, etc.)
  - **`gallery/`** - Gallery page images (gallery-1.jpg, gallery-2.jpg, etc.)
  - **`rooms/`** - Room interior images (room-1.jpg, room-2.jpg, etc.)
  - **`amenities/`** - Amenities images (sauna.jpg, pool.jpg, forest.jpg, interior.jpg)

### Fallback System
- Each image location has fallback to temporary Unsplash images
- When real images are uploaded, they automatically replace fallbacks
- All images from all folders appear in the gallery page
- Carousel uses images from `carousel/` folder specifically

### Instructions for User
- Detailed instructions provided in `ИЗОБРАЖЕНИЯ_ИНСТРУКЦИИ.md`
- File naming conventions established for easy management
- Automatic image detection and fallback system implemented

## Changelog

```
Changelog:
- July 06, 2025. Initial setup
- July 06, 2025. Completed Russian translation of entire website
- July 06, 2025. Implemented comprehensive image management system with fallback support
- July 06, 2025. Created structured image folders and user instructions
- July 06, 2025. Fixed carousel functionality and added hover effects to buttons
- July 06, 2025. Updated button hover effects: yellow buttons now use blurred transparent backgrounds on hover
- July 06, 2025. Fixed image loading issues and button hover colors
- July 06, 2025. Added social media links: Instagram, VK, WhatsApp, Telegram, Avito with custom SVG icon
- July 06, 2025. Updated footer and contacts page with complete social media integration
- July 06, 2025. Fixed Avito icon design with correct four-circle pattern and proper alignment
- July 06, 2025. Redesigned "Follow us" section on contacts page with modern, minimalist styling
- July 06, 2025. Integrated Yandex Maps API with proper authentication and interactive map on contacts page
- July 06, 2025. Enhanced About page with detailed property information, images for amenities cards, and premium service details
- July 08, 2025. Migrated project from Replit Agent to standard Replit environment
- July 08, 2025. Integrated HomeReserve booking widget with token authentication and dynamic loading
- July 08, 2025. Redesigned booking page layout: widget directly on background, contact buttons in separate section
- July 08, 2025. Integrated HomeReserve widget on home page hero section, replacing CTA buttons
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
Website language: Russian
```