import React, { useState } from "react";
import { X, Heart, MessageSquare, ShoppingBag, ShieldCheck, Check, AlertCircle, Phone, Sparkles } from "lucide-react";
import { StoreProduct, STORE_CONFIG, buildWhatsAppProductMessage } from "../config/storeConfig";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

interface ProductDetailModalProps {
  product: StoreProduct | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>(product.colors[0]?.name || "Standard");
  const [quantity, setQuantity] = useState<number>(1);
  const [validationError, setValidationError] = useState<string>("");
  const [addedSuccess, setAddedSuccess] = useState<boolean>(false);

  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = () => {
    if (!selectedSize) {
      setValidationError("Please select a size before adding to your bag.");
      return;
    }
    setValidationError("");
    addToCart(product, selectedSize, selectedColor, quantity);
    setAddedSuccess(true);
    setTimeout(() => setAddedSuccess(false), 2500);
  };

  const handleWhatsAppOrder = () => {
    if (!selectedSize) {
      setValidationError("Please select a size before ordering on WhatsApp.");
      return;
    }
    setValidationError("");
    const whatsappUrl = buildWhatsAppProductMessage(product, selectedSize, selectedColor, quantity);
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#DDD7CB] animate-fadeIn max-h-[92vh] flex flex-col md:flex-row">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-[#141414] shadow-md flex items-center justify-center transition-transform hover:scale-105 cursor-pointer"
          aria-label="Close product details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Product Imagery Gallery */}
        <div className="md:w-1/2 bg-[#F2EFE9] p-6 flex flex-col justify-between relative">
          <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-[#E2DED6] border border-[#DDD7CB]">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover object-center"
            />
            {product.tag && (
              <span className="absolute top-3 left-3 bg-[#141414] text-[#E5C158] text-[10px] uppercase tracking-widest font-mono px-2.5 py-1 rounded">
                {product.tag}
              </span>
            )}
          </div>

          <div className="mt-3 flex items-center justify-between text-xs text-[#666666]">
            <span>KM Fashion Men&apos;s Wear · Shamirpet</span>
            <button
              onClick={() => toggleWishlist(product.id)}
              className={`flex items-center gap-1.5 font-medium transition-colors cursor-pointer ${
                inWishlist ? "text-red-600 font-bold" : "text-[#555555] hover:text-red-500"
              }`}
            >
              <Heart className={`w-4 h-4 ${inWishlist ? "fill-current" : ""}`} />
              <span>{inWishlist ? "Saved to Wishlist" : "Save to Wishlist"}</span>
            </button>
          </div>
        </div>

        {/* Right Side: Product Details & Purchase Actions */}
        <div className="md:w-1/2 p-6 sm:p-8 overflow-y-auto flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] uppercase tracking-widest text-[#8C6D23] font-bold">
                {product.category.replace("-", " ")}
              </span>
              <span className="text-gray-300">·</span>
              <span className="text-[11px] text-[#777777] font-medium">In-Store Collection</span>
            </div>

            <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#141414] mt-1">
              {product.name}
            </h2>

            {/* Price section with sample disclaimer */}
            <div className="mt-3 flex items-baseline gap-2 pb-4 border-b border-[#EFECE6]">
              <span className="text-2xl font-bold text-[#141414] font-mono tabular-nums">
                {STORE_CONFIG.currencySymbol}{product.price.toLocaleString("en-IN")}
              </span>
              <span className="text-xs text-[#888888]">
                (Estimated Sample Price*)
              </span>
            </div>

            {/* Description */}
            <p className="mt-4 text-xs sm:text-sm text-[#4A4A4A] leading-relaxed">
              {product.description}
            </p>

            {/* Fabric & Fit Details */}
            <div className="mt-4 grid grid-cols-2 gap-3 p-3 bg-[#F8F6F2] rounded-xl border border-[#EBE7DF] text-xs">
              <div>
                <span className="block text-[10px] uppercase tracking-wider text-[#888888] font-bold">Fabric</span>
                <span className="text-[#141414] font-medium">{product.fabric}</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-wider text-[#888888] font-bold">Fit</span>
                <span className="text-[#141414] font-medium">{product.fit}</span>
              </div>
            </div>

            {/* Color Selection */}
            {product.colors && product.colors.length > 0 && (
              <div className="mt-5">
                <label className="block text-xs uppercase tracking-wider text-[#141414] font-bold mb-2">
                  Select Color: <span className="text-[#8C6D23] font-normal">{selectedColor}</span>
                </label>
                <div className="flex items-center gap-2.5">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      type="button"
                      onClick={() => setSelectedColor(color.name)}
                      className={`group relative flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs transition-all cursor-pointer ${
                        selectedColor === color.name
                          ? "border-[#141414] bg-[#141414] text-white shadow-xs"
                          : "border-[#DDD7CB] bg-white text-[#333333] hover:border-[#999999]"
                      }`}
                    >
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-black/10 shrink-0"
                        style={{ backgroundColor: color.hex }}
                      />
                      <span>{color.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size Selection with validation warning */}
            <div className="mt-5">
              <div className="flex items-center justify-between mb-2">
                <label className="block text-xs uppercase tracking-wider text-[#141414] font-bold">
                  Select Size <span className="text-red-500">*</span>:{" "}
                  <span className="text-[#8C6D23] font-normal">{selectedSize || "Required"}</span>
                </label>
                <span className="text-[11px] text-[#777777]">Trial Available in Shop</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => {
                      setSelectedSize(size);
                      setValidationError("");
                    }}
                    className={`min-w-[46px] px-3 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider border transition-all cursor-pointer ${
                      selectedSize === size
                        ? "border-[#141414] bg-[#141414] text-white shadow-xs"
                        : "border-[#DDD7CB] bg-white text-[#222222] hover:border-[#141414] hover:bg-[#F9F7F4]"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>

              {validationError && (
                <div className="mt-2.5 flex items-center gap-1.5 text-xs text-red-600 bg-red-50 p-2 rounded-lg border border-red-200">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{validationError}</span>
                </div>
              )}
            </div>

            {/* Quantity Selector */}
            <div className="mt-5 flex items-center gap-4">
              <span className="text-xs uppercase tracking-wider text-[#141414] font-bold">Quantity:</span>
              <div className="flex items-center border border-[#DDD7CB] rounded-lg bg-white overflow-hidden">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3 py-1.5 text-sm font-semibold hover:bg-gray-100 transition-colors"
                >
                  -
                </button>
                <span className="px-3 py-1.5 text-xs font-bold font-mono">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-3 py-1.5 text-sm font-semibold hover:bg-gray-100 transition-colors"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 pt-4 border-t border-[#EFECE6] space-y-3">
            {/* Primary Action 1: Order on WhatsApp */}
            <button
              onClick={handleWhatsAppOrder}
              className="w-full py-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold tracking-[0.2em] uppercase rounded-xl shadow-md transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>ORDER ON WHATSAPP (+91 72878 17737)</span>
            </button>

            {/* Primary Action 2: Add to Cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-3.5 text-xs font-bold tracking-[0.2em] uppercase rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                addedSuccess
                  ? "bg-emerald-700 text-white"
                  : "bg-[#141414] hover:bg-[#2A2A2A] text-white shadow-md"
              }`}
            >
              {addedSuccess ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>ADDED TO BAG!</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" />
                  <span>ADD TO SHOPPING BAG</span>
                </>
              )}
            </button>

            {/* Call Store or Continue */}
            <div className="flex items-center justify-between pt-2">
              <a
                href={STORE_CONFIG.phoneTel}
                className="text-xs text-[#555555] hover:text-[#141414] flex items-center gap-1 font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-[#8C6D23]" />
                <span>Call Store ({STORE_CONFIG.phoneFormatted})</span>
              </a>

              <button
                onClick={onClose}
                className="text-xs text-[#888888] hover:text-[#141414] underline font-medium cursor-pointer"
              >
                Continue Browsing
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
