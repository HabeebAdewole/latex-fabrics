import { cn } from "../../lib/cn";

interface RadioProps {
  name: string;
  value: string;
  label: string;
  checked: boolean;
  onChange: (value: string) => void;
}

export default function Radio({ name, value, label, checked, onChange }: RadioProps) {
  return (
    <label className="flex min-h-[44px] cursor-pointer items-center gap-2.5">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
        className="peer sr-only"
      />
      <span
        aria-hidden
        className={cn(
          "flex h-5 w-5 items-center justify-center rounded-full border-2 transition-colors",
          "peer-focus-visible:ring-2 peer-focus-visible:ring-brand-gold peer-focus-visible:ring-offset-2",
          checked ? "border-brand-gold" : "border-brand-muted",
        )}
      >
        {checked && <span className="h-2.5 w-2.5 rounded-full bg-brand-burgundy" />}
      </span>
      <span className="text-[15px] text-brand-charcoal">{label}</span>
    </label>
  );
}
