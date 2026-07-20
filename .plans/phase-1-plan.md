# Phase 1 Plan — UI/UX Design in Figma (12 Customer Screens)

Source of truth: docs/wireframe-spec.md (SCR-001…SCR-012), docs/design-system.md,
docs/brand-guidelines.md. Built natively in Figma via MCP on "Habeeb Adewole's team".

## Build order

### Chunk A — Foundations (one session)
1. Create Figma file "Latex Fabrics — UI/UX V1"
2. Variables: color tokens (Heritage Gold #C9A84C, Deep Mahogany #3D2B1F, Ivory Linen #F5F0E8,
   Charcoal #1A1A1A, Muted Brown #8C7B6B, WhatsApp Green #25D366, Error #C0392B, Success #27AE60),
   spacing scale, radius scale (4/8/12/16/full)
3. Text styles: Playfair Display display, Georgia H1/H2, Lato H3/H4/body/small/price/CTA per
   brand-guidelines type scale

### Chunk B — Component library (one session)
4. Buttons: Primary (gold), WhatsApp (COMP-008), Outline, Ghost, Danger — with hover/disabled variants
5. COMP-006 Product Card (default, hover, skeleton, out-of-stock)
6. COMP-007 Category Filter Pills (active/inactive)
7. COMP-009 Search Bar (desktop/mobile, focus state)
8. COMP-001 Navigation Bar (desktop + mobile) · COMP-002 Mobile Bottom Nav
9. COMP-003 Footer · COMP-004 Toasts · COMP-005 Offline Banner
10. Inputs, quantity selector, badges, location card

### Chunk C — Core journey screens, mobile-first 375px (1–2 sessions)
11. SCR-001 Home (hero, trust bar, categories, featured, about strip, WhatsApp band)
12. SCR-002 Catalog /shop (filter pills, sort row, 2-col grid, load more)
13. SCR-003 Product Detail (gallery, info, qty selector, dual CTAs, tabs, related)
14. SCR-005 Cart (item rows, summary panel, empty state)
15. SCR-006 WhatsApp Checkout Modal (form, confirmation state)

### Chunk D — Remaining screens (one session)
16. SCR-004 Search Results (incl. empty state)
17. SCR-007 Wishlist · SCR-008 About · SCR-009 Contact
18. SCR-010 Offline · SCR-011 PWA Install Prompt · SCR-012 404

### Chunk E — Desktop variants + states pass (one session)
19. Desktop (1280) layouts for SCR-001/002/003/005
20. Empty/loading/error states per wireframe-spec section 08
21. Final review against spec checklist → SHIP (user approval)

## Rules
- Mobile-first: every screen designed at 375px before desktop
- Ivory Linen backgrounds, never pure white; WhatsApp Green only on WhatsApp buttons
- All components use variables — no hardcoded hex on screens
- Max ~3 chunks per Claude session (GSD rule); update STATE.md after each chunk
