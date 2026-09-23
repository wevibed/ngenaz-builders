import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { WHATSAPP_LINK, WHATSAPP_NUMBER } from "@/lib/site";

export default function Contact() {
  return (
    <section id="contact" className="bg-background">
      <div className="mx-auto max-w-[1600px] px-6 md:px-[8vw] py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow text-accent mb-6">Contact</p>
              <h2 className="display text-foreground text-5xl md:text-6xl">Get in touch.</h2>
              <p className="mt-6 text-muted-foreground leading-relaxed max-w-sm">
                Reach us directly on WhatsApp — the fastest way to start a conversation about your
                project.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-7 flex items-end">
            <Reveal delay={0.12}>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="group block w-full border-t border-foreground pt-8"
              >
                <p className="eyebrow text-muted-foreground mb-4">WhatsApp</p>
                <div className="flex items-center justify-between gap-6">
                  <span className="display text-foreground text-4xl md:text-6xl lg:text-7xl">
                    {WHATSAPP_NUMBER}
                  </span>
                  <ArrowUpRight className="w-8 h-8 text-accent transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0" />
                </div>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}