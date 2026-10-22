import { brand } from "@/data/brand";
import { Reveal } from "@/components/ui/reveal";

/** Stylised, deliberately address-free treatment. Add a real address only once confirmed. */
export function Location() {
  return (
    <section className="relative overflow-hidden section-pad" aria-labelledby="loc-title">
      <svg aria-hidden viewBox="0 0 400 400" className="absolute -right-[20%] top-1/2 h-[120vw] max-h-[900px] -translate-y-1/2 text-red/25 md:right-[-5%]" fill="none" stroke="currentColor" strokeWidth="1">
        {[40, 80, 120, 160, 200].map((r) => <circle key={r} cx="200" cy="200" r={r} />)}
        <circle cx="200" cy="200" r="5" fill="#C82006" stroke="none" />
      </svg>
      <div className="wrap relative">
        <Reveal>
          <h2 id="loc-title" className="label mb-6 text-red">Coming to {brand.city}</h2>
          <p className="display text-[clamp(3.2rem,13vw,12rem)]">{brand.city}</p>
          <p className="mt-6 text-xl md:text-2xl">{brand.district}, {brand.state}. Store address to be announced.</p>
        </Reveal>
      </div>
    </section>
  );
}
