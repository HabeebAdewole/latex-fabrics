# STATE.md — Latex Fabrics PWA

## Project Overview
Progressive Web App for Latex Fabrics — Mrs. Adewole Latifat's premium fabric business in Oshodi, Lagos.
Digital catalog + WhatsApp checkout. React + TypeScript + Vite + Tailwind. Specs live in /docs (PRD, FRD,
design system, wireframe spec, brand guidelines) — those documents are the source of truth.

## Phase Progress
- [x] Phase 0: Brand identity, PRD, FRD, design system, wireframe spec finalized (docs in /docs)
- [ ] Phase 1: UI/UX design — ALL 12 customer screens, natively in Figma  ← YOU ARE HERE
- [ ] Phase 2: Frontend development (rebuild src/ to match approved designs)
- [ ] Phase 3: Backend integration (catalog API, WhatsApp flow)
- [ ] Phase 4: Testing, PWA polish, deployment

## Current Phase Goal
Design the complete UI/UX for the 12 customer-facing screens (SCR-001 → SCR-012) natively in Figma,
via the Figma MCP connector: variables/tokens first, then component library, then screen assembly.
No application code until this phase ships.

## Key Decisions Made
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

## PHASE 1 STATUS: EXECUTE + VERIFY COMPLETE — awaiting owner review, then SHIP (git commit)

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
Phase 2: Rebuild src/ against the approved Figma designs — correct tokens in tailwind.config,
top navbar + bottom nav layout, remove auth/admin scope creep, Zustand cart, WhatsApp checkout.

## Last Session Date
2026-07-20
