export const brand = {
  name: "Suedex",
  descriptor: "Men's Clothing",
  established: 2026,
  city: "Thodupuzha",
  district: "Idukki",
  state: "Kerala",
  country: "India",
  status: "Opening Soon",
  tagline: "", // TODO: add tagline when available
  /** ISO string, e.g. "2026-12-01T10:00:00+05:30". Leave null until confirmed: UI shows COMING SOON. */
  launchDate: null as string | null,
  contactEmail: "", // TODO
  privacyUrl: "", // TODO
} as const;

export const siteDescription =
  "Suedex is a premium men's clothing brand coming soon to Thodupuzha, Idukki, Kerala.";
