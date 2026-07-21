# STATE.md — Latex Fabrics PWA

## Project Overview
Progressive Web App for Latex Fabrics — Mrs. Adewole Latifat's premium fabric business in Oshodi, Lagos.
Digital catalog + WhatsApp checkout. React + TypeScript + Vite + Tailwind. Specs live in /docs (PRD, FRD,
design system, wireframe spec, brand guidelines) — those documents are the source of truth.

## Phase Progress
- [x] Phase 0: Brand identity, PRD, FRD, design system, wireframe spec finalized (docs in /docs)
- [x] Phase 1: UI/UX design — ALL 12 customer screens, natively in Figma (SHIPPED 2026-07-20,
      commit 6d61782)
- [ ] Phase 2: Frontend development (rebuild src/ to match approved designs)  ← NEXT
- [ ] Phase 3: Backend integration (catalog API, WhatsApp flow)
- [ ] Phase 4: Testing, PWA polish, deployment

## Current Phase Goal
Phase 2 — Frontend development: rebuild src/ to match the shipped Figma designs
(https://www.figma.com/design/cPOo1oa69b6p43JoHqzgFh). All 12 customer screens, Royal Velvet
palette, Royal Lace pattern, working cart/wishlist (localStorage), WhatsApp checkout modal,
installable offline-capable PWA. Budgets: ≤200KB gzipped core, FCP <2s Fast 3G, WCAG AA,
touch targets ≥44px. Plan: .plans/phase-2-plan.md

## Phase 2 Decisions (DISCUSS, 2026-07-20)
- Catalog = static JSON in repo (src/data/products.json), precached by service worker for
  offline. No backend in V1; API can slot behind the same interface in V2.
- Existing src/ = clean rebuild. Keep Vite/TS/Tailwind/ESLint config + src/assets images;
  delete green-palette pages, sidebar layout, auth/orders/profile/admin routes and contexts.
- Deps: ADD zustand (cart+wishlist, persist middleware), @fontsource/playfair-display,
  @fontsource/lato. REMOVE @tanstack/react-query, axios (nothing to fetch).
- Fonts self-hosted via @fontsource (Playfair 700, Lato 400/700); Georgia from system stack.
- WhatsApp number = placeholder constant in src/config.ts until Mrs. Adewole's real number
  is provided (pending input, not a blocker).
- PWA manifest: theme #451822 (Deep Wine), LF monogram icons to generate.
- REPOS (2026-07-20): frontend = this repo (github.com/HabeebAdewole/latex-fabrics, local dev
  ahead of origin/dev by the Phase-1 commits — push when ready). Backend =
  github.com/HabeebAdewole/latex-fabrics-backend, cloned to Desktop/Projects/latex-fabrics-backend.
  Backend status: Express 5 + Prisma 6 + Postgres; only auth utilities exist, app.ts wires NO
  routes yet; Prisma schema models accounts/orders/payments (V2+ scope per PRD). Decision:
  backend is the Phase 3 track (catalog API). products.json in the frontend mirrors the Prisma
  Product model (id, name, description, category, pricePerYard, stockQuantity, images, colors)
  so the Phase 3 data-layer swap is trivial. Known backend nit: schema misspells
  passwordRestToken → fix in Phase 3.

## Key Decisions Made
- PALETTE REVISION (2026-07-20, post-Phase-1 review): owner found Heritage Gold palette dull →
  adopted "Royal Velvet": Burgundy #7B2D3B primary (hover #632331), Royal Gold #C6A032 accents,
  Deep Wine #451822 dark surfaces, Blush Ivory #FAF3EF bg, Rose Taupe #9C7F85 secondary text.
  Applied via Figma variable primitives (whole file recolored automatically); docs updated
  (CLAUDE.md, design-system.md, brand-guidelines.md v1.1 note). Bonus: white-on-burgundy CTAs
  now pass contrast (~9:1) where white-on-gold failed (~2.1:1).
- BRAND PATTERN (2026-07-20): added "Pattern/RoyalLace" — gold lace-rosette + adire diamond
  lattice at 11–14% opacity over all wine sections (cover, Home heroes mobile+desktop, WhatsApp
  bands, About hero + CTA strip). Spec + node IDs in .plans/figma-build-state.json. Phase 2:
  implement as tiled inline-SVG background-image on wine sections.
- UI/UX first — no code until designs are done (decided 2026-07-20)
- Design medium: natively in Figma via the claude.ai Figma connector (authenticated, working)
- Figma team: "Habeeb Adewole's team" (team::1276203698674935225)
- Scope: 12 customer screens only; admin screens deferred (PRD says out of V1 scope; wireframe spec
  says P0 — conflict to be resolved with owner before any admin work)
- Docs converted to markdown in /docs and indexed in CLAUDE.md; .docx sources in
  Desktop/Projects/Latex Documents
- Existing src/ code predates the specs and contradicts them (green palette, sidebar layout,
  customer auth) — will be reworked in Phase 2, designs take authority

## Completed Tasks This Phase
- PHASE 2 Chunk D (cart + checkout) DONE on branch phase-2/chunk-d-cart-checkout (stacked on
  chunk-c; PR base = chunk-c until C merges): SCR-005 Cart (item rows w/ qty controls + undo
  remove toast, real-time subtotal, sticky summary desktop, empty state) · SCR-006 WhatsApp
  Checkout modal (bottom sheet mobile / centered desktop, name+delivery required validation,
  notes 200-char counter, message EXACTLY per brand §9.3, wa.me handoff, "Order Sent!"
  confirmation, focus-trap + Esc + overlay close) · SCR-007 Wishlist (saved grid, Order All
  via WhatsApp excluding out-of-stock, empty state). Retrofitted SCR-003 Product Detail's
  WhatsApp button to open the modal too (spec-correct name/delivery capture). New: CheckoutModal,
  useCartLines hook. Verified live: cart totals (5 items ₦49,500), validation blocks invalid
  send, message format exact, confirmation shows, cart PRESERVED after send (unconfirmed intent),
  wishlist Order-All skips OOS, both empty states. Build 94.6KB gz core.
  - Bug fixed mid-chunk: auto-clearing cart on send unmounted the modal before the confirmation
    could render → decided NOT to clear cart (WhatsApp is an unconfirmed intent; spec never says
    to clear; safer UX). Confirmation now renders and cart persists.
- PHASE 2 Chunk C (shop flow) DONE on branch phase-2/chunk-c-shop-flow (stacked on chunk-b,
  PR base = chunk-b branch until B merges): SCR-002 Catalog (URL-synced category pills + sort,
  responsive 2/3/4-col grid, load-more pagination, empty state) · SCR-003 Product Detail
  (gallery+thumbs, live ₦ qty calc 1–50, add-to-cart toast, single-item WhatsApp order deep
  link, wishlist, share via navigator.share/clipboard, Description/Fabric/Care/Occasion
  accordion, related products, out-of-stock → "Notify me on WhatsApp") · SCR-004 Search (400ms
  debounce, case-insensitive partial match on name+category, empty state + suggestion chips).
  New shared components: ProductGrid, EmptyState, Accordion. Verified live in browser: category
  filter (Cord Lace→2), sort price-asc (₦6,800→7,200→8,500), load-more (8→12), qty calc
  (2×₦8,500=₦17,000) + WA link carries qty, out-of-stock path, search debounce+partial+empty.
  Build 94.5KB gz core.
- PHASE 2 Chunk B (component library + Home) DONE on branch phase-2/chunk-b-components:
  Button (5 variants × 2 sizes + buttonVariants for links) · FabricBadge/StockBadge · Pill ·
  Input/Textarea · QuantitySelector (44px targets, aria) · Radio · Toast system (3s, undo
  action, aria-live) · WhatsAppIcon (official glyph) · ProductCard (+skeleton, wishlist heart,
  add-to-cart toast) · CategoryTile · CartItemRow · LocationCard · Full SCR-001 Home (7
  sections, mobile scroll → desktop grid). Verified in browser: cart/wishlist persist to
  localStorage, badges update live, toasts stack, card→detail routing works, all brand tokens
  assert correct (wine+pattern hero, gold prices, Playfair H1). Build: 93.4KB gz core.
- PHASE 2 Chunk A (foundation) DONE on branch phase-2/chunk-a-foundation:
  deps swapped (zustand + @fontsource in; react-query + axios out) · Royal Velvet tailwind
  tokens · Royal Lace CSS pattern utility (inline SVG) · old src/ torn down · config.ts
  (WhatsApp placeholder, categories, locations) · products.json (12 SKUs mirroring Prisma
  Product model) · lib (format/catalog/whatsapp per brand §9.3) · zustand cart+wishlist stores
  (persist) · router with lazy routes · Navbar/BottomNav/Footer shell · PWA manifest Royal
  Velvet. Build passes: 79.7KB gz core (budget 200KB). Verified in browser: clean DOM, no
  console errors.
- Docs converted and added to repo context (CLAUDE.md + docs/)
- STATE.md created; .plans/phase-1-plan.md created
- Figma file created: https://www.figma.com/design/cPOo1oa69b6p43JoHqzgFh (Latex Fabrics — UI/UX V1)
- Chunk A (foundations) DONE: 4 variable collections, 12 color primitives, 18 semantic color
  tokens (aliased + scoped + CSS code syntax), 7 spacing + 5 radius tokens, 10 text styles,
  3 warm shadow effect styles. All IDs in .plans/figma-build-state.json
- Phase 2 docs pages DONE: 📕 Cover (mahogany/gold brand cover) + 🎨 Foundations page with
  color-token swatch grid (12) and typography specimens (10), verified via screenshots
- Chunk B (component library) DONE: 17 icons · Button set (5 styles × 3 states, Label prop) ·
  Badge/FabricType · Badge/CartCount · Badge/Stock (3 statuses) · Pill/Category (Active/Inactive) ·
  Input (Default/Focus/Error) · SearchBar · QuantitySelector · Radio · ProductCard
  (Default/Hover/OutOfStock/Skeleton) · Navbar Desktop+Mobile · BottomNav · Toast (Success/Info) ·
  OfflineBanner · Footer/Desktop. All variable-bound, validated via screenshots.
- Chunk C (core journey screens, 375px mobile) DONE: SCR-001 Home (hero, trust bar, category
  tiles, featured products, about strip, WhatsApp band, footer, bottom nav) · SCR-002 Catalog
  (breadcrumb header, filter pills, sort row, 2-col grid, load more) · SCR-003 Product Detail
  (gallery + thumbs, info, quantity + live calc, dual CTAs, accordion, related) · SCR-005 Cart
  (CartItem rows, summary card, WhatsApp CTA) · SCR-006 Checkout bottom sheet + SCR-006b Order
  Sent confirmation. Plus 2 new components: CategoryTile, CartItem. All screenshot-validated.
- Chunk D (remaining screens) DONE: SCR-004 Search Results + empty state · SCR-007 Wishlist
  (Order All via WhatsApp) + empty state · SCR-008 About (hero, story, why-choose-us, location
  cards, CTA strip) · SCR-009 Contact (WhatsApp block, location cards, hours table) · SCR-010
  Offline · SCR-011 PWA Install Prompt (LF app icon sheet) · SCR-012 404. Plus LocationCard
  component. All 12 customer screens from the wireframe spec now exist at 375px.
- Chunk E (polish) DONE: Desktop 1280 variants of Home, Catalog (4-col grid), Product Detail
  (2-col gallery/info, side-by-side CTAs), Cart (items + sticky summary) · SCR-002-LOADING
  skeleton grid · SCR-005-EMPTY cart state · Final QA audit passed: 25 pages, 42 variables,
  10 text styles, 3 effect styles, 21 screens/states verified, 0 missing.

## PHASE 1 STATUS: SHIPPED — commit 6d61782 on dev, 2026-07-20

## Issues Found & Fixed
- Georgia is not available in Figma → using Lora as the on-canvas stand-in for H1/H2/Tagline
  (closest Georgia-style serif; has the SemiBold the spec needs). The coded app will still use
  real Georgia via the system font stack — this substitution is Figma-only.
- Button hover tints rendered solid → setBoundVariableForPaint discards paint opacity; fixed by
  reapplying opacity after binding.
- ProductCard OutOfStock overrides silently skipped → instances are named after their component
  set, not the variant; fixed by resolving mainComponent parent and patching props by full key.
- Input Focus/Error variants collapsed (resize() after AUTO sizing resets to FIXED, which
  destroyed the field frames) → rebuilt fields from the Default variant, heights now 72/94/72.
- Same resize-after-AUTO trap hit CartItem (rows rendered 10px tall on the Cart screen) →
  fixed on the main component, all instances inherited. Catalog sort chip clipped → set to hug.

## Blockers
- (none — Figma connector is authenticated)

## Next Phase Preview
Phase 2: Rebuild src/ against the shipped Figma designs — correct tokens in tailwind.config
(Heritage Gold palette, replace green), top navbar + bottom nav layout (remove sidebar),
strip customer auth/admin scope creep, Zustand cart, WhatsApp checkout flow, real Georgia
font stack. Design source: https://www.figma.com/design/cPOo1oa69b6p43JoHqzgFh + docs/.
Start with DISCUSS: decide catalog data source (static JSON vs API) before any code.

## Last Session Date
2026-07-20
