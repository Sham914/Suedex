import type { Metadata, Viewport } from "next";
import { Archivo, Newsreader } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { siteDescription } from "@/data/brand";

const display = Archivo({ subsets: ["latin"], weight: ["700", "800", "900"], variable: "--font-display", display: "swap" });
const body = Newsreader({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-body", display: "swap", adjustFontFallback: false });

const title = "Suedex | Premium Men's Clothing | Thodupuzha";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title,
  description: siteDescription,
  openGraph: { title, description: siteDescription, type: "website", locale: "en_IN", siteName: "Suedex", images: [{ url: "/logo.jpg", width: 1280, height: 1280, alt: "Suedex Men's Clothing logo" }] },
  twitter: { card: "summary_large_image", title, description: siteDescription, images: ["/logo.jpg"] },
  icons: { icon: "/icon.jpg" },
};
export const viewport: Viewport = { themeColor: "#FAF8F3", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-body relative">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:bg-ink focus:px-4 focus:py-2 focus:text-ivory">Skip to content</a>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
