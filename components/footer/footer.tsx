import { brand } from "@/data/brand";
import { social } from "@/data/social";
import { Logo } from "@/components/ui/logo";

/** Items render as links only when a real URL is configured. */
const items = [
  { label: "Instagram", href: social.instagramUrl },
  { label: "Contact", href: brand.contactEmail ? `mailto:${brand.contactEmail}` : "" },
  { label: "Privacy", href: brand.privacyUrl },
];

export function Footer() {
  return (
    <footer id="contact" className="px-5 py-16 md:px-10">
      <div className="wrap grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <Logo className="w-[260px] -ml-4" />
          <p className="label mt-2">{brand.descriptor}</p>
          <p className="label mt-1 opacity-60">{brand.city} · {brand.district} · {brand.state}</p>
          <p className="label mt-1 text-red">{brand.status}</p>
        </div>
        <ul className="flex flex-wrap gap-x-8 gap-y-2">
          {items.map((i) => (
            <li key={i.label}>
              {i.href ? <a href={i.href} className="label link-underline py-2 hover:text-red">{i.label}</a> : <span className="label opacity-40">{i.label}</span>}
            </li>
          ))}
        </ul>
      </div>
      <p className="wrap label mt-12 border-t border-ink/15 pt-4 opacity-60">© {brand.established} Suedex</p>
    </footer>
  );
}
