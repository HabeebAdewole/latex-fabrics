import ProductCard from "../components/product/ProductCard";
import type { Product } from "../types/product";

import imgKente from "../assets/images/kente.jpg";
import imgSwissVoile from "../assets/images/swiss-voile.jpg";
import imgLace from "../assets/images/lace.jpg";
import imgAnkara from "../assets/images/ankara.jpg";
import imgSilk from "../assets/images/silk.jpg";
import imgAdire from "../assets/images/adire.jpg";
import imgBrocade from "../assets/images/brocade.jpg";
import imgAsoOke from "../assets/images/aso-oke.jpg";

// Dummy Data
const DUMMY_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Green Kente Cloth",
    description: "Traditional Ghanaian Kente",
    price: 5500,
    unit: "yard",
    stock: 85,
    images: [imgKente],
    colors: ["#1e7b36", "#cc2a2a", "#dcb934"],
    category: "Kente",
  },
  {
    id: "2",
    name: "Royal Swiss Voile",
    description: "Premium Swiss Voile with Embroidery",
    price: 7200,
    unit: "yard",
    stock: 120,
    images: [imgSwissVoile],
    colors: ["#17308a", "#6da5eb"],
    category: "Swiss Voile",
  },
  {
    id: "3",
    name: "Burgundy Sequin Lace",
    description: "French Lace with Sequins",
    price: 9800,
    unit: "yard",
    stock: 15,
    images: [imgLace],
    colors: ["#6b1c2b", "#d33a3a"],
    category: "Lace",
  },
  {
    id: "4",
    name: "Golden Ankara Print",
    description: "Wax Print Cotton",
    price: 4800,
    unit: "yard",
    stock: 200,
    images: [imgAnkara],
    colors: ["#eebb2a", "#1a1a1a"],
    category: "Ankara",
  },
  {
    id: "5",
    name: "Emerald Raw Silk",
    description: "100% Pure Raw Silk fabric",
    price: 12000,
    unit: "yard",
    stock: 45,
    images: [imgSilk],
    colors: ["#1e8156"],
    category: "Silk",
  },
  {
    id: "6",
    name: "Geometric Adire",
    description: "Hand-dyed Adire block pattern",
    price: 3500,
    unit: "yard",
    stock: 300,
    images: [imgAdire],
    colors: ["#2d4a6e", "#a84f33"],
    category: "Adire",
  },
  {
    id: "7",
    name: "Navy Brocade Fabric",
    description: "Textured patterned brocade cloth",
    price: 8500,
    unit: "yard",
    stock: 90,
    images: [imgBrocade],
    colors: ["#14244a", "#b5a363"],
    category: "Brocade",
  },
  {
    id: "8",
    name: "Striped Aso-Oke",
    description: "Hand-woven Nigerian cloth",
    price: 15000,
    unit: "bundle",
    stock: 25,
    images: [imgAsoOke],
    colors: ["#822433", "#3a1921"],
    category: "Aso-Oke",
  }
];

const CATEGORIES = [
  "All Fabrics", "Lace", "Swiss Voile", "Cotton", "Silk",
  "Ankara", "Brocade", "Adire", "Aso-Oke"
];

export default function Home() {
  return (
    <div className="flex flex-col gap-8 pb-12">
      {/* Categories Bar */}
      <div className="flex gap-3 overflow-x-auto py-2 pb-4 scrollbar-hide border-b border-brand-gray/50">
        {CATEGORIES.map((category, idx) => (
          <button
            key={category}
            className={`whitespace-nowrap rounded-full px-5 py-2 text-sm font-medium transition-colors ${idx === 0
                ? "bg-brand-green border border-brand-green text-white shadow-sm"
                : "bg-brand-gray border border-transparent text-brand-black/70 hover:bg-[#e4e2dd]"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Header Section */}
      <div>
        <h2 className="text-3xl font-serif font-bold text-brand-green mb-2">
          Premium African Fabrics
        </h2>
        <p className="text-brand-black/60">
          Discover our curated collection of traditional and modern fabrics
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {DUMMY_PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
