LATEX FABRICS



Design System



Component Library, Tokens & UI Patterns — V1.0




447 Agege Motor Road, Bolade Bus Stop, Oshodi, Lagos
Version 1.0   |   21 March 2026

# 1. Overview

This design system establishes the foundational tokens, component patterns, and interaction rules for building the Latex Fabrics PWA. Every UI decision should reference this document before deviating. The system is built for React + Tailwind CSS implementation.

# 2. Design Tokens

## 2.1 Color Tokens (Tailwind Config)

Add the following to your tailwind.config.js under theme.extend.colors:

| tailwind.config.js — colors brand ("Royal Velvet" palette, revised 2026-07-20): { burgundy: '#7B2D3B',   // Royal Burgundy — primary CTAs, active pills, badges burgundyDark: '#632331', // Burgundy hover gold:      '#C6A032',   // Royal Gold — prices, logo, accents goldDark:  '#AD8B26',   // Gold hover wine:      '#451822',   // Deep Wine — navbar/footer/dark surfaces ivory:     '#FAF3EF',   // Blush Ivory — light backgrounds (never pure white) charcoal:  '#1A1A1A',   // Charcoal Black — body text whatsapp:  '#25D366',   // WhatsApp Green — order CTAs only muted:     '#9C7F85',   // Rose Taupe — secondary text, captions } — supersedes the original gold/mahogany values throughout this doc |
|---|

## 2.2 Spacing Scale

Use the default Tailwind spacing scale. Key values used throughout the system:

- p-4 (16px) — default card padding

- p-6 (24px) — section padding on mobile

- p-8 (32px) — section padding on desktop

- gap-4 (16px) — grid gap on mobile

- gap-6 (24px) — grid gap on desktop

## 2.3 Border Radius

- rounded-sm (4px) — badges, tags

- rounded-md (8px) — buttons, input fields

- rounded-lg (12px) — product cards

- rounded-xl (16px) — modals, bottom sheets

- rounded-full — avatar circles, pill badges

# 3. Component Library

## 3.1 Buttons

| Variant | Use Case | Tailwind Classes |
|---|---|---|
| Primary | Main CTAs — Shop Now, Add to Cart | bg-brand-gold text-white font-bold rounded-md px-6 py-3 |
| WhatsApp | Order via WhatsApp exclusively | bg-brand-whatsapp text-white font-bold rounded-md px-6 py-3 |
| Outline | Secondary actions — View Details | border-2 border-brand-gold text-brand-gold rounded-md px-6 py-3 |
| Ghost | Tertiary — Reset Filter, Cancel | text-brand-muted hover:text-brand-charcoal px-4 py-2 |
| Danger | Remove from cart | text-red-500 hover:bg-red-50 rounded-md px-4 py-2 |

## 3.2 Product Card

- Container: bg-white rounded-lg shadow-sm overflow-hidden border border-brand-ivory

- Image: aspect-ratio 4:3, object-cover, w-full — lazy loaded

- Fabric type badge: absolute top-2 left-2, bg-brand-gold/90 text-white text-xs px-2 py-1 rounded-sm

- Product name: text-brand-charcoal font-semibold text-sm mt-3 px-3

- Price: text-brand-gold font-bold text-base px-3 pb-2

- Add to Cart button: w-full Primary button variant at the bottom of the card

## 3.3 Navigation Bar

- Background: bg-brand-mahogany — the deep mahogany is signature to the brand

- Logo: text-brand-gold font-playfair font-bold text-xl

- Nav links: text-brand-ivory/80 hover:text-brand-gold text-sm font-medium

- Cart icon: text-brand-ivory with a gold badge showing item count

- Sticky on scroll: position: sticky, top: 0, z-index: 50

- Mobile: hamburger menu opening a bottom sheet or side drawer

## 3.4 Category Filter Tabs

- Container: horizontal scrollable flex row, no scrollbar visible

- Inactive tab: bg-transparent border border-brand-muted text-brand-muted rounded-full px-4 py-2 text-sm

- Active tab: bg-brand-gold text-white border-brand-gold rounded-full px-4 py-2 text-sm font-bold

- Smooth transition: transition-all duration-200 on color/background changes

## 3.5 Toast Notifications

- Position: bottom-center, above the mobile bottom navigation

- Success (Add to Cart): bg-brand-mahogany text-white — 'Added to cart!'

- Info (Undo remove): bg-brand-charcoal text-white — 'Item removed. Undo?'

- Duration: 3 seconds auto-dismiss

# 4. Page Layout Patterns

## 4.1 Grid System

- Mobile (< 640px): 2-column product grid — grid-cols-2 gap-4

- Tablet (640px–1023px): 3-column product grid — sm:grid-cols-3 sm:gap-6

- Desktop (1024px+): 4-column product grid — lg:grid-cols-4 lg:gap-6

- Max content width: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8

## 4.2 Section Structure

- Each page section has py-12 on mobile, py-16 on desktop

- Alternating section backgrounds: white and brand-ivory for visual rhythm

- Section headings: centered on landing page, left-aligned on catalog/detail pages

# 5. Motion & Interaction

- All interactive elements: transition-all duration-200 ease-in-out — snappy but not abrupt

- Image hover on product cards: scale-105 transform on the image only, not the card

- Button hover: slight opacity reduction (hover:opacity-90) — never change the core color

- Page transitions: fade-in on route change — opacity 0 to 1 over 150ms

- No bouncy or flashy animations — the brand is premium and restrained

# 6. Iconography

- Icon library: Lucide React — consistent line style that feels premium

- Icon size: 20px (w-5 h-5) for navigation and inline, 24px (w-6 h-6) for feature icons

- Icon color: always brand-gold for primary icons, brand-muted for secondary

- WhatsApp icon: use the official WhatsApp SVG logo — not a generic phone icon

# 7. Accessibility Checklist

- All images have descriptive alt text — e.g. 'Swiss voile fabric in ivory and gold pattern'

- Color contrast ratio minimum 4.5:1 for all text — verify Heritage Gold on white

- Focus rings visible on all interactive elements — use focus-visible:ring-2 ring-brand-gold

- All form inputs have associated labels

- Cart quantity +/- buttons have aria-label='Increase quantity' and 'Decrease quantity'

- WhatsApp order flow modal is keyboard accessible and focus-trapped
