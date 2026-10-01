import { ArrowUpRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import Reveal from "./Reveal";
import { WHATSAPP_PROJECT_LINK } from "@/lib/site";

export default function RoofingFeature() {
  return (
    <section className="relative min-h-[720px] overflow-hidden">
      <Image
        src="/ngenaz/work/IMG-20260929-WA0100.webp"
        alt="Ngenaz Builders roofing and construction project"
        className="absolute inset-0 w-full h-full"
        fittingType="fill"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,7,8,.82),rgba(5,7,8,.35)_60%,rgba(5,7,8,.1))]" />
      <div className="relative mx-auto max-w-[1600px] px-6 md:px-[7vw] py-28 md:py-40">
        <Reveal>
          <p className="eyebrow text-white/65 mb-6">Roofing</p>
          <h2 className="font-heading font-extrabold tracking-[-.05em] text-white text-5xl md:text-7xl lg:text-8xl max-w-4xl leading-[.9]">
            The roof is part
            <br />
            <span className="text-white/60">of the build.</span>
          </h2>
          <p className="mt-8 max-w-xl text-white/72 text-lg leading-relaxed">
            Roofing is treated as part of the finished building — functional, durable and visually consistent with the project.
          </p>
          <a
            href={WHATSAPP_PROJECT_LINK}
            target="_blank"
            rel="noreferrer"
            className="glass-cta mt-9 group"
          >
            Discuss roofing
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
