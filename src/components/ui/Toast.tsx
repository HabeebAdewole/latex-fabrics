import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { Check } from "lucide-react";

interface ToastAction {
  label: string;
  onClick: () => void;
}

interface Toast {
  id: number;
  message: string;
  variant: "success" | "info";
  action?: ToastAction;
}

interface ToastContextValue {
  showToast: (
    message: string,
    opts?: { variant?: Toast["variant"]; action?: ToastAction },
  ) => void;
}

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
}

const TOAST_DURATION = 3000; // 3s auto-dismiss per COMP-004

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const nextId = useRef(0);

  const showToast = useCallback<ToastContextValue["showToast"]>(
    (message, opts) => {
      const id = nextId.current++;
      setToasts((t) => [
        ...t,
        { id, message, variant: opts?.variant ?? "success", action: opts?.action },
      ]);
      setTimeout(() => {
        setToasts((t) => t.filter((toast) => toast.id !== id));
      }, TOAST_DURATION);
    },
    [],
  );

  const dismiss = (id: number) =>
    setToasts((t) => t.filter((toast) => toast.id !== id));

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {/* bottom-center, above the mobile bottom nav */}
      <div
        aria-live="polite"
        className="pointer-events-none fixed inset-x-0 bottom-20 z-[60] flex flex-col items-center gap-2 px-4 md:bottom-6"
      >
        {toasts.map((toast) => (
          <button
            key={toast.id}
            type="button"
            onClick={() => dismiss(toast.id)}
            className="pointer-events-auto flex animate-toast-in items-center gap-2.5 rounded-card bg-brand-wine px-5 py-3.5 text-sm text-brand-ivory shadow-lg"
          >
            {toast.variant === "success" && (
              <Check size={16} className="shrink-0 text-brand-gold" aria-hidden />
            )}
            <span>{toast.message}</span>
            {toast.action && (
              <span
                role="button"
                tabIndex={0}
                className="ml-1 font-bold text-brand-gold"
                onClick={(e) => {
                  e.stopPropagation();
                  toast.action!.onClick();
                  dismiss(toast.id);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.stopPropagation();
                    toast.action!.onClick();
                    dismiss(toast.id);
                  }
                }}
              >
                {toast.action.label}
              </span>
            )}
          </button>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
