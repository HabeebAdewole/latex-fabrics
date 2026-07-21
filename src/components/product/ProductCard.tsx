import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import Button from "../ui/Button";
import { FabricBadge, StockBadge } from "../ui/Badge";
import { useToast } from "../ui/Toast";
import { useCartStore } from "../../stores/cartStore";
import { useWishlistStore } from "../../stores/wishlistStore";
import { getStockStatus } from "../../lib/catalog";
import { formatNaira } from "../../lib/format";
import { cn } from "../../lib/cn";
import type { Product } from "../../types/product";

export default function ProductCard({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) {
  const addItem = useCartStore((s) => s.addItem);
  const wishlisted = useWishlistStore((s) => s.ids.includes(product.id));
  const toggleWishlist = useWishlistStore((s) => s.toggle);
  const { showToast } = useToast();
  const outOfStock = getStockStatus(product) === "out-of-stock";

  return (
    <article
      className={cn(
        "group flex flex-col overflow-hidden rounded-card border border-brand-muted/20 bg-white shadow-sm transition-shadow hover:shadow-md",
        className,
      )}
    >
      <div className="relative">
        <Link
          to={`/shop/${product.id}`}
          aria-label={product.name}
          className="block aspect-[4/3] overflow-hidden bg-brand-ivory"
        >
          <img
            src={product.images[0]}
            alt={`${product.name} — ${product.category} fabric`}
            loading="lazy"
            className={cn(
              "h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]",
              outOfStock && "opacity-50",
            )}
          />
        </Link>
        <FabricBadge label={product.category} className="absolute left-2 top-2" />
        <button
          type="button"
          aria-label={wishlisted ? "Remove from wishlist" : "Save to wishlist"}
          aria-pressed={wishlisted}
          onClick={() => toggleWishlist(product.id)}
          className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-brand-muted shadow-sm transition-colors hover:text-brand-burgundy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
        >
          <Heart
            size={16}
            className={cn(wishlisted && "text-brand-burgundy")}
            fill={wishlisted ? "currentColor" : "none"}
          />
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-3">
        <Link to={`/shop/${product.id}`} className="focus-visible:outline-none">
          <h3 className="line-clamp-2 font-sans text-[15px] font-semibold leading-snug text-brand-charcoal">
            {product.name}
          </h3>
        </Link>
        <p className="flex items-baseline gap-1">
          <span className="text-[17px] font-bold text-brand-gold">
            {formatNaira(product.pricePerYard)}
          </span>
          <span className="text-[13px] text-brand-muted">/yard</span>
        </p>
        <StockBadge product={product} />
        <Button
          size="sm"
          className="mt-auto w-full"
          disabled={outOfStock}
          onClick={() => {
            addItem(product.id);
            showToast("Added to cart!");
          }}
        >
          {outOfStock ? "Out of stock" : "Add to cart"}
        </Button>
      </div>
    </article>
  );
}

export function ProductCardSkeleton({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "animate-pulse overflow-hidden rounded-card border border-brand-muted/20 bg-white",
        className,
      )}
    >
      <div className="aspect-[4/3] bg-brand-muted/20" />
      <div className="space-y-2.5 p-3">
        <div className="h-3.5 w-3/4 rounded bg-brand-muted/20" />
        <div className="h-4 w-1/2 rounded bg-brand-muted/20" />
        <div className="h-2.5 w-2/3 rounded bg-brand-muted/20" />
        <div className="h-11 w-full rounded-btn bg-brand-muted/20" />
      </div>
    </div>
  );
}
