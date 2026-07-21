import { Link } from "react-router-dom";
import { BUSINESS } from "../config";

// Chunk A shell version — full SCR-001 sections land in Chunk B.
export default function Home() {
  return (
    <div>
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
          <Link
            to="/shop"
            className="flex h-12 w-56 items-center justify-center rounded-btn bg-brand-burgundy text-[15px] font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-burgundy-dark"
          >
            Shop now
          </Link>
          <Link
            to="/about"
            className="flex h-12 w-56 items-center justify-center rounded-btn border-2 border-brand-gold text-[15px] font-bold uppercase tracking-wide text-brand-gold transition-colors hover:bg-brand-gold/10"
          >
            Our story
          </Link>
        </div>
      </section>
    </div>
  );
}
