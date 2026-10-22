import { brand } from "@/data/brand";
import { Reveal } from "@/components/ui/reveal";
import { Countdown } from "./countdown";
import { NewsletterForm } from "@/components/newsletter/newsletter-form";

export function OpeningSoon() {
  return (
    <section id="opening-soon" className="on-dark section-pad bg-oxblood text-ivory" aria-labelledby="soon-title">
      <div className="wrap grid gap-16 lg:grid-cols-[1.3fr_1fr] lg:items-end">
        <Reveal>
          <p className="label mb-6 text-champagne">Opening soon</p>
          <h2 id="soon-title" className="display text-[clamp(2.8rem,8.5vw,8rem)]">Something worth wearing is almost here.</h2>
          <p className="mt-8 text-lg text-champagne">{brand.city}, {brand.district} · {brand.established}</p>
          <div className="mt-10">
            {brand.launchDate ? <Countdown target={brand.launchDate} /> : <p className="display text-[clamp(2rem,5vw,4rem)]">Coming soon</p>}
          </div>
        </Reveal>
        <Reveal delay={0.15}><NewsletterForm /></Reveal>
      </div>
    </section>
  );
}
