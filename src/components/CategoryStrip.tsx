import React from "react";
import { ArrowRight } from "lucide-react";
import { STORE_CATEGORIES, StoreCategory } from "../config/storeConfig";

interface CategoryStripProps {
  onSelectCategory: (categoryId: string) => void;
}

export const CategoryStrip: React.FC<CategoryStripProps> = ({ onSelectCategory }) => {
  const handleCategoryClick = (category: StoreCategory) => {
    onSelectCategory(category.id);
    const catalogElem = document.getElementById("catalog-section");
    if (catalogElem) {
      catalogElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-[#F6F4F0] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dark Floating Category Container matching Evora reference */}
        <div className="bg-[#111111] text-white rounded-2xl p-4 sm:p-6 lg:p-7 shadow-2xl border border-white/5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {STORE_CATEGORIES.slice(0, 4).map((category) => (
              <div
                key={category.id}
                onClick={() => handleCategoryClick(category)}
                className="group flex items-center gap-4 pt-4 sm:pt-0 sm:px-4 first:pt-0 first:pl-0 last:pr-0 cursor-pointer transition-all duration-300"
              >
                {/* Thumbnail with rounded corners matching reference */}
                <div className="relative w-16 h-20 sm:w-20 sm:h-24 shrink-0 rounded-xl overflow-hidden bg-[#222222] border border-white/10 group-hover:border-[#E5C158]/50 transition-colors">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>

                {/* Text & Action */}
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] uppercase tracking-widest text-[#E5C158] font-mono">
                    {category.itemCountText}
                  </span>
                  <h3 className="font-serif-luxury text-sm sm:text-base font-semibold text-white tracking-wide truncate group-hover:text-[#E5C158] transition-colors mt-0.5">
                    {category.name}
                  </h3>
                  <p className="text-xs text-[#999999] line-clamp-1 mt-0.5 font-light">
                    {category.shortDesc}
                  </p>
                  <div className="mt-2 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-white/80 group-hover:text-white">
                    <span>EXPLORE</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform text-[#E5C158]" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Secondary bottom category strip for extra categories */}
          <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-[#888888]">
              <span className="w-2 h-2 rounded-full bg-[#E5C158]"></span>
              <span>All 6 Curated Wardrobe Categories Available in Store</span>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              {STORE_CATEGORIES.slice(4).map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat)}
                  className="text-xs text-[#CCCCCC] hover:text-[#E5C158] transition-colors flex items-center gap-1 underline underline-offset-4 cursor-pointer"
                >
                  <span>{cat.name}</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
