import { ArrowDown } from "lucide-react";

export default function Introduction() {
  return (
    <section id="about" className="image-intro">
      <img src="/images/hero-side.png" alt="Another view of a Ngenaz Builders residential project" />
      <div className="image-intro-shade" />
      <div className="image-intro-content">
        <div className="eyebrow">Ngenaz Builders</div>
        <h2>Built spaces.<br/>Real results.</h2>
        <p>This project reflects the kind of residential construction Ngenaz Builders delivers: substantial structure, considered finishes and a finished space made for everyday living.</p>
        <a href="#services" className="scroll-prompt"><span><ArrowDown size={15}/></span> What we do</a>
      </div>
    </section>
  );
}
