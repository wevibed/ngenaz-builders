import Reveal from "./Reveal";

const ITEMS = [
  ["Construction", "Residential & building work"],
  ["Roofing", "Built into the project"],
  ["Workmanship", "Focused on the finish"],
];

export default function CapabilityStrip() {
  return (
    <section className="relative -mt-1 z-20">
      <div className="mx-auto max-w-[1400px] px-4 md:px-[6vw]">
        <div className="glass-panel grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/15">
          {ITEMS.map(([title, text], i) => (
            <Reveal key={title} delay={i * .08}>
              <div className="px-6 md:px-9 py-7 md:py-8 flex items-center justify-between gap-6">
                <div>
                  <span className="eyebrow text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-2 font-heading font-bold text-xl md:text-2xl text-white">{title}</h3>
                </div>
                <p className="text-sm text-white/55 max-w-[150px] text-right">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
