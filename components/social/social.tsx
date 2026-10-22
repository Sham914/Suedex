import { Instagram } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { ImageSlot } from "@/components/ui/image-slot";
import { social } from "@/data/social";

const tiles = ["#E9E2D3", "#2A2523", "#C82006", "#DCD3BF", "#4A0E0E", "#F1EDE3"];

export function Social() {
  return (
    <section className="section-pad !pt-0" aria-labelledby="social-title">
      <div className="wrap">
        <Reveal className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <h2 id="social-title" className="display text-[clamp(2.4rem,7vw,6rem)]">Follow the arrival</h2>
          {social.instagramUrl ? (
            <a href={social.instagramUrl} target="_blank" rel="noopener noreferrer" className="btn btn-line gap-2"><Instagram size={16} aria-hidden />Instagram</a>
          ) : (
            <p className="label opacity-60">Instagram link coming soon</p>
          )}
        </Reveal>
        <ul className="grid grid-cols-3 gap-2 md:gap-4 lg:grid-cols-6">
          {tiles.map((tone, i) => (
            <li key={i} className="relative aspect-square overflow-hidden"><ImageSlot src={null} alt={`Social preview ${i + 1}`} tone={tone} sizes="(min-width:1024px) 16vw, 33vw" /></li>
          ))}
        </ul>
      </div>
    </section>
  );
}
