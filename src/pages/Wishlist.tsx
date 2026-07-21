import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { useWishlistStore } from "../stores/wishlistStore";
import { getProductById, getStockStatus } from "../lib/catalog";
import ProductGrid from "../components/product/ProductGrid";
import EmptyState from "../components/product/EmptyState";
import { buttonVariants } from "../components/ui/Button";
import WhatsAppIcon from "../components/ui/WhatsAppIcon";
import CheckoutModal from "../components/checkout/CheckoutModal";

export default function Wishlist() {
  const ids = useWishlistStore((s) => s.ids);
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  const products = ids.flatMap((id) => {
    const p = getProductById(id);
    return p ? [p] : [];
  });
  // only in-stock items can be ordered
  const orderable = products.filter(
    (p) => getStockStatus(p) !== "out-of-stock",
  );

  if (products.length === 0) {
    return (
      <div className="mx-auto max-w-content">
        <EmptyState
          icon={<Heart size={32} />}
          title="No saved fabrics yet"
          body="Tap the heart on any fabric to save it here."
        >
          <Link to="/shop" className={buttonVariants("primary", "md", "mt-2")}>
            Explore our collection
          </Link>
        </EmptyState>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-content px-4 py-6 md:px-8 md:py-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="font-serif text-3xl font-bold text-brand-charcoal">
          Saved Fabrics{" "}
          <span className="text-brand-muted">({products.length})</span>
        </h1>
        {orderable.length > 0 && (
          <button
            type="button"
            onClick={() => setCheckoutOpen(true)}
            className={buttonVariants("whatsapp", "md")}
          >
            <WhatsAppIcon size={20} />
            Order all via WhatsApp
          </button>
        )}
      </div>

      <div className="mt-6">
        <ProductGrid products={products} />
      </div>

      <CheckoutModal
        open={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        lines={orderable.map((p) => ({
          name: p.name,
          quantity: 1,
          pricePerYard: p.pricePerYard,
        }))}
      />
    </div>
  );
}
