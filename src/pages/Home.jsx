import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import CapabilityStrip from "@/components/site/CapabilityStrip";
import Introduction from "@/components/site/Introduction";
import Services from "@/components/site/Services";
import RoofingFeature from "@/components/site/RoofingFeature";
import OurWork from "@/components/site/OurWork";
import Process from "@/components/site/Process";
import WhyUs from "@/components/site/WhyUs";
import ProjectEnquiry from "@/components/site/ProjectEnquiry";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";
import MobileCTA from "@/components/site/MobileCTA";

export default function Home() {
  return (
    <div className="bg-background">
      <Navbar />
      <main>
        <Hero />
        <CapabilityStrip />
        <Introduction />
        <Services />
        <RoofingFeature />
        <OurWork />
        <Process />
        <WhyUs />
        <ProjectEnquiry />
        <Contact />
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
}