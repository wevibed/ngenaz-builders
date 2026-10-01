import { ArrowDownRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import Reveal from "./Reveal";

export default function Introduction() {
  return (
    <section id="project-intro" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/ngenaz/hero-side.png"
          alt="Ngenaz Builders residential project, side elevation"
          className="w-full h-full"
          fittingType="fill"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,9,10,.82),rgba(7,9,10,.48)_48%,rgba(7,9,10,.16))]" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-6 md:px-[7vw] py-28 md:py-44">
        <Reveal>
          <div className="max-w-3xl">
            <p className="eyebrow text-white/70 mb-6">The project</p>
            <h2 className="font-heading font-extrabold tracking-[-.05em] text-white text-5xl md:text-7xl lg:text-8xl leading-[.9]">
              Built spaces.
              <br />
              <span className="text-white/65">Real results.</span>
            </h2>
            <p className="mt-8 text-white/75 text-lg md:text-xl leading-relaxed max-w-2xl">
              This project reflects the kind of residential construction Ngenaz Builders delivers:
              substantial structure, considered finishes and a finished space made for everyday living.
            </p>
            <div className="mt-10 flex items-center gap-3 text-white/80">
              <span className="w-11 h-11 rounded-full border border-white/35 backdrop-blur-md flex items-center justify-center">
                <ArrowDownRight className="w-4 h-4" />
              </span>
              <span className="eyebrow">More of our work below</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
