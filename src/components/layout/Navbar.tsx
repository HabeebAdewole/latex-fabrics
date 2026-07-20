import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Heart, Menu, Search, ShoppingCart, X } from "lucide-react";
import clsx from "clsx";
import { useCartCount } from "../../stores/cartStore";
import { useWishlistCount } from "../../stores/wishlistStore";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Shop", to: "/shop" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

function CountBadge({ count }: { count: number }) {
  if (count === 0) return null;
  return (
    <span className="absolute -right-1.5 -top-1.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-brand-gold px-1 text-[11px] font-bold text-white">
      {count > 99 ? "99+" : count}
    </span>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const cartCount = useCartCount();
  const wishlistCount = useWishlistCount();

  return (
    <header className="sticky top-0 z-50 bg-brand-wine">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-14 max-w-content items-center justify-between px-4 md:h-16 md:px-8"
      >
        <Link
          to="/"
          className="font-display text-lg font-bold tracking-wide text-brand-gold md:text-xl"
          onClick={() => setMenuOpen(false)}
        >
          LATEX FABRICS
        </Link>

        {/* desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                clsx(
                  "text-sm font-medium transition-colors",
                  isActive
                    ? "font-bold text-brand-gold"
                    : "text-brand-ivory/80 hover:text-brand-ivory",
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        {/* actions */}
        <div className="flex items-center gap-5">
          <Link
            to="/search"
            aria-label="Search fabrics"
            className="text-brand-ivory transition-colors hover:text-brand-gold"
          >
            <Search size={22} />
          </Link>
          <Link
            to="/wishlist"
            aria-label={`Wishlist, ${wishlistCount} saved`}
            className="relative hidden text-brand-ivory transition-colors hover:text-brand-gold md:block"
          >
            <Heart size={22} />
            <CountBadge count={wishlistCount} />
          </Link>
          <Link
            to="/cart"
            aria-label={`Cart, ${cartCount} items`}
            className="relative text-brand-ivory transition-colors hover:text-brand-gold"
          >
            <ShoppingCart size={22} />
            <CountBadge count={cartCount} />
          </Link>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="text-brand-ivory md:hidden"
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* mobile menu panel */}
      {menuOpen && (
        <div className="border-t border-brand-ivory/10 bg-brand-wine md:hidden">
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                clsx(
                  "block px-6 py-3.5 text-sm font-medium",
                  isActive
                    ? "font-bold text-brand-gold"
                    : "text-brand-ivory/80",
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}
