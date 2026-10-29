import React from "react";
import { X, Trash2, ShoppingBag, MessageSquare, ArrowRight, ShieldCheck, Phone, AlertCircle } from "lucide-react";
import { useCart } from "../context/CartContext";
import { STORE_CONFIG, buildWhatsAppCartMessage } from "../config/storeConfig";

export const CartDrawer: React.FC = () => {
  const { items, removeFromCart, updateQuantity, subtotal, totalItems, isCartOpen, setIsCartOpen, clearCart } = useCart();

  if (!isCartOpen) return null;

  const handleWhatsAppCheckout = () => {
    if (items.length === 0) return;
    const checkoutUrl = buildWhatsAppCartMessage(items, subtotal);
    window.open(checkoutUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end">
      {/* Background click to dismiss */}
      <div className="absolute inset-0" onClick={() => setIsCartOpen(false)} />

      {/* Drawer Container */}
      <div className="relative z-10 w-full max-w-md bg-[#F6F4F0] h-full shadow-2xl flex flex-col justify-between border-l border-[#DDD7CB] animate-slideInRight">
        {/* Header */}
        <div className="p-5 border-b border-[#DDD7CB] bg-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#8C6D23]" />
            <h2 className="font-serif-luxury text-lg font-bold text-[#141414]">
              SHOPPING BAG ({totalItems})
            </h2>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-1.5 text-[#555555] hover:text-black rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
            aria-label="Close bag"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Notice on local ordering & sample pricing */}
        <div className="px-5 py-2.5 bg-[#EAE6DE] border-b border-[#DDD7CB] text-[11px] text-[#555555] flex items-center justify-between">
          <span>In-Store Pickup &amp; Direct WhatsApp Orders</span>
          <span className="font-semibold text-[#141414]">Shamirpet Shop</span>
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingBag className="w-12 h-12 text-[#C4BFB5] mx-auto mb-3" />
              <h3 className="font-serif-luxury text-base font-semibold text-[#141414]">Your Bag is Empty</h3>
              <p className="text-xs text-[#777777] mt-1 max-w-xs mx-auto">
                Explore our curated men&apos;s collections in casual shirts, formal suits, traditional kurtas, and trousers.
              </p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="mt-5 px-6 py-2.5 bg-[#141414] text-white text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-black transition-colors cursor-pointer"
              >
                Browse Collections
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.cartItemId}
                className="bg-white p-3.5 rounded-xl border border-[#E5E0D8] shadow-2xs flex gap-3.5"
              >
                {/* Thumbnail */}
                <div className="w-16 h-20 rounded-lg overflow-hidden bg-[#ECE8E1] shrink-0 border border-[#DDD7CB]">
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-1">
                      <h4 className="font-serif-luxury text-xs font-bold text-[#141414] truncate">
                        {item.product.name}
                      </h4>
                      <button
                        onClick={() => removeFromCart(item.cartItemId)}
                        className="text-gray-400 hover:text-red-600 transition-colors p-1"
                        title="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="flex items-center gap-2 mt-1 text-[11px] text-[#666666]">
                      <span>Size: <strong className="text-[#141414]">{item.size}</strong></span>
                      <span>·</span>
                      <span>Color: <strong className="text-[#141414]">{item.color}</strong></span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#F2EFE9]">
                    {/* Quantity controls */}
                    <div className="flex items-center border border-[#DDD7CB] rounded-md overflow-hidden bg-[#F6F4F0]">
                      <button
                        onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                        className="px-2 py-0.5 text-xs font-bold hover:bg-gray-200"
                      >
                        -
                      </button>
                      <span className="px-2 text-xs font-mono font-bold text-[#141414]">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                        className="px-2 py-0.5 text-xs font-bold hover:bg-gray-200"
                      >
                        +
                      </button>
                    </div>

                    <span className="text-xs font-bold font-mono text-[#141414]">
                      {STORE_CONFIG.currencySymbol}{(item.product.price * item.quantity).toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Checkout Actions */}
        {items.length > 0 && (
          <div className="p-5 bg-white border-t border-[#DDD7CB] space-y-3">
            {/* Subtotal */}
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-[#666666]">
                <span>Estimated Subtotal (Sample*)</span>
                <span className="font-mono text-[#141414] font-bold">
                  {STORE_CONFIG.currencySymbol}{subtotal.toLocaleString("en-IN")}
                </span>
              </div>
              <div className="flex justify-between text-[#666666]">
                <span>Store Pickup in Shamirpet</span>
                <span className="text-emerald-700 font-semibold uppercase">Free</span>
              </div>
              <div className="pt-2 border-t border-[#EFECE6] flex justify-between text-sm font-bold text-[#141414]">
                <span>Estimated Total</span>
                <span className="font-mono text-base text-[#8C6D23]">
                  {STORE_CONFIG.currencySymbol}{subtotal.toLocaleString("en-IN")}*
                </span>
              </div>
            </div>

            {/* Note on payment */}
            <div className="p-2.5 bg-[#F6F4F0] rounded-lg text-[10px] text-[#666666] leading-tight flex items-start gap-1.5">
              <AlertCircle className="w-3.5 h-3.5 text-[#8C6D23] shrink-0 mt-0.5" />
              <span>
                Online payment gateways are not enabled. Order items directly via WhatsApp to verify size availability and lock in your order with the shop owner.
              </span>
            </div>

            {/* WhatsApp Checkout Button */}
            <button
              onClick={handleWhatsAppCheckout}
              className="w-full py-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold tracking-[0.2em] uppercase rounded-xl shadow-md transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>ORDER VIA WHATSAPP ({STORE_CONFIG.phoneFormatted})</span>
            </button>

            {/* Clear Cart */}
            <div className="flex items-center justify-between pt-1 text-xs">
              <button
                onClick={clearCart}
                className="text-gray-400 hover:text-red-600 transition-colors"
              >
                Clear Entire Bag
              </button>
              <a
                href={STORE_CONFIG.phoneTel}
                className="text-[#8C6D23] hover:underline font-medium flex items-center gap-1"
              >
                <Phone className="w-3 h-3" />
                <span>Call Store</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
