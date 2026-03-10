import { ShoppingCart } from "lucide-react";
import Button from "../common/Button";
import type { Product } from "../../types/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const isLowStock = product.stock < 20;

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-brand-gray/50 hover:shadow-md transition-shadow group flex flex-col h-full">
      {/* Image Container */}
      <div className="aspect-[4/3] w-full overflow-hidden bg-brand-gray relative">
        <img 
          src={product.images[0]} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-serif font-bold text-[#1a1a1a] text-lg leading-tight mb-1">
          {product.name}
        </h3>
        <p className="text-xs text-brand-black/60 mb-3">{product.description}</p>

        <div className="flex items-center justify-between mb-3 mt-auto">
          <p className="font-bold text-brand-green">
            ₦ {product.price.toLocaleString()} <span className="text-xs font-normal text-brand-black/60">/ {product.unit}</span>
          </p>
          
          {/* Colors */}
          <div className="flex gap-1.5">
            {product.colors.map((color, idx) => (
              <div 
                key={idx} 
                className="w-3.5 h-3.5 rounded-full border border-brand-gray/50 shadow-sm"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>

        {/* Stock Status */}
        <div className="flex items-center gap-1.5 mb-4">
          <div className={`w-1.5 h-1.5 rounded-full ${isLowStock ? 'bg-red-500' : 'bg-brand-green'}`} />
          <span className="text-[11px] text-brand-black/60 font-medium">
            {isLowStock ? 'Low Stock' : 'In Stock'} ({product.stock} {product.unit}s)
          </span>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <Button variant="primary" className="flex-1 bg-[#d39a3e]/90 text-sm h-9 hover:bg-brand-gold gap-1.5">
            <span className="text-sm">💬</span> WhatsApp
          </Button>
          <Button variant="outline" className="flex-1 text-sm h-9 border-brand-gray text-brand-black hover:border-brand-green gap-1.5">
            <ShoppingCart size={14} /> Add
          </Button>
        </div>
      </div>
    </div>
  );
}
