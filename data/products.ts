export interface Product {
  id: string;
  name: string;
  category: string;
  blurb: string;
  /** Replace with real files in /public/products/... (or remote URLs + next.config remotePatterns). null = tonal placeholder. */
  images: { primary: string | null; secondary: string | null; alt: string };
  /** Placeholder panel colours until photos exist. */
  tones: [string, string];
  /** Demo values only. null = show "Price at launch". */
  price: number | null;
}

export const products: Product[] = [
  { id: "signature-oxford", name: "Suedex Signature Oxford", category: "Signature Shirts", blurb: "The shirt the range is built around.", images: { primary: null, secondary: null, alt: "Signature Oxford shirt" }, tones: ["#E9E2D3", "#D9CFBB"], price: null },
  { id: "midnight-shirt", name: "Midnight Tailored Shirt", category: "Signature Shirts", blurb: "Sharp cut in a deep, dark tone.", images: { primary: null, secondary: null, alt: "Midnight tailored shirt" }, tones: ["#2A2523", "#1B1817"], price: null },
  { id: "ivory-essential", name: "Ivory Essential Shirt", category: "Everyday Essentials", blurb: "A clean base layer for any wardrobe.", images: { primary: null, secondary: null, alt: "Ivory essential shirt" }, tones: ["#F1EDE3", "#E4DDCC"], price: null },
  { id: "structured-overshirt", name: "Structured Overshirt", category: "Essential Overshirts", blurb: "Layer-ready with a defined shoulder.", images: { primary: null, secondary: null, alt: "Structured overshirt" }, tones: ["#6B2A22", "#4A0E0E"], price: null },
  { id: "tapered-trouser", name: "Modern Tapered Trouser", category: "Tailored Trousers", blurb: "Tapered line, easy through the day.", images: { primary: null, secondary: null, alt: "Modern tapered trouser" }, tones: ["#B9AA8C", "#C9B99A"], price: null },
  { id: "knit-polo", name: "Premium Knit Polo", category: "Premium Polos", blurb: "Knit texture, polished collar.", images: { primary: null, secondary: null, alt: "Premium knit polo" }, tones: ["#C82006", "#A01A05"], price: null },
  { id: "executive-blazer", name: "Executive Blazer", category: "Statement Jackets", blurb: "The piece that finishes the look.", images: { primary: null, secondary: null, alt: "Executive blazer" }, tones: ["#3A3431", "#1B1817"], price: null },
  { id: "linen-shirt", name: "Essential Linen Shirt", category: "Everyday Essentials", blurb: "Light, relaxed, made for warm days.", images: { primary: null, secondary: null, alt: "Essential linen shirt" }, tones: ["#DCD3BF", "#CFC4AB"], price: null },
];

export const formatPrice = (price: number | null): string =>
  price === null ? "Price at launch" : new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(price);
