import React from "react";
import { X, Heart, ShoppingBag, Trash2, ArrowRight } from "lucide-react";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import { SAMPLE_PRODUCTS, STORE_CONFIG, StoreProduct } from "../config/storeConfig";

interface WishlistDrawerProps {
  onSelectProduct: (product: StoreProduct) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({ onSelectProduct }) => {
  const { wishlistIds, toggleWishlist, isWishlistOpen, setIsWishlistOpen } = useWishlist();
  const { addToCart } = useCart();

  if (!isWishlistOpen) return null;

  const savedProducts = SAMPLE_PRODUCTS.filter((p) => wishlistIds.includes(p.id));

  const handleQuickAdd = (product: StoreProduct) => {
    addToCart(product, product.sizes[0] || "Standard", product.colors[0]?.name || "Standard", 1);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end">
      <div className="absolute inset-0" onClick={() => setIsWishlistOpen(false)} />

      <div className="relative z-10 w-full max-w-md bg-[#F6F4F0] h-full shadow-2xl flex flex-col justify-between border-l border-[#DDD7CB] animate-slideInRight">
        {/* Header */}
        <div className="p-5 border-b border-[#DDD7CB] bg-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-red-600 fill-current" />
            <h2 className="font-serif-luxury text-lg font-bold text-[#141414]">
              SAVED FAVORITES ({savedProducts.length})
            </h2>
          </div>
          <button
            onClick={() => setIsWishlistOpen(false)}
            className="p-1.5 text-[#555555] hover:text-black rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
            aria-label="Close wishlist"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {savedProducts.length === 0 ? (
            <div className="text-center py-16">
              <Heart className="w-12 h-12 text-[#C4BFB5] mx-auto mb-3" />
              <h3 className="font-serif-luxury text-base font-semibold text-[#141414]">No Saved Pieces Yet</h3>
              <p className="text-xs text-[#777777] mt-1 max-w-xs mx-auto">
                Tap the heart icon on any product in the catalog to save it for easy reference while visiting our store in Shamirpet.
              </p>
              <button
                onClick={() => setIsWishlistOpen(false)}
                className="mt-5 px-6 py-2.5 bg-[#141414] text-white text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-black transition-colors cursor-pointer"
              >
                Explore Styles
              </button>
            </div>
          ) : (
            savedProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white p-3.5 rounded-xl border border-[#E5E0D8] shadow-2xs flex gap-3.5 cursor-pointer hover:border-[#141414]/30 transition-colors"
                onClick={() => {
                  onSelectProduct(product);
                  setIsWishlistOpen(false);
                }}
              >
                <div className="w-16 h-20 rounded-lg overflow-hidden bg-[#ECE8E1] shrink-0 border border-[#DDD7CB]">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-1">
                      <h4 className="font-serif-luxury text-xs font-bold text-[#141414] truncate">
                        {product.name}
                      </h4>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleWishlist(product.id);
                        }}
                        className="text-gray-400 hover:text-red-600 transition-colors p-1"
                        title="Remove from favorites"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <p className="text-[11px] text-[#777777] mt-0.5">{product.category.replace("-", " ")}</p>
                  </div>

                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#F2EFE9]">
                    <span className="text-xs font-bold font-mono text-[#141414]">
                      {STORE_CONFIG.currencySymbol}{product.price.toLocaleString("en-IN")}*
                    </span>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleQuickAdd(product);
                        setIsWishlistOpen(false);
                      }}
                      className="px-3 py-1 bg-[#141414] hover:bg-black text-white text-[10px] font-bold uppercase tracking-wider rounded-md flex items-center gap-1 transition-colors"
                    >
                      <ShoppingBag className="w-3 h-3" />
                      <span>Add to Bag</span>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-5 bg-white border-t border-[#DDD7CB] text-center">
          <p className="text-[11px] text-[#777777] mb-3">
            Save pieces on your phone to show in-store at Shamirpet.
          </p>
          <button
            onClick={() => setIsWishlistOpen(false)}
            className="w-full py-3 bg-[#141414] text-white text-xs font-bold tracking-[0.2em] uppercase rounded-xl hover:bg-black transition-colors"
          >
            Continue Browsing
          </button>
        </div>
      </div>
    </div>
  );
};
