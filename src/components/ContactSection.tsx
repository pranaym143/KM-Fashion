import React, { useState } from "react";
import { MessageSquare, Phone, Send, AlertCircle, CheckCircle2, User, Mail, HelpCircle } from "lucide-react";
import { STORE_CONFIG, buildWhatsAppDirectContactMessage } from "../config/storeConfig";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    subject: "Style & Availability Inquiry",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isReadyToSend, setIsReadyToSend] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please provide your name.";
    }

    if (!formData.contact.trim()) {
      newErrors.contact = "Please provide a valid phone number or email.";
    } else if (
      formData.contact.length < 5
    ) {
      newErrors.contact = "Please enter a valid phone number or email address.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please describe the styles or details you are inquiring about.";
    } else if (formData.message.trim().length < 8) {
      newErrors.message = "Message should be at least 8 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      setIsReadyToSend(false);
      return;
    }

    // Since this is a client-side frontend, open WhatsApp directly with the validated inquiry
    const whatsappUrl = buildWhatsAppDirectContactMessage(
      `${formData.name} (${formData.contact})`,
      formData.subject,
      formData.message
    );

    setIsReadyToSend(true);
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact-section" className="bg-[#EBE7DF] py-16 sm:py-20 border-b border-[#DDD7CB] scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#8C6D23] block mb-1">
            GET IN TOUCH
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold tracking-tight text-[#141414]">
            CONTACT KM FASHION
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#555555] max-w-lg mx-auto">
            Have questions about clothing sizes, party wear, or current store stock in Shamirpet? Send an inquiry or reach us directly.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-[#DDD7CB] p-6 sm:p-10">
          {/* Quick Notice about Real-Time Delivery via WhatsApp */}
          <div className="mb-6 p-4 rounded-xl bg-[#F6F4F0] border border-[#E5E0D8] text-xs text-[#555555] flex items-start gap-2.5">
            <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#141414]">Direct Shop Delivery Notice: </strong>
              To ensure prompt responses without missed emails, submitting this form transfers your validated message directly into WhatsApp with the shop owner at <strong className="text-[#141414]">{STORE_CONFIG.phoneFormatted}</strong>.
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#141414] font-bold mb-1.5">
                Your Full Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-[#888888] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: "" });
                  }}
                  placeholder="e.g. Rahul Sharma"
                  className={`w-full pl-9 pr-3 py-2.5 bg-[#F6F4F0] border rounded-lg text-xs text-[#141414] placeholder-[#888888] focus:outline-none ${
                    errors.name ? "border-red-500" : "border-[#DDD7CB] focus:border-[#141414]"
                  }`}
                />
              </div>
              {errors.name && (
                <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.name}</span>
                </p>
              )}
            </div>

            {/* Contact (Phone / Email) */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#141414] font-bold mb-1.5">
                Phone Number or Email <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-[#888888] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={formData.contact}
                  onChange={(e) => {
                    setFormData({ ...formData, contact: e.target.value });
                    if (errors.contact) setErrors({ ...errors, contact: "" });
                  }}
                  placeholder="e.g. 9876543210 or yourname@example.com"
                  className={`w-full pl-9 pr-3 py-2.5 bg-[#F6F4F0] border rounded-lg text-xs text-[#141414] placeholder-[#888888] focus:outline-none ${
                    errors.contact ? "border-red-500" : "border-[#DDD7CB] focus:border-[#141414]"
                  }`}
                />
              </div>
              {errors.contact && (
                <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.contact}</span>
                </p>
              )}
            </div>

            {/* Subject */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#141414] font-bold mb-1.5">
                Inquiry Topic
              </label>
              <div className="relative">
                <HelpCircle className="w-4 h-4 text-[#888888] absolute left-3 top-1/2 -translate-y-1/2" />
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full pl-9 pr-3 py-2.5 bg-[#F6F4F0] border border-[#DDD7CB] rounded-lg text-xs text-[#141414] focus:outline-none focus:border-[#141414]"
                >
                  <option value="Style & Availability Inquiry">Style &amp; In-Store Stock Availability</option>
                  <option value="Specific Size & Fit Question">Specific Size &amp; Trial Inquiries</option>
                  <option value="Wedding / Festive Bulk Outfit">Wedding &amp; Festive Ethnic Wear</option>
                  <option value="Store Location & Directions">Store Directions in Shamirpet</option>
                  <option value="Other Questions">Other Questions</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#141414] font-bold mb-1.5">
                Your Message <span className="text-red-500">*</span>
              </label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => {
                  setFormData({ ...formData, message: e.target.value });
                  if (errors.message) setErrors({ ...errors, message: "" });
                }}
                placeholder="Mention the style, size requirement, or questions you have for the shop..."
                className={`w-full p-3 bg-[#F6F4F0] border rounded-lg text-xs text-[#141414] placeholder-[#888888] focus:outline-none ${
                  errors.message ? "border-red-500" : "border-[#DDD7CB] focus:border-[#141414]"
                }`}
              />
              {errors.message && (
                <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.message}</span>
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 bg-[#141414] hover:bg-black text-white text-xs font-bold tracking-[0.2em] uppercase rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4 text-[#E5C158]" />
                <span>SEND INQUIRY VIA WHATSAPP</span>
              </button>
            </div>

            {isReadyToSend && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-xs text-emerald-800 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>WhatsApp conversation opened! You can now send your prefilled message directly to the shop.</span>
              </div>
            )}
          </form>

          {/* Quick Direct Call Alternative */}
          <div className="mt-6 pt-6 border-t border-[#EFECE6] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <span className="text-[#666666]">Prefer an immediate phone conversation?</span>
            <a
              href={STORE_CONFIG.phoneTel}
              className="px-4 py-2 bg-[#F6F4F0] hover:bg-[#EAE6DE] border border-[#DDD7CB] text-[#141414] font-bold uppercase tracking-wider rounded-lg flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#8C6D23]" />
              <span>Call {STORE_CONFIG.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
