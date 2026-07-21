// WhatsApp order handoff — message format is fixed by brand-guidelines §9.3.

import { WHATSAPP_NUMBER } from "../config";
import { formatNaira } from "./format";

export interface OrderLine {
  name: string;
  quantity: number;
  pricePerYard: number;
}

export interface OrderDetails {
  lines: OrderLine[];
  customerName: string;
  deliveryPreference: "Pickup" | "Delivery";
  notes?: string;
}

export function buildOrderMessage(order: OrderDetails): string {
  const itemBlocks = order.lines.map((line) => {
    const total = line.quantity * line.pricePerYard;
    return [
      `🧵 ${line.name}`,
      `Quantity: ${line.quantity} yards`,
      `Price: ${formatNaira(line.pricePerYard)}/yard × ${line.quantity} yards = ${formatNaira(total)}`,
    ].join("\n");
  });

  const grandTotal = order.lines.reduce(
    (sum, l) => sum + l.quantity * l.pricePerYard,
    0,
  );

  const parts = [
    "Hello! I'd like to place an order from Latex Fabrics:",
    "",
    itemBlocks.join("\n\n"),
    "",
    "────────────────────",
    `Cart Total: ${formatNaira(grandTotal)}`,
    "",
    `My name: ${order.customerName}`,
    `Delivery preference: ${order.deliveryPreference === "Pickup" ? "Pickup from Oshodi store" : "Delivery (discuss with vendor)"}`,
  ];
  if (order.notes?.trim()) parts.push(`Notes: ${order.notes.trim()}`);
  parts.push("", "Please confirm availability. Thank you! 🙏");

  return parts.join("\n");
}

/** wa.me deep link — opens the WhatsApp app on mobile, WhatsApp Web on desktop. */
export function waLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Generic greeting link for contact buttons (no order attached). */
export function waGreetingLink(): string {
  return waLink(
    "Hello Latex Fabrics! I'd like to ask about your fabrics, please.",
  );
}
