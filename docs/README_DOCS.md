# La Villa Pine - Documentation Index

## Overview
This directory contains comprehensive documentation for the La Villa Pine luxury guest house booking platform. All documentation follows the standards outlined in `.windsurf/rules/generatefile.md`.

---

## Core Documentation

### 📋 [AppMap.md](./AppMap.md)
**Application Architecture & Data Flow**

Complete overview of the application's architecture, including:
- High-level system architecture
- User journey flows (booking, contact, gallery)
- Data flow diagrams
- Component hierarchy
- External integrations
- SEO architecture
- Error handling flow
- Mobile responsiveness

**When to use**: Understanding how the entire application works together, data flow patterns, and system interactions.

---

### 📁 [project_structure.md](./project_structure.md)
**Project Structure & Organization**

Detailed breakdown of the codebase structure:
- Root directory structure
- Frontend (`/client`) organization
- Backend (`/server`) structure
- Shared code (`/shared`)
- Static assets (`/public`)
- Configuration files
- File naming conventions
- Module resolution

**When to use**: Finding specific files, understanding code organization, or onboarding new developers.

---

### 🛠️ [tech_stack.md](./tech_stack.md)
**Technology Stack Documentation**

Complete technology reference with official documentation links:
- Frontend stack (React, TypeScript, Vite, Tailwind)
- Backend stack (Node.js, Express, PostgreSQL)
- UI libraries (shadcn/ui, Radix UI)
- External services (Yandex, Telegram, Email)
- Development tools
- Version compatibility matrix
- Installation guide

**When to use**: Learning about technologies used, finding documentation links, or checking version compatibility.

---

### 🔌 [API_documentation.md](./API_documentation.md)
**API Endpoints Reference**

Complete API documentation:
- All endpoints with request/response examples
- Authentication requirements
- Error handling
- Rate limiting
- CORS configuration
- Testing examples (cURL, JavaScript, React Query)
- Database schema reference

**When to use**: Integrating with the API, debugging API calls, or implementing new endpoints.

---

### ✨ [features.md](./features.md)
**Feature List & Implementation Status**

Comprehensive feature documentation:
- Core features (✅ Implemented)
- UI/UX features
- SEO features
- Communication features
- Admin features
- Technical features
- Future features (📋 Planned)
- Feature roadmap

**When to use**: Understanding what features exist, planning new features, or tracking implementation status.

---

### 🎨 [UI_UX_doc.md](./UI_UX_doc.md)
**Design System & UI Guidelines**

Complete design system documentation:
- Design philosophy (luxury loft aesthetic)
- Color system (gold, graphite, warm tones)
- Typography (Manrope, Inter, brand fonts)
- Component library (buttons, cards, forms)
- Layout system (grid, spacing)
- Responsive design (mobile-first)
- Animations & transitions
- Accessibility (WCAG AA)

**When to use**: Implementing UI components, maintaining design consistency, or creating new pages.

---

### 🏗️ [architecture.md](./architecture.md)
**System Architecture Overview**

In-depth architectural documentation:
- High-level architecture diagrams
- Frontend architecture (React, state management)
- Backend architecture (Express, layered design)
- Database architecture (PostgreSQL, Drizzle ORM)
- External integrations
- Deployment architecture (Render.com)
- Security architecture
- Performance optimization
- Scalability considerations

**When to use**: Understanding system design, planning major changes, or optimizing performance.

---

## Deployment & Operations Documentation

### 🚀 [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)
General deployment instructions

### 🖼️ [IMAGE_DEPLOYMENT_FIX.md](./IMAGE_DEPLOYMENT_FIX.md)
Image handling and deployment

### 📧 [EMAIL_SETUP_INSTRUCTIONS.md](./EMAIL_SETUP_INSTRUCTIONS.md)
Email service configuration

### 📱 [TELEGRAM_TROUBLESHOOTING.md](./TELEGRAM_TROUBLESHOOTING.md)
Telegram bot setup and issues

### 🔍 [INDEXNOW_SETUP.md](./INDEXNOW_SETUP.md)
Search engine indexing configuration

### 🌐 [RENDER_DEPLOY_GUIDE.md](./RENDER_DEPLOY_GUIDE.md)
Render.com specific deployment

### 📧 [YANDEX_SMTP_TROUBLESHOOTING.md](./YANDEX_SMTP_TROUBLESHOOTING.md)
Yandex email troubleshooting

### 💻 [WINDOWS_FIX.md](./WINDOWS_FIX.md)
Windows-specific development issues

### 📷 [OG_PREVIEW_TESTING.md](./OG_PREVIEW_TESTING.md)
Social media preview testing

### 🔄 [SOCIAL_MEDIA_CACHE_REFRESH.md](./SOCIAL_MEDIA_CACHE_REFRESH.md)
Cache refresh for social previews

---

## Russian Documentation

### 📸 [ИЗОБРАЖЕНИЯ_ИНСТРУКЦИИ.md](./ИЗОБРАЖЕНИЯ_ИНСТРУКЦИИ.md)
Инструкции по работе с изображениями

### 🖼️ [ИНСТРУКЦИЯ_УПРАВЛЕНИЯ_ИЗОБРАЖЕНИЯМИ.md](./ИНСТРУКЦИЯ_УПРАВЛЕНИЯ_ИЗОБРАЖЕНИЯМИ.md)
Управление изображениями

