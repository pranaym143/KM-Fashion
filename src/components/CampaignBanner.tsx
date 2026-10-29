import React from "react";
import { ArrowRight } from "lucide-react";

interface CampaignBannerProps {
  onDiscoverClick: () => void;
}

export const CampaignBanner: React.FC<CampaignBannerProps> = ({ onDiscoverClick }) => {
  return (
    <section className="bg-[#F6F4F0] py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-[#EBE7DF] border border-[#DDD7CB] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Left Content Column */}
            <div className="p-8 sm:p-12 lg:p-16 lg:col-span-5 z-10">
              <span className="text-xs uppercase tracking-[0.25em] text-[#666666] font-semibold block mb-2">
                NEW SEASON ARRIVALS
              </span>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#141414] leading-[1.1]">
                CONTEMPORARY DISTINCTION
              </h2>
              <p className="mt-4 text-sm sm:text-base text-[#4A4A4A] leading-relaxed font-normal max-w-md">
                Refined pieces. Authentic fit. Designed to elevate your daily presence from casual outings to grand family celebrations.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={onDiscoverClick}
                  className="px-7 py-3.5 bg-[#141414] hover:bg-[#2A2A2A] text-white text-xs font-bold tracking-[0.2em] uppercase rounded-full shadow-md transition-all duration-300 flex items-center gap-2 group cursor-pointer"
                >
                  <span>DISCOVER THE COLLECTION</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Subtitle details */}
              <div className="mt-8 pt-6 border-t border-[#D9D2C4] flex items-center gap-6 text-xs text-[#555555]">
                <div>
                  <span className="block font-semibold text-[#141414]">100% Breathable</span>
                  <span className="text-[11px] text-[#777777]">Premium Linens & Cottons</span>
                </div>
                <div className="w-[1px] h-6 bg-[#D9D2C4]"></div>
                <div>
                  <span className="block font-semibold text-[#141414]">Tailored Sizing</span>
                  <span className="text-[11px] text-[#777777]">Sizes 38 to 46</span>
                </div>
              </div>
            </div>

            {/* Right Cinematic Image Column */}
            <div className="relative h-72 sm:h-96 lg:h-[460px] lg:col-span-7 overflow-hidden">
              <img
                src="/src/assets/images/campaign_editorial_banner_1793287584342.jpg"
                alt="KM Fashion Men's Wear editorial campaign"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#EBE7DF]/90 via-transparent to-transparent lg:block hidden"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#EBE7DF]/80 via-transparent to-transparent lg:hidden block"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
