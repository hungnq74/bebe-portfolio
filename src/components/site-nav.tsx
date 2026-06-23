import { ArrowUpRight } from "lucide-react";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export function SiteNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 pt-4 sm:px-6">
      <nav className="mx-auto flex h-16 max-w-[1180px] items-center justify-between rounded-full border border-ink/10 bg-cream/78 px-4 shadow-[0_16px_44px_rgba(55,25,24,0.12)] backdrop-blur-md sm:px-5">
        <a
          aria-label="Bebe creative portfolio home"
          className="leading-none"
          href="#top"
        >
          <span className="font-serif block text-xl font-black text-berry sm:text-2xl">
            bebe
          </span>
          <span className="block text-[9px] font-bold uppercase text-ink/62">
            Creative marketing
          </span>
        </a>

        <div className="hidden items-center gap-7 text-[11px] font-black uppercase text-ink/70 md:flex">
          {navItems.map((item) => (
            <a
              className="transition hover:text-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          className="inline-flex h-11 items-center gap-2 rounded-full bg-ink px-4 text-[11px] font-black uppercase text-cream shadow-[0_10px_26px_rgba(55,25,24,0.2)] transition hover:-translate-y-0.5 hover:bg-berry focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue"
          href="#contact"
        >
          Let&apos;s create
          <ArrowUpRight aria-hidden="true" size={14} strokeWidth={2.4} />
        </a>
      </nav>
    </header>
  );
}
