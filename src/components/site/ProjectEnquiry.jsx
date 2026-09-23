import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { WHATSAPP_LINK, WHATSAPP_QUOTE_LINK } from "@/lib/site";

export default function ProjectEnquiry() {
  return (
    <section className="bg-accent text-accent-foreground">
      <div className="mx-auto max-w-[1600px] px-6 md:px-[8vw] py-24 md:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <Reveal>
              <p className="eyebrow text-foreground/70 mb-6">Start a project</p>
              <h2 className="display text-foreground text-5xl md:text-7xl lg:text-8xl">
                Have a project in mind?
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 text-foreground/80 text-lg leading-relaxed max-w-xl">
                Tell us what you're building, repairing or improving and speak directly with the team.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-4">
            <Reveal delay={0.16}>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-2 bg-foreground text-background px-7 h-16 text-[0.72rem] uppercase tracking-[0.2em] font-semibold hover:bg-background hover:text-foreground transition-colors"
              >
                WhatsApp Us
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Reveal>
            <Reveal delay={0.22}>
              <a
                href={WHATSAPP_QUOTE_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-foreground text-foreground px-7 h-16 text-[0.72rem] uppercase tracking-[0.2em] font-semibold hover:bg-foreground hover:text-background transition-colors"
              >
                Request a Quote
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}