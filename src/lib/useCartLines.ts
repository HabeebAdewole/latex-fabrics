import { useCartStore } from "../stores/cartStore";
import { getProductById } from "./catalog";
import type { Product } from "../types/product";

export interface CartLine {
  product: Product;
  quantity: number;
}

/** Resolves persisted cart items (id + qty) to products, dropping any unknown ids. */
export function useCartLines(): { lines: CartLine[]; subtotal: number } {
  const items = useCartStore((s) => s.items);
  const lines: CartLine[] = items.flatMap((item) => {
    const product = getProductById(item.productId);
    return product ? [{ product, quantity: item.quantity }] : [];
  });
  const subtotal = lines.reduce(
    (sum, l) => sum + l.product.pricePerYard * l.quantity,
    0,
  );
  return { lines, subtotal };
}
