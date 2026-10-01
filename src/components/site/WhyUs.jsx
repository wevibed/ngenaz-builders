import { Image } from "@/components/ui/image";
import Reveal from "./Reveal";

const POINTS = [
  ["Quality workmanship", "A focus on a strong, finished result."],
  ["Project focus", "Work shaped around the actual requirements."],
  ["Professional approach", "Clear communication and organised execution."],
  ["Built to last", "Construction and roofing considered for long-term use."],
];

export default function WhyUs() {
  return (
    <section className="relative overflow-hidden min-h-[760px]">
      <Image src="/ngenaz/work/IMG-20260929-WA0138.webp" alt="Ngenaz Builders project" className="absolute inset-0 w-full h-full" fittingType="fill" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,6,7,.9),rgba(4,6,7,.62)_55%,rgba(4,6,7,.2))]" />
      <div className="relative mx-auto max-w-[1600px] px-6 md:px-[7vw] py-28 md:py-40">
        <Reveal>
          <p className="eyebrow text-white/60 mb-6">Why Ngenaz</p>
          <h2 className="font-heading font-extrabold tracking-[-.05em] text-white text-5xl md:text-7xl max-w-3xl leading-[.92]">
            A standard that
            <br />
            <span className="text-white/55">holds up.</span>
          </h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl">
          {POINTS.map(([title, text], i) => (
            <Reveal key={title} delay={i * .08}>
              <div className="glass-dark p-7 md:p-8">
                <span className="eyebrow text-accent">{String(i + 1).padStart(2,"0")}</span>
                <h3 className="mt-7 font-heading font-bold text-2xl text-white">{title}</h3>
                <p className="mt-3 text-white/60 leading-relaxed">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
