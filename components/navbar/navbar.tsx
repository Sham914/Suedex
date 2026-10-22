"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { navLinks } from "@/data/navigation";
import { EASE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-500 ease-luxe", scrolled ? "bg-ivory/85 shadow-[0_1px_0_rgba(27,24,23,0.12)] backdrop-blur-md" : "bg-transparent")}>
      <nav aria-label="Primary" className="wrap flex h-16 items-center justify-between px-5 md:h-20 md:px-10">
        <a href="#top" aria-label="Suedex home" className="block w-[120px] md:w-[140px]"><Logo priority /></a>
        <ul className="hidden items-center gap-10 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}><a href={l.href} className="label link-underline py-2 hover:text-red">{l.label}</a></li>
          ))}
        </ul>
        <a href="#opening-soon" className="btn btn-line hidden !h-10 !px-5 border-red text-red hover:!bg-red hover:!text-ivory md:inline-flex">Join the list</a>
        <button type="button" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(true)} className="flex h-11 w-11 items-center justify-center md:hidden"><Menu /></button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog" aria-modal="true" aria-label="Menu"
            className="on-dark fixed inset-0 z-[60] flex flex-col bg-ink px-5 py-4 text-ivory"
            initial={{ clipPath: "inset(0 0 100% 0)" }} animate={{ clipPath: "inset(0 0 0% 0)" }} exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <div className="flex h-12 justify-end">
              <button type="button" aria-label="Close menu" onClick={() => setOpen(false)} className="flex h-11 w-11 items-center justify-center"><X /></button>
            </div>
            <ul className="mt-10 flex flex-col gap-2">
              {navLinks.map((l, i) => (
                <motion.li key={l.href} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.06, duration: 0.6, ease: EASE }}>
                  <a href={l.href} onClick={() => setOpen(false)} className="display block py-2 text-[clamp(2.5rem,13vw,4.5rem)]">{l.label}</a>
                </motion.li>
              ))}
            </ul>
            <a href="#opening-soon" onClick={() => setOpen(false)} className="btn btn-red mt-auto">Join the list</a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
