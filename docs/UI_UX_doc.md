# La Villa Pine - UI/UX Design System Documentation

## Overview
La Villa Pine features a **luxury loft-style design** with warm, natural tones inspired by forest landscapes and industrial elegance. The design system emphasizes tactile glass morphism effects, sophisticated typography, and a premium user experience.

---

## Table of Contents
1. [Design Philosophy](#design-philosophy)
2. [Color System](#color-system)
3. [Typography](#typography)
4. [Component Library](#component-library)
5. [Layout System](#layout-system)
6. [Responsive Design](#responsive-design)
7. [Animations & Transitions](#animations--transitions)
8. [Accessibility](#accessibility)
9. [User Experience Patterns](#user-experience-patterns)

---

## Design Philosophy

### Core Principles

#### **1. Luxury & Elegance**
- Premium feel through subtle glass morphism effects
- Warm, inviting color palette
- High-quality imagery and smooth interactions

#### **2. Nature-Inspired**
- Forest green and wood tones
- Natural material aesthetics (stone, wood, metal)
- Organic shapes and soft edges

#### **3. Modern Loft Aesthetics**
- Industrial elements (exposed materials)
- Minimalist layouts
- Contemporary typography
- Sophisticated color combinations

#### **4. User-Centric**
- Clear navigation
- Intuitive interactions
- Fast, responsive interface
- Accessibility-first approach

---

## Color System

### Primary Palette

#### **Background Colors**
```css
--bg: #6c706e            /* Primary gray background */
--background: #1A1613    /* Dark background */
--graphite: #23221d      /* Dark graphite */
--neutral: #26201B       /* Neutral dark */
```

#### **Foreground Colors**
```css
--fg: #e4e5e8           /* Primary text color */
--foreground: #F2EDE6   /* Light foreground */
--fg-muted: #e9d3bf     /* Muted text */
--muted-foreground: #AFA296 /* Secondary muted */
```

#### **Accent Colors**
```css
--gold: #D4A44A         /* Primary gold accent */
--wood: #b68f66         /* Warm wood tone */
--primary: #D4A44A      /* Primary action color */
--accent: #D4A44A       /* Accent highlights */
```

### Color Tokens

| Token | Hex | Usage | Example |
|-------|-----|-------|---------|
| **Gold** | `#D4A44A` | Primary actions, highlights | Buttons, links, active states |
| **Graphite** | `#23221d` | Dark backgrounds | Cards, overlays |
| **Warm Gray** | `#6c706e` | Base background | Body, sections |
| **Light Cream** | `#F2EDE6` | Text, highlights | Headings, body text |
| **Wood** | `#b68f66` | Secondary accents | Borders, subtle highlights |

### Semantic Colors

```css
--primary: #D4A44A           /* Call-to-action buttons */
--secondary: #26201B         /* Secondary buttons */
--destructive: hsl(0, 50%, 40%) /* Delete, error actions */
--muted: #3a3936            /* Disabled states */
--border: rgba(175, 162, 150, 0.2) /* Borders, dividers */
--input: #26201B            /* Form inputs */
--ring: #D4A44A             /* Focus rings */
```

### Dark Mode

```css
/* Dark theme maintains same luxury aesthetic */
--background: #1A1613       /* Darker base */
--foreground: #F2EDE6       /* Light text */
--card: #3a3936            /* Card backgrounds */
--popover: #26201B         /* Popover backgrounds */
```

**Note**: Dark mode uses identical accent colors for consistency.

---

## Typography

### Font Stack

#### **Display Font** (Headings)
```css
--font-display: "Manrope", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif
```
- **Weight**: 300 (Light), 400 (Regular), 600 (SemiBold), 700 (Bold), 800 (ExtraBold)
- **Usage**: Headings, navigation, buttons, prices
- **Characteristics**: Geometric, modern, highly legible

#### **Text Font** (Body)
```css
--font-text: "Inter", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif
```
- **Weight**: 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)
- **Usage**: Body text, paragraphs, descriptions
- **Characteristics**: Neutral, readable, optimized for screens

#### **Brand Font** (Logo)
```css
--font-brand: "ROCKET WILDNESS", "Manrope", system-ui, sans-serif
```
- **Source**: `/public/fonts/rocket-wildness.ttf`
- **Usage**: Logo, special headings, brand elements
- **Characteristics**: Unique, handcrafted, distinctive

### Typography Scale

#### **Heading Hierarchy**

```css
/* H1 - Page Titles */
h1, .h1 {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(34px, 4vw, 56px);
  line-height: 1.12;
  letter-spacing: -0.01em;
}

/* H2 - Section Titles */
h2, .h2 {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(28px, 3vw, 40px);
  line-height: 1.18;
  letter-spacing: -0.005em;
}

/* H3 - Subsection Titles */
h3, .h3 {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(22px, 2.2vw, 28px);
  line-height: 1.2;
}

/* H4-H6 - Minor Headings */
h4, h5, h6 {
  font-family: var(--font-display);
  font-weight: 600;
  line-height: 1.3;
}
```

#### **Body Text**

```css
/* Paragraphs */
p {
  font-size: clamp(16px, 1.2vw, 18px);
  line-height: 1.6;
  color: var(--fg);
}

/* Muted Text */
.muted {
  color: var(--fg-muted);
}
```

#### **UI Elements**

```css
/* Navigation & Buttons */
.nav, .btn {
  font-family: var(--font-display);
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  font-size: 14px;
}

/* Prices & Stats */
.price, .stat {
  font-family: var(--font-display);
  font-weight: 700;
  font-variant-numeric: tabular-nums lining-nums; /* Aligned numbers */
}
```

### Typography Best Practices

✅ **Use fluid typography** (clamp) for responsive scaling
✅ **Maintain clear hierarchy** with consistent weights
✅ **Optimize line-height** for readability (1.5-1.6 for body)
✅ **Use negative letter-spacing** for large headings
✅ **Enable font features** (kerning, ligatures)

```css
font-feature-settings: "kern", "liga", "clig", "calt";
```

---

## Component Library

### Button System

#### **Primary Button** (Gold Gradient)
```css
.btn-primary {
  background: linear-gradient(135deg, 
    rgba(212,164,74,.95) 0%, 
    rgba(192,144,60,.9) 60%, 
    rgba(212,164,74,.98) 100%);
  border: 1px solid rgba(212,164,74,.35);
  border-radius: 16px;
  padding: 12px 18px;
  box-shadow:
    0 8px 24px rgba(0,0,0,.35),
    inset 0 1px 0 rgba(255,255,255,.12);
  color: #1A1613;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

/* Hover State */
.btn-primary:hover {
  transform: translateY(-1px) scale(1.02);
  filter: brightness(1.03);
  box-shadow:
    0 12px 36px rgba(0,0,0,.45),
    0 0 0 3px rgba(212,164,74,.15);
}
```

**Usage**: Call-to-action, booking, primary actions

---

#### **Secondary Button** (Glass Morphism)
```css
.btn-secondary {
  background: linear-gradient(135deg, 
    rgba(60,50,40,.35), 
    rgba(50,42,35,.30));
  border: 1px solid rgba(138,110,82,.25);
  border-radius: 16px;
  padding: 12px 18px;
  box-shadow: 0 6px 20px rgba(0,0,0,.35);
  color: var(--fg);
}

.btn-secondary:hover {
  box-shadow: 0 10px 28px rgba(0,0,0,.45);
  border-color: rgba(212,164,74,.35);
}
```

**Usage**: Secondary actions, navigation

---

#### **Glass Button** (iOS-Inspired)
```css
.glass-button {
  background: linear-gradient(135deg,
    rgba(255, 198, 41, 0.85) 0%,
    rgba(255, 184, 0, 0.75) 50%,
    rgba(255, 198, 41, 0.9) 100%);
  backdrop-filter: blur(24px) saturate(180%);
  border: 1px solid rgba(255, 198, 41, 0.9);
  border-radius: 16px;
  padding: 12px 20px;
  box-shadow:
    0 4px 16px rgba(0, 0, 0, 0.08),
    inset 0 1px 0 rgba(245, 235, 220, 0.6);
  color: rgba(0, 0, 0, 0.8);
}
```

**Usage**: Premium CTAs, booking actions

---

### Navigation Components

#### **Loft Navigation Button**
```css
.loft-nav-button {
  padding: 10px 18px;
  border-radius: 8px;
  background: transparent;
  border: 1px solid transparent;
  transition: all 0.25s ease-out;
}

.loft-nav-button:hover {
  background: color-mix(in srgb, var(--wood) 15%, transparent);
  border-color: color-mix(in srgb, var(--gold) 25%, transparent);
  transform: translateY(-1px);
}

.loft-nav-button.active {
  background: color-mix(in srgb, var(--gold) 12%, transparent);
  border-color: var(--gold);
  font-weight: 600;
}
```

**States**:
- Default: Transparent
- Hover: Wood tint with gold border
- Active: Gold highlight

---

#### **Mobile Navigation**
```css
.glass-mobile-item a {
  padding: 16px 24px;
  border-radius: 20px;
  background: linear-gradient(135deg,
    rgba(245, 235, 220, 0.1) 0%,
    rgba(245, 235, 220, 0.05) 50%,
    rgba(245, 235, 220, 0.08) 100%);
  backdrop-filter: blur(24px) saturate(180%);
  border: 1px solid rgba(245, 235, 220, 0.18);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(245, 235, 220, 0.4);
}
```

**Features**:
- Glass morphism effect
- Smooth transitions
- Touch-optimized spacing
- Clear visual feedback

---

### Card Components

#### **Standard Card**
```css
.card {
  background: var(--card);
  border-radius: var(--radius); /* 16px */
  border: 1px solid var(--border);
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}
```

#### **Glass Card** (Premium)
```css
.glass-card {
  background: linear-gradient(135deg,
    rgba(245, 235, 220, 0.08),
    rgba(245, 235, 220, 0.05));
  backdrop-filter: blur(20px) saturate(150%);
  border: 1px solid rgba(245, 235, 220, 0.15);
  border-radius: 24px;
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(245, 235, 220, 0.2);
}
```

---

### Form Components

#### **Input Fields**
```css
input, textarea {
  background: var(--input);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 10px 14px;
  color: var(--foreground);
  font-size: 16px;
}

input:focus, textarea:focus {
  outline: none;
  border-color: var(--ring);
  box-shadow: 0 0 0 3px rgba(212, 164, 74, 0.15);
}
```

**Focus States**:
- Ring color: Gold (`#D4A44A`)
- Ring width: 3px
- Opacity: 15%

---

### Modal & Overlay

#### **Dialog/Modal**
```css
.dialog-overlay {
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
}

.dialog-content {
  background: var(--card);
  border-radius: var(--radius);
  border: 1px solid var(--border);
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.5);
}
```

---

### Toast Notifications

```css
.toast {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.3);
}

/* Success Toast */
.toast-success {
  border-left: 4px solid #4ade80;
}

/* Error Toast */
.toast-error {
  border-left: 4px solid var(--destructive);
}
```

**Duration**: 5 seconds auto-dismiss
**Position**: Bottom-right (desktop), bottom-center (mobile)

---

## Layout System

### Grid System

```css
/* Container */
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 16px;
}

@media (min-width: 640px) {
  .container { padding: 0 24px; }
}

@media (min-width: 1024px) {
  .container { padding: 0 32px; }
}
```

### Spacing Scale

Based on Tailwind's 4px system:

| Token | Value | Usage |
|-------|-------|-------|
| `space-1` | 4px | Tight spacing |
| `space-2` | 8px | Small gaps |
| `space-3` | 12px | Default gaps |
| `space-4` | 16px | Component padding |
| `space-6` | 24px | Section spacing |
| `space-8` | 32px | Large gaps |
| `space-12` | 48px | Section margins |
| `space-16` | 64px | Page sections |

### Border Radius

```css
--radius: 16px;           /* Default */
--radius-md: 14px;        /* calc(--radius - 2px) */
--radius-sm: 12px;        /* calc(--radius - 4px) */
```

**Usage**:
- Buttons: 16px
- Cards: 16-24px
- Inputs: 8px
- Mobile menu: 20px

---

## Responsive Design

### Breakpoints

```typescript
// Tailwind breakpoints
breakpoints: {
  sm: '640px',   // Small tablets
  md: '768px',   // Tablets
  lg: '1024px',  // Laptops
  xl: '1280px',  // Desktops
  '2xl': '1536px' // Large screens
}
```

### Mobile-First Strategy

```css
/* Mobile (default) */
.hero-text {
  font-size: 34px;
}

/* Tablet */
@media (min-width: 768px) {
  .hero-text {
    font-size: 42px;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .hero-text {
    font-size: 56px;
  }
}
```

### Responsive Typography

Using `clamp()` for fluid scaling:

```css
font-size: clamp(16px, 1.2vw, 18px);
/* min: 16px, fluid: 1.2vw, max: 18px */
```

### Touch Targets

**Minimum**: 44×44px for all interactive elements

```css
.touch-target {
  min-width: 44px;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

---

## Animations & Transitions

### Timing Functions

```css
/* Ease Out (default) */
transition: all 0.3s ease-out;

/* Custom Cubic Bezier */
transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);

/* Spring-like */
transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
```

### Common Transitions

#### **Button Hover**
```css
.btn {
  transition: transform 0.18s ease, 
              box-shadow 0.18s ease, 
              filter 0.18s ease;
}

.btn:hover {
  transform: translateY(-1px) scale(1.02);
}
```

#### **Scale Animation**
```css
.scale-hover {
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.scale-hover:hover {
  transform: scale(1.04);
}
```

#### **Fade In**
```css
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fadeIn 0.4s ease-out;
}
```

### Accordion Animation

```css
@keyframes accordion-down {
  from { height: 0; }
  to { height: var(--radix-accordion-content-height); }
}

@keyframes accordion-up {
  from { height: var(--radix-accordion-content-height); }
  to { height: 0; }
}
```

### Shimmer Effect (Lazy Loading)

```css
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

.skeleton {
  background: linear-gradient(90deg,
    rgba(255,255,255,0.1) 25%,
    rgba(255,255,255,0.2) 50%,
    rgba(255,255,255,0.1) 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}
```

---

## Accessibility

### Focus Management

#### **Focus Ring**
```css
*:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px var(--ring);
  border-color: var(--ring);
}
```

#### **Skip Links**
```css
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: var(--primary);
  color: var(--primary-foreground);
  padding: 8px;
  z-index: 100;
}

.skip-link:focus {
  top: 0;
}
```

### Keyboard Navigation

✅ **Tab Order**: Logical, follows visual layout
✅ **Arrow Keys**: Navigate carousels, galleries
✅ **Escape Key**: Close modals, drawers
✅ **Enter/Space**: Activate buttons, links

### Screen Reader Support

```html
<!-- ARIA Labels -->
<button aria-label="Close dialog">
  <XIcon aria-hidden="true" />
</button>

<!-- Live Regions -->
<div role="alert" aria-live="polite">
  Form submitted successfully!
</div>

<!-- Hidden Text -->
<span class="sr-only">
  Navigate to homepage
</span>
```

### Color Contrast

**WCAG AA Compliance**:
- Normal text: 4.5:1
- Large text (18px+): 3:1
- UI components: 3:1

**Primary Combinations**:
- Light text on dark: `#F2EDE6` on `#1A1613` ✅ 12.7:1
- Gold on dark: `#D4A44A` on `#1A1613` ✅ 6.8:1
- Dark text on light: `#1A1613` on `#F2EDE6` ✅ 12.7:1

---

## User Experience Patterns

### Page Load Experience

```
1. Skeleton screens for content
2. Progressive image loading
3. Lazy load below fold
4. Prioritize critical CSS
5. Defer non-critical JS
```

### Interaction Feedback

#### **Loading States**
- Spinners for async operations
- Skeleton loaders for content
- Progress bars for uploads
- Disabled state during processing

#### **Success Feedback**
- Green toast notification
- Checkmark icon
- Success message
- Form reset

#### **Error Handling**
- Red toast notification
- Inline error messages
- Field highlighting
- Clear error descriptions

### Navigation Patterns

#### **Desktop Navigation**
- Fixed header on scroll
- Hover states on links
- Active route highlighting
- Booking CTA always visible

#### **Mobile Navigation**
- Hamburger menu icon
- Slide-out drawer
- Touch-optimized buttons
- Close on route change

### Form UX

#### **Validation**
```
1. Real-time validation (onBlur)
2. Clear error messages
3. Success indicators
4. Disabled submit until valid
5. Loading state on submit
```

#### **Input Enhancement**
- Placeholder text
- Label above field
- Character counters (if applicable)
- Auto-focus on first field
- Tab order optimization

### Image Gallery UX

```
1. Click image → Open lightbox
2. Arrow keys → Navigate
3. ESC key → Close
4. Backdrop click → Close
5. Swipe gestures → Navigate (mobile)
6. Keyboard accessible
```

---

## Design Tokens Reference

### CSS Custom Properties

```css
:root {
  /* Fonts */
  --font-display: "Manrope", sans-serif;
  --font-text: "Inter", sans-serif;
  --font-brand: "ROCKET WILDNESS", sans-serif;

  /* Colors - Loft Theme */
  --bg: #6c706e;
  --fg: #e4e5e8;
  --fg-muted: #e9d3bf;
  --graphite: #23221d;
  --gold: #D4A44A;
  --wood: #b68f66;

  /* System Colors */
  --background: #1A1613;
  --foreground: #F2EDE6;
  --primary: #D4A44A;
  --secondary: #26201B;
  --accent: #D4A44A;
  --muted: #3a3936;
  --border: rgba(175, 162, 150, 0.2);
  --ring: #D4A44A;
  --radius: 16px;
}
```

---

## Component States

### Button States

| State | Transform | Opacity | Shadow | Border |
|-------|-----------|---------|--------|--------|
| Default | none | 100% | Soft | Subtle |
| Hover | translateY(-1px) scale(1.02) | 100% | Strong | Accent |
| Active | scale(0.98) | 100% | Inner | Accent |
| Disabled | none | 50% | None | Muted |
| Loading | none | 100% | Soft | Current |

### Input States

| State | Border | Shadow | Background |
|-------|--------|--------|------------|
| Default | `--border` | None | `--input` |
| Hover | `--border` lighter | None | `--input` |
| Focus | `--ring` | Ring glow | `--input` |
| Error | Red | Red ring | `--input` |
| Disabled | `--muted` | None | `--muted` |

---

## Icon System

### Icon Library
**Primary**: Lucide React  
**Secondary**: React Icons (Font Awesome)

### Icon Sizes
```css
.icon-sm { width: 16px; height: 16px; }
.icon-md { width: 20px; height: 20px; }
.icon-lg { width: 24px; height: 24px; }
.icon-xl { width: 32px; height: 32px; }
```

### Icon Usage
- **Navigation**: 20px icons with labels
- **Buttons**: 16-20px icons (inline or standalone)
- **Decorative**: 24-32px feature icons
- **Social**: 24px circular icons

---

## Summary

The La Villa Pine design system delivers:

✅ **Luxury Loft Aesthetic**: Warm tones, natural materials, sophisticated design
✅ **Glass Morphism**: Modern iOS-inspired transparent effects
✅ **Responsive Design**: Mobile-first, fluid typography, touch-optimized
✅ **Accessibility**: WCAG AA compliant, keyboard navigation, screen reader support
✅ **Performance**: Optimized animations, lazy loading, efficient rendering
✅ **Consistency**: Reusable components, design tokens, clear patterns

**Design Language**: Premium, nature-inspired, modern luxury with forest and industrial loft elements.
