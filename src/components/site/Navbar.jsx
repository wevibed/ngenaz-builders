import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { WHATSAPP_QUOTE_LINK } from "@/lib/site";

const LINKS = [["Home", "/", "#top"], ["Services", "/", "#services"], ["Our Work", "/projects", ""], ["About", "/", "#project-intro"], ["Contact", "/", "#contact"]];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled || open ? "px-3 md:px-6 pt-3" : "px-0 pt-0"}`}>
      <nav className={`mx-auto max-w-[1500px] h-[72px] px-5 md:px-7 flex items-center justify-between transition-all duration-500 ${scrolled || open ? "glass-dark rounded-full" : ""}`}>
        <Link to="/" className="block shrink-0" aria-label="Ngenaz Builders home">
          <img src="/ngenaz/ngenaz-logo.png" alt="Ngenaz Builders" className="h-11 md:h-12 w-auto max-w-[190px] object-contain" />
        </Link>

        <div className="hidden md:flex items-center gap-7">
          {LINKS.map(([label, path, anchor]) => (
            path === "/projects" ? (
              <Link key={label} to={path} className="eyebrow text-[.65rem] text-white/70 hover:text-white transition-colors">{label}</Link>
            ) : (
            <a key={label} href={`${path}${anchor}` } className="eyebrow text-[.65rem] text-white/70 hover:text-white transition-colors">{label}</a>
            )
          ))}
          <a href={WHATSAPP_QUOTE_LINK} target="_blank" rel="noreferrer" className="glass-cta !h-11 !px-5 !text-[.62rem]">
            Request a quote <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <button onClick={() => setOpen(v => !v)} aria-label="Toggle menu" className="md:hidden text-white w-11 h-11 rounded-full border border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden mt-2 mx-3 glass-dark rounded-3xl p-5">
          <div className="flex flex-col">
            {LINKS.map(([label, path, anchor]) => (
              path === "/projects" ? (
                <Link key={label} to={path} onClick={() => setOpen(false)} className="py-4 border-b border-white/10 font-heading font-semibold text-xl text-white">{label}</Link>
              ) : (
              <a key={label} href={`${path}${anchor}`} onClick={() => setOpen(false)} className="py-4 border-b border-white/10 font-heading font-semibold text-xl text-white">{label}</a>
              )
            ))}
            <a href={WHATSAPP_QUOTE_LINK} target="_blank" rel="noreferrer" className="glass-cta mt-5 justify-center">Request a quote</a>
          </div>
        </div>
      )}
    </header>
  );
}
