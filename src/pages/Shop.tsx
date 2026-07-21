import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { PackageSearch } from "lucide-react";
import { CATEGORIES } from "../config";
import { getProducts } from "../lib/catalog";
import Pill from "../components/ui/Pill";
import Button from "../components/ui/Button";
import ProductGrid from "../components/product/ProductGrid";
import EmptyState from "../components/product/EmptyState";

const FILTERS = ["All", ...CATEGORIES] as const;

const SORTS = {
  featured: "Featured",
  "price-asc": "Price: Low to High",
  "price-desc": "Price: High to Low",
} as const;
type SortKey = keyof typeof SORTS;

const PAGE_SIZE = 8;

export default function Shop() {
  const [params, setParams] = useSearchParams();
  const category = params.get("category") ?? "All";
  const sort = (params.get("sort") as SortKey) ?? "featured";
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    let list = getProducts();
    if (category !== "All") list = list.filter((p) => p.category === category);
    if (sort === "price-asc")
      list = [...list].sort((a, b) => a.pricePerYard - b.pricePerYard);
    if (sort === "price-desc")
      list = [...list].sort((a, b) => b.pricePerYard - a.pricePerYard);
    return list;
  }, [category, sort]);

  const setParam = (key: string, value: string, fallback: string) => {
    const next = new URLSearchParams(params);
    if (value === fallback) next.delete(key);
    else next.set(key, value);
    setParams(next, { replace: true });
    setVisible(PAGE_SIZE);
  };

  const shown = filtered.slice(0, visible);

  return (
    <div className="mx-auto max-w-content px-4 py-6 md:px-8 md:py-10">
      {/* header */}
      <nav className="text-xs text-brand-muted" aria-label="Breadcrumb">
        <Link to="/" className="hover:text-brand-charcoal">
          Home
        </Link>{" "}
        &rsaquo; Shop
      </nav>
      <h1 className="mt-1 font-serif text-3xl font-bold text-brand-charcoal">
        Our Collection
      </h1>
      <p className="mt-1 text-sm text-brand-muted">
        Showing {filtered.length}{" "}
        {filtered.length === 1 ? "fabric" : "fabrics"}
      </p>

      {/* filter pills */}
      <div className="mt-4 flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
        {FILTERS.map((f) => (
          <Pill
            key={f}
            active={category === f}
            onClick={() => setParam("category", f, "All")}
          >
            {f}
          </Pill>
        ))}
      </div>

      {/* sort row */}
      <div className="mt-3 flex items-center justify-end">
        <label className="flex items-center gap-2 text-sm text-brand-charcoal">
          <span className="text-brand-muted">Sort by:</span>
          <select
            value={sort}
            onChange={(e) => setParam("sort", e.target.value, "featured")}
            className="h-9 rounded-btn border border-brand-muted bg-brand-ivory px-2 text-sm font-medium text-brand-charcoal focus:border-2 focus:border-brand-gold focus:outline-none"
          >
            {Object.entries(SORTS).map(([key, label]) => (
              <option key={key} value={key}>
                {label}
              </option>
            ))}
          </select>
        </label>
      </div>

      {/* grid / empty */}
      <div className="mt-5">
        {filtered.length === 0 ? (
          <EmptyState
            icon={<PackageSearch size={32} />}
            title="No fabrics found for this filter."
            body="Try a different category or browse the full collection."
          >
            <Button
              className="mt-2"
              onClick={() => setParam("category", "All", "All")}
            >
              Clear filters
            </Button>
          </EmptyState>
        ) : (
          <>
            <ProductGrid products={shown} />
            {visible < filtered.length && (
              <div className="mt-8 flex flex-col items-center gap-2">
                <p className="text-sm text-brand-muted">
                  Showing {shown.length} of {filtered.length} products
                </p>
                <Button
                  variant="outline"
                  onClick={() => setVisible((v) => v + PAGE_SIZE)}
                >
                  Load more
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
