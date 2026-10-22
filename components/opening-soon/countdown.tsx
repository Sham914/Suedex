"use client";
import { useEffect, useState } from "react";

const units = [["Days", 86400000], ["Hours", 3600000], ["Minutes", 60000], ["Seconds", 1000]] as const;

/** Renders nothing SSR-side to avoid hydration mismatch; ticks once mounted. */
export function Countdown({ target }: { target: string }) {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const end = new Date(target).getTime();
  if (now === null || Number.isNaN(end)) return <div className="h-20" aria-hidden />;
  let rest = Math.max(0, end - now);
  return (
    <dl className="flex gap-6 md:gap-10" aria-label="Time until opening">
      {units.map(([label, ms]) => {
        const v = Math.floor(rest / ms);
        rest -= v * ms;
        return (
          <div key={label}>
            <dd className="display text-[clamp(2.2rem,7vw,5rem)] tabular-nums">{String(v).padStart(2, "0")}</dd>
            <dt className="label opacity-60">{label}</dt>
          </div>
        );
      })}
    </dl>
  );
}
