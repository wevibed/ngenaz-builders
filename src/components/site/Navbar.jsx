import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { WHATSAPP_QUOTE_LINK, WHATSAPP_LINK } from "@/lib/site";

const LINKS = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dark = scrolled || open;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
        dark ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-[1600px] px-6 md:px-[8vw] h-20 flex items-center justify-between">
        <a href="#top" className={`flex items-baseline gap-2 ${dark ? "text-foreground" : "text-background"}`}>
          <span className="font-heading font-bold text-xl tracking-tight">NGENAZ</span>
          <span className="eyebrow text-[0.6rem] opacity-70">BUILDERS</span>
        </a>

        <div className="hidden md:flex items-center gap-9">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`eyebrow text-[0.7rem] hover:text-accent transition-colors ${
                dark ? "text-foreground/80" : "text-background/80"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP_QUOTE_LINK}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 h-11 text-[0.7rem] uppercase tracking-[0.2em] font-semibold hover:bg-foreground hover:text-background transition-colors"
          >
            Request a Quote
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className={`md:hidden p-2 -mr-2 ${dark ? "text-foreground" : "text-background"}`}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-6 py-8 flex flex-col gap-1">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-heading text-2xl font-semibold py-3 border-b border-border/60"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground h-14 text-sm uppercase tracking-[0.2em] font-semibold"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}