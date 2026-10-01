import { ArrowUpRight, HardHat, House } from "lucide-react";
import { WHATSAPP_QUOTE_LINK } from "@/lib/site";

const services = [
  { title: "Construction", text: "Residential building work focused on solid execution, practical layouts and finished spaces.", image: "/images/work/WA0130.webp", icon: House },
  { title: "Roofing", text: "Roofing work integrated into the build with attention to durability, protection and the finished look.", image: "/images/work/WA0151.webp", icon: HardHat },
];

export default function Services() {
  return <section id="services" className="section-photo section-services">
    <div className="section-photo-bg"><img src="/images/work/WA0140.webp" alt="Ngenaz construction project"/><div/></div>
    <div className="section-photo-content">
      <div className="eyebrow">What we do</div>
      <h2>Construction &<br/>roofing.</h2>
      <div className="service-grid">
        {services.map(({title,text,image,icon:Icon}) => <article className="service-card" key={title}>
          <img src={image} alt={title}/><div className="service-card-shade"/><div className="service-card-content"><Icon size={24}/><h3>{title}</h3><p>{text}</p><a href={WHATSAPP_QUOTE_LINK} target="_blank" rel="noreferrer">Discuss your project <ArrowUpRight size={16}/></a></div>
        </article>)}
      </div>
    </div>
  </section>;
}
