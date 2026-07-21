import { useId, type InputHTMLAttributes, type TextareaHTMLAttributes } from "react";
import { cn } from "../../lib/cn";

const fieldClasses = (error?: string) =>
  cn(
    "w-full rounded-btn bg-brand-ivory px-3.5 text-[15px] text-brand-charcoal placeholder:text-brand-muted",
    "focus:outline-none focus:ring-0",
    error
      ? "border-2 border-brand-error"
      : "border border-brand-muted focus:border-2 focus:border-brand-gold",
  );

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export function Input({ label, error, className, id, ...props }: InputProps) {
  const autoId = useId();
  const inputId = id ?? autoId;
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label htmlFor={inputId} className="text-sm font-bold text-brand-charcoal">
        {label}
      </label>
      <input
        id={inputId}
        className={cn(fieldClasses(error), "h-12")}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : undefined}
        {...props}
      />
      {error && (
        <p id={`${inputId}-error`} className="text-[13px] text-brand-error">
          {error}
        </p>
      )}
    </div>
  );
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export function Textarea({ label, error, className, id, ...props }: TextareaProps) {
  const autoId = useId();
  const inputId = id ?? autoId;
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label htmlFor={inputId} className="text-sm font-bold text-brand-charcoal">
        {label}
      </label>
      <textarea
        id={inputId}
        className={cn(fieldClasses(error), "min-h-[72px] py-3")}
        aria-invalid={!!error}
        {...props}
      />
      {error && <p className="text-[13px] text-brand-error">{error}</p>}
    </div>
  );
}
