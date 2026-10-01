import { ArrowUpRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import Reveal from "./Reveal";
import { WHATSAPP_LINK, WHATSAPP_NUMBER } from "@/lib/site";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <Image src="/ngenaz/work/IMG-20260929-WA0106.webp" alt="Ngenaz Builders completed construction work" className="absolute inset-0 w-full h-full" fittingType="fill" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,8,9,.86),rgba(6,8,9,.58),rgba(6,8,9,.24))]" />
      <div className="relative mx-auto max-w-[1600px] px-6 md:px-[7vw] py-24 md:py-32">
        <Reveal>
          <p className="eyebrow text-white/60 mb-5">Contact</p>
          <h2 className="font-heading font-extrabold tracking-[-.05em] text-white text-5xl md:text-7xl max-w-3xl leading-[.9]">
            Let’s talk about
            <br />
            <span className="text-white/55">your project.</span>
          </h2>
        </Reveal>
        <Reveal delay={.1}>
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="mt-12 glass-panel inline-flex items-center gap-7 px-6 md:px-8 py-5 text-white group">
            <span>
              <span className="eyebrow text-white/45 block mb-2">WhatsApp</span>
              <span className="font-heading font-bold text-2xl md:text-4xl tracking-tight">{WHATSAPP_NUMBER}</span>
            </span>
            <ArrowUpRight className="w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
