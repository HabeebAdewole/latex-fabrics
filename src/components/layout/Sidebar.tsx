import { Link, useLocation } from "react-router-dom";
import { Home, Grid, Heart, Package, User, MapPin, CreditCard, Settings } from "lucide-react";
import clsx from "clsx";
import Button from "../common/Button";

export default function Sidebar() {
  const location = useLocation();

  const mainNav = [
    { name: "Home", path: "/", icon: Home },
    { name: "All Categories", path: "/categories", icon: Grid },
    { name: "My Orders", path: "/orders", icon: Package },
    { name: "Favorites", path: "/favorites", icon: Heart },
  ];

  const accountNav = [
    { name: "Profile", path: "/profile", icon: User },
    { name: "Addresses", path: "/addresses", icon: MapPin },
    { name: "Payment Methods", path: "/payment-methods", icon: CreditCard },
    { name: "Settings", path: "/settings", icon: Settings },
  ];

  const NavItem = ({ item }: { item: typeof mainNav[0] }) => {
    const isActive = location.pathname === item.path;
    const Icon = item.icon;
    
    return (
      <Link
        to={item.path}
        className={clsx(
          "flex items-center gap-3 px-6 py-3 text-sm font-medium transition-colors",
          isActive 
            ? "bg-brand-green-light border-l-4 border-brand-gold text-brand-gold" 
            : "text-white/80 hover:bg-brand-green-light/50 hover:text-white border-l-4 border-transparent"
        )}
      >
        <Icon size={18} className={isActive ? "text-brand-gold" : "text-white/80"} />
        {item.name}
      </Link>
    );
  };

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 bg-brand-green flex flex-col pt-6 pb-6 shadow-lg">
      {/* Logo Area */}
      <div className="px-6 mb-8 mt-2">
        <Link to="/" className="inline-block bg-[#FDFBF7] px-4 py-2 rounded-sm outline outline-1 outline-offset-4 outline-brand-gold/60 shadow-sm">
          <h1 className="text-xl font-serif font-bold text-brand-gold tracking-wide">
            Latex Fabrics
          </h1>
        </Link>
      </div>

      <div className="flex-1 overflow-y-auto overflow-x-hidden space-y-8">
        {/* Main Nav */}
        <nav className="flex flex-col">
          {mainNav.map((item) => (
            <NavItem key={item.name} item={item} />
          ))}
        </nav>

        {/* Account Nav */}
        <nav className="flex flex-col">
          <div className="px-8 pb-3 text-xs tracking-wider text-white/50 font-bold uppercase">
            Account
          </div>
          {accountNav.map((item) => (
            <NavItem key={item.name} item={item} />
          ))}
        </nav>
      </div>

      {/* Bottom Button */}
      <div className="px-6 pt-4">
        <Button 
          variant="primary" 
          fullWidth 
          className="gap-2 bg-[#d39a3e]/90 hover:bg-brand-gold shadow-md border-0"
        >
          <span className="text-xs">💬</span> Quick Order
        </Button>
      </div>
    </aside>
  );
}
