import { MapPin } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { BUSINESS, type LOCATIONS } from "../../config";
import { waGreetingLink } from "../../lib/whatsapp";
import { buttonVariants } from "./Button";
import { cn } from "../../lib/cn";

type Location = (typeof LOCATIONS)[number];

export default function LocationCard({ location }: { location: Location }) {
  return (
    <div className="rounded-card border border-brand-muted/25 bg-white p-4">
      <p className="flex items-center gap-2 text-[15px] font-bold text-brand-charcoal">
        <MapPin size={17} className="shrink-0 text-brand-gold" aria-hidden />
        {location.name}
      </p>
      <p className="mt-2 text-[13px] leading-relaxed text-brand-muted">
        {location.address}
      </p>
      <p className="mt-1.5 text-xs text-brand-muted">
        {BUSINESS.hours} · {BUSINESS.hoursNote}
      </p>
      <div className="mt-3.5 flex gap-2.5">
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.mapsQuery)}`}
          target="_blank"
          rel="noreferrer"
          className={cn(
            buttonVariants("outline", "sm"),
            "h-9 border px-3.5 text-xs normal-case tracking-normal",
          )}
        >
          Get directions
        </a>
        <a
          href={waGreetingLink()}
          target="_blank"
          rel="noreferrer"
          className={cn(
            buttonVariants("whatsapp", "sm"),
            "h-9 px-3.5 text-xs normal-case tracking-normal",
          )}
        >
          <WhatsAppIcon size={14} />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
