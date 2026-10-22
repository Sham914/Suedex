import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Logo used as supplied. The JPG has a large ivory margin, so we crop with object-cover
 * (no stretching) and multiply-blend the ivory into the page background.
 */
export function Logo({ className, priority = false }: { className?: string; priority?: boolean }) {
  return (
    <div className={cn("relative aspect-[16/7] w-full overflow-hidden mix-blend-multiply", className)}>
      <Image src="/logo.png" alt="Suedex Men's Clothing, established 2026" fill priority={priority} sizes="(min-width:768px) 720px, 50vw" className="object-contain object-center" />
    </div>
  );
}
