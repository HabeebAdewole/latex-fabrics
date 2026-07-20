LATEX FABRICS

WIREFRAME & SCREEN SPECIFICATION

PWA E-Commerce Store — Complete Screen Inventory & Functional Specification

Version 1.0   ·   2025   ·   Confidential

# Table of Contents

01  —  Document Overview & How to Use This Document

02  —  Screen Inventory & Priority Matrix

03  —  User Flow Diagrams

04  —  Global Components (Shared Across All Screens)

05  —  Public Screens — Customer-Facing

SCR-001  Home / Landing Page

SCR-002  Product Catalog Page

SCR-003  Product Detail Page

SCR-004  Search Results Page

SCR-005  Shopping Cart Page

SCR-006  WhatsApp Checkout Modal

SCR-007  Wishlist / Favorites Page

SCR-008  About Page

SCR-009  Contact Page

SCR-010  Offline / No Internet Page

SCR-011  PWA Install Prompt

SCR-012  404 Not Found Page

06  —  Admin Screens

SCR-013  Admin Login

SCR-014  Admin Dashboard

SCR-015  Product List (Manage Catalog)

SCR-016  Add / Edit Product Form

SCR-017  Bulk Upload Page

SCR-018  Analytics Overview

07  —  Component Specifications

08  —  Screen States (Empty, Loading, Error)

09  —  Responsive Breakpoints

10  —  Stitch Prompt Templates

01
DOCUMENT OVERVIEW
Purpose, scope, and how to use this document

## 1.1  Purpose

This Wireframe & Screen Specification document is the single source of truth for every screen, component, and interaction in the Latex Fabrics PWA. It defines what each screen must contain, what it must do, how it connects to other screens, and what states it must handle.

This document is intended for use by:

- UI/UX designers — to understand the full scope of screens before designing

- Developers — to understand the functional requirements of each screen during build

- AI design tools (e.g. Google Stitch) — as a structured input for generating screen designs

- Project stakeholders — to review and approve scope before development begins

## 1.2  Priority Levels

| Priority | Definition |
|---|---|
| P0 — Must Have | Required for launch. The app cannot go live without this screen. Core user journey screens. |
| P1 — Should Have | Important for a complete experience. Build after P0 screens are stable. |
| P2 — Nice to Have | Enhances the product. Can be deferred to Version 2 without blocking launch. |

## 1.3  Screen ID Convention

Each screen is assigned a unique ID in the format SCR-XXX. Components shared across screens are prefixed COMP-XXX. Screen states are referenced as SCR-XXX-STATE (e.g. SCR-002-EMPTY for the empty catalog state).

02
SCREEN INVENTORY & PRIORITY MATRIX
Complete list of all screens and their classification

| Screen ID | Screen Name | Priority |
|---|---|---|
| SCR-001 | Home / Landing Page | P0 — Must Have |
| SCR-002 | Product Catalog Page | P0 — Must Have |
| SCR-003 | Product Detail Page | P0 — Must Have |
| SCR-004 | Search Results Page | P0 — Must Have |
| SCR-005 | Shopping Cart Page | P0 — Must Have |
| SCR-006 | WhatsApp Checkout Modal | P0 — Must Have |
| SCR-007 | Wishlist / Favorites Page | P1 — Should Have |
| SCR-008 | About Page | P1 — Should Have |
| SCR-009 | Contact Page | P1 — Should Have |
| SCR-010 | Offline / No Internet Page | P0 — Must Have |
| SCR-011 | PWA Install Prompt | P1 — Should Have |
| SCR-012 | 404 Not Found Page | P1 — Should Have |
| SCR-013 | Admin Login | P0 — Must Have |
| SCR-014 | Admin Dashboard | P0 — Must Have |
| SCR-015 | Product List (Manage Catalog) | P0 — Must Have |
| SCR-016 | Add / Edit Product Form | P0 — Must Have |
| SCR-017 | Bulk Upload Page | P1 — Should Have |
| SCR-018 | Analytics Overview | P2 — Nice to Have |

03
USER FLOW DIAGRAMS
How users navigate between screens

## 3.1  Primary Customer Flow — Browse & Order

| Flow Steps Home (SCR-001) Catalog (SCR-002) Product Detail (SCR-003) Cart (SCR-005) WhatsApp Checkout Modal (SCR-006) Order Sent Confirmation (within SCR-006) WhatsApp Checkout Modal (SCR-006) — single item flow |
|---|

## 3.2  Search Flow

| Flow Steps Any screen (via Navbar search icon) Search Results (SCR-004) Product Detail (SCR-003) |
|---|

## 3.3  Admin Content Management Flow

| Flow Steps Admin Login (SCR-013) Admin Dashboard (SCR-014) Product List (SCR-015) Add / Edit Product Form (SCR-016) Product List (SCR-015) — updated with new product Bulk Upload Page (SCR-017) Product List (SCR-015) — updated with imported products |
|---|

## 3.4  Offline Flow

| Flow Steps Customer opens app with no internet connection Catalog (SCR-002) — served from cache, full browsing available Offline Page (SCR-010) — shown with instructions to connect and reload |
|---|

04
GLOBAL COMPONENTS
UI elements shared across all screens

## COMP-001  —  Navigation Bar

