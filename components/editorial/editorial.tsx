"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ImageSlot } from "@/components/ui/image-slot";

/** Swap `src: null` for real editorial photography. */
const panels = {
  large: { src: null as string | null, alt: "Editorial: tailored jacket in motion", tone: "#2A2523" },
  small: { src: null as string | null, alt: "Editorial: shirt detail", tone: "#DCD3BF" },
};

export function Editorial() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yBig = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);
  const ySmall = useTransform(scrollYProgress, [0, 1], ["18%", "-18%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-ivory px-5 py-[clamp(80px,12vw,180px)] md:px-10" aria-labelledby="editorial-title">
      <div className="wrap relative grid grid-cols-12 gap-y-10">
        <div className="relative col-span-10 aspect-[4/5] overflow-hidden md:col-span-6 md:col-start-1">
          <motion.div className="absolute inset-[-8%]" style={{ y: yBig }}><ImageSlot {...panels.large} sizes="(min-width:768px) 50vw, 90vw" label="Editorial image" /></motion.div>
        </div>
        <div className="relative col-span-8 col-start-5 -mt-24 aspect-[3/4] overflow-hidden shadow-[0_30px_80px_-30px_rgba(27,24,23,0.45)] md:col-span-3 md:col-start-8 md:mt-40">
          <motion.div className="absolute inset-[-12%]" style={{ y: ySmall }}><ImageSlot {...panels.small} sizes="(min-width:768px) 25vw, 60vw" /></motion.div>
        </div>
        <motion.div style={{ y: yText }} className="col-span-12 md:absolute md:bottom-[6%] md:right-0 md:z-10 md:col-auto md:w-[62%] md:text-right">
          <h2 id="editorial-title" className="display text-[clamp(3rem,9vw,8.5rem)] md:mix-blend-multiply">Built for<br />the way<br />you <span className="text-red">move.</span></h2>
        </motion.div>
      </div>
    </section>
  );
}
