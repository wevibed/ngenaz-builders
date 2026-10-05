import { ArrowUpRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import Reveal from "./Reveal";
import { WHATSAPP_PROJECT_LINK } from "@/lib/site";

const SERVICES = [
  {
    index: "01",
    title: "Construction",
    description: "Residential and building work shaped around the requirements of each project.",
    image: "/ngenaz/work/IMG-20260929-WA0131.webp",
  },
  {
    index: "02",
    title: "Roofing",
    description: "Roofing work integrated into the build, from structure through to the finished roof.",
    image: "/ngenaz/work/IMG-20260929-WA0113.webp",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-36 overflow-hidden">
      <div className="absolute inset-0 site-grid opacity-60" />
      <div className="relative mx-auto max-w-[1600px] px-6 md:px-[7vw]">
        <Reveal>
          <div className="flex items-end justify-between gap-8 mb-12">
            <div>
              <p className="eyebrow text-accent mb-5">What we do</p>
              <h2 className="display text-foreground text-5xl md:text-7xl">Construction & roofing.</h2>
            </div>
            <p className="eyebrow text-muted-foreground hidden md:block">02 core services</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {SERVICES.map((service, i) => (
            <Reveal key={service.index} delay={i * .1}>
              <a
                href={WHATSAPP_PROJECT_LINK}
                target="_blank"
                rel="noreferrer"
                className="group relative block overflow-hidden min-h-[520px] md:min-h-[650px]"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full transition-transform duration-[1.2s] group-hover:scale-105"
                  fittingType="fill"
                  sizes="(min-width:1024px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/5" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/15" />
                <div className="relative h-full min-h-[520px] md:min-h-[650px] p-7 md:p-10 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="glass-pill text-white/90">{service.index}</span>
                    <ArrowUpRight className="w-6 h-6 text-white/75 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                  <div>
                    <h3 className="font-heading font-extrabold tracking-[-.04em] text-white text-[2.5rem] sm:text-5xl md:text-7xl">{service.title}</h3>
                    <p className="mt-5 max-w-md text-white/75 text-base md:text-lg leading-relaxed">{service.description}</p>
                    <span className="mt-7 inline-flex items-center gap-2 eyebrow text-white/90">Discuss a project</span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
