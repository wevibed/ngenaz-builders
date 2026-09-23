import { ArrowUpRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import Reveal from "./Reveal";
import { WHATSAPP_PROJECT_LINK } from "@/lib/site";

const IMG = "https://media.base44.com/images/public/6ab396a02522124dc8a9aa2a/1cd1c7cce_generated_1bacc409.jpg";

export default function Introduction() {
  return (
    <section id="about" className="bg-background">
      <div className="mx-auto max-w-[1600px] px-6 md:px-[8vw] py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="eyebrow text-accent mb-6">Who we are</p>
              <h2 className="display text-foreground text-5xl md:text-6xl lg:text-7xl">
                Built for the long term.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-md">
                We provide construction and roofing services focused on practical execution, quality
                workmanship and finished results built for everyday use.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <a
                href={WHATSAPP_PROJECT_LINK}
                target="_blank"
                rel="noreferrer"
                className="group mt-10 inline-flex items-center gap-2 eyebrow text-foreground hover:text-accent transition-colors"
              >
                Talk to us about your project
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Reveal>
          </div>
          <div className="lg:col-span-6">
            <Reveal delay={0.12}>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={IMG}
                  alt="Construction site with brickwork and steel structure at golden hour"
                  className="w-full h-full"
                  fittingType="fill"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}