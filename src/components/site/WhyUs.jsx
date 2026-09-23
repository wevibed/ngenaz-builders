import Reveal from "./Reveal";

const POINTS = [
  { title: "Quality Workmanship", text: "Focused on producing a strong finished result." },
  { title: "Project Focus", text: "Understanding what the project actually requires." },
  { title: "Professional Approach", text: "Clear communication and organized execution." },
  { title: "Built to Last", text: "Construction and roofing designed around long-term use." },
];

export default function WhyUs() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-[1600px] px-6 md:px-[8vw] py-20 md:py-32">
        <Reveal>
          <p className="eyebrow text-accent mb-6">Why work with us</p>
          <h2 className="display text-foreground text-5xl md:text-7xl max-w-3xl">
            A standard that holds up.
          </h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {POINTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="border-t border-foreground pt-6 h-full">
                <span className="eyebrow text-muted-foreground">0{i + 1}</span>
                <h3 className="mt-5 font-heading text-2xl font-semibold tracking-tight leading-tight">
                  {p.title}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}