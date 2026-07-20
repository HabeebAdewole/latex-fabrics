// Central business configuration — swap placeholders here, nowhere else.

/** Mrs. Adewole's WhatsApp business number in international format, digits only.
 *  PLACEHOLDER — replace with the real number before launch. */
export const WHATSAPP_NUMBER = "2348000000000";

export const BUSINESS = {
  name: "Latex Fabrics",
  tagline: "Woven in Heritage. Draped in Luxury.",
  phone: "+234 800 000 0000", // PLACEHOLDER
  hours: "Mon–Sat: 8:00am – 6:00pm",
  hoursNote: "Sunday & public holidays: closed",
  responseNote: "Usually responds within 2 hours",
} as const;

export const LOCATIONS = [
  {
    id: "bolade",
    name: "Main Store — Bolade",
    address: "447 Agege Motor Road, Bolade Bus Stop, Oshodi, Lagos",
    mapsQuery: "447 Agege Motor Road, Bolade Bus Stop, Oshodi, Lagos",
  },
  {
    id: "kairo",
    name: "Kairo Market Store",
    address: "Kairo Market, Shop 3E, Oshodi Road, Lagos",
    mapsQuery: "Kairo Market, Oshodi Road, Lagos",
  },
] as const;

/** Catalog categories — order matters (filter pill order). */
export const CATEGORIES = [
  "Lace",
  "Swiss Voile",
  "Cord Lace",
  "Sequins",
  "Dry Lace",
  "Luxury Fabrics",
] as const;

export type Category = (typeof CATEGORIES)[number];

/** Quantity limits per FR-030. */
export const MIN_YARDS = 1;
export const MAX_YARDS = 50;

/** Stock threshold: stockQuantity <= LOW_STOCK_THRESHOLD shows "Low Stock". */
export const LOW_STOCK_THRESHOLD = 20;
