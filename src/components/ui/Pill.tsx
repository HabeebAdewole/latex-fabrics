import type { ButtonHTMLAttributes } from "react";
import { cn } from "../../lib/cn";

interface PillProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

/** Category filter pill (COMP-007). 150ms color transition per design system. */
export default function Pill({ active, className, ...props }: PillProps) {
  return (
    <button
      type="button"
      aria-pressed={active}
      className={cn(
        "h-9 shrink-0 whitespace-nowrap rounded-full px-4 text-sm transition-colors duration-150",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold",
        active
          ? "bg-brand-burgundy font-bold text-white"
          : "border border-brand-muted font-medium text-brand-muted hover:border-brand-charcoal hover:text-brand-charcoal",
        className,
      )}
      {...props}
    />
  );
}
