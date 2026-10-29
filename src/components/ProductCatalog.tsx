import React, { useState, useMemo } from "react";
import { Heart, Search, Filter, X, ArrowRight, Eye, MessageSquare, ShoppingBag, Info } from "lucide-react";
import { STORE_CONFIG, STORE_CATEGORIES, SAMPLE_PRODUCTS, StoreProduct } from "../config/storeConfig";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";

interface ProductCatalogProps {
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
  onSelectProduct: (product: StoreProduct) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  selectedCategory,
  onSelectCategory,
  onSelectProduct,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSize, setSelectedSize] = useState<string>("all");
  const [selectedColor, setSelectedColor] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc">("featured");

  const { isInWishlist, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();
  const [quickAddedId, setQuickAddedId] = useState<string | null>(null);

  // Extract all unique sizes and colors for filter controls
  const allSizes = useMemo(() => {
    const set = new Set<string>();
    SAMPLE_PRODUCTS.forEach((p) => p.sizes.forEach((s) => set.add(s)));
    return Array.from(set);
  }, []);

  const allColors = useMemo(() => {
    const map = new Map<string, string>();
    SAMPLE_PRODUCTS.forEach((p) =>
      p.colors.forEach((c) => map.set(c.name, c.hex))
    );
    return Array.from(map.entries()).map(([name, hex]) => ({ name, hex }));
  }, []);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    return SAMPLE_PRODUCTS.filter((product) => {
      // Category filter
      if (selectedCategory !== "all" && product.category !== selectedCategory) {
        return false;
      }
      // Search query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesCategory = product.category.toLowerCase().includes(query);
        const matchesFabric = product.fabric.toLowerCase().includes(query);
        const matchesDesc = product.description.toLowerCase().includes(query);
        if (!matchesName && !matchesCategory && !matchesFabric && !matchesDesc) {
          return false;
        }
      }
      // Size filter
      if (selectedSize !== "all" && !product.sizes.includes(selectedSize)) {
        return false;
      }
      // Color filter
      if (
        selectedColor !== "all" &&
        !product.colors.some((c) => c.name.toLowerCase() === selectedColor.toLowerCase())
      ) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
  }, [selectedCategory, searchQuery, selectedSize, selectedColor, sortBy]);

  const handleQuickAdd = (e: React.MouseEvent, product: StoreProduct) => {
    e.stopPropagation();
    const defaultSize = product.sizes[0] || "Standard";
    const defaultColor = product.colors[0]?.name || "Standard";
    addToCart(product, defaultSize, defaultColor, 1);
    setQuickAddedId(product.id);
    setTimeout(() => setQuickAddedId(null), 1800);
  };

  const resetFilters = () => {
    onSelectCategory("all");
    setSearchQuery("");
    setSelectedSize("all");
    setSelectedColor("all");
    setSortBy("featured");
  };

  const hasActiveFilters =
    selectedCategory !== "all" ||
    searchQuery.trim() !== "" ||
    selectedSize !== "all" ||
    selectedColor !== "all";

  return (
    <section id="catalog-section" className="bg-[#F6F4F0] py-12 sm:py-16 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header matching "BEST OF EVORA" from reference */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#DDD7CB] pb-6 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#8C6D23] mb-1">
              <span>CURATED WARDROBE</span>
              <span>·</span>
              <span>SHAMIRPET</span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold tracking-tight text-[#141414]">
              BEST OF KM FASHION
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onSelectCategory("all")}
              className="text-xs uppercase tracking-widest font-bold text-[#141414] hover:text-[#8C6D23] transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <span>VIEW ALL ({SAMPLE_PRODUCTS.length})</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Transparent Sample Catalog Notice Box as required by Client Specs */}
        <div className="mb-8 p-4 rounded-xl bg-[#EBE7DF] border border-[#DDD7CB] flex items-start gap-3">
          <Info className="w-5 h-5 text-[#8C6D23] shrink-0 mt-0.5" />
          <div className="text-xs text-[#555555] leading-relaxed">
            <span className="font-bold text-[#141414]">Sample Catalog &amp; Direct Ordering: </span>
            The styles and prices shown below represent sample showroom collections for KM Fashion Men&apos;s Wear.
            Verified shop contact: <strong className="text-[#141414]">{STORE_CONFIG.phoneFormatted}</strong>.
            Click any piece to preview size charts, check availability, or order directly via WhatsApp.
          </div>
        </div>

        {/* Filter Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-xs border border-[#E5E0D8] mb-8 space-y-4">
          {/* Category Tabs (Segmented Button Controls) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <button
              onClick={() => onSelectCategory("all")}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-full whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === "all"
                  ? "bg-[#141414] text-white shadow-xs"
                  : "bg-[#F3EFE8] text-[#555555] hover:bg-[#E8E3DA] hover:text-[#111111]"
              }`}
            >
              All Pieces
            </button>
            {STORE_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-full whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-[#141414] text-white shadow-xs"
                    : "bg-[#F3EFE8] text-[#555555] hover:bg-[#E8E3DA] hover:text-[#111111]"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Secondary Controls: Search, Size, Color, Sorting */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#EFECE6]">
            {/* Search Input */}
            <div className="relative flex-1 min-w-[200px] max-w-md">
              <Search className="w-4 h-4 text-[#888888] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search linen shirts, suits, kurta, trousers..."
                className="w-full pl-9 pr-8 py-2 bg-[#F6F4F0] border border-[#DDD7CB] rounded-lg text-xs text-[#141414] placeholder-[#888888] focus:outline-none focus:border-[#141414] focus:ring-1 focus:ring-[#141414]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#888888] hover:text-black"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Filter Dropdowns */}
            <div className="flex flex-wrap items-center gap-2">
              {/* Size Filter */}
              <div className="flex items-center gap-1.5">
                <span className="text-[11px] uppercase tracking-wider text-[#777777] font-medium hidden sm:inline">Size:</span>
                <select
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                  className="bg-[#F6F4F0] border border-[#DDD7CB] text-[#141414] text-xs rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-[#141414]"
                >
                  <option value="all">All Sizes</option>
                  {allSizes.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              {/* Sort By */}
              <div className="flex items-center gap-1.5">
                <span className="text-[11px] uppercase tracking-wider text-[#777777] font-medium hidden sm:inline">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-[#F6F4F0] border border-[#DDD7CB] text-[#141414] text-xs rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-[#141414]"
                >
                  <option value="featured">Featured Collection</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
              </div>

              {hasActiveFilters && (
                <button
                  onClick={resetFilters}
                  className="text-xs text-[#8C6D23] hover:underline font-semibold flex items-center gap-1 px-2 py-1.5"
                >
                  <X className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Product Grid matching the 5-column layout of the Evora reference screenshot */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-[#E5E0D8] p-8">
            <Filter className="w-10 h-10 text-[#C4BFB5] mx-auto mb-3" />
            <h3 className="font-serif-luxury text-lg font-semibold text-[#141414]">No Matching Styles Found</h3>
            <p className="text-xs text-[#666666] mt-1 max-w-sm mx-auto">
              We couldn&apos;t find items matching your search criteria. Try resetting filters or reach out directly to check store stock.
            </p>
            <button
              onClick={resetFilters}
              className="mt-4 px-5 py-2.5 bg-[#141414] text-white text-xs font-semibold uppercase tracking-wider rounded-full"
            >
              View Full Collection
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {filteredProducts.map((product) => {
              const inWishlist = isInWishlist(product.id);
              const categoryObj = STORE_CATEGORIES.find((c) => c.id === product.category);

              return (
                <div
                  key={product.id}
                  onClick={() => onSelectProduct(product)}
                  className="group relative flex flex-col cursor-pointer transition-all duration-300"
                >
                  {/* Product Card Image Container */}
                  <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-[#EAE6DE] border border-[#DDD7CB] group-hover:border-[#141414]/40 transition-all duration-500 shadow-2xs group-hover:shadow-md">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />

                    {/* Gradient Overlay for card legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Wishlist Heart Icon (Top Right, matching reference screenshot) */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleWishlist(product.id);
                      }}
                      className={`absolute top-2.5 right-2.5 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                        inWishlist
                          ? "bg-white text-red-600 shadow-md"
                          : "bg-white/80 backdrop-blur-xs text-[#222222] hover:bg-white hover:text-red-500"
                      }`}
                      aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
                    >
                      <Heart
                        className={`w-4 h-4 ${inWishlist ? "fill-current" : ""}`}
                      />
                    </button>

                    {/* Badge */}
                    {product.tag && (
                      <div className="absolute top-2.5 left-2.5 bg-[#141414]/90 backdrop-blur-xs text-[#E5C158] text-[9px] uppercase tracking-widest font-mono px-2 py-0.5 rounded-sm">
                        {product.tag}
                      </div>
                    )}

                    {/* Quick Action Overlay (Desktop) */}
                    <div className="absolute inset-x-2 bottom-2 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-1.5">
                      <button
                        onClick={(e) => handleQuickAdd(e, product)}
                        className="flex-1 py-2 bg-white/95 hover:bg-white text-[#141414] text-[11px] font-bold uppercase tracking-wider rounded-lg shadow-sm flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>{quickAddedId === product.id ? "Added!" : "Quick Add"}</span>
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectProduct(product);
                        }}
                        className="p-2 bg-[#141414]/90 hover:bg-[#141414] text-white rounded-lg shadow-sm transition-colors"
                        title="View Details"
                      >
                        <Eye className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Product Metadata underneath (matching Evora reference) */}
                  <div className="mt-3 flex flex-col flex-1">
                    <span className="text-[10px] uppercase tracking-wider text-[#777777] font-medium">
                      {categoryObj?.name || "KM Collection"}
                    </span>
                    <h3 className="font-serif-luxury text-sm font-semibold text-[#141414] group-hover:text-[#8C6D23] transition-colors line-clamp-1 mt-0.5">
                      {product.name}
                    </h3>
                    <div className="mt-1 flex items-baseline justify-between gap-1">
                      <div className="flex items-baseline gap-1">
                        <span className="text-sm font-bold text-[#141414] tabular-nums font-mono">
                          {STORE_CONFIG.currencySymbol}{product.price.toLocaleString("en-IN")}
                        </span>
                        <span className="text-[10px] text-[#888888] font-normal" title="Sample catalog price">
                          (Sample*)
                        </span>
                      </div>
                      <span className="text-[10px] text-[#25D366] font-medium flex items-center gap-0.5">
                        <MessageSquare className="w-2.5 h-2.5" />
                        Inquire
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
