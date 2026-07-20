# Latex Fabrics PWA

Premium fabric e-commerce PWA for Latex Fabrics (Mrs. Adewole Latifat's 20-year Lagos fabric business, Oshodi). Customers browse the catalog and order via **WhatsApp** — that is the checkout. Mobile-first, offline-capable, built for low-end Android on 3G.

## Source-of-truth documents (read before designing or building anything)

- [docs/PRD.md](docs/PRD.md) — product goals, personas, V1 scope
- [docs/FRD.md](docs/FRD.md) — functional requirements per page (FR-001…FR-070)
- [docs/design-system.md](docs/design-system.md) — tokens, components, Tailwind classes
- [docs/wireframe-spec.md](docs/wireframe-spec.md) — all 18 screens (SCR-001…SCR-018), components, states, breakpoints
- [docs/brand-guidelines.md](docs/brand-guidelines.md) — colors, typography, voice, WhatsApp message format

## Non-negotiable brand tokens

- Heritage Gold `#C9A84C` (primary/CTAs/prices) · Deep Mahogany `#3D2B1F` (navbar/footer/dark surfaces) · Ivory Linen `#F5F0E8` (backgrounds — **never pure white**) · Charcoal `#1A1A1A` (body text — never `#000`) · Muted Brown `#8C7B6B` (secondary text) · WhatsApp Green `#25D366` (**WhatsApp order buttons only**)
- Fonts: Playfair Display (hero/display only), Georgia (H1/H2), Lato (body/UI/buttons)
- Radius: 8px buttons, 12px cards · Touch targets ≥ 44px · Prices always `₦8,500` format in gold bold
- Categories: All · Lace · Swiss Voile · Cord Lace · Sequins · Dry Lace · Luxury Fabrics
- Tagline: "Woven in Heritage. Draped in Luxury."

## V1 scope (per PRD)

- IN: Home, Catalog (/shop), Product Detail, Search, Cart, WhatsApp checkout modal, Wishlist, About, Contact, Offline page, PWA install
- OUT: online payments, customer accounts/login, delivery tracking, reviews
- Admin screens (SCR-013…SCR-018) exist in the wireframe spec but the PRD marks admin/CMS out of scope for V1 — resolve with the owner before building them.

## Known divergences in current code (pre-docs, needs rework)

The existing `src/` was written before these docs: green `#00A86B` palette, left sidebar layout, customer auth/orders/profile routes, and Kente/Ankara/Adire categories all contradict the spec above. Treat the docs as authority, not the existing code.

## Workflow

Follows GSD (DISCUSS → PLAN → EXECUTE → VERIFY → SHIP). Keep STATE.md updated; plans live in `.plans/`. Commits: `[phase-N] description`.
