import { create } from "zustand";
import { persist } from "zustand/middleware";
import { MAX_YARDS, MIN_YARDS } from "../config";

export interface CartItem {
  productId: string;
  quantity: number; // yards
}

interface CartState {
  items: CartItem[];
  /** Held briefly after removal so the toast can offer Undo (FR-040). */
  lastRemoved: CartItem | null;
  addItem: (productId: string, quantity?: number) => void;
  setQuantity: (productId: string, quantity: number) => void;
  removeItem: (productId: string) => void;
  undoRemove: () => void;
  clear: () => void;
}

const clamp = (q: number) => Math.min(MAX_YARDS, Math.max(MIN_YARDS, q));

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      lastRemoved: null,
      addItem: (productId, quantity = 1) =>
        set((s) => {
          const existing = s.items.find((i) => i.productId === productId);
          if (existing) {
            return {
              items: s.items.map((i) =>
                i.productId === productId
                  ? { ...i, quantity: clamp(i.quantity + quantity) }
                  : i,
              ),
            };
          }
          return { items: [...s.items, { productId, quantity: clamp(quantity) }] };
        }),
      setQuantity: (productId, quantity) =>
        set((s) => ({
          items: s.items.map((i) =>
            i.productId === productId ? { ...i, quantity: clamp(quantity) } : i,
          ),
        })),
      removeItem: (productId) =>
        set((s) => ({
          items: s.items.filter((i) => i.productId !== productId),
          lastRemoved: s.items.find((i) => i.productId === productId) ?? null,
        })),
      undoRemove: () =>
        set((s) =>
          s.lastRemoved
            ? { items: [...s.items, s.lastRemoved], lastRemoved: null }
            : s,
        ),
      clear: () => set({ items: [], lastRemoved: null }),
    }),
    { name: "latex-cart", partialize: (s) => ({ items: s.items }) },
  ),
);

export const useCartCount = () =>
  useCartStore((s) => s.items.reduce((n, i) => n + i.quantity, 0));
