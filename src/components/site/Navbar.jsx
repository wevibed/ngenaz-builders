import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { WHATSAPP_QUOTE_LINK } from "@/lib/site";

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
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav-wrap ${scrolled ? "nav-scrolled" : ""} ${open ? "nav-open" : ""}`}>
      <nav className="nav-inner">
        <a href="#top" className="brand-link" aria-label="Ngenaz Builders home">
          <img src="/images/ngenaz-logo.png" alt="Ngenaz Builders" className="brand-logo" />
        </a>
        <div className="desktop-nav">
          {LINKS.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
          <a className="nav-quote" href={WHATSAPP_QUOTE_LINK} target="_blank" rel="noreferrer">
            Request a Quote <ArrowUpRight size={15} />
          </a>
        </div>
        <button className="menu-button" onClick={() => setOpen(v => !v)} aria-label={open ? "Close menu" : "Open menu"}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {open && <div className="mobile-menu">
        {LINKS.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}
        <a href={WHATSAPP_QUOTE_LINK} target="_blank" rel="noreferrer" onClick={() => setOpen(false)} className="mobile-menu-cta">Request a Quote <ArrowUpRight size={16}/></a>
      </div>}
    </header>
  );
}
