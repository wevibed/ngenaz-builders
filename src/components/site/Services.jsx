import { ArrowUpRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import Reveal from "./Reveal";
import { WHATSAPP_PROJECT_LINK } from "@/lib/site";

const ROOFING_IMG = "https://media.base44.com/images/public/6ab396a02522124dc8a9aa2a/256c24261_generated_467277d1.jpg";
const CONSTRUCTION_IMG = "https://media.base44.com/images/public/6ab396a02522124dc8a9aa2a/6912cbf47_generated_03238ba7.jpg";

function ServiceBlock({ index, title, description, image, alt, span, tall }) {
  return (
    <Reveal className={span}>
      <a
        href={WHATSAPP_PROJECT_LINK}
        target="_blank"
        rel="noreferrer"
        className="group block relative overflow-hidden"
      >
        <div className={`relative w-full overflow-hidden ${tall ? "aspect-[4/5]" : "aspect-[4/5] lg:aspect-auto lg:h-full"}`}>
          <Image
            src={image}
            alt={alt}
            className="w-full h-full transition-transform duration-[1.2s] ease-out group-hover:scale-105"
            fittingType="fill"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
        </div>
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
          <span className="eyebrow text-background/70 mb-3">0{index}</span>
          <h3 className="display text-background text-4xl md:text-5xl lg:text-6xl">{title}</h3>
          <p className="mt-4 text-background/75 max-w-sm leading-relaxed">{description}</p>
          <span className="mt-6 inline-flex items-center gap-2 eyebrow text-background group-hover:text-accent transition-colors">
            Enquire
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </a>
    </Reveal>
  );
}

export default function Services() {
  return (
    <section id="services" className="bg-background">
      <div className="mx-auto max-w-[1600px] px-6 md:px-[8vw] py-20 md:py-32">
        <Reveal>
          <div className="flex items-end justify-between mb-12 md:mb-16">
            <p className="eyebrow text-accent">What we do</p>
            <div className="hidden md:block flex-1 mx-8 rhythm-line" />
            <p className="eyebrow text-muted-foreground">Services</p>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 lg:h-[640px]">
          <ServiceBlock
            index={1}
            title="Roofing"
            description="Professional roofing work for building projects and property requirements."
            image={ROOFING_IMG}
            alt="Close-up of charcoal grey corrugated metal roofing installation"
            span="lg:col-span-7"
            tall
          />
          <ServiceBlock
            index={2}
            title="Construction"
            description="Construction and building work delivered around the requirements of each project."
            image={CONSTRUCTION_IMG}
            alt="Modern house under construction with concrete, brick and timber"
            span="lg:col-span-5"
          />
        </div>
      </div>
    </section>
  );
}