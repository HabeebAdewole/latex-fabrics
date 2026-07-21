import { Minus, Plus } from "lucide-react";
import { MAX_YARDS, MIN_YARDS } from "../../config";
import { cn } from "../../lib/cn";

interface QuantitySelectorProps {
  value: number;
  onChange: (value: number) => void;
  /** compact = 36px controls for cart rows; default = 44px touch targets */
  compact?: boolean;
  min?: number;
  max?: number;
}

export default function QuantitySelector({
  value,
  onChange,
  compact,
  min = MIN_YARDS,
  max = MAX_YARDS,
}: QuantitySelectorProps) {
  const clamp = (q: number) => Math.min(max, Math.max(min, q));
  const box = compact ? "h-9 w-9" : "h-11 w-11";
  const btn = cn(
    box,
    "flex items-center justify-center rounded-btn border border-brand-muted text-brand-charcoal transition-colors",
    "hover:border-brand-charcoal disabled:opacity-40 disabled:hover:border-brand-muted",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold",
  );

  return (
    <div className="inline-flex items-center">
      <button
        type="button"
        className={btn}
        aria-label="Decrease quantity"
        disabled={value <= min}
        onClick={() => onChange(clamp(value - 1))}
      >
        <Minus size={compact ? 14 : 18} />
      </button>
      <input
        type="number"
        inputMode="numeric"
        aria-label="Quantity in yards"
        className={cn(
          compact ? "h-9 w-10" : "h-11 w-14",
          "border-0 bg-transparent text-center text-[15px] font-bold text-brand-charcoal focus:outline-none",
          "[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none",
        )}
        value={value}
        min={min}
        max={max}
        onChange={(e) => {
          const n = parseInt(e.target.value, 10);
          if (!Number.isNaN(n)) onChange(clamp(n));
        }}
      />
      <button
        type="button"
        className={btn}
        aria-label="Increase quantity"
        disabled={value >= max}
        onClick={() => onChange(clamp(value + 1))}
      >
        <Plus size={compact ? 14 : 18} />
      </button>
    </div>
  );
}
