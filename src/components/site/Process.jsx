import { Image } from "@/components/ui/image";
import Reveal from "./Reveal";

const STEPS = [
  ["01", "Discuss", "Understand what you want to build and what the project requires."],
  ["02", "Assess", "Review the property, scope and practical requirements."],
  ["03", "Build", "Carry out the agreed construction or roofing work."],
  ["04", "Complete", "Finish the work and hand over the completed result."],
];

export default function Process() {
  return (
    <section className="relative overflow-hidden py-24 md:py-36">
      <div className="absolute inset-0">
        <Image src="/ngenaz/work/IMG-20260929-WA0123.webp" alt="" className="w-full h-full opacity-30" fittingType="fill" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(247,246,242,.94),rgba(247,246,242,.72),rgba(247,246,242,.86))]" />
      </div>
      <div className="relative mx-auto max-w-[1600px] px-6 md:px-[7vw]">
        <Reveal>
          <p className="eyebrow text-accent mb-5">How we work</p>
          <h2 className="display text-foreground text-5xl md:text-7xl">Simple process. Clear execution.</h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {STEPS.map(([no, title, text], i) => (
            <Reveal key={no} delay={i * .08}>
              <div className="glass-light h-full p-7 md:p-9">
                <span className="eyebrow text-accent">{no}</span>
                <h3 className="mt-12 font-heading font-bold text-3xl tracking-tight">{title}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
