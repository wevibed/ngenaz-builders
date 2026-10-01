import { WHATSAPP_LINK, WHATSAPP_NUMBER } from "@/lib/site";

const LINKS = [
  ["Services", "#services"], ["Our Work", "#work"], ["About", "#project-intro"], ["Contact", "#contact"]
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src="/ngenaz/hero-side.png" alt="" className="w-full h-full object-cover grayscale opacity-30" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,7,8,.94),rgba(5,7,8,.78))]" />
      </div>
      <div className="relative mx-auto max-w-[1600px] px-6 md:px-[7vw] py-14 md:py-20 text-white">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div>
            <a href="#top" className="font-heading font-extrabold tracking-[-.04em] text-2xl">NGENAZ</a>
            <p className="eyebrow text-white/45 mt-2">Builders · Zimbabwe</p>
          </div>
          <nav className="flex flex-wrap gap-x-7 gap-y-3">
            {LINKS.map(([label, href]) => <a key={label} href={href} className="eyebrow text-white/60 hover:text-white transition-colors">{label}</a>)}
          </nav>
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="eyebrow text-white/60 hover:text-white transition-colors">{WHATSAPP_NUMBER}</a>
        </div>
        <div className="mt-12 pt-6 border-t border-white/15 flex flex-col sm:flex-row sm:justify-between gap-2">
          <p className="text-xs text-white/40">© {new Date().getFullYear()} Ngenaz Builders. Construction & Roofing.</p>
          <p className="text-xs text-white/40">Built with WeVibed</p>
        </div>
      </div>
    </footer>
  );
}
