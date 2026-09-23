import Reveal from "./Reveal";

const STEPS = [
  { no: "01", title: "Discuss", text: "Understand the client's requirements." },
  { no: "02", title: "Assess", text: "Review the property or project requirements." },
  { no: "03", title: "Build", text: "Carry out the agreed construction or roofing work." },
  { no: "04", title: "Complete", text: "Deliver the finished project." },
];

export default function Process() {
  return (
    <section className="bg-secondary/40 border-y border-border">
      <div className="mx-auto max-w-[1600px] px-6 md:px-[8vw] py-20 md:py-32">
        <Reveal>
          <p className="eyebrow text-accent mb-6">How we work</p>
          <h2 className="display text-foreground text-5xl md:text-7xl">The process.</h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-4 gap-px bg-border">
          {STEPS.map((s, i) => (
            <Reveal key={s.no} delay={i * 0.08}>
              <div className="bg-background h-full p-8 md:p-10 flex flex-col">
                <span className="eyebrow text-accent mb-8">{s.no}</span>
                <h3 className="font-heading text-3xl font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}