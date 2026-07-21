import { Link } from "react-router-dom";
import type { Category } from "../../config";

/** Stand-in category imagery until real photography arrives. */
const CATEGORY_IMAGES: Record<Category, string> = {
  Lace: "/images/products/lace.jpg",
  "Swiss Voile": "/images/products/swiss-voile.jpg",
  "Cord Lace": "/images/products/brocade.jpg",
  Sequins: "/images/products/ankara.jpg",
  "Dry Lace": "/images/products/adire.jpg",
  "Luxury Fabrics": "/images/products/aso-oke.jpg",
};

export default function CategoryTile({ category }: { category: Category }) {
  return (
    <Link
      to={`/shop?category=${encodeURIComponent(category)}`}
      className="group relative block h-28 overflow-hidden rounded-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold md:h-40"
    >
      <img
        src={CATEGORY_IMAGES[category]}
        alt={`${category} fabrics`}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
      />
      <span className="absolute inset-x-0 bottom-0 bg-brand-wine/75 px-3 py-2 text-[13px] font-bold text-brand-ivory">
        {category}
      </span>
    </Link>
  );
}
