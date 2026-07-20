LATEX FABRICS



Functional Requirements Document



PWA E-Commerce Store — Version 1.0




447 Agege Motor Road, Bolade Bus Stop, Oshodi, Lagos
Version 1.0   |   21 March 2026

# 1. Overview

This Functional Requirements Document details the specific behaviors, interactions, and technical requirements for each feature of the Latex Fabrics PWA. It is the reference document for development and QA testing.

# 2. Global / App-wide Requirements

## FR-001 — Progressive Web App

- The app must be installable on Android and iOS home screens via PWA manifest

- A service worker must cache core assets for offline browsing of previously visited pages

- The app must display an 'Add to Home Screen' prompt after the user's second visit

- Lighthouse PWA score must be 90+ before launch

## FR-002 — Performance

- First Contentful Paint (FCP) must be under 2 seconds on a simulated Fast 3G connection

- All product images must be lazy-loaded and served in WebP format with JPEG fallback

- Core bundle size must not exceed 200KB gzipped

## FR-003 — Responsive Design

- Mobile-first design — primary breakpoint is 375px (iPhone SE)

- Tablet support at 768px and desktop at 1280px+

- Touch targets must be minimum 44x44px on all interactive elements

# 3. Page-by-Page Functional Requirements

## FR-010 — Landing / Home Page

- Hero section: full-width fabric image, store name, tagline, and a 'Shop Now' CTA button

- Featured Categories section: visual tiles for Lace, Swiss Voile, Cord Lace, Luxury Fabrics — tapping navigates to the filtered catalog

- Featured Products section: horizontal scroll of 6–8 hand-picked products with name, price, and 'View' button

- Trust bar: '20+ Years Experience', 'Authentic Materials', 'WhatsApp Orders' as icon + text badges

- Footer: store addresses, phone number, opening hours, WhatsApp link

## FR-020 — Product Catalog Page

- Displays all available products in a 2-column grid on mobile, 3-column on tablet, 4-column on desktop

- Each product card shows: product image, product name, fabric type badge, price per yard

- Category filter tabs at the top: All | Lace | Swiss Voile | Cord Lace | Sequins | Luxury

- Tapping a filter tab updates the product grid without a full page reload

- A search bar allows text search by product name or fabric type

- Empty state: if no products match the filter, display 'No fabrics found — try a different category' with a reset button

- Each product card has an 'Add to Cart' button that updates the cart count in the navigation bar

## FR-030 — Product Detail Page

- Image gallery: primary product image with thumbnail strip below; tapping a thumbnail swaps the main image

- Product name, fabric type badge, price per yard prominently displayed

- Quantity selector: +/- buttons with a minimum of 1 yard and maximum of 50 yards

- Product description: fabric origin, texture description, care instructions, occasion suitability

- 'Add to Cart' button: adds selected quantity to cart and shows a toast notification

- 'Order via WhatsApp' quick-action button: skips cart and opens WhatsApp with the single item pre-filled

- Related products section: 4 products from the same category shown at the bottom

## FR-040 — Shopping Cart

- Cart accessible via icon in the top navigation bar, showing the current item count as a badge

- Cart displays: product image thumbnail, name, price per yard, quantity controls, line total, remove button

- Cart summary shows: subtotal, a note that delivery is discussed on WhatsApp, and the WhatsApp Order button

- Quantity can be adjusted directly in the cart — price updates in real time

- Removing an item shows a brief undo option for 3 seconds before permanent removal

- Empty cart state: illustration + 'Your cart is empty' message + 'Browse Fabrics' button

- Cart persists across page refreshes using localStorage

## FR-050 — WhatsApp Checkout Flow

- The 'Order via WhatsApp' button generates a pre-filled WhatsApp message and opens it in WhatsApp

- Auto-generated message format:

Hello! I'd like to order the following from Latex Fabrics:

[Product Name] — [Qty] yards @ ₦[Price]/yard = ₦[Total]
[Product Name 2] — ...

Cart Total: ₦[Grand Total]

My name: [editable field]
Delivery/Pickup preference: [editable field]

Please confirm availability. Thank you!

- Before opening WhatsApp, a modal prompts the customer to enter their name and delivery preference

- The WhatsApp number used is Mrs. Adewole's verified business number

- After the WhatsApp handoff, the app shows a confirmation screen: 'Order sent! We'll respond within a few hours.'

## FR-060 — About Page

- Mrs. Adewole's business story, founded year, and brand values

- Two location cards with address, embedded Google Maps link, and opening hours

- Photo gallery section (optional at launch — placeholder if no photos provided)

## FR-070 — Contact Page

- Store addresses for both Oshodi locations

- Phone number with tap-to-call functionality

- WhatsApp button linking directly to Mrs. Adewole's number

- Opening hours displayed clearly for both locations

# 4. Non-Functional Requirements

| ID | Category | Requirement |
|---|---|---|
| NFR-001 | Security | All external API calls made over HTTPS only |
| NFR-002 | Accessibility | WCAG 2.1 AA compliance — proper alt text, contrast ratios, keyboard navigation |
| NFR-003 | SEO | All pages have unique meta titles, descriptions, and Open Graph tags for WhatsApp link previews |
| NFR-004 | Browser Support | Chrome 90+, Safari 14+, Firefox 90+ on mobile and desktop |
| NFR-005 | Scalability | Product catalog must support up to 500 SKUs without UI degradation |
| NFR-006 | Data | No personal customer data stored — only cart data in localStorage |

# 5. Tech Stack Recommendation

| Layer | Technology | Reason |
|---|---|---|
| Frontend Framework | React + TypeScript | Type safety, component reuse, your existing stack |
| Styling | Tailwind CSS | Rapid UI, consistent design tokens, your existing stack |
| State Management | Zustand | Lightweight cart state — simpler than Redux for this scale |
| Routing | React Router v6 | Client-side routing for PWA experience |
| PWA | Vite PWA Plugin | Auto-generates manifest and service worker |
| Backend / API | Node.js + Express | Same JS ecosystem, easy to learn alongside frontend |
| Database | PostgreSQL + Prisma | Type-safe ORM, great for product catalog |
| Hosting | Vercel (frontend) | Free tier, auto-deploy from GitHub, great for PWAs |
| Backend Hosting | Railway or Render | Free tier for Node.js + Postgres |
