import { Image } from "@/components/ui/image";
import Reveal from "./Reveal";

const PROJECTS = [
  {
    no: "01",
    label: "Roofing Project",
    img: "https://media.base44.com/images/public/6ab396a02522124dc8a9aa2a/c972befe7_generated_7bb1eef6.jpg",
    alt: "Completed modern Zimbabwean residential building with a bold dark roof",
    cls: "md:col-span-7 aspect-[16/11]",
  },
  {
    no: "02",
    label: "Construction Project",
    img: "https://media.base44.com/images/public/6ab396a02522124dc8a9aa2a/63d781f49_generated_ddaa7a65.jpg",
    alt: "Finished contemporary house with a bold dark roof in dry African landscape",
    cls: "md:col-span-5 aspect-[4/3]",
  },
  {
    no: "03",
    label: "Building Project",
    img: "https://media.base44.com/images/public/6ab396a02522124dc8a9aa2a/3d41f7d56_generated_fe5e9877.jpg",
    alt: "Architectural detail of a roof edge and gutter join, metal meeting rendered wall",
    cls: "md:col-span-5 aspect-square",
  },
  {
    no: "04",
    label: "Roofing Project",
    img: "https://media.base44.com/images/public/6ab396a02522124dc8a9aa2a/bcb78f7c1_generated_b48efc44.jpg",
    alt: "Roofing installation in progress with corrugated metal sheets on a house",
    cls: "md:col-span-7 aspect-[16/11]",
  },
];

export default function OurWork() {
  return (
    <section id="work" className="bg-background">
      <div className="mx-auto max-w-[1600px] px-6 md:px-[8vw] py-20 md:py-32">
        <Reveal>
          <div className="flex items-end justify-between mb-4">
            <p className="eyebrow text-accent">Our work</p>
            <p className="eyebrow text-muted-foreground">Projects</p>
          </div>
          <h2 className="display text-foreground text-5xl md:text-7xl lg:text-8xl">Our work</h2>
          <p className="mt-6 text-lg text-muted-foreground">A look at what we build.</p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.no} className={p.cls} delay={(i % 2) * 0.1}>
              <div className="group relative w-full h-full overflow-hidden">
                <Image
                  src={p.img}
                  alt={p.alt}
                  className="w-full h-full transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                  fittingType="fill"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-5 left-5 flex flex-col">
                  <span className="eyebrow text-background drop-shadow-md">{p.no}</span>
                  <span className="eyebrow text-background/90 drop-shadow-md mt-1">{p.label}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}