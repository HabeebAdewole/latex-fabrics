import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Check, X } from "lucide-react";
import Button, { buttonVariants } from "../ui/Button";
import { Input, Textarea } from "../ui/Input";
import Radio from "../ui/Radio";
import WhatsAppIcon from "../ui/WhatsAppIcon";
import { formatNaira } from "../../lib/format";
import {
  buildOrderMessage,
  waLink,
  type OrderLine,
} from "../../lib/whatsapp";
import { BUSINESS } from "../../config";

const NOTES_MAX = 200;

interface CheckoutModalProps {
  open: boolean;
  onClose: () => void;
  lines: OrderLine[];
  /** Called after the WhatsApp handoff (e.g. clear the cart). */
  onSent?: () => void;
}

export default function CheckoutModal({
  open,
  onClose,
  lines,
  onSent,
}: CheckoutModalProps) {
  const [name, setName] = useState("");
  const [delivery, setDelivery] = useState<"Pickup" | "Delivery" | "">("");
  const [notes, setNotes] = useState("");
  const [nameError, setNameError] = useState<string>();
  const [deliveryError, setDeliveryError] = useState<string>();
  const [sent, setSent] = useState(false);
  const navigate = useNavigate();
  const dialogRef = useRef<HTMLDivElement>(null);

  const grandTotal = lines.reduce(
    (sum, l) => sum + l.quantity * l.pricePerYard,
    0,
  );

  // reset when reopened
  useEffect(() => {
    if (open) {
      setSent(false);
      setNameError(undefined);
      setDeliveryError(undefined);
    }
  }, [open]);

  // Esc to close + focus trap
  useEffect(() => {
    if (!open) return;
    const dialog = dialogRef.current;
    const focusable = () =>
      Array.from(
        dialog?.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        ) ?? [],
      ).filter((el) => !el.hasAttribute("disabled"));

    focusable()[0]?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "Tab") {
        const items = focusable();
        if (items.length === 0) return;
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose, sent]);

  if (!open) return null;

  const handleSend = () => {
    let valid = true;
    if (!name.trim()) {
      setNameError("Enter your name so we know who's ordering.");
      valid = false;
    } else setNameError(undefined);
    if (!delivery) {
      setDeliveryError("Choose pickup or delivery.");
      valid = false;
    } else setDeliveryError(undefined);
    if (!valid) return;

    const message = buildOrderMessage({
      lines,
      customerName: name.trim(),
      deliveryPreference: delivery as "Pickup" | "Delivery",
      notes,
    });
    window.open(waLink(message), "_blank", "noopener");
    setSent(true);
    onSent?.();
  };

  return (
    <div
      className="fixed inset-0 z-[70] flex items-end justify-center bg-brand-wine/60 md:items-center"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="checkout-title"
        onClick={(e) => e.stopPropagation()}
        className="max-h-[92vh] w-full overflow-y-auto rounded-t-sheet bg-brand-ivory p-5 md:max-w-md md:rounded-sheet"
      >
        {sent ? (
          <div className="flex flex-col items-center gap-3 py-8 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-success/15 text-brand-success">
              <Check size={30} />
            </div>
            <h2
              id="checkout-title"
              className="font-serif text-2xl font-bold text-brand-charcoal"
            >
              Order Sent!
            </h2>
            <p className="max-w-xs text-sm leading-relaxed text-brand-muted">
              Mrs. Adewole will respond within a few hours during business hours
              ({BUSINESS.hours}).
            </p>
            <Button
              className="mt-2 w-full"
              onClick={() => {
                onClose();
                navigate("/");
              }}
            >
              Continue shopping
            </Button>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between">
              <h2
                id="checkout-title"
                className="font-serif text-xl font-bold text-brand-charcoal"
              >
                Complete Your Order
              </h2>
              <button
                type="button"
                aria-label="Close"
                onClick={onClose}
                className="text-brand-muted hover:text-brand-charcoal"
              >
                <X size={20} />
              </button>
            </div>

            {/* order summary */}
            <div className="mt-4 rounded-card bg-white p-3.5">
              <ul className="space-y-1.5">
                {lines.map((l) => (
                  <li
                    key={l.name}
                    className="flex justify-between gap-3 text-[13px]"
                  >
                    <span className="text-brand-charcoal">
                      {l.name} × {l.quantity}
                    </span>
                    <span className="font-semibold text-brand-charcoal">
                      {formatNaira(l.quantity * l.pricePerYard)}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-2 flex items-center justify-between border-t border-brand-muted/25 pt-2">
                <span className="text-sm font-bold text-brand-charcoal">
                  Cart Total
                </span>
                <span className="text-lg font-bold text-brand-gold">
                  {formatNaira(grandTotal)}
                </span>
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-4">
              <Input
                label="Your Name"
                placeholder="e.g. Adaeze Johnson"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                required
              />

              <fieldset>
                <legend className="text-sm font-bold text-brand-charcoal">
                  How would you like to receive your order?
                </legend>
                <div className="mt-1.5">
                  <Radio
                    name="delivery"
                    value="Pickup"
                    label="Pickup from Oshodi store"
                    checked={delivery === "Pickup"}
                    onChange={(v) => setDelivery(v as "Pickup")}
                  />
                  <Radio
                    name="delivery"
                    value="Delivery"
                    label="Delivery (discuss with vendor)"
                    checked={delivery === "Delivery"}
                    onChange={(v) => setDelivery(v as "Delivery")}
                  />
                </div>
                {deliveryError && (
                  <p className="text-[13px] text-brand-error">{deliveryError}</p>
                )}
              </fieldset>

              <div>
                <Textarea
                  label="Any special requests or notes? (optional)"
                  placeholder="e.g. I need it before Saturday"
                  value={notes}
                  maxLength={NOTES_MAX}
                  onChange={(e) => setNotes(e.target.value)}
                />
                <p className="mt-1 text-right text-xs text-brand-muted">
                  {notes.length}/{NOTES_MAX}
                </p>
              </div>

              <button
                type="button"
                onClick={handleSend}
                className={buttonVariants("whatsapp", "md", "w-full")}
              >
                <WhatsAppIcon size={20} />
                Send Order on WhatsApp
              </button>
              <p className="text-center text-xs leading-relaxed text-brand-muted">
                This opens WhatsApp with your order details. Your order is
                confirmed when Mrs. Adewole responds.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
