export interface StoreCategory {
  id: string;
  name: string;
  shortDesc: string;
  image: string;
  itemCountText: string;
}

export interface StoreProduct {
  id: string;
  name: string;
  category: string;
  price: number;
  isVerifiedPrice: boolean;
  images: string[];
  sizes: string[];
  colors: { name: string; hex: string }[];
  description: string;
  fabric: string;
  fit: string;
  isFeatured?: boolean;
  tag?: string;
}

export const STORE_CONFIG = {
  name: "KM FASHION",
  fullName: "KM Fashion Men's Wear",
  subtitle: "MEN'S WEAR",
  tagline: "DEFINE YOUR STYLE.",
  heroHeadline: "DEFINE YOUR STYLE.",
  heroSubheadline: "Discover men's fashion for every day, every occasion, and every version of you.",
  location: "Shamirpet, Telangana, India",
  phone: "7287817737",
  phoneFormatted: "+91 72878 17737",
  phoneTel: "tel:+917287817737",
  whatsappNumber: "917287817737",
  mapsQueryUrl: "https://www.google.com/maps/search/?api=1&query=Shamirpet+Telangana+India",
  verifiedInfoNotice: "Verified business contact: 7287817737 in Shamirpet, Telangana. Product catalog and prices shown below are sample previews for design and ordering demonstration.",
  currencySymbol: "₹",
};

export const STORE_CATEGORIES: StoreCategory[] = [
  {
    id: "casual-shirts",
    name: "Casual Shirts",
    shortDesc: "Breathable linens, relaxed checks & everyday cottons.",
    image: "/src/assets/images/casual_shirts_category_1793287586368.jpg",
    itemCountText: "New Arrivals",
  },
  {
    id: "formal-shirts",
    name: "Formal Shirts & Suits",
    shortDesc: "Sharp tailoring, spread collars & boardroom perfection.",
    image: "/src/assets/images/formal_suits_category_1793287586768.jpg",
    itemCountText: "Signature Line",
  },
  {
    id: "traditional-wear",
    name: "Traditional Wear",
    shortDesc: "Festive kurtas, embroidered bandhgalas & celebratory fits.",
    image: "/src/assets/images/traditional_ethnic_category_1793287586053.jpg",
    itemCountText: "Festive Curation",
  },
  {
    id: "t-shirts",
    name: "T-Shirts & Polos",
    shortDesc: "Premium Supima cottons, textured knits & essential basics.",
    image: "/src/assets/images/tshirts_category_1793287605634.jpg",
    itemCountText: "Daily Essentials",
  },
  {
    id: "jeans-trousers",
    name: "Jeans & Trousers",
    shortDesc: "Tailored chinos, pleated trousers & selvedge stretch denim.",
    image: "/src/assets/images/jeans_trousers_category_1793287606779.jpg",
    itemCountText: "Modern Fits",
  },
  {
    id: "jackets-outerwear",
    name: "Jackets & Outerwear",
    shortDesc: "Structured blazers, utility jackets & refined overcoats.",
    image: "/src/assets/images/jackets_outerwear_category_1793287606774.jpg",
    itemCountText: "Layering Pieces",
  },
];

