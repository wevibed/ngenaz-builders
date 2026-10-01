import { ArrowUpRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import Reveal from "./Reveal";
import { WHATSAPP_LINK, WHATSAPP_QUOTE_LINK } from "@/lib/site";

export default function ProjectEnquiry() {
  return (
    <section className="relative overflow-hidden">
      <Image src="/ngenaz/work/IMG-20260929-WA0149.webp" alt="Ngenaz Builders construction project" className="absolute inset-0 w-full h-full" fittingType="fill" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,7,8,.84),rgba(5,7,8,.5),rgba(5,7,8,.22))]" />
      <div className="relative mx-auto max-w-[1600px] px-6 md:px-[7vw] py-28 md:py-40">
        <div className="max-w-4xl">
          <Reveal>
            <p className="eyebrow text-white/60 mb-6">Start a project</p>
            <h2 className="font-heading font-extrabold tracking-[-.05em] text-white text-5xl md:text-7xl lg:text-8xl leading-[.88]">
              Have a project
              <br />
              <span className="text-white/55">in mind?</span>
            </h2>
            <p className="mt-8 text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl">
              Tell Ngenaz Builders what you are building, roofing or planning, and start the conversation directly on WhatsApp.
            </p>
          </Reveal>
          <Reveal delay={.12}>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href={WHATSAPP_QUOTE_LINK} target="_blank" rel="noreferrer" className="glass-cta group">
                Request a quote <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="glass-cta glass-cta-dark group">
                WhatsApp us <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
