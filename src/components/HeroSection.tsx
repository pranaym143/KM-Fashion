import React from "react";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";
import { STORE_CONFIG } from "../config/storeConfig";

interface HeroSectionProps {
  onExploreClick: () => void;
  onContactClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreClick,
  onContactClick,
}) => {
  return (
    <section className="relative overflow-hidden bg-[#F6F4F0] pt-6 pb-12 sm:pt-10 sm:pb-16 border-b border-[#E8E3DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Kicker Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-2 sm:mb-4">
          <div className="max-w-md">
            <div className="flex items-center gap-2 text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#666666]">
              <Sparkles className="w-3.5 h-3.5 text-[#8C6D23]" />
              <span>CONTEMPORARY MEN&apos;S WEAR</span>
            </div>
            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] font-medium text-[#1E1E1E] mt-1 leading-snug">
              CURATED STYLES FOR EVERY GENERATION.
            </p>
            <div className="w-12 h-[1.5px] bg-[#111111] mt-2"></div>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs text-[#666666] tracking-wider uppercase font-medium">
            <MapPin className="w-3.5 h-3.5 text-[#8C6D23]" />
            <span>SHAMIRPET, TELANGANA</span>
          </div>
        </div>

        {/* Central Visual Stage: Giant Typography + Model */}
        <div className="relative min-h-[520px] sm:min-h-[640px] lg:min-h-[740px] xl:min-h-[800px] flex items-center justify-center">
          {/* Giant Architectural Brand Letters Behind Model - 100% Visible & Never Clipped */}
          <div
            className="absolute inset-x-0 top-[20%] sm:top-[22%] lg:top-[24%] flex items-center justify-center select-none pointer-events-none z-0 px-2 sm:px-6"
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 1200 180"
              className="w-full max-w-6xl xl:max-w-7xl mx-auto h-auto select-none pointer-events-none drop-shadow-xs"
              preserveAspectRatio="xMidYMid meet"
            >
              <text
                x="50%"
                y="58%"
                textAnchor="middle"
                dominantBaseline="middle"
                style={{
                  fontFamily: "'Cinzel', 'Playfair Display', Georgia, serif",
                  fontWeight: 900,
                  fontSize: "125px",
                  letterSpacing: "0.05em",
                  fill: "#141414",
                }}
              >
                KM FASHION
              </text>
            </svg>
          </div>

          {/* Foreground Fashion Model Image - Enlarged for Prominence */}
          <div className="relative z-10 w-full max-w-lg sm:max-w-xl lg:max-w-2xl mx-auto flex justify-center">
            <div className="relative group">
              <img
                src="/assets/streetwear_character.png"
                alt="KM Fashion Men's Wear Streetwear Collection"
                className="w-auto h-[490px] sm:h-[620px] lg:h-[720px] xl:h-[780px] object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.24)] transition-transform duration-700 hover:scale-[1.01]"
                loading="eager"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.dataset.fallback) {
                    target.dataset.fallback = "true";
                    target.src = "https://res.cloudinary.com/dqpsyh7yu/image/upload/v1793289345/Aloof_Streetwear_Anime_Character_1_mtre5v.png";
                  }
                }}
              />
            </div>
          </div>

          {/* Subtle overlay stroke layer so the entire word is 100% visible even where the jacket overlaps */}
          <div
            className="absolute inset-x-0 top-[20%] sm:top-[22%] lg:top-[24%] flex items-center justify-center select-none pointer-events-none z-20 px-2 sm:px-6"
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 1200 180"
              className="w-full max-w-6xl xl:max-w-7xl mx-auto h-auto select-none pointer-events-none"
              preserveAspectRatio="xMidYMid meet"
            >
              <text
                x="50%"
                y="58%"
                textAnchor="middle"
                dominantBaseline="middle"
                style={{
                  fontFamily: "'Cinzel', 'Playfair Display', Georgia, serif",
                  fontWeight: 900,
                  fontSize: "125px",
                  letterSpacing: "0.05em",
                  fill: "transparent",
                  stroke: "rgba(20, 20, 20, 0.45)",
                  strokeWidth: "1.5px",
                }}
              >
                KM FASHION
              </text>
            </svg>
          </div>

          {/* Left Hero Call to Action Buttons */}
          <div className="absolute left-0 bottom-4 sm:bottom-8 z-30 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              onClick={onExploreClick}
              className="px-6 py-3.5 bg-[#141414] hover:bg-[#2A2A2A] text-white text-xs font-bold tracking-[0.2em] uppercase rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>EXPLORE COLLECTION</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onContactClick}
              className="px-6 py-3.5 bg-transparent hover:bg-[#141414]/5 text-[#141414] text-xs font-bold tracking-[0.2em] uppercase rounded-full border border-[#141414]/30 hover:border-[#141414] transition-all duration-300 flex items-center justify-center cursor-pointer"
            >
              <span>CONTACT OUR STORE</span>
            </button>
          </div>

          {/* Right Micro Label */}
          <div className="absolute right-0 bottom-4 sm:bottom-8 z-20 text-right hidden sm:block">
            <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#141414]">
              NEW COLLECTION
            </p>
            <p className="text-sm font-semibold tracking-widest text-[#8C6D23] font-mono mt-0.5">
              2026 EDITION
            </p>
          </div>
        </div>

        {/* Supporting Brand Pitch */}
        <div className="mt-6 pt-6 border-t border-[#E8E3DA] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h1 className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#141414] tracking-tight">
              {STORE_CONFIG.heroHeadline}
            </h1>
            <p className="text-sm sm:text-base text-[#555555] mt-1 max-w-2xl font-normal leading-relaxed">
              {STORE_CONFIG.heroSubheadline}
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs uppercase tracking-widest text-[#888888] font-medium">Local Retail Boutique:</span>
            <span className="text-xs uppercase tracking-wider font-semibold text-[#141414] bg-[#E8E3DA] px-3 py-1.5 rounded-full">
              Shamirpet, Telangana
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
