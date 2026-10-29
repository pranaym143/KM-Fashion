import React from "react";
import { MapPin, Navigation, Phone, MessageSquare, Clock, AlertCircle } from "lucide-react";
import { STORE_CONFIG } from "../config/storeConfig";

export const VisitStoreSection: React.FC = () => {
  return (
    <section id="visit-section" className="bg-[#F6F4F0] py-16 sm:py-20 border-b border-[#DDD7CB] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#8C6D23] mb-1">
            <MapPin className="w-3.5 h-3.5" />
            <span>LOCAL RETAIL SHOP</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold tracking-tight text-[#141414]">
            VISIT OUR STORE
          </h2>
          <p className="mt-2 text-sm text-[#555555]">
            Drop by our Shamirpet location for in-person fittings, fabric trials, and direct styling advice.
          </p>
        </div>

        {/* Store Information Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Card 1: Location & Directions */}
          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E5E0D8] shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#F6F4F0] flex items-center justify-center text-[#8C6D23] mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-serif-luxury text-base font-bold text-[#141414]">
                Store Location
              </h3>
              <p className="mt-2 text-xs text-[#555555] leading-relaxed">
                <strong className="text-[#141414] block">KM Fashion Men&apos;s Wear</strong>
                Shamirpet, Telangana, India.
              </p>
              <div className="mt-3 p-2.5 bg-[#F6F4F0] rounded-lg border border-[#DDD7CB] text-[11px] text-[#666666]">
                <span className="font-semibold text-[#141414]">Street Address Note: </span>
                Exact street number &amp; landmark can be confirmed via phone call before heading out.
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#F2EFE9]">
              <a
                href={STORE_CONFIG.mapsQueryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-[#141414] hover:bg-black text-white text-xs font-bold uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                <Navigation className="w-3.5 h-3.5 text-[#E5C158]" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>

          {/* Card 2: Contact Numbers */}
          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E5E0D8] shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#F6F4F0] flex items-center justify-center text-[#8C6D23] mb-4">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="font-serif-luxury text-base font-bold text-[#141414]">
                Direct Contacts
              </h3>
              <p className="mt-2 text-xs text-[#555555] leading-relaxed">
                Connect directly with the shop owner for product inquiries, stock verification, and custom orders.
              </p>

              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between text-xs p-2 bg-[#F6F4F0] rounded-lg">
                  <span className="text-[#666666]">Phone / Tel:</span>
                  <a href={STORE_CONFIG.phoneTel} className="font-bold text-[#141414] hover:text-[#8C6D23]">
                    {STORE_CONFIG.phoneFormatted}
                  </a>
                </div>
                <div className="flex items-center justify-between text-xs p-2 bg-[#F6F4F0] rounded-lg">
                  <span className="text-[#666666]">WhatsApp:</span>
                  <span className="font-bold text-[#25D366]">{STORE_CONFIG.phoneFormatted}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#F2EFE9] flex gap-2">
              <a
                href={STORE_CONFIG.phoneTel}
                className="flex-1 py-2.5 bg-[#141414] text-white text-xs font-bold uppercase tracking-wider rounded-lg flex items-center justify-center gap-1.5 hover:bg-black transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#E5C158]" />
                <span>Call</span>
              </a>
              <a
                href={`https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent("Hello KM Fashion Men's Wear! I am planning to visit the shop in Shamirpet.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider rounded-lg flex items-center justify-center gap-1.5 hover:bg-[#20ba5a] transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Card 3: Opening Hours & Schedule */}
          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E5E0D8] shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#F6F4F0] flex items-center justify-center text-[#8C6D23] mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-serif-luxury text-base font-bold text-[#141414]">
                Business Timings
              </h3>
              <p className="mt-2 text-xs text-[#555555] leading-relaxed">
                Standard local retail shop schedule in Shamirpet (Subject to holiday &amp; festival hours):
              </p>

              <div className="mt-3 space-y-1.5 text-xs">
                <div className="flex justify-between py-1 border-b border-gray-100">
                  <span className="text-[#666666]">Monday – Saturday:</span>
                  <span className="font-semibold text-[#141414]">10:00 AM – 9:30 PM*</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-100">
                  <span className="text-[#666666]">Sunday:</span>
                  <span className="font-semibold text-[#141414]">10:30 AM – 9:00 PM*</span>
                </div>
              </div>

              <div className="mt-3 flex items-start gap-1.5 text-[10px] text-[#777777]">
                <AlertCircle className="w-3.5 h-3.5 text-[#8C6D23] shrink-0 mt-0.5" />
                <span>*Please call or message on WhatsApp to confirm opening hours on festival dates.</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#F2EFE9]">
              <a
                href={`https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent("Hello! Are you open today for store visit and trials in Shamirpet?")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-white border border-[#DDD7CB] hover:border-[#141414] text-[#141414] text-xs font-bold uppercase tracking-wider rounded-lg flex items-center justify-center gap-1.5 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                <span>Confirm Today&apos;s Hours</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
