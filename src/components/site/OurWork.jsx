import { useMemo, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { Image } from "@/components/ui/image";
import Reveal from "./Reveal";

const PROJECTS = [
  "IMG-20260929-WA0091","IMG-20260929-WA0092","IMG-20260929-WA0093","IMG-20260929-WA0094",
  "IMG-20260929-WA0095","IMG-20260929-WA0096","IMG-20260929-WA0097","IMG-20260929-WA0098",
  "IMG-20260929-WA0100","IMG-20260929-WA0101","IMG-20260929-WA0102","IMG-20260929-WA0103",
  "IMG-20260929-WA0104","IMG-20260929-WA0105","IMG-20260929-WA0106","IMG-20260929-WA0107",
  "IMG-20260929-WA0108","IMG-20260929-WA0109","IMG-20260929-WA0110","IMG-20260929-WA0111",
  "IMG-20260929-WA0112","IMG-20260929-WA0113","IMG-20260929-WA0114","IMG-20260929-WA0115",
  "IMG-20260929-WA0116","IMG-20260929-WA0118","IMG-20260929-WA0119","IMG-20260929-WA0120",
  "IMG-20260929-WA0122","IMG-20260929-WA0123","IMG-20260929-WA0124","IMG-20260929-WA0125",
  "IMG-20260929-WA0126","IMG-20260929-WA0127","IMG-20260929-WA0128","IMG-20260929-WA0129",
  "IMG-20260929-WA0130","IMG-20260929-WA0131","IMG-20260929-WA0132","IMG-20260929-WA0133",
  "IMG-20260929-WA0134","IMG-20260929-WA0135","IMG-20260929-WA0136","IMG-20260929-WA0137",
  "IMG-20260929-WA0138","IMG-20260929-WA0139","IMG-20260929-WA0140","IMG-20260929-WA0141",
  "IMG-20260929-WA0143","IMG-20260929-WA0144","IMG-20260929-WA0145","IMG-20260929-WA0146",
  "IMG-20260929-WA0147","IMG-20260929-WA0148","IMG-20260929-WA0149","IMG-20260929-WA0150",
  "IMG-20260929-WA0151","IMG-20260929-WA0152"
];

const labels = ["Residential build", "Construction", "Roofing", "Building work"];

export default function OurWork() {
  const [active, setActive] = useState(null);
  const items = useMemo(
    () => PROJECTS.map((name, i) => ({
      name,
      src: `/ngenaz/work/${name}.webp`,
      label: labels[i % labels.length],
      index: String(i + 1).padStart(2, "0"),
      tall: i % 7 === 0 || i % 11 === 0
    })),
    []
  );

  return (
    <section id="work" className="relative overflow-hidden py-24 md:py-36">
      <div className="absolute inset-0 site-texture opacity-70" />
      <div className="relative mx-auto max-w-[1600px] px-6 md:px-[7vw]">
        <Reveal>
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow text-accent mb-5">Our work</p>
              <h2 className="display text-foreground text-5xl md:text-7xl lg:text-8xl">Built in the real world.</h2>
            </div>
            <span className="eyebrow text-muted-foreground hidden md:block">Selected project imagery</span>
          </div>
          <p className="mt-6 max-w-2xl text-muted-foreground text-lg leading-relaxed">
            A visual record of residential construction, building stages and finished work supplied by Ngenaz Builders.
          </p>
        </Reveal>

        <div className="mt-14 columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6 [column-fill:_balance]">
          {items.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * .04} className="mb-4 md:mb-6 break-inside-avoid">
              <button
                type="button"
                onClick={() => setActive(p)}
                className="group relative block w-full overflow-hidden rounded-[2px] text-left"
              >
                <Image
                  src={p.src}
                  alt={`${p.label} — Ngenaz Builders project`}
                  className={`w-full object-cover transition-transform duration-[1s] group-hover:scale-[1.045] ${p.tall ? "aspect-[4/5]" : "aspect-[16/10]"}`}
                  fittingType="fill"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between gap-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div>
                    <span className="eyebrow text-white/60">{p.index}</span>
                    <p className="mt-1 text-white font-heading font-semibold">{p.label}</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[80] bg-black/85 backdrop-blur-xl p-4 md:p-10 flex items-center justify-center"
          onClick={() => setActive(null)}
        >
          <button
            onClick={() => setActive(null)}
            className="absolute top-5 right-5 w-11 h-11 rounded-full border border-white/25 bg-white/10 backdrop-blur-md text-white flex items-center justify-center"
            aria-label="Close image"
          >
            <X className="w-5 h-5" />
          </button>
          <img
            src={active.src}
            alt={`${active.label} — Ngenaz Builders`}
            className="max-h-[88vh] max-w-[94vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
