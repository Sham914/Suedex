"use client";
import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { subscribe } from "@/lib/subscribe";

type State = { status: "idle" | "loading" | "error" | "done"; message?: string; stored?: boolean };

export function NewsletterForm() {
  const id = useId();
  const [email, setEmail] = useState("");
  const [state, setState] = useState<State>({ status: "idle" });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) return setState({ status: "error", message: "Enter a valid email address." });
    setState({ status: "loading" });
    const res = await subscribe(email);
    setState(res.ok ? { status: "done", stored: res.stored } : { status: "error", message: res.error });
  }

  return (
    <div className="max-w-xl" aria-live="polite">
      <AnimatePresence mode="wait" initial={false}>
        {state.status === "done" ? (
          <motion.div key="ok" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-start gap-4 border border-ivory/30 p-6">
            <Check className="mt-1 shrink-0 text-red" aria-hidden />
            <div>
              <p className="display text-2xl">You&apos;re in.</p>
              <p className="mt-2 text-base opacity-80">
                {state.stored ? "We'll email you the day Suedex opens." : "Demo mode: nothing was stored. Connect an endpoint in lib/subscribe.ts to go live."}
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.form key="form" onSubmit={onSubmit} noValidate exit={{ opacity: 0 }}>
            <label htmlFor={id} className="label">Be the first to know when Suedex opens.</label>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <input id={id} type="email" autoComplete="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address"
                aria-invalid={state.status === "error"} aria-describedby={state.status === "error" ? `${id}-err` : undefined}
                className="h-12 flex-1 border border-ivory/40 bg-transparent px-4 text-lg text-ivory placeholder:text-ivory/50 focus:border-ivory" />
              <button type="submit" disabled={state.status === "loading"} className="btn btn-red disabled:opacity-60">{state.status === "loading" ? "Sending" : "Notify me"}</button>
            </div>
            {state.status === "error" && <p id={`${id}-err`} role="alert" className="mt-3 text-base text-champagne">{state.message}</p>}
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
