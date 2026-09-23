import { ArrowUpRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import Reveal from "./Reveal";
import { WHATSAPP_PROJECT_LINK } from "@/lib/site";

const IMG = "https://media.base44.com/images/public/6ab396a02522124dc8a9aa2a/618649287_generated_30e61e53.jpg";

export default function RoofingFeature() {
  return (
    <section className="bg-foreground text-background">
      <div className="relative w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={IMG}
            alt="Newly installed dark metal roof against a clear African sky"
            className="w-full h-full"
            fittingType="fill"
          />
          <div className="absolute inset-0 bg-foreground/70" />
        </div>
        <div className="relative mx-auto max-w-[1600px] px-6 md:px-[8vw] py-24 md:py-36">
          <Reveal>
            <p className="eyebrow text-accent mb-6">Roofing</p>
            <h2 className="display text-background text-5xl md:text-7xl lg:text-8xl max-w-4xl">
              The roof is part of the build.
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 max-w-4xl">
            <Reveal delay={0.1}>
              <div className="border-t border-background/30 pt-6">
                <p className="eyebrow text-accent mb-3">Functional</p>
                <p className="text-background/80 leading-relaxed">
                  Protection from weather and everyday exposure.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="border-t border-background/30 pt-6">
                <p className="eyebrow text-accent mb-3">Architectural</p>
                <p className="text-background/80 leading-relaxed">
                  A major part of how the finished building looks.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.24}>
            <a
              href={WHATSAPP_PROJECT_LINK}
              target="_blank"
              rel="noreferrer"
              className="group mt-14 inline-flex items-center gap-2 bg-accent text-accent-foreground px-7 h-14 text-[0.72rem] uppercase tracking-[0.2em] font-semibold hover:bg-background hover:text-foreground transition-colors"
            >
              Talk to us about your project
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}