import { NavLink } from "react-router-dom";
import { Grid2x2, Heart, Home, Search, ShoppingCart } from "lucide-react";
import clsx from "clsx";
import { useCartCount } from "../../stores/cartStore";
import { useWishlistCount } from "../../stores/wishlistStore";

const TABS = [
  { label: "Home", to: "/", icon: Home },
  { label: "Shop", to: "/shop", icon: Grid2x2 },
  { label: "Search", to: "/search", icon: Search },
  { label: "Wishlist", to: "/wishlist", icon: Heart },
  { label: "Cart", to: "/cart", icon: ShoppingCart },
] as const;

export default function BottomNav() {
  const cartCount = useCartCount();
  const wishlistCount = useWishlistCount();

  return (
    <nav
      aria-label="Bottom navigation"
      className="fixed inset-x-0 bottom-0 z-50 flex h-16 items-center justify-around bg-brand-wine pb-[env(safe-area-inset-bottom)] md:hidden"
    >
      {TABS.map((tab) => {
        const Icon = tab.icon;
        const badge =
          tab.label === "Cart"
            ? cartCount
            : tab.label === "Wishlist"
              ? wishlistCount
              : 0;
        return (
          <NavLink
            key={tab.to}
            to={tab.to}
            end={tab.to === "/"}
            aria-label={badge > 0 ? `${tab.label} (${badge})` : tab.label}
            className={({ isActive }) =>
              clsx(
                "flex min-w-[44px] flex-col items-center gap-1 py-1",
                isActive ? "text-brand-gold" : "text-brand-ivory/50",
              )
            }
          >
            {({ isActive }) => (
              <>
                <span className="relative">
                  <Icon size={20} />
                  {badge > 0 && (
                    <span className="absolute -right-2 -top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-brand-gold px-0.5 text-[10px] font-bold text-white">
                      {badge > 99 ? "99+" : badge}
                    </span>
                  )}
                </span>
                <span
                  className={clsx(
                    "text-[11px]",
                    isActive ? "font-bold" : "font-medium",
                  )}
                >
                  {tab.label}
                </span>
              </>
            )}
          </NavLink>
        );
      })}
    </nav>
  );
}
