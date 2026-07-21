import { Link } from "react-router-dom";
import { Trash2 } from "lucide-react";
import QuantitySelector from "../ui/QuantitySelector";
import { useToast } from "../ui/Toast";
import { useCartStore } from "../../stores/cartStore";
import { formatNaira } from "../../lib/format";
import type { Product } from "../../types/product";

interface CartItemRowProps {
  product: Product;
  quantity: number;
}

export default function CartItemRow({ product, quantity }: CartItemRowProps) {
  const setQuantity = useCartStore((s) => s.setQuantity);
  const removeItem = useCartStore((s) => s.removeItem);
  const undoRemove = useCartStore((s) => s.undoRemove);
  const { showToast } = useToast();

  return (
    <div className="flex gap-3 py-3.5">
      <Link to={`/shop/${product.id}`} className="shrink-0">
        <img
          src={product.images[0]}
          alt={product.name}
          className="h-16 w-16 rounded-lg object-cover"
        />
      </Link>

      <div className="flex min-w-0 flex-1 flex-col gap-1.5">
        <Link
          to={`/shop/${product.id}`}
          className="truncate text-sm font-semibold text-brand-charcoal"
        >
          {product.name}
        </Link>
        <p className="text-xs text-brand-muted">
          {formatNaira(product.pricePerYard)}/yard
        </p>
        <QuantitySelector
          compact
          value={quantity}
          onChange={(q) => setQuantity(product.id, q)}
        />
      </div>

      <div className="flex flex-col items-end justify-between py-0.5">
        <p className="text-[15px] font-bold text-brand-gold">
          {formatNaira(product.pricePerYard * quantity)}
        </p>
        <button
          type="button"
          aria-label={`Remove ${product.name} from cart`}
          className="flex h-9 w-9 items-center justify-center rounded-btn text-brand-muted transition-colors hover:bg-brand-error/10 hover:text-brand-error focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
          onClick={() => {
            removeItem(product.id);
            showToast("Item removed.", {
              variant: "info",
              action: { label: "Undo", onClick: undoRemove },
            });
          }}
        >
          <Trash2 size={17} />
        </button>
      </div>
    </div>
  );
}
