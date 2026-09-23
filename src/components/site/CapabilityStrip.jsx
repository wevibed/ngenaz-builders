import Reveal from "./Reveal";

const ITEMS = ["Roofing", "Construction", "Building"];

export default function CapabilityStrip() {
  return (
    <section className="border-y border-border bg-background">
      <div className="mx-auto max-w-[1600px] px-6 md:px-[8vw]">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
          {ITEMS.map((item, i) => (
            <Reveal key={item} delay={i * 0.08}>
              <div className="flex items-center justify-between py-8 md:py-10 group">
                <span className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">{item}</span>
                <span className="eyebrow text-muted-foreground">0{i + 1}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}