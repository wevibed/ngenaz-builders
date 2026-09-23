import { WHATSAPP_LINK, WHATSAPP_NUMBER } from "@/lib/site";

const LINKS = [
  { label: "Construction", href: "#services" },
  { label: "Roofing", href: "#services" },
  { label: "Our Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-[1600px] px-6 md:px-[8vw] py-14">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <a href="#top" className="flex items-baseline gap-2">
            <span className="font-heading font-bold text-xl tracking-tight">NGENAZ</span>
            <span className="eyebrow text-[0.6rem] opacity-70">BUILDERS</span>
          </a>
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="eyebrow text-background/70 hover:text-accent transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="eyebrow text-background/70 hover:text-accent transition-colors"
          >
            {WHATSAPP_NUMBER}
          </a>
        </div>
        <div className="mt-10 pt-6 border-t border-background/15 flex flex-col md:flex-row md:justify-between gap-2">
          <p className="text-xs text-background/50">
            © {new Date().getFullYear()} Ngenaz Builders. Construction & Roofing.
          </p>
          <p className="text-xs text-background/50">Zimbabwe</p>
        </div>
      </div>
    </footer>
  );
}