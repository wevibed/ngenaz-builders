const steps=[
 ['01','Talk','Tell us what you are building, roofing or improving.'],
 ['02','Plan','We clarify the scope, requirements and practical next steps.'],
 ['03','Build','Work is carried out with attention to workmanship and progress.'],
 ['04','Finish','The focus stays on the finished result and your project goals.'],
];
export default function Process(){return <section className="process-section"><div className="process-bg"><img src="/images/work/WA0100.webp" alt="Construction site"/><div/></div><div className="process-content"><div className="eyebrow">How we work</div><h2>A clear path<br/>from idea to build.</h2><div className="process-grid">{steps.map(([n,t,d])=><div className="process-step" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></div>)}</div></div></section>}
