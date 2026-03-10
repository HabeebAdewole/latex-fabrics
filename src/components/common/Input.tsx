import { forwardRef, type InputHTMLAttributes } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  containerClassName?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, containerClassName, icon, ...props }, ref) => {
    return (
      <div className={twMerge(clsx("relative w-full", containerClassName))}>
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-black/50">
            {icon}
          </div>
        )}
        <input
          ref={ref}
          className={twMerge(
            clsx(
              "flex h-10 w-full rounded-md border border-brand-gray bg-white px-3 py-2 text-sm text-brand-black",
              "placeholder:text-brand-black/50",
              "focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent",
              "disabled:cursor-not-allowed disabled:opacity-50",
              icon && "pl-10",
              className
            )
          )}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
