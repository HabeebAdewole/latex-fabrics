import { Search, Bell, ShoppingCart, Filter } from "lucide-react";
import Input from "../common/Input";
import Button from "../common/Button";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between bg-brand-beige px-8 border-b border-brand-gray/50">
      {/* Left side: Search and Filter */}
      <div className="flex flex-1 items-center max-w-2xl gap-4">
        <Input 
          placeholder="Search fabrics..." 
          icon={<Search size={18} />}
          containerClassName="flex-1"
          className="bg-[#F5F2EA] border-transparent"
        />
        <Button variant="ghost" className="bg-[#EBE7DF] hover:bg-[#dfdcd6] text-brand-black gap-2 h-10 border-transparent whitespace-nowrap">
          <Filter size={16} /> Filters
        </Button>
      </div>

      {/* Right side: Actions */}
      <div className="flex items-center gap-6 ml-auto">
        <button className="relative text-brand-black/70 hover:text-brand-black transition-colors">
          <Bell size={22} />
          <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
            2
          </span>
        </button>
        
        <button className="relative text-brand-black/70 hover:text-brand-black transition-colors">
          <ShoppingCart size={22} />
          <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-brand-gold text-[10px] font-bold text-white">
            3
          </span>
        </button>

        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-green text-sm font-semibold text-white shadow-sm cursor-pointer border-2 border-[#EBE7DF]">
          MA
        </div>
      </div>
    </header>
  );
}
