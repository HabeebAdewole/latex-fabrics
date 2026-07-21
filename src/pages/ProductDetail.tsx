import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Heart, Share2 } from "lucide-react";
import { getProductById, getRelatedProducts, getStockStatus } from "../lib/catalog";
import { formatNaira } from "../lib/format";
import { buildOrderMessage, waLink } from "../lib/whatsapp";
import { MAX_YARDS } from "../config";
import Button, { buttonVariants } from "../components/ui/Button";
import WhatsAppIcon from "../components/ui/WhatsAppIcon";
import QuantitySelector from "../components/ui/QuantitySelector";
import Accordion from "../components/ui/Accordion";
import { FabricBadge, StockBadge } from "../components/ui/Badge";
import ProductCard from "../components/product/ProductCard";
import { useToast } from "../components/ui/Toast";
import { useCartStore } from "../stores/cartStore";
import { useWishlistStore } from "../stores/wishlistStore";
import { cn } from "../lib/cn";
import NotFound from "./NotFound";

export default function ProductDetail() {
  const { productId } = useParams();
  const product = productId ? getProductById(productId) : undefined;

  const [activeImage, setActiveImage] = useState(0);
  const [qty, setQty] = useState(1);
  const addItem = useCartStore((s) => s.addItem);
  const wishlisted = useWishlistStore((s) => (product ? s.ids.includes(product.id) : false));
  const toggleWishlist = useWishlistStore((s) => s.toggle);
  const { showToast } = useToast();

  if (!product) return <NotFound />;

  const stock = getStockStatus(product);
  const outOfStock = stock === "out-of-stock";
  const lineTotal = product.pricePerYard * qty;
  const related = getRelatedProducts(product);

  const orderHref = waLink(
    buildOrderMessage({
      lines: [{ name: product.name, quantity: qty, pricePerYard: product.pricePerYard }],
      customerName: "",
      deliveryPreference: "Pickup",
    }),
  );

  const shareProduct = async () => {
    const url = window.location.href;
    const text = `Check out this fabric from Latex Fabrics: ${product.name} — ${url}`;
    if (navigator.share) {
      try {
        await navigator.share({ title: product.name, text, url });
      } catch {
        /* user cancelled */
      }
    } else {
      await navigator.clipboard.writeText(url);
      showToast("Link copied!");
    }
  };

  return (
    <div className="mx-auto max-w-content px-4 py-6 md:px-8 md:py-10">
      <nav className="text-xs text-brand-muted" aria-label="Breadcrumb">
        <Link to="/" className="hover:text-brand-charcoal">Home</Link> &rsaquo;{" "}
        <Link to="/shop" className="hover:text-brand-charcoal">Shop</Link> &rsaquo;{" "}
        <Link
          to={`/shop?category=${encodeURIComponent(product.category)}`}
          className="hover:text-brand-charcoal"
        >
          {product.category}
        </Link>{" "}
        &rsaquo; <span className="text-brand-charcoal">{product.name}</span>
      </nav>

      <div className="mt-4 grid gap-8 md:grid-cols-2 md:gap-14">
        {/* gallery */}
        <div>
          <div className="aspect-[4/3] overflow-hidden rounded-card bg-white">
            <img
              src={product.images[activeImage]}
              alt={`${product.name} — ${product.category} fabric`}
              className="h-full w-full object-cover"
            />
          </div>
          {product.images.length > 1 && (
            <div className="mt-3 flex gap-2">
              {product.images.map((img, i) => (
                <button
                  key={img}
                  type="button"
                  aria-label={`View image ${i + 1}`}
                  onClick={() => setActiveImage(i)}
                  className={cn(
                    "h-16 w-20 overflow-hidden rounded-lg border-2",
                    i === activeImage ? "border-brand-gold" : "border-transparent",
                  )}
                >
                  <img src={img} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* info */}
        <div>
          <div className="flex items-start justify-between gap-3">
            <FabricBadge label={product.category} />
            <div className="flex gap-3 text-brand-muted">
              <button
                type="button"
                aria-label={wishlisted ? "Remove from wishlist" : "Save to wishlist"}
                aria-pressed={wishlisted}
                onClick={() => toggleWishlist(product.id)}
                className="transition-colors hover:text-brand-burgundy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
              >
                <Heart
                  size={22}
                  className={cn(wishlisted && "text-brand-burgundy")}
                  fill={wishlisted ? "currentColor" : "none"}
                />
              </button>
              <button
                type="button"
                aria-label="Share this fabric"
                onClick={shareProduct}
                className="transition-colors hover:text-brand-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
              >
                <Share2 size={22} />
              </button>
            </div>
          </div>

          <h1 className="mt-3 font-serif text-3xl font-bold text-brand-charcoal">
            {product.name}
          </h1>
          <p className="mt-2 flex items-baseline gap-1">
            <span className="text-2xl font-bold text-brand-gold">
              {formatNaira(product.pricePerYard)}
            </span>
            <span className="text-sm text-brand-muted">/yard</span>
          </p>
          <StockBadge product={product} className="mt-2" />

          {!outOfStock && (
            <div className="mt-5">
              <p className="text-sm font-bold text-brand-charcoal">
                Quantity (yards)
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-4">
                <QuantitySelector value={qty} onChange={setQty} max={MAX_YARDS} />
                <p className="text-sm text-brand-muted">
                  {qty} × {formatNaira(product.pricePerYard)} ={" "}
                  <span className="font-bold text-brand-charcoal">
                    {formatNaira(lineTotal)}
                  </span>
                </p>
              </div>
            </div>
          )}

          <div className="mt-6 flex flex-col gap-3">
            {outOfStock ? (
              <a
                href={waLink(
                  `Hello Latex Fabrics! Please notify me when ${product.name} is back in stock.`,
                )}
                target="_blank"
                rel="noreferrer"
                className={buttonVariants("whatsapp", "md", "w-full")}
              >
                <WhatsAppIcon size={20} />
                Notify me on WhatsApp
              </a>
            ) : (
              <>
                <Button
                  className="w-full"
                  onClick={() => {
                    addItem(product.id, qty);
                    showToast("Added to cart!");
                  }}
                >
                  Add to cart
                </Button>
                <a
                  href={orderHref}
                  target="_blank"
                  rel="noreferrer"
                  className={buttonVariants("whatsapp", "md", "w-full")}
                >
                  <WhatsAppIcon size={20} />
                  Order via WhatsApp
                </a>
              </>
            )}
          </div>

          <div className="mt-6">
            <Accordion
              sections={[
                { title: "Description", content: <p>{product.description}</p> },
                {
                  title: "Fabric Details",
                  content: (
                    <ul className="space-y-1">
                      <li>Category: {product.category}</li>
                      <li>Price: {formatNaira(product.pricePerYard)} per yard</li>
                      <li className="flex items-center gap-2">
                        Colours:
                        <span className="flex gap-1.5">
                          {product.colors.map((c) => (
                            <span
                              key={c}
                              className="h-4 w-4 rounded-full border border-brand-muted/40"
                              style={{ backgroundColor: c }}
                            />
                          ))}
                        </span>
                      </li>
                    </ul>
                  ),
                },
                {
                  title: "Care Instructions",
                  content: (
                    <p>
                      Dry clean or hand wash cold to preserve the finish. Iron on
                      low heat and store flat or rolled, away from direct sunlight.
                    </p>
                  ),
                },
                ...(product.occasions?.length
                  ? [
                      {
                        title: "Occasion Guide",
                        content: (
                          <p>Perfect for {product.occasions.join(" · ")}.</p>
                        ),
                      },
                    ]
                  : []),
              ]}
            />
          </div>
        </div>
      </div>

      {/* related */}
      {related.length > 0 && (
        <section className="mt-12">
          <h2 className="font-serif text-2xl font-bold text-brand-charcoal">
            You Might Also Like
          </h2>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-6 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
