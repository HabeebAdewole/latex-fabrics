import { Link } from "react-router-dom";
import { Medal, ShieldCheck } from "lucide-react";
import { BUSINESS, CATEGORIES } from "../config";
import { getProducts } from "../lib/catalog";
import { waGreetingLink } from "../lib/whatsapp";
import { buttonVariants } from "../components/ui/Button";
import WhatsAppIcon from "../components/ui/WhatsAppIcon";
import CategoryTile from "../components/product/CategoryTile";
import ProductCard from "../components/product/ProductCard";

const TRUST_ITEMS = [
  { icon: Medal, label: "20+ Years of Excellence" },
  { icon: ShieldCheck, label: "Authentic Materials" },
  { icon: WhatsAppIcon, label: "WhatsApp Ordering" },
] as const;

export default function Home() {
  const featured = getProducts().slice(0, 6);

  return (
    <div>
      {/* SCR-001 §2 — hero */}
      <section className="bg-royal-lace px-6 py-16 text-center md:py-28">
        <p className="font-serif text-[13px] italic tracking-[2px] text-brand-gold md:text-base">
          {BUSINESS.tagline}
        </p>
        <h1 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-bold leading-tight text-brand-ivory md:text-6xl">
          Discover Premium Fabrics
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-brand-ivory/75 md:text-lg">
          Lace, Swiss voile, sequins &amp; luxury textiles — trusted by
          Lagos&rsquo;s finest tailors for over 20 years.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 md:flex-row md:gap-4">
          <Link to="/shop" className={buttonVariants("primary", "md", "w-56")}>
            Shop now
          </Link>
          <Link to="/about" className={buttonVariants("outline", "md", "w-56")}>
            Our story
          </Link>
        </div>
      </section>

      {/* §3 — trust bar */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-content grid-cols-3 gap-2 px-4 py-5 md:px-8 md:py-7">
          {TRUST_ITEMS.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-2 text-center md:flex-row md:justify-center md:gap-3"
            >
              <Icon size={22} className="shrink-0 text-brand-gold" aria-hidden />
              <span className="text-[11px] font-bold text-brand-charcoal md:text-sm">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* §4 — featured categories */}
      <section className="mx-auto max-w-content px-4 py-10 md:px-8 md:py-16">
        <h2 className="text-2xl font-semibold text-brand-charcoal md:text-center md:text-3xl">
          Shop by Category
        </h2>
        <div className="mt-5 grid grid-cols-2 gap-3 md:mt-8 md:grid-cols-6 md:gap-5">
          {CATEGORIES.map((c) => (
            <CategoryTile key={c} category={c} />
          ))}
        </div>
      </section>

      {/* §5 — featured products */}
      <section className="bg-white py-10 md:py-16">
        <div className="mx-auto max-w-content md:px-8">
          <h2 className="px-4 text-2xl font-semibold text-brand-charcoal md:px-0 md:text-center md:text-3xl">
            Our Most Loved Fabrics
          </h2>
          <div className="mt-5 flex gap-3 overflow-x-auto px-4 pb-2 scrollbar-hide md:mt-8 md:grid md:grid-cols-4 md:gap-6 md:overflow-visible md:px-0 md:pb-0">
            {featured.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                className="w-[220px] shrink-0 md:w-auto"
              />
            ))}
          </div>
          <div className="mt-7 flex justify-center">
            <Link to="/shop" className={buttonVariants("outline")}>
              View all products
            </Link>
          </div>
        </div>
      </section>

      {/* §6 — about strip */}
      <section className="mx-auto max-w-content px-6 py-12 text-center md:py-16">
        <blockquote className="mx-auto max-w-2xl font-serif text-lg italic leading-relaxed text-brand-charcoal md:text-2xl">
          &ldquo;For twenty years, I have dressed Lagos in its finest — every
          yard tells a story of quality.&rdquo;
        </blockquote>
        <p className="mt-4 text-xs font-bold uppercase tracking-[2px] text-brand-muted">
          Mrs. Adewole Latifat · Founder
        </p>
        <Link
          to="/about"
          className={buttonVariants("ghost", "sm", "mt-4 normal-case tracking-normal")}
        >
          Learn our story
        </Link>
      </section>

      {/* §7 — WhatsApp CTA band */}
      <section className="bg-royal-lace px-6 py-12 text-center md:py-16">
        <h2 className="mx-auto max-w-xl text-[22px] font-semibold leading-snug text-brand-ivory md:text-3xl">
          Ready to Order? Chat with Us on WhatsApp.
        </h2>
        <a
          href={waGreetingLink()}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants("whatsapp", "md", "mt-6")}
        >
          <WhatsAppIcon size={20} />
          Order via WhatsApp
        </a>
        <p className="mt-4 text-xs text-brand-ivory/60">
          {BUSINESS.hours} · {BUSINESS.responseNote}
        </p>
      </section>
    </div>
  );
}
