/** Prices are always shown as ₦8,500 — gold, bold, exact (brand guidelines §6.3). */
export function formatNaira(amount: number): string {
  return `₦${amount.toLocaleString("en-NG")}`;
}
