"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion,useScroll,useTransform } from "framer-motion";
import { Logo } from "@/components/ui/logo";
import { brand } from "@/data/brand";
import { EASE } from "@/lib/constants";

const HeroScene = dynamic(() => import("@/components/3d/hero-scene"), { ssr: false });

const lines = ["The next standard", "of men's style."];

export function Hero() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 800], [0, 160])
  const [scene, setScene] = useState<{ on: boolean; simple: boolean }>({ on: false, simple: true });

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setScene({ on: !reduced, simple: window.innerWidth < 768 });
  }, []);

  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col overflow-hidden px-5 pb-8 pt-24 md:px-10" aria-labelledby="hero-title">
      {scene.on && (
        <motion.div className="pointer-events-none absolute -right-[12%] top-[14%] h-[55vw] max-h-[720px] min-h-[280px] w-[70vw] max-w-[820px] md:right-[-4%] md:top-[8%]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 1.6, ease: EASE }}>
          <HeroScene simple={scene.simple} />
        </motion.div>
      )}

      <div className="wrap relative flex flex-1 flex-col justify-center">
        <div className="hero-section__grid" />
        <motion.p className="label mb-2 text-red" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }}>Estd. {brand.established}</motion.p>

        <motion.div className="hero-section__ghost" style={{ y: heroY }}>SUEDEX</motion.div>

        <h1 id="hero-title" className="display mt-4 text-[clamp(1.2rem,5.2vw,4.5rem)]">
          {lines.map((line, i) => (
            <span key={line} className="block overflow-hidden pb-[0.08em]">
              <motion.span className="block" initial={{ y: "105%" }} animate={{ y: 0 }} transition={{ delay: 0.5 + i * 0.12, duration: 1, ease: EASE }}>{line}</motion.span>
            </span>
          ))}
        </h1>

        <motion.p className="mt-6 max-w-md text-lg md:text-xl" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.9, ease: EASE }}>
          Premium menswear is arriving in {brand.city}.
        </motion.p>

        <motion.div className="mt-8 flex flex-col gap-3 sm:flex-row" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.15, duration: 0.9, ease: EASE }}>
          <a href="#collection" className="btn btn-red">Explore the collection</a>
          <a href="#opening-soon" className="btn btn-line">Get launch updates</a>
        </motion.div>
      </div>

      <div className="wrap relative mt-10 flex items-end justify-between border-t border-ink/15 pt-4">
        <p className="label flex items-center gap-2"><span aria-hidden className="h-2 w-2 rounded-full bg-red" />Opening soon</p>
        <p className="label text-right">{brand.city} · {brand.district} · {brand.state}</p>
      </div>
    </section>
  );
}
