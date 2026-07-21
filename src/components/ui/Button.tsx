import type { ButtonHTMLAttributes } from "react";
import { cn } from "../../lib/cn";

export type ButtonVariant =
  | "primary"
  | "whatsapp"
  | "outline"
  | "ghost"
  | "danger";
export type ButtonSize = "md" | "sm";

/** Class builder — use directly on <Link>/<a> when the CTA is a navigation. */
export function buttonVariants(
  variant: ButtonVariant = "primary",
  size: ButtonSize = "md",
  className?: string,
) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-btn text-[15px] font-bold uppercase tracking-wide transition-colors",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-ivory",
    "disabled:pointer-events-none disabled:opacity-50",
    size === "md" ? "h-12 px-6" : "h-11 px-4 text-sm",
    {
      primary: "bg-brand-burgundy text-white hover:bg-brand-burgundy-dark",
      whatsapp: "bg-brand-whatsapp text-white hover:bg-brand-whatsapp-dark",
      outline:
        "border-2 border-brand-gold text-brand-gold hover:bg-brand-gold/10",
      ghost: "text-brand-muted hover:bg-brand-muted/10 hover:text-brand-charcoal",
      danger: "text-brand-error hover:bg-brand-error/10",
    }[variant],
    className,
  );
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export default function Button({
  variant = "primary",
  size = "md",
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonVariants(variant, size, className)}
      {...props}
    />
  );
}
