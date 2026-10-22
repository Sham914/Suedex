import { Reveal } from "./reveal";

export function FinalCta() {
  return (
    <section className="on-dark section-pad bg-ink text-ivory" aria-labelledby="final-title">
      <div className="wrap">
        <Reveal>
          <h2 id="final-title" className="display text-[clamp(3rem,11vw,10rem)]">
            Your next<br />favourite piece<br />starts <span className="text-red">here.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.15} className="mt-14 flex flex-col gap-3 sm:flex-row">
          <a href="#collection" className="btn btn-red">Explore Suedex</a>
          <a href="#opening-soon" className="btn btn-line">Get launch updates</a>
        </Reveal>
      </div>
    </section>
  );
}
