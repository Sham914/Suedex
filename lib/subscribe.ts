export type SubscribeResult = { ok: true; stored: boolean } | { ok: false; error: string };

/**
 * Connect a real backend via NEXT_PUBLIC_NOTIFY_ENDPOINT (expects POST { email }).
 * Without it we run in demo mode and store nothing.
 */
export async function subscribe(email: string): Promise<SubscribeResult> {
  const endpoint = process.env.NEXT_PUBLIC_NOTIFY_ENDPOINT;
  if (!endpoint) {
    await new Promise((r) => setTimeout(r, 600));
    return { ok: true, stored: false };
  }
  try {
    const res = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email }) });
    return res.ok ? { ok: true, stored: true } : { ok: false, error: "Could not save your email. Try again." };
  } catch {
    return { ok: false, error: "Network error. Check your connection and try again." };
  }
}
