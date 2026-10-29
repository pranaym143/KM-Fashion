import React from "react";
import { ArrowRight, MapPin, Phone, MessageSquare, ShieldCheck } from "lucide-react";
import { STORE_CONFIG } from "../config/storeConfig";

interface AboutSectionProps {
  onContactClick: () => void;
  onVisitClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactClick, onVisitClick }) => {
  return (
    <section id="about-section" className="bg-[#EBE7DF] py-16 sm:py-20 border-b border-[#DDD7CB] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 items-center">
          {/* Left Column: Image with architectural styling */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-[#DDD7CB] bg-[#DDD7CB]">
              <img
                src="/src/assets/images/store_interior_boutique_1793287607274.jpg"
                alt="KM Fashion Men's Wear boutique interior"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] uppercase tracking-widest text-[#E5C158] font-mono">
                  PHYSICAL STOREFRONT
                </span>
                <p className="text-sm font-semibold tracking-wide mt-0.5">
                  KM Fashion Men&apos;s Wear · Shamirpet
                </p>
              </div>
            </div>

            {/* Corner Badge */}
            <div className="hidden sm:flex absolute -bottom-5 -right-5 bg-[#141414] text-white p-4 rounded-xl shadow-lg border border-white/10 items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#E5C158]/20 flex items-center justify-center text-[#E5C158]">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-[#A8A29E] font-medium">Location</p>
                <p className="text-xs font-bold text-white">Shamirpet, Telangana</p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Text strictly adhering to Client Guidelines */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#8C6D23] mb-2">
                <span>ABOUT OUR STORE</span>
              </div>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold tracking-tight text-[#141414] leading-tight">
                Your Local Men&apos;s Fashion Destination
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[#4A4A4A] leading-relaxed">
              <p>
                <strong className="text-[#141414]">KM Fashion Men&apos;s Wear</strong> is a local men&apos;s fashion store located in Shamirpet, Telangana. We offer a versatile range of men&apos;s clothing designed to suit daily wear, office settings, and festive occasions.
              </p>
              <p>
                Explore our collections and contact the store to learn more about available styles, current sizes in stock, and trial fittings. Customers can reach us directly by phone or WhatsApp to verify details before visiting.
              </p>
            </div>

            {/* Direct Contact Callout Box */}
            <div className="p-4 bg-white rounded-xl border border-[#DDD7CB] space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#141414]">
                <ShieldCheck className="w-4 h-4 text-[#8C6D23]" />
                <span>Verified Contact &amp; Location Information</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs text-[#555555]">
                <div>
                  <span className="block text-[11px] text-[#888888]">Primary Phone:</span>
                  <a href={STORE_CONFIG.phoneTel} className="font-bold text-[#141414] hover:text-[#8C6D23]">
                    {STORE_CONFIG.phoneFormatted}
                  </a>
                </div>
                <div>
                  <span className="block text-[11px] text-[#888888]">Region:</span>
                  <span className="font-bold text-[#141414]">Shamirpet, Telangana, India</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onVisitClick}
                className="px-6 py-3 bg-[#141414] hover:bg-black text-white text-xs font-bold tracking-[0.2em] uppercase rounded-full shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>STORE LOCATION</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onContactClick}
                className="px-6 py-3 bg-white hover:bg-[#F2EFE9] text-[#141414] text-xs font-bold tracking-[0.2em] uppercase rounded-full border border-[#DDD7CB] transition-all cursor-pointer"
              >
                <span>CONTACT US</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
