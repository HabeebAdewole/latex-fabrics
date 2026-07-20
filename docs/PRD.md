LATEX FABRICS



Product Requirements Document



PWA E-Commerce Store — Version 1.0




447 Agege Motor Road, Bolade Bus Stop, Oshodi, Lagos
Version 1.0   |   21 March 2026

# 1. Executive Summary

This Product Requirements Document defines the digital storefront for Latex Fabrics — a Progressive Web App (PWA) that brings Mrs. Adewole Latifat's 20-year fabric business online. The product enables customers to browse premium fabrics, manage a cart, and place orders seamlessly via WhatsApp, replacing manual in-person and phone-based orders with a fast, elegant, mobile-first experience.

# 2. Problem Statement

Latex Fabrics currently operates two physical Lagos locations and relies on word-of-mouth, physical visits, and informal phone/WhatsApp communication for sales. This limits reach, creates friction for customers who cannot visit in person, and makes inventory and order tracking difficult. There is no digital presence capturing the brand's 20+ years of reputation.

# 3. Goals & Success Metrics

## 3.1 Business Goals

- Establish Latex Fabrics as a trusted, discoverable online fabric brand in Lagos

- Increase customer reach beyond the two physical Oshodi locations

- Streamline the order process — reduce back-and-forth before a purchase intent is confirmed

- Preserve and digitize Mrs. Adewole's brand reputation and product catalog

## 3.2 Success Metrics

| Metric | Target (3 months post-launch) |
|---|---|
| WhatsApp orders per week | 20+ initiated order conversations |
| Product catalog size | 50+ SKUs live at launch |
| PWA install rate | 15% of mobile visitors install the PWA |
| Cart to WhatsApp conversion | > 30% of carts proceed to WhatsApp checkout |
| Page load time (3G) | Under 3 seconds on mobile |

# 4. Target Users

## 4.1 Primary User Personas

| Persona 1 — The Event Planner (Adaeze, 34) Lagos-based event coordinator who buys aso-ebi fabric in bulk for weddings and owambe parties. She shops on her phone, needs to see fabric texture clearly, and always confirms orders via WhatsApp. Values trust and speed above all else. |
|---|

| Persona 2 — The Fashion Designer (Bello, 28) A tailor in Surulere who sources lace, Swiss voile, and sequin fabrics regularly. He needs variety, clear pricing, and the ability to quickly ask about fabric availability before visiting the store. Uses both Instagram and WhatsApp for business. |
|---|

| Persona 3 — The Retail Customer (Ngozi, 45) A professional woman who buys fabric for personal occasions — owambe, church, traditional ceremonies. She values the premium feel of the store, is not very tech-savvy, and relies heavily on WhatsApp for communication and trust-building. |
|---|

# 5. Scope

## 5.1 In Scope — Version 1.0

- PWA storefront with full mobile-first responsive design

- Landing / Home page

- Product catalog with category filtering

- Product detail page with image gallery

- Shopping cart with item management

- WhatsApp checkout flow (cart summary auto-generated as WhatsApp message)

- About page with Mrs. Adewole's story and store locations

- Contact page with store addresses and hours

- PWA installability (manifest + service worker)

## 5.2 Out of Scope — Version 1.0

- Online payment processing (Paystack, Flutterwave) — planned for V2

- User accounts and order history

- Admin dashboard / CMS for catalog management

- Delivery tracking

- Customer reviews and ratings

# 6. Constraints & Assumptions

- Many target users are on low-end Android devices with slow 3G/4G connections — performance is critical

- WhatsApp is the primary and preferred communication channel for the target market

- Product catalog will be managed manually at launch — no CMS required in V1

- The business owner (Mrs. Adewole) manages WhatsApp personally — no automated bot required in V1

- All prices are in Nigerian Naira (NGN)

# 7. Timeline

| Phase | Duration | Deliverable |
|---|---|---|
| Phase 0 | 1 week | Brand identity, PRD, FRD, design system finalized |
| Phase 1 | 2–3 weeks | UI/UX design (Stitch + Figma polish) |
| Phase 2 | 3–4 weeks | Frontend development (React + TypeScript + Tailwind) |
| Phase 3 | 2–3 weeks | Backend integration (catalog API, WhatsApp flow) |
| Phase 4 | 1 week | Testing, PWA setup, deployment |
| Launch | — | Go live — share link with Mrs. Adewole's existing customer base |
