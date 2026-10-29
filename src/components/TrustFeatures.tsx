import React from "react";
import { Store, MessageSquare, Award, ShieldCheck } from "lucide-react";
import { STORE_CONFIG } from "../config/storeConfig";

export const TrustFeatures: React.FC = () => {
  return (
    <section className="bg-[#EFECE6] border-y border-[#DDD7CB] py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#DDD7CB]">
          {/* Feature 1 */}
          <div className="flex items-center gap-3.5 pt-4 sm:pt-0 sm:px-4 first:pt-0 first:pl-0">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#141414] shadow-xs shrink-0">
              <Store className="w-5 h-5 text-[#8C6D23]" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#141414]">
                LOCAL PHYSICAL STORE
              </p>
              <p className="text-[11px] text-[#666666] mt-0.5">
                Shamirpet, Telangana
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center gap-3.5 pt-4 sm:pt-0 sm:px-4">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#141414] shadow-xs shrink-0">
              <MessageSquare className="w-5 h-5 text-[#25D366]" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#141414]">
                DIRECT WHATSAPP
              </p>
              <p className="text-[11px] text-[#666666] mt-0.5">
                Quick availability & order check
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center gap-3.5 pt-4 sm:pt-0 sm:px-4">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#141414] shadow-xs shrink-0">
              <Award className="w-5 h-5 text-[#8C6D23]" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#141414]">
                CURATED FABRICS
              </p>
              <p className="text-[11px] text-[#666666] mt-0.5">
                Handpicked cottons & linens
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex items-center gap-3.5 pt-4 sm:pt-0 sm:px-4 last:pr-0">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#141414] shadow-xs shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#141414]" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#141414]">
                TRANSPARENT PRICING
              </p>
              <p className="text-[11px] text-[#666666] mt-0.5">
                Call {STORE_CONFIG.phoneFormatted}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
