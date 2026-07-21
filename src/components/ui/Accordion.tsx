import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../../lib/cn";

interface Section {
  title: string;
  content: ReactNode;
}

/** Description / Fabric Details / Care / Occasion accordion (SCR-003 §8). */
export default function Accordion({
  sections,
  defaultOpen = 0,
}: {
  sections: Section[];
  defaultOpen?: number;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <div>
      {sections.map((section, i) => {
        const isOpen = open === i;
        return (
          <div key={section.title} className="border-b border-brand-muted/25">
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between py-3.5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
            >
              <span className="text-[15px] font-semibold text-brand-charcoal">
                {section.title}
              </span>
              <ChevronDown
                size={18}
                className={cn(
                  "shrink-0 text-brand-muted transition-transform",
                  isOpen && "rotate-180",
                )}
                aria-hidden
              />
            </button>
            {isOpen && (
              <div className="pb-4 text-sm leading-relaxed text-brand-muted">
                {section.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
