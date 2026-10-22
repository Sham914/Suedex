"use client";
import { useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import { ProductCard } from "./product-card";
import { ProductModal } from "./product-modal";
import { products, type Product } from "@/data/products";

export function Collection() {
  const [active, setActive] = useState<Product | null>(null);
  return (
    <section id="collection" className="section-pad" aria-labelledby="collection-title">
      <div className="wrap">
        <Reveal className="mb-16 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <h2 id="collection-title" className="display text-[clamp(3rem,9vw,8rem)]">Best picks</h2>
          <p className="max-w-xs text-lg">A first look at what is coming to Suedex.</p>
        </Reveal>
        <ul className="grid grid-cols-2 gap-x-4 gap-y-12 md:gap-x-8 lg:grid-cols-4">
          {products.map((p, i) => (
            <li key={p.id} className={i % 2 === 1 ? "md:mt-16" : ""}>
              <Reveal delay={(i % 4) * 0.06}><ProductCard product={p} onOpen={setActive} /></Reveal>
            </li>
          ))}
        </ul>
      </div>
      <ProductModal product={active} onClose={() => setActive(null)} />
    </section>
  );
}
