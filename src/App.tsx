/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { CategoryStrip } from "./components/CategoryStrip";
import { CampaignBanner } from "./components/CampaignBanner";
import { TrustFeatures } from "./components/TrustFeatures";
import { ProductCatalog } from "./components/ProductCatalog";
import { AboutSection } from "./components/AboutSection";
import { VisitStoreSection } from "./components/VisitStoreSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { ProductDetailModal } from "./components/ProductDetailModal";
import { CartDrawer } from "./components/CartDrawer";
import { WishlistDrawer } from "./components/WishlistDrawer";
import { SearchModal } from "./components/SearchModal";
import { StoreProduct, STORE_CONFIG } from "./config/storeConfig";
import { Phone, MessageSquare } from "lucide-react";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedProduct, setSelectedProduct] = useState<StoreProduct | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  const scrollToSection = (sectionId: string) => {
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectCategory = (catId: string) => {
    setSelectedCategory(catId);
  };

  return (
    <CartProvider>
      <WishlistProvider>
        <div className="min-h-screen flex flex-col bg-[#F6F4F0] text-[#191919]">
          {/* Main Top Navigation */}
          <Navbar
            onOpenSearch={() => setIsSearchOpen(true)}
            onSelectCategory={handleSelectCategory}
            onNavigateSection={scrollToSection}
          />

          <main className="flex-1">
            {/* Hero Section matching the Evora reference screenshot */}
            <HeroSection
              onExploreClick={() => scrollToSection("catalog-section")}
              onContactClick={() => scrollToSection("contact-section")}
            />

            {/* Floating Dark Category Strip */}
            <CategoryStrip onSelectCategory={handleSelectCategory} />

            {/* Campaign Editorial Spotlight Banner */}
            <CampaignBanner
              onDiscoverClick={() => {
                setSelectedCategory("all");
                scrollToSection("catalog-section");
              }}
            />

            {/* Trust and Store Guarantees */}
            <TrustFeatures />

            {/* "BEST OF KM FASHION" Product Catalog */}
            <ProductCatalog
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              onSelectProduct={(product) => setSelectedProduct(product)}
            />

            {/* About Store Section with Shamirpet retail focus */}
            <AboutSection
              onContactClick={() => scrollToSection("contact-section")}
              onVisitClick={() => scrollToSection("visit-section")}
            />

            {/* Visit Store Section with Map & Timings */}
            <VisitStoreSection />

            {/* Contact Section */}
            <ContactSection />
          </main>

          {/* Footer */}
          <Footer
            onSelectCategory={handleSelectCategory}
            onNavigateSection={scrollToSection}
          />

          {/* Modals & Slide-out Drawers */}
          <ProductDetailModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />

          <CartDrawer />

          <WishlistDrawer
            onSelectProduct={(product) => setSelectedProduct(product)}
          />

          <SearchModal
            isOpen={isSearchOpen}
            onClose={() => setIsSearchOpen(false)}
            onSelectProduct={(product) => setSelectedProduct(product)}
            onSelectCategory={handleSelectCategory}
          />

          {/* Floating WhatsApp Action Trigger for Quick Customer Assistance */}
          <div className="fixed bottom-5 right-5 z-30 flex flex-col gap-2.5">
            <a
              href={`https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent("Hello KM Fashion Men's Wear! I have an inquiry about available styles in Shamirpet.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              title="Chat with KM Fashion on WhatsApp"
              aria-label="Chat on WhatsApp"
            >
              <MessageSquare className="w-6 h-6 fill-current" />
            </a>
          </div>
        </div>
      </WishlistProvider>
    </CartProvider>
  );
}
