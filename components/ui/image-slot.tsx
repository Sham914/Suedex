import Image from "next/image";
import { Shirt } from "lucide-react";

interface Props { src: string | null; alt: string; tone: string; sizes: string; label?: string }
const DARK = ["#2A2523", "#1B1817", "#3A3431", "#4A0E0E", "#6B2A22", "#C82006", "#A01A05"];

/** Renders a real photo when `src` is set, otherwise a quiet tonal placeholder. */
export function ImageSlot({ src, alt, tone, sizes, label }: Props) {
  if (src) return <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />;
  return (
    <div role="img" aria-label={`${alt} (placeholder)`} className="absolute inset-0 flex flex-col items-center justify-center gap-3" style={{ background: tone, color: DARK.includes(tone) ? "#FAF8F3" : "#1B1817" }}>
      <Shirt strokeWidth={1} className="h-14 w-14 opacity-40" aria-hidden />
      {label && <span className="label opacity-50">{label}</span>}
    </div>
  );
}
