import { Link } from "react-router-dom";
import { BUSINESS, LOCATIONS } from "../../config";
import { waGreetingLink } from "../../lib/whatsapp";

export default function Footer() {
  return (
    <footer className="bg-brand-wine text-brand-ivory">
      <div className="mx-auto grid max-w-content gap-8 px-6 py-10 md:grid-cols-4 md:gap-12 md:px-8 md:py-14">
        <div>
          <p className="font-display text-lg font-bold text-brand-gold">
            LATEX FABRICS
          </p>
          <p className="mt-2 font-serif text-[13px] italic tracking-wide text-brand-ivory/70">
            {BUSINESS.tagline}
          </p>
          <p className="mt-3 text-[13px] leading-relaxed text-brand-ivory/70">
            Premium lace, voile, sequins &amp; luxury textiles. Trusted by
            Lagos&rsquo;s finest tailors for over 20 years.
          </p>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[2px] text-brand-gold">
            Quick links
          </p>
          <ul className="mt-3 space-y-2 text-sm text-brand-ivory/80">
            <li><Link to="/shop" className="hover:text-brand-gold">Shop</Link></li>
            <li><Link to="/about" className="hover:text-brand-gold">About</Link></li>
            <li><Link to="/contact" className="hover:text-brand-gold">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[2px] text-brand-gold">
            Visit us
          </p>
          <ul className="mt-3 space-y-3 text-[13px] leading-relaxed text-brand-ivory/80">
            {LOCATIONS.map((loc) => (
              <li key={loc.id}>{loc.address}</li>
            ))}
            <li className="text-brand-ivory/60">{BUSINESS.hours}</li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[2px] text-brand-gold">
            Order on WhatsApp
          </p>
          <p className="mt-3 text-[13px] leading-relaxed text-brand-ivory/70">
            Mrs. Adewole responds within a few hours during business hours.
          </p>
          <a
            href={waGreetingLink()}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex h-11 items-center rounded-btn bg-brand-whatsapp px-5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-whatsapp-dark"
          >
            Chat with us
          </a>
        </div>
      </div>

      <div className="border-t border-brand-ivory/10">
        <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4 text-xs text-brand-muted md:px-8">
          <span>© 2026 Latex Fabrics. All rights reserved.</span>
          <span>v1.0</span>
        </div>
      </div>
    </footer>
  );
}
