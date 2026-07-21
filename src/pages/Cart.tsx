import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCartLines } from "../lib/useCartLines";
import { formatNaira } from "../lib/format";
import CartItemRow from "../components/product/CartItemRow";
import EmptyState from "../components/product/EmptyState";
import { buttonVariants } from "../components/ui/Button";
import WhatsAppIcon from "../components/ui/WhatsAppIcon";
import CheckoutModal from "../components/checkout/CheckoutModal";

export default function Cart() {
  const { lines, subtotal } = useCartLines();
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  const itemCount = lines.reduce((n, l) => n + l.quantity, 0);

  if (lines.length === 0) {
    return (
      <div className="mx-auto max-w-content">
        <EmptyState
          icon={<ShoppingCart size={32} />}
          title="Your cart is empty"
          body="Browse our collection and add the fabrics you love."
        >
          <Link to="/shop" className={buttonVariants("primary", "md", "mt-2")}>
            Start shopping
          </Link>
        </EmptyState>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-content px-4 py-6 md:px-8 md:py-10">
      <h1 className="font-serif text-3xl font-bold text-brand-charcoal">
        Your Cart{" "}
        <span className="text-brand-muted">
          ({itemCount} {itemCount === 1 ? "item" : "items"})
        </span>
      </h1>

      <div className="mt-6 gap-10 md:grid md:grid-cols-[1fr_360px] md:items-start">
        {/* item list */}
        <div className="divide-y divide-brand-muted/25 rounded-card bg-white px-4 md:px-5">
          {lines.map((line) => (
            <CartItemRow
              key={line.product.id}
              product={line.product}
              quantity={line.quantity}
            />
          ))}
        </div>

        {/* summary */}
        <div className="mt-6 md:sticky md:top-24 md:mt-0">
          <div className="rounded-card border border-brand-muted/25 bg-white p-4">
            <div className="flex items-center justify-between">
              <span className="text-[15px] font-semibold text-brand-charcoal">
                Subtotal
              </span>
              <span className="text-xl font-bold text-brand-gold">
                {formatNaira(subtotal)}
              </span>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-brand-muted">
              Delivery fee is discussed on WhatsApp after ordering.
            </p>
            <button
              type="button"
              onClick={() => setCheckoutOpen(true)}
              className={buttonVariants("whatsapp", "md", "mt-4 w-full")}
            >
              <WhatsAppIcon size={20} />
              Order via WhatsApp
            </button>
          </div>
          <Link
            to="/shop"
            className={buttonVariants("ghost", "sm", "mt-3 w-full normal-case tracking-normal")}
          >
            Continue shopping
          </Link>
        </div>
      </div>

      <CheckoutModal
        open={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        lines={lines.map((l) => ({
          name: l.product.name,
          quantity: l.quantity,
          pricePerYard: l.product.pricePerYard,
        }))}
      />
    </div>
  );
}
