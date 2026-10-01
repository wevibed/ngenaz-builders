import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import Introduction from "@/components/site/Introduction";
import Services from "@/components/site/Services";
import OurWork from "@/components/site/OurWork";
import Process from "@/components/site/Process";
import WhyUs from "@/components/site/WhyUs";
import ProjectEnquiry from "@/components/site/ProjectEnquiry";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";
import FloatingWhatsApp from "@/components/site/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <Hero />
        <Introduction />
        <Services />
        <OurWork />
        <Process />
        <WhyUs />
        <ProjectEnquiry />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
