import { useMemo, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Image } from "@/components/ui/image";
import Reveal from "./Reveal";
import { PROJECTS, PROJECT_CATEGORIES } from "@/lib/projects";

export default function OurWork() {
  const [active, setActive] = useState(null);
  const [filter, setFilter] = useState("All projects");

  const featured = useMemo(() => {
    const pool = filter === "All projects" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);
    return pool.slice(0, 6);
  }, [filter]);

  return (
    <section id="work" className="relative overflow-hidden py-24 md:py-36">
      <div className="absolute inset-0 site-texture opacity-70" />
      <div className="relative mx-auto max-w-[1600px] px-6 md:px-[7vw]">
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <p className="eyebrow text-accent mb-5">Our work</p>
              <h2 className="display text-foreground text-5xl md:text-7xl lg:text-8xl">Built in the real world.</h2>
              <p className="mt-6 max-w-2xl text-muted-foreground text-lg leading-relaxed">
                Explore selected residential builds, construction progress and structural work supplied by Ngenaz Builders.
              </p>
            </div>
            <Link to="/projects" className="glass-cta glass-cta-dark !bg-black/80 !text-white !border-black/10 self-start lg:self-auto group">
              View all projects
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {PROJECT_CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setFilter(category)}
                className={`rounded-full border px-4 py-2 text-[.66rem] uppercase tracking-[.18em] font-semibold transition-all ${
                  filter === category
                    ? "bg-black text-white border-black"
                    : "bg-white/45 border-black/10 text-foreground/70 hover:bg-white/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {featured.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * .04}>
              <button
                type="button"
                onClick={() => setActive(p)}
                className="group relative block w-full overflow-hidden rounded-[2px] text-left"
              >
                <Image
                  src={p.src}
                  alt={`${p.category} — Ngenaz Builders project`}
                  className={`w-full object-cover transition-transform duration-[1s] group-hover:scale-[1.045] ${p.tall ? "aspect-[4/5]" : "aspect-[16/10]"}`}
                  fittingType="fill"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between gap-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div>
                    <span className="eyebrow text-white/60">{p.index}</span>
                    <p className="mt-1 text-white font-heading font-semibold">{p.category}</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/projects" className="eyebrow text-foreground/70 hover:text-foreground transition-colors inline-flex items-center gap-3">
            Browse the complete project collection <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {active && (
        <div className="fixed inset-0 z-[80] bg-black/85 backdrop-blur-xl p-4 md:p-10 flex items-center justify-center" onClick={() => setActive(null)}>
          <button onClick={() => setActive(null)} className="absolute top-5 right-5 w-11 h-11 rounded-full border border-white/25 bg-white/10 backdrop-blur-md text-white flex items-center justify-center" aria-label="Close image">
            <X className="w-5 h-5" />
          </button>
          <img src={active.src} alt={`${active.category} — Ngenaz Builders`} className="max-h-[88vh] max-w-[94vw] object-contain" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  );
}
