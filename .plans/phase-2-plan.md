# Phase 2 Plan — Frontend Development (React + TS + Tailwind PWA)

Source of truth: Figma file cPOo1oa69b6p43JoHqzgFh + docs/ (Royal Velvet palette per CLAUDE.md).
Decisions: static JSON catalog, clean rebuild of src/, zustand, @fontsource, no backend.
GSD rule: max ~3 tasks per session; update STATE.md after each chunk; commit per chunk.

## Chunk A — Foundation (session 1)
1. Dependencies + tokens: remove @tanstack/react-query + axios; add zustand,
   @fontsource/playfair-display, @fontsource/lato. Rewrite tailwind.config.js with Royal
   Velvet brand colors (burgundy/burgundyDark/gold/goldDark/wine/ivory/charcoal/muted/whatsapp
   + feedback), font families, radii. index.css: font imports, base styles, Royal Lace
   pattern utility (inline SVG data-URI background).
2. Teardown + skeleton: delete old pages/components/context/services/hooks (keep src/assets);
   new structure: src/config.ts (WhatsApp number placeholder, categories, store info),
   src/types/product.ts, src/data/products.json (~12 seed SKUs reusing existing images),
   src/lib/ (formatNaira, buildWhatsAppMessage, wa.me link helper).
3. Stores + shell: zustand cartStore + wishlistStore (persist → localStorage); router with all
   routes lazy-loaded (/ /shop /shop/:id /search /cart /wishlist /about /contact /offline *);
   Layout shell: Navbar (mobile+desktop), BottomNav (mobile), Footer (desktop+home/about),
   with live cart/wishlist count badges.

## Chunk B — Component library (session 2)
4. UI primitives: Button (primary/whatsapp/outline/ghost/danger × states), badges (fabric type,
   stock, cart count), category Pill, Input, SearchBar, QuantitySelector, Radio, Toast system
   (3s auto-dismiss + undo variant).
5. Product components: ProductCard (default/out-of-stock/skeleton), CategoryTile, CartItem row,
   LocationCard.
6. SCR-001 Home: hero w/ pattern, trust bar, category grid, featured products scroll, about
   strip, WhatsApp band, mobile footer. Desktop responsive variants per Figma.

## Chunk C — Shop flow (session 3)
7. SCR-002 Catalog /shop: category filter pills synced to URL params, sort dropdown, responsive
   grid (2/3/4 col), load-more pagination, SCR-002-EMPTY + skeleton loading states.
8. SCR-003 Product Detail: gallery + thumbnails, qty selector with live ₦ calc (1–50), add to
   cart toast, single-item WhatsApp order, accordion sections, related products, share.
9. SCR-004 Search: 400ms debounce, case-insensitive partial match, filter pills on results,
   SCR-004-EMPTY with suggestions.

## Chunk D — Cart + checkout (session 4)
10. SCR-005 Cart: item rows w/ qty controls, real-time subtotal, remove with 3s undo toast,
    SCR-005-EMPTY, localStorage persistence.
11. SCR-006 WhatsApp checkout modal: bottom sheet (mobile) / centered (desktop), name +
    delivery preference (required) + notes (200 chars), message per brand-guidelines §9.3
    format, wa.me handoff, "Order Sent!" confirmation state. Focus-trapped, Esc closes.
12. SCR-007 Wishlist: saved grid, heart toggles everywhere, Order All via WhatsApp.

## Chunk E — Static pages + PWA (session 5)
13. SCR-008 About + SCR-009 Contact (location cards, tap-to-call, hours) + SCR-012 404.
14. PWA: manifest (Royal Velvet theme #451822, LF monogram icons 192/512), SCR-010 offline
    page + offline banner, SCR-011 custom install prompt (2nd visit), precache catalog+images.
15. Polish: focus-visible rings, aria labels on steppers/nav, reduced-motion, page fade
    transitions, desktop breakpoint sweep, remove console.logs.

## VERIFY (session 6)
- Full user flow at 375px + 1280px in browser; Lighthouse (PWA 90+, perf 85+ mobile);
  bundle size check ≤200KB gz; offline test; ship checklist → SHIP per chunk commits
  ([phase-2] ...) and close phase in STATE.md.

## Pending inputs
- Mrs. Adewole's real WhatsApp business number + store phone number (placeholder until then)
- Real product photography (using existing src/assets images as stand-ins)
