import { useMemo, useState } from "react";
import { ArrowLeft, ArrowUpRight, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Image } from "@/components/ui/image";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import MobileCTA from "@/components/site/MobileCTA";
import Reveal from "@/components/site/Reveal";
import { PROJECTS, PROJECT_CATEGORIES } from "@/lib/projects";

export default function Projects() {
  const [filter, setFilter] = useState("All projects");
  const [active, setActive] = useState(null);
  const items = useMemo(() => filter === "All projects" ? PROJECTS : PROJECTS.filter((p) => p.category === filter), [filter]);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="pt-28 md:pt-36">
        <section className="mx-auto max-w-[1600px] px-6 md:px-[7vw] pb-12 md:pb-16">
          <Reveal>
            <Link to="/" className="eyebrow text-muted-foreground hover:text-foreground inline-flex items-center gap-2 mb-8">
              <ArrowLeft className="w-4 h-4" /> Back to home
            </Link>
            <p className="eyebrow text-accent mb-5">Project collection</p>
            <h1 className="display text-foreground text-5xl md:text-7xl lg:text-8xl max-w-5xl">See the work. Choose what you want to explore.</h1>
            <p className="mt-7 max-w-2xl text-muted-foreground text-lg leading-relaxed">
              Browse Ngenaz Builders' supplied project imagery by stage. The homepage only shows a selection; this page holds the full collection.
            </p>

            <div className="mt-10 flex flex-wrap gap-2">
              {PROJECT_CATEGORIES.map((category) => (
                <button key={category} type="button" onClick={() => setFilter(category)} className={`rounded-full border px-4 py-2 text-[.66rem] uppercase tracking-[.18em] font-semibold transition-all ${filter === category ? "bg-black text-white border-black" : "bg-white/50 border-black/10 text-foreground/70 hover:bg-white/80"}`}>
                  {category}
                </button>
              ))}
            </div>
          </Reveal>
        </section>

        <section className="mx-auto max-w-[1600px] px-6 md:px-[7vw] pb-28 md:pb-40">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {items.map((p, i) => (
              <Reveal key={p.name} delay={(i % 3) * .03}>
                <button type="button" onClick={() => setActive(p)} className="group relative block w-full overflow-hidden text-left">
                  <Image src={p.src} alt={`${p.category} — Ngenaz Builders project`} className="w-full aspect-[16/10] object-cover transition-transform duration-[1s] group-hover:scale-[1.04]" fittingType="fill" sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                    <div><span className="eyebrow text-white/60">{p.index}</span><p className="mt-1 text-white font-heading font-semibold">{p.category}</p></div>
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <MobileCTA />

      {active && (
        <div className="fixed inset-0 z-[80] bg-black/90 backdrop-blur-xl p-4 md:p-10 flex items-center justify-center" onClick={() => setActive(null)}>
          <button onClick={() => setActive(null)} className="absolute top-5 right-5 w-11 h-11 rounded-full border border-white/25 bg-white/10 backdrop-blur-md text-white flex items-center justify-center" aria-label="Close image"><X className="w-5 h-5" /></button>
          <img src={active.src} alt={`${active.category} — Ngenaz Builders`} className="max-h-[90vh] max-w-[94vw] object-contain" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </div>
  );
}
