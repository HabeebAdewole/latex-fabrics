// Mirrors the backend Prisma `Product` model (latex-fabrics-backend/prisma/schema.prisma)
// so the Phase 3 swap from static JSON to the API is a data-layer change only.

export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  pricePerYard: number;
  stockQuantity: number;
  images: string[];
  colors: string[];
}

export type StockStatus = "in-stock" | "low-stock" | "out-of-stock";