### 🚫 [ИНСТРУКЦИЯ_ОТКЛЮЧЕНИЯ_БАННЕРА.md](./ИНСТРУКЦИЯ_ОТКЛЮЧЕНИЯ_БАННЕРА.md)
Отключение баннеров

---

## Quick Reference

### For Developers

**New to the project?**
1. Start with [project_structure.md](./project_structure.md) to understand the codebase
2. Read [tech_stack.md](./tech_stack.md) to learn the technologies
3. Review [AppMap.md](./AppMap.md) to understand data flow
4. Check [architecture.md](./architecture.md) for system design

**Implementing a feature?**
1. Check [features.md](./features.md) for existing features
2. Use [UI_UX_doc.md](./UI_UX_doc.md) for design guidelines
3. Reference [API_documentation.md](./API_documentation.md) for endpoints
4. Follow [architecture.md](./architecture.md) patterns

**Debugging?**
1. Check [API_documentation.md](./API_documentation.md) for endpoint details
2. Review [AppMap.md](./AppMap.md) for data flow
3. Check deployment guides for environment issues

---

### For Designers

**Design consistency:**
- [UI_UX_doc.md](./UI_UX_doc.md) - Complete design system
- Color palette, typography, spacing
- Component states and variants
- Responsive breakpoints

**Feature planning:**
- [features.md](./features.md) - Current and planned features
- [AppMap.md](./AppMap.md) - User journeys

---

### For Project Managers

**Project overview:**
- [AppMap.md](./AppMap.md) - System overview
- [features.md](./features.md) - Feature status and roadmap
- [architecture.md](./architecture.md) - Technical decisions

**Planning:**
- [features.md](./features.md) - Roadmap and priorities
- [tech_stack.md](./tech_stack.md) - Technology constraints

---

## Documentation Standards

All documentation follows these principles:

### ✅ Structure
- Clear table of contents
- Hierarchical headings
- Code examples
- Diagrams where helpful

### ✅ Content
- Practical examples
- Official documentation links
- Best practices
- Common pitfalls

### ✅ Maintenance
- Update when features change
- Keep examples working
- Note deprecated features
- Version compatibility

---

## Contributing to Documentation

### When to Update Documentation

**Always update when**:
- Adding new features
- Changing API endpoints
- Modifying architecture
- Updating dependencies
- Changing design system

**Which files to update**:

| Change Type | Files to Update |
|-------------|-----------------|
| New feature | `features.md`, `AppMap.md` |
| API change | `API_documentation.md` |
| UI component | `UI_UX_doc.md` |
| Architecture | `architecture.md` |
| Technology | `tech_stack.md` |
| File structure | `project_structure.md` |

### Documentation Style Guide

```markdown
# Use H1 for document title

## Use H2 for major sections

### Use H3 for subsections

#### Use H4 for details

**Bold** for emphasis
`code` for inline code
```code blocks``` for examples

- Bullet lists for items
1. Numbered lists for steps

[Links](./file.md) to other docs
```

---

## Documentation Metrics

**Total Documentation Files**: 23  
**Core Documentation**: 7 files  
**Deployment Guides**: 10 files  
**Language**: English + Russian  
**Total Pages**: ~150 pages (estimated)  
**Last Updated**: 2025-01-16

---

## Document Relationships

```
AppMap.md ←→ architecture.md (System design)
    ↓
project_structure.md (Code organization)
    ↓
tech_stack.md (Technologies used)
    ↓
API_documentation.md (API reference)
    ↓
features.md (What it does)
    ↓
UI_UX_doc.md (How it looks)
```

---

## Getting Started Paths

### Path 1: Full Understanding
```
1. AppMap.md (Overview)
2. architecture.md (System design)
3. project_structure.md (Code organization)
4. tech_stack.md (Technologies)
5. features.md (Features)
6. UI_UX_doc.md (Design)
7. API_documentation.md (API reference)
```

### Path 2: Quick Start (Developer)
```
1. project_structure.md (Find files)
2. tech_stack.md (Learn stack)
3. API_documentation.md (Build features)
```

### Path 3: Quick Start (Designer)
```
1. UI_UX_doc.md (Design system)
2. features.md (What exists)
3. AppMap.md (User flows)
```

---

## Additional Resources

### External Documentation
- React: https://react.dev/
- TypeScript: https://www.typescriptlang.org/
- Tailwind CSS: https://tailwindcss.com/
- Drizzle ORM: https://orm.drizzle.team/
- Express.js: https://expressjs.com/

### Project Links
- Repository: GitHub (see README.md)
- Live Site: https://lavillapine.onrender.com
- Admin Panel: https://lavillapine.onrender.com/admin

---

## Feedback & Improvements

Found an error or missing information?
1. Create an issue in the repository
2. Submit a pull request with updates
3. Contact the development team

---

## Version History

**v1.0** (2025-01-16) - Initial comprehensive documentation
- 7 core documentation files
- Complete system coverage
- Design system documentation
- API reference

---

## Summary

This documentation provides **complete coverage** of the La Villa Pine project:

✅ **Architecture** - System design and technical decisions  
✅ **Code** - File structure and organization  
✅ **Technology** - Stack and dependencies  
✅ **API** - Endpoints and integration  
✅ **Features** - Current and planned functionality  
✅ **Design** - UI/UX design system  
✅ **Deployment** - Operations and troubleshooting

**Goal**: Enable developers, designers, and stakeholders to understand, maintain, and extend the La Villa Pine platform effectively.
