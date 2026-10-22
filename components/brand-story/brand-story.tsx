import { brand } from "@/data/brand";
import { Reveal } from "@/components/ui/reveal";

export function BrandStory() {
  return (
    <section id="about" className="section-pad" aria-labelledby="about-title">
      <div className="wrap grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-8">
          <h2 id="about-title" className="text-[clamp(1.9rem,4.4vw,3.6rem)] leading-[1.12] tracking-[-0.01em]">
            Suedex is built around a simple idea. Modern menswear should feel confident, refined, and effortless.
          </h2>
        </Reveal>
        <Reveal delay={0.15} className="lg:col-span-3 lg:col-start-10">
          <dl className="space-y-4 border-t border-ink/20 pt-4">
            {[["Place", `${brand.city}, ${brand.district}`], ["State", brand.state], ["Established", String(brand.established)]].map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4"><dt className="label opacity-60">{k}</dt><dd className="text-lg">{v}</dd></div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
