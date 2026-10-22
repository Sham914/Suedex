"use client";
import { motion } from "framer-motion";
import { ImageSlot } from "@/components/ui/image-slot";
import { EASE } from "@/lib/constants";
import { formatPrice, type Product } from "@/data/products";

export function ProductCard({ product, onOpen, className }: { product: Product; onOpen: (p: Product) => void; className?: string }) {
  return (
    <motion.button
      type="button" data-cursor="VIEW" onClick={() => onOpen(product)}
      aria-label={`View ${product.name}`}
      className={`group block w-full text-left ${className ?? ""}`}
      initial="rest" whileHover="hover" whileFocus="hover" animate="rest"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-ink/5">
        <motion.div className="absolute inset-0" variants={{ rest: { scale: 1 }, hover: { scale: 1.05 } }} transition={{ duration: 0.9, ease: EASE }}>
          <ImageSlot src={product.images.primary} alt={product.images.alt} tone={product.tones[0]} sizes="(min-width:1024px) 25vw, 50vw" label={product.category} />
        </motion.div>
        <motion.div className="absolute inset-0" variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }} transition={{ duration: 0.6, ease: EASE }}>
          <ImageSlot src={product.images.secondary} alt="" tone={product.tones[1]} sizes="(min-width:1024px) 25vw, 50vw" />
        </motion.div>
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <p className="label opacity-60">{product.category}</p>
          <p className="display mt-1 text-xl leading-tight tracking-[-0.02em] md:text-2xl">{product.name}</p>
        </div>
        <motion.p className="label mt-1 text-xxs shrink-0 text-red" variants={{ rest: { opacity: 0.5, x: 0 }, hover: { opacity: 1, x: -4 } }} transition={{ duration: 0.4, ease: EASE }}>
          {formatPrice(product.price)}
        </motion.p>
      </div>
    </motion.button>
  );
}
