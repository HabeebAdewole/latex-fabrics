import { cn } from "../../lib/cn";
import { getStockStatus } from "../../lib/catalog";
import type { Product } from "../../types/product";

/** Fabric type badge — burgundy pill over product images (Royal Velvet spec). */
export function FabricBadge({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-block rounded bg-brand-burgundy px-2 py-1 text-[11px] font-bold uppercase tracking-wide text-white",
        className,
      )}
    >
      {label}
    </span>
  );
}

const STOCK_META = {
  "in-stock": { dot: "bg-brand-success", label: "In Stock" },
  "low-stock": { dot: "bg-brand-warning", label: "Low Stock" },
  "out-of-stock": { dot: "bg-brand-error", label: "Out of Stock" },
} as const;

/** Stock dot + label. Shows remaining yards for in/low stock. */
export function StockBadge({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) {
  const status = getStockStatus(product);
  const meta = STOCK_META[status];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 text-xs text-brand-muted",
        className,
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", meta.dot)} aria-hidden />
      {meta.label}
      {status !== "out-of-stock" && ` (${product.stockQuantity} yards)`}
    </span>
  );
}
