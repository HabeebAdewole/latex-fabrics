import ProductCard, { ProductCardSkeleton } from "./ProductCard";
import type { Product } from "../../types/product";

/** Responsive product grid: 2-col mobile · 3-col tablet · 4-col desktop (design system §4.1). */
export default function ProductGrid({
  products,
  loading,
  skeletonCount = 6,
}: {
  products?: Product[];
  loading?: boolean;
  skeletonCount?: number;
}) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-6 lg:grid-cols-4">
      {loading
        ? Array.from({ length: skeletonCount }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))
        : products?.map((p) => <ProductCard key={p.id} product={p} />)}
    </div>
  );
}
