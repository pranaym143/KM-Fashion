import React, { useState } from "react";
import { Search, Heart, ShoppingBag, Menu, X, Phone, MessageSquare } from "lucide-react";
import { STORE_CONFIG, STORE_CATEGORIES } from "../config/storeConfig";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

interface NavbarProps {
  onOpenSearch: () => void;
  onSelectCategory: (categoryId: string) => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenSearch,
  onSelectCategory,
  onNavigateSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();
  const { wishlistCount, setIsWishlistOpen } = useWishlist();

  const handleCategoryClick = (id: string) => {
    onSelectCategory(id);
    setMobileMenuOpen(false);
    const catalogElem = document.getElementById("catalog-section");
    if (catalogElem) {
      catalogElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavClick = (sectionId: string) => {
    onNavigateSection(sectionId);
    setMobileMenuOpen(false);
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#F6F4F0]/95 backdrop-blur-md border-b border-[#E5E0D8] transition-all">
      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left Category Quick Navigation (Desktop) */}
          <nav className="hidden lg:flex items-center gap-6">
            <button
              onClick={() => handleCategoryClick("all")}
              className="text-xs uppercase tracking-widest font-semibold text-[#1F1F1F] hover:text-[#8C6D23] transition-colors whitespace-nowrap cursor-pointer"
            >
              All Men
            </button>
            <button
              onClick={() => handleCategoryClick("casual-shirts")}
              className="text-xs uppercase tracking-widest font-semibold text-[#4A4A4A] hover:text-[#111111] transition-colors whitespace-nowrap cursor-pointer"
            >
              Casual
            </button>
            <button
              onClick={() => handleCategoryClick("formal-shirts")}
              className="text-xs uppercase tracking-widest font-semibold text-[#4A4A4A] hover:text-[#111111] transition-colors whitespace-nowrap cursor-pointer"
            >
              Formal & Suits
            </button>
            <button
              onClick={() => handleCategoryClick("traditional-wear")}
              className="text-xs uppercase tracking-widest font-semibold text-[#4A4A4A] hover:text-[#111111] transition-colors whitespace-nowrap cursor-pointer"
            >
              Traditional
            </button>
            <button
              onClick={() => handleCategoryClick("jeans-trousers")}
              className="text-xs uppercase tracking-widest font-semibold text-[#4A4A4A] hover:text-[#111111] transition-colors whitespace-nowrap cursor-pointer"
            >
              Trousers
            </button>
          </nav>

          {/* Mobile Menu Button (Left on mobile) */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#191919] hover:text-black focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Center Brand Identity (Recreating the Evora Style Logo aesthetic) */}
          <div className="flex flex-col items-center justify-center text-center">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="group block"
            >
              <span className="font-brand-display text-2xl sm:text-3xl font-extrabold tracking-[0.25em] text-[#141414] group-hover:text-[#8C6D23] transition-colors">
                KM FASHION
              </span>
              <div className="flex items-center justify-center gap-2 mt-0.5">
                <span className="text-[9px] uppercase tracking-[0.35em] text-[#666666] font-medium">
                  MEN&apos;S WEAR
                </span>
                <span className="text-[8px] text-[#A8A29E]">·</span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#8C6D23] font-semibold">
                  SHAMIRPET
                </span>
              </div>
            </a>
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center gap-3 sm:gap-5">
            {/* Search Button */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#333333] hover:text-black transition-colors p-1.5 cursor-pointer"
              aria-label="Search clothing items"
            >
              <Search className="w-4 h-4" />
              <span className="hidden md:inline font-medium">Search</span>
            </button>

            {/* Direct Call Button (Desktop) */}
            <a
              href={STORE_CONFIG.phoneTel}
              className="hidden md:flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#333333] hover:text-black transition-colors p-1.5"
              title="Call KM Fashion Men's Wear"
            >
              <Phone className="w-4 h-4 text-[#8C6D23]" />
              <span className="font-medium">Call Shop</span>
            </a>

            {/* Wishlist Button */}
            <button
              onClick={() => setIsWishlistOpen(true)}
              className="relative flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#333333] hover:text-black transition-colors p-1.5 cursor-pointer"
              aria-label="View saved items"
            >
              <Heart className="w-4 h-4" />
              <span className="hidden sm:inline font-medium">Saved</span>
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#8C6D23] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Shopping Bag Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#141414] hover:text-black font-semibold transition-colors p-1.5 cursor-pointer"
              aria-label="View shopping bag"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline font-semibold">Bag</span>
              <span className="text-xs font-bold text-[#8C6D23]">
                ({totalItems})
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F6F4F0] border-b border-[#E5E0D8] px-6 py-6 space-y-4 shadow-xl animate-fadeIn">
          <div className="space-y-2 border-b border-[#E5E0D8] pb-4">
            <p className="text-[10px] tracking-widest uppercase text-[#888888] font-bold">Categories</p>
            <button
              onClick={() => handleCategoryClick("all")}
              className="block w-full text-left py-2 text-sm font-semibold text-[#141414]"
            >
              All Collections
            </button>
            {STORE_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                className="block w-full text-left py-1.5 text-sm text-[#444444] hover:text-black"
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="space-y-2 border-b border-[#E5E0D8] pb-4">
            <p className="text-[10px] tracking-widest uppercase text-[#888888] font-bold">Store Links</p>
            <button
              onClick={() => handleNavClick("about-section")}
              className="block w-full text-left py-1.5 text-sm text-[#444444] hover:text-black"
            >
              About KM Fashion
            </button>
            <button
              onClick={() => handleNavClick("visit-section")}
              className="block w-full text-left py-1.5 text-sm text-[#444444] hover:text-black"
            >
              Visit Store in Shamirpet
            </button>
            <button
              onClick={() => handleNavClick("contact-section")}
              className="block w-full text-left py-1.5 text-sm text-[#444444] hover:text-black"
            >
              Contact & Inquiries
            </button>
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href={STORE_CONFIG.phoneTel}
              className="w-full py-2.5 bg-[#141414] text-white text-xs font-semibold uppercase tracking-widest text-center rounded flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#E5C158]" />
              Call {STORE_CONFIG.phoneFormatted}
            </a>
            <a
              href={`https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent("Hello KM Fashion Men's Wear! I am inquiring about store collections in Shamirpet.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 bg-[#25D366] text-white text-xs font-semibold uppercase tracking-widest text-center rounded flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              Order / Inquire on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
