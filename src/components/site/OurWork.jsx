import { useState } from "react";
import { X, ArrowUpRight } from "lucide-react";
import { WORK_IMAGES } from "@/lib/site";

export default function OurWork() {
  const [active, setActive] = useState(null);
  return <section id="work" className="work-section">
    <div className="work-heading">
      <div><div className="eyebrow">Our work</div><h2>Projects at<br/><span>every stage.</span></h2></div>
      <p>From foundations and brickwork to finished homes, the gallery shows real construction work supplied by Ngenaz Builders.</p>
    </div>
    <div className="work-grid">
      {WORK_IMAGES.map((src,i) => <button className={`work-tile tile-${i%7}`} key={src} onClick={() => setActive(src)} aria-label={`View project image ${i+1}`}><img src={src} alt={`Ngenaz Builders project ${i+1}`} loading={i<8?'eager':'lazy'}/><span>{String(i+1).padStart(2,'0')}</span></button>)}
    </div>
    {active && <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setActive(null)}><button className="lightbox-close" onClick={() => setActive(null)}><X/></button><img src={active} alt="Ngenaz Builders project enlarged" onClick={e=>e.stopPropagation()}/></div>}
  </section>;
}
