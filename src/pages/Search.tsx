import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Search as SearchIcon, X } from "lucide-react";
import { searchProducts } from "../lib/catalog";
import ProductGrid from "../components/product/ProductGrid";
import EmptyState from "../components/product/EmptyState";
import Button from "../components/ui/Button";

const SUGGESTIONS = ["Lace", "Voile", "Sequins", "Cord Lace"];
const DEBOUNCE_MS = 400;

export default function Search() {
  const [params, setParams] = useSearchParams();
  const query = params.get("q") ?? "";
  const [input, setInput] = useState(query);

  // debounce URL sync so typing doesn't thrash history (FR: 400ms)
  useEffect(() => {
    const id = setTimeout(() => {
      const next = new URLSearchParams(params);
      if (input.trim()) next.set("q", input.trim());
      else next.delete("q");
      setParams(next, { replace: true });
    }, DEBOUNCE_MS);
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input]);

  const results = useMemo(
    () => (query.trim() ? searchProducts(query) : []),
    [query],
  );

  return (
    <div className="mx-auto max-w-content px-4 py-6 md:px-8 md:py-10">
      {/* search field */}
      <div className="flex items-center gap-2 rounded-btn border border-brand-muted bg-brand-ivory px-3 focus-within:border-2 focus-within:border-brand-gold">
        <SearchIcon size={18} className="shrink-0 text-brand-gold" aria-hidden />
        <input
          autoFocus
          type="search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search fabrics..."
          aria-label="Search fabrics"
          className="h-11 w-full bg-transparent text-[15px] text-brand-charcoal placeholder:text-brand-muted focus:outline-none"
        />
        {input && (
          <button
            type="button"
            aria-label="Clear search"
            onClick={() => setInput("")}
            className="shrink-0 text-brand-muted hover:text-brand-charcoal"
          >
            <X size={18} />
          </button>
        )}
      </div>

      {/* results */}
      {!query.trim() ? (
        <EmptyState
          icon={<SearchIcon size={32} />}
          title="Search our collection"
          body="Find fabrics by name or type — try lace, voile, or sequins."
        />
      ) : results.length === 0 ? (
        <EmptyState
          icon={<SearchIcon size={32} />}
          title={`No results for “${query}”`}
          body="Try a different term or browse a suggested category."
        >
          <div className="mt-2 flex flex-wrap justify-center gap-2">
            {SUGGESTIONS.map((s) => (
              <Button
                key={s}
                variant="outline"
                size="sm"
                className="normal-case tracking-normal"
                onClick={() => setInput(s)}
              >
                {s}
              </Button>
            ))}
          </div>
        </EmptyState>
      ) : (
        <>
          <p className="mt-5 text-sm text-brand-muted">
            <span className="font-semibold text-brand-charcoal">
              Results for “{query}”
            </span>{" "}
            — {results.length} {results.length === 1 ? "fabric" : "fabrics"} found
          </p>
          <div className="mt-4">
            <ProductGrid products={results} />
          </div>
        </>
      )}
    </div>
  );
}
