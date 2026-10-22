"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { ImageSlot } from "@/components/ui/image-slot";
import { EASE } from "@/lib/constants";
import { formatPrice, type Product } from "@/data/products";

export function ProductModal({ product, onClose }: { product: Product | null; onClose: () => void }) {
  return (
    <Dialog.Root open={Boolean(product)} onOpenChange={(o) => !o && onClose()}>
      <AnimatePresence>
        {product && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild forceMount>
              <motion.div className="fixed inset-0 z-[70] bg-ink/70 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
            </Dialog.Overlay>
            <Dialog.Content asChild forceMount>
              <motion.div
                className="fixed inset-x-0 bottom-0 z-[71] max-h-[92svh] overflow-y-auto bg-ivory shadow-[0_40px_120px_-20px_rgba(0,0,0,0.5)] md:inset-x-auto md:bottom-auto md:left-1/2 md:top-1/2 md:w-[min(960px,92vw)] md:-translate-x-1/2 md:-translate-y-1/2"
                initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 40 }} transition={{ duration: 0.6, ease: EASE }}
              >
                <div className="grid md:grid-cols-2">
                  <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[560px]">
                    <ImageSlot src={product.images.primary} alt={product.images.alt} tone={product.tones[0]} sizes="(min-width:768px) 480px, 100vw" />
                  </div>
                  <div className="flex flex-col p-6 md:p-10">
                    <p className="label text-red">{product.category}</p>
                    <Dialog.Title className="display mt-3 text-4xl md:text-5xl">{product.name}</Dialog.Title>
                    <Dialog.Description className="mt-5 text-lg">{product.blurb}</Dialog.Description>
                    <p className="label mt-8">{formatPrice(product.price)}</p>
                    <p className="mt-2 text-base opacity-70">Arriving at the Suedex store in Thodupuzha. Details are placeholders until launch.</p>
                    <a href="#opening-soon" onClick={onClose} className="btn btn-red mt-auto self-start">Get launch updates</a>
                  </div>
                </div>
                <Dialog.Close aria-label="Close preview" className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center bg-ivory/80 backdrop-blur"><X /></Dialog.Close>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
