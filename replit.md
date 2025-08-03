# replit.md

## Overview

La Villa Pine is a modern full-stack web application for a luxury guest house booking service. It features two loft-style guest houses with premium amenities like saunas, heated pools, and forest locations. The application provides a complete booking and contact management system, aiming to offer a seamless user experience for potential guests.

## User Preferences

Preferred communication style: Simple, everyday language.
Website language: Russian

## System Architecture

### Core Technologies
- **Frontend**: React 18, TypeScript, Wouter, Tailwind CSS, shadcn/ui, TanStack Query, Vite
- **Backend**: Node.js, Express.js, TypeScript, ES modules
- **Database**: PostgreSQL with Drizzle ORM

### Frontend Design
- **UI/UX**: Responsive design with a mobile-first approach, featuring a clean, modern aesthetic.
- **Components**: Includes layout components (Header, Footer), page components (Home, About, Gallery, Contacts, Booking), and reusable UI components (Carousel Hero, Image Gallery, Contact Form).
- **Styling**: Leverages Tailwind CSS and Radix UI primitives for accessible and customizable components.
- **SEO**: Dynamic meta tag management, optimized titles, descriptions, and keywords, along with technical SEO elements like `robots.txt`, `sitemap.xml`, and `IndexNow` protocol integration.

### Backend Design
- **API**: Provides endpoints for contact message submission and retrieval.
- **Data Layer**: Utilizes Drizzle ORM for PostgreSQL interactions with a flexible storage interface.
- **Validation**: Zod for robust runtime schema validation.
- **Middleware**: Implements logging, JSON body parsing, and structured error handling.

### Image Management System
- **Structure**: Organized image directories (`carousel/`, `gallery/`, `rooms/`, `amenities/`) within `public/images/`.
- **Fallback System**: Automatic fallback to temporary Unsplash images when real images are not present. All images from structured folders contribute to the main gallery.

### Key Features
- **Contact Form**: User-friendly form with Zod validation, toast notifications, and email functionality with multiple fallback options (SMTP, Telegram, webhook).
- **Image Gallery**: Interactive gallery with a grid layout, lightbox functionality, and navigation.
- **Booking Integration**: Seamless integration with the HomeReserve booking widget.
- **Social Media Integration**: Comprehensive social media links and optimized Open Graph meta tags for previews.
- **Analytics & Reviews**: Integration of Yandex Metrika for analytics and a fixed Yandex Reviews widget for social proof.
- **Mobile Optimization**: Responsive typography, compact layouts, and enhanced UI components for improved mobile performance across all pages.

## External Dependencies

### Frontend
- **UI Libraries**: React, Wouter, Tailwind CSS, Radix UI, shadcn/ui
- **State Management**: TanStack Query
- **Form Handling**: React Hook Form, Zod
- **Icons**: Lucide React, Font Awesome

### Backend
- **Database**: Neon (serverless PostgreSQL)
- **ORM**: Drizzle ORM
- **Validation**: Zod
- **Build Tools**: esbuild, tsx

### Third-Party Services
- **Booking**: HomeReserve widget
- **Maps**: Yandex Maps API
- **Analytics**: Yandex Metrika
- **Reviews**: Yandex Reviews widget
- **Search Engines**: IndexNow protocol for Yandex and Bing