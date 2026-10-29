import React, { useState } from "react";
import { ArrowUp, MapPin, Phone, MessageSquare, Shield, FileText, X } from "lucide-react";
import { STORE_CONFIG, STORE_CATEGORIES } from "../config/storeConfig";

interface FooterProps {
  onSelectCategory: (categoryId: string) => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory, onNavigateSection }) => {
  const [modalContent, setModalContent] = useState<"privacy" | "terms" | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCategoryClick = (catId: string) => {
    onSelectCategory(catId);
    const catalog = document.getElementById("catalog-section");
    catalog?.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavClick = (sectionId: string) => {
    onNavigateSection(sectionId);
    const elem = document.getElementById(sectionId);
    elem?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#111111] text-[#A8A29E] pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <span className="font-brand-display text-2xl font-black tracking-[0.25em] text-white">
                KM FASHION
              </span>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#E5C158] font-bold mt-0.5">
                MEN&apos;S WEAR · SHAMIRPET
              </p>
            </div>
            <p className="text-xs text-[#888888] leading-relaxed max-w-sm">
              Your local men&apos;s fashion destination in Shamirpet, Telangana. Curating everyday casuals, formal suits, traditional ethnic attire, and premium trousers.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs">
              <div className="flex items-center gap-2 text-white">
                <MapPin className="w-3.5 h-3.5 text-[#E5C158] shrink-0" />
                <span>Shamirpet, Telangana, India</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Phone className="w-3.5 h-3.5 text-[#E5C158] shrink-0" />
                <a href={STORE_CONFIG.phoneTel} className="hover:text-[#E5C158] transition-colors">
                  {STORE_CONFIG.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center gap-2 text-[#25D366]">
                <MessageSquare className="w-3.5 h-3.5 shrink-0" />
                <a
                  href={`https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent("Hello KM Fashion Men's Wear!")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline font-medium"
                >
                  WhatsApp: +91 72878 17737
                </a>
              </div>
            </div>
          </div>

          {/* Quick Collections */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold text-white mb-4">
              Collections
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => handleCategoryClick("all")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  All Collections
                </button>
              </li>
              {STORE_CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => handleCategoryClick(cat.id)}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Store Info */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold text-white mb-4">
              Store Information
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => handleNavClick("about-section")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  About the Store
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("visit-section")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Visit &amp; Directions
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("contact-section")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Contact &amp; Inquiries
                </button>
              </li>
              <li>
                <a
                  href={STORE_CONFIG.mapsQueryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors text-left block"
                >
                  Find on Google Maps
                </a>
              </li>
            </ul>
          </div>

          {/* Verified Business Policy & Note */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold text-white mb-4">
              Store Policies
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => setModalContent("privacy")}
                  className="hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <Shield className="w-3.5 h-3.5 text-[#E5C158]" />
                  <span>Privacy Policy</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setModalContent("terms")}
                  className="hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5 text-[#E5C158]" />
                  <span>Terms &amp; Conditions</span>
                </button>
              </li>
            </ul>

            <div className="mt-6 p-3 bg-white/5 rounded-lg border border-white/5 text-[11px] text-[#888888] leading-normal">
              In-store trials, exchanges, and size fittings are available at our Shamirpet retail location.
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#777777]">
          <div>
            © {new Date().getFullYear()} KM FASHION MEN&apos;S WEAR. All rights reserved. Shamirpet, Telangana.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setModalContent("privacy")}
              className="hover:text-white transition-colors"
            >
              Privacy
            </button>
            <button
              onClick={() => setModalContent("terms")}
              className="hover:text-white transition-colors"
            >
              Terms
            </button>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-white hover:text-[#E5C158] transition-colors p-1"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Policy Modal */}
      {modalContent && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="relative w-full max-w-lg bg-white text-[#191919] rounded-2xl p-6 sm:p-8 shadow-2xl border border-[#DDD7CB] animate-fadeIn max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setModalContent(null)}
              className="absolute top-4 right-4 p-1.5 text-gray-500 hover:text-black rounded-full"
            >
              <X className="w-5 h-5" />
            </button>

            {modalContent === "privacy" ? (
              <div className="space-y-4 text-xs text-[#444444] leading-relaxed">
                <h3 className="font-serif-luxury text-xl font-bold text-[#141414]">
                  Privacy Policy
                </h3>
                <p>
                  <strong>KM Fashion Men&apos;s Wear</strong> values your privacy. This website is a client-side digital showcase designed to display our clothing collections and facilitate direct customer contact.
                </p>
                <h4 className="font-bold text-[#141414] text-sm">Data Handling</h4>
                <p>
                  We do not sell, rent, or collect personal browsing data. Shopping bag items and saved favorites are stored locally on your device using browser localStorage. When you initiate an inquiry via WhatsApp or phone call, your details are shared directly between you and the business owner.
                </p>
                <h4 className="font-bold text-[#141414] text-sm">Payment Security</h4>
                <p>
                  We do not collect credit card, debit card, or sensitive financial information on this website. All transactions are handled in-person at our physical store or through confirmed direct payment arrangements agreed upon with the store owner.
                </p>
              </div>
            ) : (
              <div className="space-y-4 text-xs text-[#444444] leading-relaxed">
                <h3 className="font-serif-luxury text-xl font-bold text-[#141414]">
                  Terms &amp; Conditions
                </h3>
                <p>
                  Welcome to <strong>KM Fashion Men&apos;s Wear</strong> (Shamirpet, Telangana). By viewing our catalog or contacting our store, you acknowledge the following terms:
                </p>
                <h4 className="font-bold text-[#141414] text-sm">Catalog &amp; Pricing</h4>
                <p>
                  The styles, sizes, and prices presented on this website serve as an informative showroom preview. Actual in-store availability, seasonal pricing, and stock levels are confirmed in real-time by contacting the store at 7287817737 or visiting in person.
                </p>
                <h4 className="font-bold text-[#141414] text-sm">Fitting &amp; Exchanges</h4>
                <p>
                  We recommend trying on clothing items in-store to guarantee your ideal fit. Exchange policies for unworn garments with original tags attached can be confirmed directly at our Shamirpet retail shop.
                </p>
              </div>
            )}

            <div className="mt-6 pt-4 border-t border-gray-200 text-right">
              <button
                onClick={() => setModalContent(null)}
                className="px-5 py-2 bg-[#141414] text-white text-xs font-semibold uppercase tracking-wider rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