export const SAMPLE_PRODUCTS: StoreProduct[] = [
  {
    id: "km-prod-01",
    name: "Pure Linen Oxford Casual Shirt",
    category: "casual-shirts",
    price: 1499,
    isVerifiedPrice: false,
    images: [
      "/src/assets/images/casual_shirts_category_1793287586368.jpg",
    ],
    sizes: ["38 (S)", "40 (M)", "42 (L)", "44 (XL)", "46 (XXL)"],
    colors: [
      { name: "Sage Green", hex: "#7A9A7B" },
      { name: "Sky Blue", hex: "#8DAEC4" },
      { name: "Navy Blue", hex: "#1C2D42" },
      { name: "Warm Khaki", hex: "#C7B299" },
    ],
    description: "Tailored from 100% breathable European flax linen, this relaxed casual shirt offers natural drape and effortless sophistication for warm Telangana afternoons and casual evenings.",
    fabric: "100% Pure Washed Linen",
    fit: "Modern Regular Fit with curved hem",
    isFeatured: true,
    tag: "Best Seller",
  },
  {
    id: "km-prod-02",
    name: "Savile Heritage Three-Piece Formal Suit",
    category: "formal-shirts",
    price: 4999,
    isVerifiedPrice: false,
    images: [
      "/src/assets/images/formal_suits_category_1793287586768.jpg",
      "/src/assets/images/campaign_editorial_banner_1793287584342.jpg",
    ],
    sizes: ["38R", "40R", "42R", "44R"],
    colors: [
      { name: "Charcoal Herringbone", hex: "#2E3136" },
      { name: "Midnight Navy", hex: "#17202A" },
    ],
    description: "A commanding three-piece suit featuring peak lapels, tailored waistcoat, and pleated trousers. Ideal for weddings, receptions, and corporate banquets.",
    fabric: "Fine Wool-Blend with Silk Lining",
    fit: "Tailored Slim Fit",
    isFeatured: true,
    tag: "Signature",
  },
  {
    id: "km-prod-03",
    name: "Regal Royal Blue Bandhgala & Kurta Set",
    category: "traditional-wear",
    price: 3899,
    isVerifiedPrice: false,
    images: [
      "/src/assets/images/traditional_ethnic_category_1793287586053.jpg",
    ],
    sizes: ["38 (S)", "40 (M)", "42 (L)", "44 (XL)"],
    colors: [
      { name: "Royal Navy & Gold", hex: "#1A2E40" },
      { name: "Raw Cream Silk", hex: "#F3EAD6" },
    ],
    description: "An opulent men's festive ensemble comprising a handcrafted zari-embroidered bandhgala jacket paired with a raw-silk ivory kurta and tapered churidar.",
    fabric: "Brocade Silk & Raw Cotton Blend",
    fit: "Structured Traditional Fit",
    isFeatured: true,
    tag: "Festive",
  },
  {
    id: "km-prod-04",
    name: "Heavyweight Supima Cotton Crewneck Tee",
    category: "t-shirts",
    price: 799,
    isVerifiedPrice: false,
    images: [
      "/src/assets/images/tshirts_category_1793287605634.jpg",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Anthracite Slate", hex: "#3A3D40" },
      { name: "Ecru Chalk", hex: "#EAE6DF" },
      { name: "Deep Black", hex: "#111111" },
    ],
    description: "Crafted from 240 GSM combed Supima cotton with a compact rib collar that maintains shape after repeated washes. A heavyweight daily staple.",
    fabric: "100% Combed Compact Cotton (240 GSM)",
    fit: "Slightly Relaxed Boxy Fit",
    isFeatured: true,
    tag: "Essential",
  },
  {
    id: "km-prod-05",
    name: "Pleated Tailored Chino Trousers",
    category: "jeans-trousers",
    price: 1699,
    isVerifiedPrice: false,
    images: [
      "/src/assets/images/jeans_trousers_category_1793287606779.jpg",
    ],
    sizes: ["30", "32", "34", "36", "38"],
    colors: [
      { name: "Charcoal Grey", hex: "#33383B" },
      { name: "Classic Navy", hex: "#223042" },
      { name: "Olive Khaki", hex: "#484E3C" },
    ],
    description: "Single-pleat tailored trousers with side adjusters and a tapered leg. Blends sartorial heritage with everyday modern ease.",
    fabric: "Cotton-Tencel Stretch Twill",
    fit: "Tapered Pleated Fit",
    isFeatured: true,
    tag: "Popular",
  },
  {
    id: "km-prod-06",
    name: "Textured Tweed Overcoat & Blazer",
    category: "jackets-outerwear",
    price: 3499,
    isVerifiedPrice: false,
    images: [
      "/src/assets/images/jackets_outerwear_category_1793287606774.jpg",
      "/src/assets/images/hero_fashion_model_1793287584290.jpg",
    ],
    sizes: ["38", "40", "42", "44"],
    colors: [
      { name: "Charcoal Tweed", hex: "#2B2E33" },
      { name: "Olive Houndstooth", hex: "#3B4036" },
    ],
    description: "A rich wool-blend overcoat with horn buttons and notch lapels, ideal for evening layering, travel, and cooler celebrations.",
    fabric: "Textured Wool Blend with Quilted Interior",
    fit: "Tailored Overcoat Silhouette",
    isFeatured: true,
    tag: "Outerwear",
  },
  {
    id: "km-prod-07",
    name: "Classic Deep Indigo Selvedge Denim",
    category: "jeans-trousers",
    price: 1899,
    isVerifiedPrice: false,
    images: [
      "/src/assets/images/jeans_trousers_category_1793287606779.jpg",
    ],
    sizes: ["30", "32", "34", "36"],
    colors: [
      { name: "Raw Indigo", hex: "#1F2937" },
      { name: "Washed Slate", hex: "#475569" },
    ],
    description: "Authentic 13.5 oz denim woven on vintage shuttle looms with a red selvedge ID, custom brass hardware, and clean contrast stitching.",
    fabric: "99% Cotton, 1% Elastane Selvedge Denim",
    fit: "Slim Straight Fit",
    isFeatured: false,
  },
  {
    id: "km-prod-08",
    name: "Italian Spread-Collar Formal Shirt",
    category: "formal-shirts",
    price: 1299,
    isVerifiedPrice: false,
    images: [
      "/src/assets/images/casual_shirts_category_1793287586368.jpg",
    ],
    sizes: ["39", "40", "42", "44"],
    colors: [
      { name: "Crisp White", hex: "#FFFFFF" },
      { name: "Powder Blue", hex: "#C7D8E8" },
      { name: "Micro Houndstooth", hex: "#CBD5E1" },
    ],
    description: "100-count two-ply Egyptian cotton shirt with removable collar stays, mother-of-pearl finish buttons, and split back yoke.",
    fabric: "100% Two-Ply Giza Cotton",
    fit: "Slim Tailored Formal Cut",
    isFeatured: false,
  },
];

export function buildWhatsAppProductMessage(product: StoreProduct, size: string, color: string, qty: number): string {
  const text = `Hello KM Fashion Men's Wear! I am interested in:
- Product: ${product.name}
- Category: ${product.category}
- Selected Size: ${size || "Not specified"}
- Selected Color: ${color || "Standard"}
- Quantity: ${qty}
${product.isVerifiedPrice ? `- Price: ₹${product.price}` : "(Please confirm available sizes and final price)"}

Please confirm current store availability at Shamirpet. Thank you!`;
  return `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export function buildWhatsAppCartMessage(items: { product: StoreProduct; size: string; color: string; quantity: number }[], total: number): string {
  let itemList = "";
  items.forEach((item, index) => {
    itemList += `\n${index + 1}. ${item.product.name} (${item.size}, ${item.color}) x ${item.quantity}`;
  });

  const text = `Hello KM Fashion Men's Wear! I would like to inquire about ordering the following items from your store in Shamirpet:
${itemList}

Estimated Subtotal: ₹${total.toLocaleString('en-IN')} (Sample estimate)

Please confirm if these sizes are in stock and your direct store pricing. Thank you!`;
  return `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export function buildWhatsAppDirectContactMessage(name: string, subject: string, message: string): string {
  const text = `Hello KM Fashion Men's Wear!
My Name: ${name}
Inquiry Regarding: ${subject}
Message: ${message}

Looking forward to your response.`;
  return `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
