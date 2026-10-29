import React, { useState, useEffect, useRef } from "react";
import { Search, X, ArrowRight, Sparkles } from "lucide-react";
import { SAMPLE_PRODUCTS, STORE_CATEGORIES, StoreProduct, STORE_CONFIG } from "../config/storeConfig";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: StoreProduct) => void;
  onSelectCategory: (categoryId: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
  onSelectCategory,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setSearchTerm("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const results = searchTerm.trim()
    ? SAMPLE_PRODUCTS.filter((product) => {
        const query = searchTerm.toLowerCase();
        return (
          product.name.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query) ||
          product.fabric.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query)
        );
      })
    : [];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-start justify-center p-4 sm:p-6 pt-16 sm:pt-24">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-2xl bg-[#F6F4F0] rounded-2xl shadow-2xl overflow-hidden border border-[#DDD7CB] animate-fadeIn">
        {/* Search Input Bar */}
        <div className="relative border-b border-[#DDD7CB] bg-white p-4 flex items-center gap-3">
          <Search className="w-5 h-5 text-[#888888] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search shirts, suits, kurta, chinos, denim..."
            className="flex-1 bg-transparent text-sm sm:text-base text-[#141414] placeholder-[#888888] focus:outline-none"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="p-1 text-gray-400 hover:text-black cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2.5 py-1 text-xs uppercase tracking-wider font-semibold text-[#666666] hover:text-black border border-gray-200 rounded-md cursor-pointer"
          >
            Esc
          </button>
        </div>

        {/* Results or Quick Suggestions */}
        <div className="p-5 max-h-[60vh] overflow-y-auto">
          {searchTerm.trim() === "" ? (
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-wider text-[#888888] font-bold">
                Quick Category Suggestions
              </p>
              <div className="flex flex-wrap gap-2">
                {STORE_CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      onSelectCategory(cat.id);
                      onClose();
                      const catalogElem = document.getElementById("catalog-section");
                      catalogElem?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="px-3.5 py-1.5 bg-white border border-[#DDD7CB] rounded-full text-xs font-semibold text-[#333333] hover:border-[#141414] hover:bg-[#141414] hover:text-white transition-all cursor-pointer"
                  >
                    {cat.name}
                  </button>
                ))}
              </div>

              <div className="pt-3 border-t border-[#DDD7CB] text-xs text-[#666666]">
                <span className="font-semibold text-[#141414]">Popular menswear searches: </span>
                Linen casual shirts, Wedding suits, Silk festive kurta, Slim chinos, Heavyweight t-shirts.
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-sm font-semibold text-[#141414]">No products found matching &ldquo;{searchTerm}&rdquo;</p>
              <p className="text-xs text-[#777777] mt-1">
                Looking for a custom cut or specific color? Inquire directly with the Shamirpet store.
              </p>
              <a
                href={STORE_CONFIG.phoneTel}
                className="inline-block mt-4 px-4 py-2 bg-[#141414] text-white text-xs font-semibold uppercase tracking-wider rounded-lg"
              >
                Call Store ({STORE_CONFIG.phoneFormatted})
              </a>
            </div>
          ) : (
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-wider text-[#888888] font-bold">
                Found {results.length} piece{results.length > 1 ? "s" : ""}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {results.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => {
                      onSelectProduct(product);
                      onClose();
                    }}
                    className="p-2.5 bg-white rounded-xl border border-[#E5E0D8] hover:border-[#141414] transition-all flex items-center gap-3 cursor-pointer group"
                  >
                    <div className="w-14 h-16 rounded-lg overflow-hidden bg-[#ECE8E1] shrink-0 border border-[#DDD7CB]">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] uppercase tracking-wider text-[#8C6D23] font-semibold">
                        {product.category.replace("-", " ")}
                      </span>
                      <h4 className="font-serif-luxury text-xs font-bold text-[#141414] truncate group-hover:text-[#8C6D23] transition-colors">
                        {product.name}
                      </h4>
                      <p className="text-xs font-mono font-bold text-[#141414] mt-0.5">
                        {STORE_CONFIG.currencySymbol}{product.price.toLocaleString("en-IN")}*
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-black group-hover:translate-x-0.5 transition-all" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
