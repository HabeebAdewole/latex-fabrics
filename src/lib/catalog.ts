// Catalog data layer. V1 serves the bundled JSON (precached → offline browsing works).
// Phase 3: replace the internals with calls to the latex-fabrics-backend API — the
// function signatures and the Product shape (mirroring Prisma) stay the same.

import rawProducts from "../data/products.json";
import { LOW_STOCK_THRESHOLD } from "../config";
import type { Product, StockStatus } from "../types/product";

const products = rawProducts as Product[];

export function getProducts(): Product[] {
  return products;
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  if (!category || category === "All") return products;
  return products.filter((p) => p.category === category);
}

/** Case-insensitive partial match on name or category (FR: 'voile' matches 'Swiss voile'). */
export function searchProducts(query: string): Product[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q),
  );
}

/** Up to `limit` products from the same category, excluding the product itself. */
export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
}

export function getStockStatus(product: Product): StockStatus {
  if (product.stockQuantity <= 0) return "out-of-stock";
  if (product.stockQuantity <= LOW_STOCK_THRESHOLD) return "low-stock";
  return "in-stock";
}
