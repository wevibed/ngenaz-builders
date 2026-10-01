import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { WHATSAPP_LINK, WHATSAPP_QUOTE_LINK } from "@/lib/site";

export default function Hero() {
  return (
    <section id="top" className="hero-section">
      <picture className="hero-media">
        <source media="(max-width: 700px)" srcSet="/images/hero-courtyard.png" />
        <img src="/images/hero-courtyard.png" alt="Ngenaz Builders residential construction project" />
      </picture>
      <div className="hero-shade" />
      <div className="hero-content">
        <motion.div initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.7}}>
          <div className="hero-kicker"><span>Construction</span><i></i><span>Roofing</span></div>
          <h1>We leave no<br/><span>stone unturned.</span></h1>
          <p>Construction and roofing work delivered with practical execution, careful workmanship and a focus on the finished result.</p>
          <div className="hero-actions">
            <a className="button button-light" href={WHATSAPP_QUOTE_LINK} target="_blank" rel="noreferrer">Request a Quote <ArrowUpRight size={17}/></a>
            <a className="button button-dark" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">WhatsApp Us <ArrowUpRight size={17}/></a>
          </div>
          <a href="#work" className="hero-scroll"><span><ArrowDown size={15}/></span> More of our work below</a>
        </motion.div>
      </div>
    </section>
  );
}