| Element | Specification |
|---|---|
| Appears on | All public screens (SCR-001 through SCR-012) |
| Position | Top of screen, sticky — remains visible on scroll |
| Background | Deep Mahogany (#3D2B1F) |
| Left element | Latex Fabrics logo — tapping returns to Home (SCR-001) |
| Center (desktop) | Navigation links: Home · Shop · About · Contact |
| Right elements | Search icon, Wishlist icon (with count badge), Cart icon (with count badge) |
| Mobile behavior | Logo left, hamburger menu icon right. Tapping hamburger opens side drawer with nav links |
| Cart badge | Heritage Gold (#C9A84C) circle with white number — shows total cart item count |
| Offline indicator | Small amber dot beside logo when app is in offline mode |

## COMP-002  —  Mobile Bottom Navigation

| Element | Specification |
|---|---|
| Appears on | All public screens on mobile only (below 640px) |
| Position | Fixed bottom — stays above device home bar |
| Background | Deep Mahogany (#3D2B1F) |
| Tabs | Home · Shop · Search · Wishlist · Cart (with count badge) |
| Active state | Heritage Gold icon and label |
| Inactive state | Ivory Linen at 50% opacity |
| Height | 64px — enough for comfortable thumb tap targets (44px min) |

## COMP-003  —  Footer

| Element | Specification |
|---|---|
| Appears on | All public screens on desktop; Home and About on mobile |
| Background | Deep Mahogany (#3D2B1F) |
| Column 1 | Latex Fabrics logo + tagline + short brand description |
| Column 2 | Quick links: Shop · About · Contact · Privacy Policy |
| Column 3 | Store locations: both Oshodi addresses with opening hours |
| Column 4 | WhatsApp contact button + social media icons |
| Bottom bar | Copyright line, version number — Muted Brown text |

## COMP-004  —  Toast Notification

| Element | Specification |
|---|---|
| Position | Bottom center — sits above mobile bottom navigation |
| Variants | Success (item added), Info (item removed + undo), Warning, Error |
| Duration | 3 seconds auto-dismiss · Can be manually dismissed by tapping |
| Success style | Deep Mahogany background · White text · Checkmark icon |
| Undo action | Info toasts for item removal include a tappable 'Undo' link in Heritage Gold |
| Animation | Slides up from bottom on appear · Slides down on dismiss |

## COMP-005  —  Offline Banner

| Element | Specification |
|---|---|
| Appears when | Device loses internet connection mid-session |
| Position | Below the navigation bar — pushes content down |
| Style | Amber background · Dark text · Wi-Fi off icon |
| Message | 'You are browsing offline. Showing cached catalog.' |
| Dismissible | No — stays visible for the entire offline session |
| On reconnect | Banner changes to 'You are back online. Refreshing catalog...' then auto-dismisses after 3 seconds |

05
PUBLIC SCREENS
All customer-facing screens of the Latex Fabrics PWA

SCR-001  —  Home / Landing Page

Route: /     Type: Full Page     Priority: P0 — Must Have

| Purpose The first impression of Latex Fabrics. Must immediately communicate premium quality, cultural authenticity, and guide the customer toward browsing the catalog. This screen does the brand's selling. |
|---|

### Sections (Top to Bottom)

| Section | Content & Behavior |
|---|---|
| 1. Navigation Bar | COMP-001 — Deep Mahogany, logo + nav links + cart icon |
| 2. Hero Section | Full-width image of premium fabric (warm, textured). Overlay text: 'Woven in Heritage. Draped in Luxury.' Headline: 'Discover Premium Fabrics'. Two CTAs: 'Shop Now' (primary, gold) and 'Our Story' (outline). Minimum height: 80vh on desktop, 60vh on mobile. |
| 3. Trust Bar | Full-width band. Three icons with text: '20+ Years of Excellence' · 'Authentic Materials' · 'WhatsApp Ordering'. Ivory Linen background, Heritage Gold icons. |
| 4. Featured Categories | Section title: 'Shop by Category'. 4–6 visual tiles in a grid: Lace · Swiss Voile · Cord Lace · Sequins · Dry Lace · Luxury Fabrics. Each tile: fabric image background, category name overlay, tapping navigates to SCR-002 filtered by that category. |
| 5. Featured Products | Section title: 'Our Most Loved Fabrics'. Horizontal scroll on mobile, 4-column grid on desktop. 6–8 hand-picked product cards (COMP-006). 'View All Products' CTA below. |
| 6. About Strip | Two-column section: left — Mrs. Adewole quote or business story snippet; right — store image. CTA: 'Learn Our Story' linking to SCR-008. |
| 7. WhatsApp CTA Strip | Full-width Deep Mahogany band. Headline: 'Ready to Order? Chat with Us on WhatsApp.' Large WhatsApp button linking to business number. Subtext: 'Mon–Sat, 8am–6pm · Usually responds within 2 hours.' |
| 8. Footer | COMP-003 |

### Interactions

- 'Shop Now' CTA navigates to SCR-002 (full catalog, no filter)

- 'Our Story' navigates to SCR-008

- Category tiles navigate to SCR-002 with the relevant category filter pre-applied

- Product cards are tappable — navigate to SCR-003 for that product

- 'Add to Cart' on product cards adds to cart and shows COMP-004 success toast

- WhatsApp button opens WhatsApp with a generic greeting pre-filled

SCR-002  —  Product Catalog Page

Route: /shop     Type: Full Page     Priority: P0 — Must Have

| Purpose The main browsing experience. Customers discover and explore the full fabric inventory. Must be fast, filterable, and easy to scan on mobile. |
|---|

| Section | Content & Behavior |
|---|---|
| 1. Navigation Bar | COMP-001 |
| 2. Page Header | Page title: 'Our Collection'. Breadcrumb: Home > Shop. Product count: 'Showing 48 fabrics'. |
| 3. Filter Bar | Horizontal scrollable pill tabs: All · Lace · Swiss Voile · Cord Lace · Sequins · Dry Lace · Luxury. Active tab: Heritage Gold fill, white text. Inactive: transparent, muted border. On mobile: horizontally scrollable, no scrollbar visible. |
| 4. Sort & Filter Row | Left: filter icon + 'Filter' button (opens filter drawer). Right: sort dropdown — 'Sort by: Featured / Price: Low to High / Price: High to Low / Newest'. |
| 5. Product Grid | Mobile: 2 columns. Tablet: 3 columns. Desktop: 4 columns. Gap: 16px mobile, 24px desktop. Each item: COMP-006 (Product Card). |
| 6. Pagination / Load More | 'Load More' button at bottom — loads next 24 products. Show 'Showing 24 of 48 products' count above button. |
| 7. Filter Drawer (mobile) | Slides in from bottom. Sections: Category (checkboxes), Price Range (dual slider), Fabric Type. 'Apply Filters' button (gold) and 'Clear All' link at bottom. |
| 8. Footer | COMP-003 — desktop only |
| 9. Mobile Bottom Nav | COMP-002 — mobile only |

- Tapping a category pill immediately filters the grid — no page reload

- Tapping a product card navigates to SCR-003

- If no products match active filters — show SCR-002-EMPTY state (see Section 08)

- URL updates with filter parameters: /shop?category=lace&sort=price-asc

- Back button from SCR-003 returns to the same scroll position and filter state

SCR-003  —  Product Detail Page

Route: /shop/:productId     Type: Full Page     Priority: P0 — Must Have

| Purpose The decision-making screen. Customer evaluates whether to purchase. Must show the fabric richly — multiple images, full description, clear pricing, and two prominent order paths. |
|---|

| Section | Content & Behavior |
|---|---|
| 1. Navigation Bar | COMP-001 with back arrow on mobile |
| 2. Breadcrumb | Home > Shop > [Category] > [Product Name] |
| 3. Image Gallery | Primary image large (4:3). Thumbnail strip below (4–6 thumbnails). Tapping thumbnail swaps main image. Pinch-to-zoom on main image on mobile. Left/right swipe gesture to cycle images. |
| 4. Product Info Block | Fabric type badge (Heritage Gold pill). Product name (H1, large, bold). Price per yard in Heritage Gold, bold (e.g. ₦8,500/yard). Stock status: 'In Stock' (green) or 'Low Stock' (amber) or 'Out of Stock' (red). |
| 5. Quantity Selector | Label: 'Quantity (yards)'. Minus button · number input · Plus button. Minimum: 1. Maximum: 50. Input is directly editable. Real-time price calculation: '3 yards × ₦8,500 = ₦25,500' updates as quantity changes. |
| 6. Action Buttons | Full-width stack on mobile, side by side on desktop. Button 1: 'Add to Cart' — Heritage Gold background, white text. Button 2: 'Order via WhatsApp' — WhatsApp Green, white text, WhatsApp icon. |
| 7. Wishlist | Heart icon near product name. Tapping toggles wishlist state (filled/outline heart). Persists in localStorage. |
| 8. Product Description | Tabs or accordion sections: Description · Fabric Details · Care Instructions · Occasion Guide. Description: fabric origin, texture, weight, drape. Details: material composition, width, thread count where applicable. Care: washing and storage instructions. Occasions: 'Perfect for Owambe · Wedding · Traditional Ceremony' |
| 9. Share Button | Share icon. Opens native share sheet on mobile or copies product URL on desktop. Pre-filled share text: 'Check out this fabric from Latex Fabrics: [product name] — [URL]' |
| 10. Related Products | Section title: 'You Might Also Like'. Horizontal scroll of 4 product cards from same category. |
| 11. Footer | COMP-003 — desktop only |

- 'Add to Cart' button adds the product at the selected quantity and shows COMP-004 success toast

- 'Order via WhatsApp' opens SCR-006 (checkout modal) with this single product pre-loaded

- If product is Out of Stock: both action buttons are disabled, replaced with 'Notify me on WhatsApp' button

- Image gallery should support keyboard navigation (left/right arrow keys) on desktop

SCR-004  —  Search Results Page

Route: /search?q=     Type: Full Page     Priority: P0 — Must Have

| Purpose Returns results for a customer's search query. Should feel fast and helpful — showing relevant products and offering filters to narrow down results. |
|---|

| Section | Content & Behavior |
|---|---|
| 1. Navigation Bar | COMP-001 with search bar expanded and pre-filled with query |
| 2. Results Header | Text: 'Results for "[query]"' — 23 fabrics found'. Clear search (X) icon beside query. |
| 3. Filter Bar | Same pill tabs as SCR-002 — filters apply on top of the search results |
| 4. Product Grid | Same grid layout as SCR-002. Each result: COMP-006 (Product Card). |
| 5. No Results State | If no results: SCR-004-EMPTY state (see Section 08). Suggestions for related searches. |
| 6. Mobile Bottom Nav | COMP-002 |

- Search is triggered on Enter or after 400ms debounce while typing

- Partial matches are acceptable — 'voile' should match 'Swiss voile'

- Search is case-insensitive

- URL updates: /search?q=swiss+voile&category=lace

SCR-005  —  Shopping Cart Page

Route: /cart     Type: Full Page     Priority: P0 — Must Have

| Purpose Cart review before ordering. Customer sees all selected items, adjusts quantities, removes items, and initiates the WhatsApp checkout. This is the last stop before the order is placed. |
|---|

| Section | Content & Behavior |
|---|---|
| 1. Navigation Bar | COMP-001 |
| 2. Page Title | 'Your Cart' with item count in parentheses: 'Your Cart (3 items)' |
| 3. Cart Item List | Each item row: product thumbnail (60×60px) · product name · fabric type badge · price per yard · quantity controls (+/-) · line total · remove (trash) icon. Quantity controls update line total and cart summary in real time. |
| 4. Cart Summary Panel | Sticky on desktop (right column). On mobile: fixed at bottom above WhatsApp button. Contents: Subtotal · Note: 'Delivery fee discussed on WhatsApp' · 'Order via WhatsApp' button (full width, WhatsApp Green). |
| 5. Continue Shopping | 'Continue Shopping' link below item list — navigates back to SCR-002 |
| 6. Empty State | SCR-005-EMPTY — see Section 08 |
| 7. Mobile Bottom Nav | COMP-002 |

- Cart persists across sessions using localStorage — items remain if the user closes and reopens the app

- Removing an item shows COMP-004 info toast with 3-second Undo option

- Quantity cannot go below 1 — minus button is disabled at quantity 1

- 'Order via WhatsApp' navigates to SCR-006 with full cart contents

- Price subtotal updates in real time as quantities change

SCR-006  —  WhatsApp Checkout Modal

Route: Overlay on current page     Type: Modal / Bottom Sheet     Priority: P0 — Must Have

| Purpose The final step before the order is sent. Collects the customer's name and delivery preference, generates the pre-filled WhatsApp message, and hands off to the WhatsApp app. |
|---|

| Section | Content & Behavior |
|---|---|
| 1. Modal Trigger | Triggered from: 'Order via WhatsApp' button on SCR-003 (single item) or SCR-005 (full cart) |
| 2. Modal Header | 'Complete Your Order' — close (X) button top right |
| 3. Order Summary | Read-only list of items being ordered: product name · quantity · line total. Grand total prominently displayed in Heritage Gold. |
| 4. Customer Name Field | Label: 'Your Name'. Placeholder: 'e.g. Adaeze Johnson'. Required. Shows validation error if empty on submit. |
| 5. Delivery Preference | Label: 'How would you like to receive your order?' Radio buttons: 'Pickup from Oshodi store' · 'Delivery (discuss with vendor)'. Required. |
| 6. Additional Notes | Optional textarea: 'Any special requests or notes?' Max 200 characters. Character counter displayed. |
| 7. WhatsApp Button | Full-width button: 'Send Order on WhatsApp' — WhatsApp Green, large, bold. WhatsApp icon left of text. |
| 8. Disclaimer | Small text below button: 'This opens WhatsApp with your order details. Your order is confirmed when Mrs. Adewole responds.' |
| 9. Confirmation Screen | After WhatsApp opens: modal content changes to: Checkmark icon · 'Order Sent!' · 'Mrs. Adewole will respond within a few hours.' · 'Continue Shopping' button. Back to SCR-001 on continue. |

- Modal appears as bottom sheet on mobile, centered modal on desktop

- Background is dimmed with Deep Mahogany overlay at 60% opacity

- Focus is trapped within the modal — tabbing does not reach background content

- Pressing Escape or tapping the overlay closes the modal

- WhatsApp message is pre-formatted per the standard defined in Brand Guidelines Section 09.3

- wa.me deep link opens WhatsApp app on mobile, WhatsApp Web on desktop

SCR-007  —  Wishlist / Favorites Page

Route: /wishlist     Type: Full Page     Priority: P1 — Should Have

| Purpose A saved collection of products the customer marked as favorites. Useful for sales reps demoing to clients and for customers planning purchases for upcoming events. |
|---|

| Section | Content & Behavior |
|---|---|
| 1. Navigation Bar | COMP-001 |
| 2. Page Title | 'Saved Fabrics' with count: 'Saved Fabrics (5)' |
| 3. Product Grid | Same grid as SCR-002. Each card shows filled heart icon. Remove from wishlist by tapping heart. |
| 4. 'Add to Cart' CTA | Each card has 'Add to Cart' button — adds to cart without leaving wishlist page |
| 5. 'Order All' CTA | Button at top: 'Order All via WhatsApp' — adds all wishlist items to cart and opens SCR-006 |
| 6. Empty State | SCR-007-EMPTY — see Section 08 |
| 7. Mobile Bottom Nav | COMP-002 |

- Wishlist is stored in localStorage — persists across sessions without requiring login

- Wishlist count badge on COMP-001 and COMP-002 updates in real time

SCR-008  —  About Page

Route: /about     Type: Full Page     Priority: P1 — Should Have

| Purpose Builds trust and tells the Latex Fabrics story. For many customers, this is the screen that converts a browser into a buyer — especially for first-time customers. |
|---|

| Section | Content & Behavior |
|---|---|
| 1. Navigation Bar | COMP-001 |
| 2. Hero Section | Full-width banner with warm fabric image. Overlay text: 'Our Story — 20 Years of Quality, Trust & Heritage' |
| 3. Story Section | Two columns: Mrs. Adewole's photo (left) + business story text (right). The story should cover founding, values, growth, and commitment to quality. |
| 4. Why Choose Us | Three or four icon + text blocks: Authenticity · Two Decades of Trust · Wide Variety · Personal Service |
| 5. Store Locations | Two location cards side by side. Each card: store name · full address · opening hours · Google Maps link button · WhatsApp contact button. |
| 6. Photo Gallery | Optional grid of store and fabric images — can be placeholder at launch |
| 7. CTA Strip | 'Ready to explore our collection?' button linking to SCR-002 |
| 8. Footer | COMP-003 |

SCR-009  —  Contact Page

Route: /contact     Type: Full Page     Priority: P1 — Should Have

| Purpose Gives customers all the information they need to reach Latex Fabrics. Primary contact method is WhatsApp; physical store details are equally important. |
|---|

| Section | Content & Behavior |
|---|---|
| 1. Navigation Bar | COMP-001 |
| 2. Page Header | 'Get in Touch' with subtitle: 'We are happy to help with orders, fabric advice, and bulk inquiries.' |
| 3. WhatsApp Contact | Large WhatsApp button: 'Chat with Us on WhatsApp'. Phone number displayed below. Note: business hours. |
| 4. Location Cards | Two cards: Location 1 — 447 Agege Motor Road, Bolade Bus Stop, Oshodi. Location 2 — Kairo Market, Shop 3E, Oshodi Road. Each card: address · phone · opening hours · 'Get Directions' button (opens Google Maps). |
| 5. Opening Hours Table | Mon–Sat: 8:00am – 6:00pm. Sunday: Closed. Public Holidays: Closed. |
| 6. Footer | COMP-003 |

- Phone numbers are tap-to-call links on mobile

- WhatsApp button uses wa.me deep link

- 'Get Directions' uses Google Maps deep link with the full address

SCR-010  —  Offline / No Internet Page

Route: /offline     Type: Full Page     Priority: P0 — Must Have

| Purpose Shown when the user opens the app with no internet and no cached data. Must reassure the user and explain how to proceed. |
|---|

| Section | Content & Behavior |
|---|---|
| 1. Illustration | Simple SVG illustration of a Wi-Fi icon with a cross or 'disconnected' visual — brand-colored (Mahogany and Gold) |
| 2. Headline | 'You're Offline' |
| 3. Body text | 'It looks like you don't have an internet connection. Connect to Wi-Fi or mobile data to browse our catalog.' |
| 4. Cached state | If any catalog data is cached: 'Good news — we have some fabrics saved for you.' with 'Browse Cached Catalog' button |
| 5. Retry button | 'Try Again' button — attempts to reload the page. If still offline, shows a brief error message. |
| 6. WhatsApp note | 'Already know what you want? You can still send us a WhatsApp message when you're back online.' |

SCR-011  —  PWA Install Prompt

Route: Bottom Sheet / Banner overlay     Type: Overlay     Priority: P1 — Should Have

| Purpose Encourages customers to install the Latex Fabrics PWA to their home screen for a native app-like experience. |
|---|

| Element | Specification |
|---|---|
| Trigger | Shown on the user's second visit to the app, after 30 seconds on page |
| Style | Bottom sheet on mobile. Small banner at top on desktop. |
| Icon | Latex Fabrics LF app icon |
| Headline | 'Add Latex Fabrics to your Home Screen' |
| Body | 'Shop our fabric catalog anytime, even offline.' |
| Primary CTA | 'Add to Home Screen' — Heritage Gold button |
| Secondary CTA | 'Not Now' — dismisses and does not show again for 7 days |
| Dismiss behavior | Tapping outside the sheet dismisses it |

SCR-012  —  404 Not Found Page

Route: /*     Type: Full Page     Priority: P1 — Should Have

| Element | Specification |
|---|---|
| Illustration | Brand-styled 404 graphic in Heritage Gold and Mahogany |
| Headline | 'This page has gone missing' |
| Body | 'The fabric you're looking for may have moved or no longer exists.' |
| Primary CTA | 'Browse Our Collection' — navigates to SCR-002 |
| Secondary CTA | 'Go Home' — navigates to SCR-001 |

06
ADMIN SCREENS
Internal screens for catalog and content management

SCR-013  —  Admin Login

Route: /admin/login     Type: Full Page     Priority: P0 — Must Have

| Purpose Secure entry point to the admin panel. Only authorized users should access product management features. |
|---|

| Element | Specification |
|---|---|
| Layout | Centered card on full-page Ivory Linen background. Logo at top of card. |
| Email field | Label: 'Email Address'. Standard email input. |
| Password field | Label: 'Password'. Password input with show/hide toggle. |
| Login button | Full-width Heritage Gold button: 'Sign In' |
| Error state | Red inline error below the relevant field: 'Incorrect email or password' |
| Forgot password | Link below button: 'Forgot password?' — out of scope for V1, shows 'Contact system admin' message |
| Security | Rate limited to 5 failed attempts before 15-minute lockout. Session expires after 8 hours. |

- No public registration — admin accounts are created by the system administrator only

- On successful login: redirect to SCR-014 (Admin Dashboard)

- Unauthenticated access to any /admin/* route redirects to SCR-013

SCR-014  —  Admin Dashboard

Route: /admin     Type: Full Page     Priority: P0 — Must Have

| Purpose Overview of the catalog and key metrics. The landing screen after admin login. |
|---|

| Section | Specification |
|---|---|
| 1. Admin Navbar | Latex Fabrics logo (admin) · Nav: Dashboard · Products · Analytics · Sign Out |
| 2. Welcome Header | 'Welcome back, [Admin Name]' with current date |
| 3. Stat Cards Row | Four cards: Total Products · Total Categories · Products Added This Month · Most Viewed Product |
| 4. Quick Actions | Three large buttons: 'Add New Product' · 'Bulk Upload' · 'View Live Store' |
| 5. Recent Products | Table of last 10 products added: Name · Category · Price · Date Added · Edit/Delete actions |
| 6. Low Stock Alert | If any products are marked low stock — amber alert panel listing them with quick-edit links |

SCR-015  —  Product List — Manage Catalog

Route: /admin/products     Type: Full Page     Priority: P0 — Must Have

| Purpose Full catalog management. Admin can see, search, filter, edit, and delete all products. |
|---|

| Section | Specification |
|---|---|
| 1. Page Header | 'Product Catalog' with total count. 'Add New Product' button top right (Heritage Gold). |
| 2. Search + Filter | Search bar (by product name). Category filter dropdown. Sort dropdown. |
| 3. Products Table | Columns: Thumbnail · Product Name · Category · Price/yard · Stock Status · Date Added · Actions. Actions: Edit (pencil icon) · Delete (trash icon) · Toggle Visibility (eye icon). |
| 4. Bulk Actions | Checkbox column for multi-select. Bulk action bar: 'Delete selected' · 'Export selected' |
| 5. Pagination | 25 products per page. Prev / Next / page number controls. |

- Delete action shows confirmation dialog: 'Are you sure? This cannot be undone.'

- Toggle visibility hides a product from the public catalog without deleting it

- Clicking product name or edit icon opens SCR-016 pre-filled with that product's data

SCR-016  —  Add / Edit Product Form

Route: /admin/products/new  or  /admin/products/:id/edit     Type: Full Page     Priority: P0 — Must Have

| Purpose The form for creating a new product or editing an existing one. The quality of this form directly determines the quality of the customer-facing catalog. |
|---|

| Field | Specification |
|---|---|
| 1. Page Header | Add: 'Add New Product'. Edit: 'Editing: [Product Name]'. Breadcrumb: Admin > Products > [action]. |
| 2. Product Name | Text input. Required. Max 100 characters. |
| 3. Category | Dropdown: Lace · Swiss Voile · Cord Lace · Sequins · Dry Lace · Luxury Fabrics · Other. Required. |
| 4. Fabric Type | Text input for specific type e.g. 'French Cord Lace', 'Swiss Voile'. Required. |
| 5. Price Per Yard | Number input with ₦ prefix. Required. No negative values. |
| 6. Stock Status | Radio: In Stock · Low Stock · Out of Stock. Required. |
| 7. Image Upload | Drag-and-drop zone + 'Browse files' button. Accepts: JPG, PNG, WebP. Max 5MB per image. Up to 8 images per product. Preview thumbnails shown after upload. Drag to reorder. First image = primary catalog image. Delete button on each thumbnail. |
| 8. Description | Rich text editor (bold, italic, bullet list). For fabric description. Required. Min 50 characters. |
| 9. Fabric Details | Structured fields: Material Composition · Width (cm) · Origin Country · Care Instructions. |
| 10. Occasion Tags | Multi-select checkboxes: Wedding · Owambe · Traditional Ceremony · Church · Everyday · Formal Event |
| 11. Visibility Toggle | Toggle: 'Visible in catalog' — defaults to On for new products |
| 12. Save Buttons | 'Save Product' (Heritage Gold, full width) · 'Save as Draft' (outline) · 'Cancel' (ghost) |

- All required fields show inline validation errors on blur (leaving the field) and on submit

- Auto-save draft every 60 seconds — admin sees 'Draft auto-saved at [time]' message

- On successful save: redirect to SCR-015 with success toast: 'Product saved successfully'

- On edit: pre-populate all fields with existing product data

SCR-017  —  Bulk Upload Page

Route: /admin/products/bulk     Type: Full Page     Priority: P1 — Should Have

| Purpose Allows the admin to import multiple products at once via a CSV or Excel file — essential for initially populating the catalog with 50+ products. |
|---|

| Section | Specification |
|---|---|
| 1. Template Download | 'Download CSV Template' button — provides the correct column structure |
| 2. Upload Zone | Drag-and-drop or file browse. Accepts: .csv, .xlsx. Max file size: 10MB. |
| 3. Preview Table | After upload: shows first 10 rows of parsed data for review before import. Highlights any rows with errors in red. |
| 4. Error Report | If errors found: 'X rows have errors. Fix them in your file and re-upload.' with specific error descriptions per row. |
| 5. Confirm Import | 'Import [N] Products' button — only active if no errors detected. Shows progress bar during import. |
| 6. Results | After import: 'Successfully imported 48 products. 2 rows had errors and were skipped.' with error detail expandable. |

- Images cannot be bulk uploaded — admin must add images manually after bulk import via SCR-016

- Duplicate product names show a warning but do not block import

SCR-018  —  Analytics Overview

Route: /admin/analytics     Type: Full Page     Priority: P2 — Nice to Have

| Purpose Basic reporting to help Mrs. Adewole understand which products are most popular and how the catalog is performing. |
|---|

| Section | Specification |
|---|---|
| 1. Date Range Picker | Last 7 days / Last 30 days / Last 90 days / Custom range |
| 2. Summary Cards | Total product views · Total WhatsApp order initiations · Top performing category · Most viewed product |
| 3. Top Products | Table: most viewed products in selected period. Columns: Product Name · Views · WhatsApp Taps · Category. |
| 4. Category Breakdown | Bar chart: views and WhatsApp taps per category |
| 5. Daily Activity | Line chart: product views per day over selected period |

07
COMPONENT SPECIFICATIONS
Reusable UI components used across multiple screens

## COMP-006  —  Product Card

Used on: SCR-001, SCR-002, SCR-004, SCR-007

| Element | Specification |
|---|---|
| Container | White or Ivory Linen background · 12px border radius · subtle box shadow on hover · border: 1px Ivory Linen |
| Image | Top of card · 4:3 aspect ratio · object-fit: cover · lazy loaded · WebP · hover: slight scale-up (1.03) |
| Fabric type badge | Absolute top-left over image · Heritage Gold background · White Lato 700 · 11px · All caps · 4px radius |
| Wishlist icon | Absolute top-right over image · Heart outline (unfavorited) / Heart filled Heritage Gold (favorited) |
| Product name | Below image · Charcoal · Lato 600 · 15px · Max 2 lines (ellipsis overflow) |
| Price | Heritage Gold · Lato 700 · 17px · ₦ prefix · e.g. ₦8,500/yard |
| Add to Cart button | Full width at card bottom · Heritage Gold bg · White bold text · 14px · 44px height |
| Hover state | Whole card: slight lift shadow. Image: scale 1.03. Button: 10% darker gold. |
| Loading skeleton | Gray shimmer animation for image area, two text lines, and button — shown while product data loads |

## COMP-007  —  Category Filter Tabs

| Element | Specification |
|---|---|
| Container | Horizontal flex row · overflow-x: scroll on mobile · no visible scrollbar · 12px gap between pills |
| Pill shape | Full border-radius (rounded-full) · 32px height · 16px horizontal padding |
| Inactive state | Transparent background · 1px solid Muted Brown border · Muted Brown text · Lato 500 · 14px |
| Active state | Heritage Gold background · White text · Lato 700 · 14px · no border |
| Transition | background-color and color: 150ms ease |
| Items | All · Lace · Swiss Voile · Cord Lace · Sequins · Dry Lace · Luxury Fabrics |

## COMP-008  —  WhatsApp Order Button

| Element | Specification |
|---|---|
| Background | WhatsApp Green (#25D366) · Never any other color for this button |
| Text | 'Order via WhatsApp' · White · Lato 700 · 15px · All caps |
| Icon | Official WhatsApp SVG logo · White · 20px · Left of text · 8px gap |
| Size | Full width on mobile product page · Minimum 200px wide · 48px height |
| Border radius | 8px |
| Hover state | 10% darker green (#20BD5A) · cursor: pointer |
| Disabled state | 50% opacity · not-allowed cursor · shown when cart is empty or product is out of stock |

## COMP-009  —  Search Bar

| Element | Specification |
|---|---|
| Desktop | Always visible in navbar, right of center · 280px wide · 40px height |
| Mobile | Search icon in navbar · tapping expands full-width search bar from top with animation |
| Input style | Ivory Linen background · 1px Muted border · Charcoal text · 14px · 8px radius |
| Focus state | 2px Heritage Gold border · slight shadow |
| Clear button | X icon appears inside input when text is present · clears field on tap |
| Placeholder | 'Search fabrics...' in Muted Brown |
| Search icon | Magnifying glass inside input on left · Heritage Gold |

08
SCREEN STATES
Empty, loading, and error states for every key screen

| State ID | Trigger | Content & Actions |
|---|---|---|
| SCR-002-EMPTY | No products match active filters | Illustration + 'No fabrics found for this filter.' + 'Clear Filters' button (Heritage Gold) + 'Browse All' link |
| SCR-002-LOADING | Products loading on first open | 2-column grid of 6 product card skeletons (gray shimmer animation) |
| SCR-004-EMPTY | No search results | Illustration + 'No results for "[query]"' + suggested searches: 'Try: Lace · Voile · Sequins' + 'Browse All Products' button |
| SCR-004-LOADING | Search in progress | Same skeleton grid as SCR-002-LOADING |
| SCR-005-EMPTY | Cart has no items | Bag illustration + 'Your cart is empty' + 'Start Shopping' button (Heritage Gold) linking to SCR-002 |
| SCR-007-EMPTY | No wishlist items | Heart illustration + 'No saved fabrics yet' + 'Explore Our Collection' button linking to SCR-002 |
| SCR-015-EMPTY | No products in catalog (admin) | Empty state illustration + 'No products yet' + 'Add Your First Product' button + 'Bulk Upload' link |
| SCR-016-ERROR | Form submission fails | Red error banner at top of form: 'Something went wrong. Please try again.' with specific field errors highlighted |
| GLOBAL-ERROR | Unexpected app error | Centered error message: 'Something went wrong.' + 'Reload Page' button + link to WhatsApp for support |
| GLOBAL-LOADING | Initial app load | Full-screen Ivory Linen with centered Latex Fabrics logo pulsing gently |

09
RESPONSIVE BREAKPOINTS
How screens adapt across device sizes

| Breakpoint | Width Range | Key Layout Changes |
|---|---|---|
| Mobile | 0px – 639px | Primary design target. Single column layouts. Bottom navigation (COMP-002). Hamburger menu. 2-column product grid. All CTAs full width. |
| Tablet | 640px – 1023px | Side-by-side layouts emerge. 3-column product grid. Bottom nav hides, top nav shows. Cart summary moves to sidebar. |
| Desktop | 1024px+ | Full layouts. 4-column product grid. Persistent sidebar navigation on admin. Footer always visible. Max content width: 1280px centered. |

Design-first approach: all screens are designed mobile-first, then adapted upward. Every component must be tested at 375px (iPhone SE) as the minimum supported width.

10
STITCH PROMPT TEMPLATES
Ready-to-use prompts for generating screens in Google Stitch

## How to Use These Prompts

Copy the brand context block first, then paste one screen prompt at a time into Google Stitch. Always include the brand context at the start of every Stitch session — it sets the visual language for everything Stitch generates.

## Brand Context Block (paste this first, every session)

| Copy and paste this into Stitch before any screen prompt: Brand: Latex Fabrics — a premium Nigerian fabric e-commerce PWA Aesthetic: Traditional African Luxury. Rich, warm, premium, cultural. Primary Color: Heritage Gold #C9A84C — use for logo, headings, CTAs, accents, price text Dark Color: Deep Mahogany #3D2B1F — use for navbar, footer, dark backgrounds, icon fills Background: Ivory Linen #F5F0E8 — use instead of pure white for all page backgrounds Body Text: Charcoal Black #1A1A1A Secondary Text: Muted Brown #8C7B6B — captions, metadata, secondary labels WhatsApp Green: #25D366 — use ONLY on WhatsApp order buttons, never for other elements Display Font: Playfair Display — hero headings, brand name, large display text only Heading Font: Georgia — H1, H2 section titles Body Font: Lato — all body text, buttons, labels, navigation Button radius: 8px. Card radius: 12px. All touch targets minimum 44x44px. The app is mobile-first. Primary user is a Nigerian customer on Android with 3G connection. Do not use pure white (#FFFFFF) backgrounds — always use Ivory Linen (#F5F0E8). Do not use WhatsApp Green for anything except the WhatsApp order button. |
|---|

## Screen Prompts

| Screen | Stitch Prompt |
|---|---|
| SCR-001 Home | Design the Home page for Latex Fabrics. Include: full-width hero section with fabric image, overlay headline 'Woven in Heritage. Draped in Luxury.', and two CTAs (Shop Now in Heritage Gold, Our Story outline). Below: a trust bar with three icons (20+ Years · Authentic Materials · WhatsApp Ordering). Then a Featured Categories grid with 6 fabric category tiles. Then a Featured Products horizontal scroll (6 product cards). Then a full-width Deep Mahogany WhatsApp CTA band. Sticky navbar in Deep Mahogany at top. |
| SCR-002 Catalog | Design the Product Catalog page for Latex Fabrics. Include: sticky Deep Mahogany navbar. Page title 'Our Collection' with product count. Horizontal scrollable Heritage Gold pill filter tabs (All, Lace, Swiss Voile, Cord Lace, Sequins, Dry Lace, Luxury). Sort dropdown and filter button. 2-column product grid on mobile (6-column desktop) of fabric product cards — each with image, fabric type badge, product name, price in Heritage Gold, and Add to Cart button. Load More button at bottom. |
| SCR-003 Product Detail | Design the Product Detail page for Latex Fabrics. Include: image gallery (large primary image, thumbnail strip below, swipe gesture indicator). Fabric type badge in Heritage Gold. Large product name (H1). Price per yard in large Heritage Gold bold. Quantity selector (minus, number, plus) with real-time total calculation. Two full-width buttons stacked: 'Add to Cart' in Heritage Gold, 'Order via WhatsApp' in WhatsApp Green with WhatsApp icon. Wishlist heart icon. Tabs below for Description, Fabric Details, Care Instructions, Occasion Guide. |
| SCR-005 Cart | Design the Shopping Cart page for Latex Fabrics. Include: page title 'Your Cart (3 items)'. List of cart items — each showing product thumbnail, name, fabric type badge, price, quantity controls (+/-), line total, and remove icon. Cart summary panel (sticky on desktop, bottom-fixed on mobile) showing subtotal, delivery note, and full-width 'Order via WhatsApp' button in WhatsApp Green. 'Continue Shopping' link. |
| SCR-006 Checkout Modal | Design the WhatsApp Checkout modal for Latex Fabrics. It appears as a bottom sheet on mobile, centered modal on desktop. Include: header 'Complete Your Order' with close X. Order summary list (read-only). Name input field. Delivery preference radio buttons (Pickup / Delivery). Optional notes textarea. Large 'Send Order on WhatsApp' button in WhatsApp Green with WhatsApp icon. Disclaimer text below button. Background overlay in Deep Mahogany at 60% opacity. |
| SCR-013 Admin Login | Design the Admin Login page for Latex Fabrics. Centered white card on Ivory Linen background. Latex Fabrics logo at top of card. Email input field. Password input with show/hide toggle. 'Sign In' button in Heritage Gold, full width. 'Forgot password?' link below. Clean, minimal, professional. |
| SCR-016 Add Product Form | Design the Add New Product form for the Latex Fabrics admin panel. Include: page title 'Add New Product'. Form fields: Product Name (text), Category (dropdown), Fabric Type (text), Price Per Yard (number with ₦ prefix), Stock Status (radio: In Stock / Low Stock / Out of Stock). Image upload zone (drag-and-drop with thumbnail previews). Rich text description field. Fabric Details section (Material, Width, Origin, Care). Occasion Tags (multi-select checkboxes). Visibility toggle. Save Product button (Heritage Gold, full width) and Save as Draft (outline) side by side at bottom. |

LATEX FABRICS  ·  Woven in Heritage. Draped in Luxury.
