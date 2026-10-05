import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import { WHATSAPP_QUOTE_LINK, WHATSAPP_LINK } from "@/lib/site";

const HERO = "/ngenaz/hero-courtyard.webp";
const HERO_SMALL = "/ngenaz/hero-courtyard-640.webp";
const HERO_SRCSET = "/ngenaz/hero-courtyard-640.webp 640w, /ngenaz/hero-courtyard-1024.webp 1024w, /ngenaz/hero-courtyard.webp 1600w";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[720px] h-[100svh] w-full overflow-hidden">
      <div className="absolute inset-0 md:hidden overflow-hidden bg-black">
        <img src={HERO_SMALL} alt="" aria-hidden="true" decoding="async" className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-45" />
        <img src={HERO} srcSet={HERO_SRCSET} sizes="100vw" width="1600" height="718" alt="Ngenaz Builders residential construction project" fetchPriority="high" decoding="async" className="absolute inset-0 w-full h-full object-contain" />
      </div>

      <motion.div
        className="absolute inset-0 hidden md:block"
        initial={{ scale: 1.02 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src={HERO}
          sizes="100vw"
          loading="lazy"
          alt="Ngenaz Builders residential construction project"
          className="w-full h-full object-cover"
          fittingType="fill"
        />
      </motion.div>

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,7,8,.68)_0%,rgba(5,7,8,.34)_48%,rgba(5,7,8,.08)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(5,7,8,.70)_0%,transparent_50%,rgba(5,7,8,.14)_100%)]" />

      <div className="relative z-10 mx-auto max-w-[1600px] h-full px-6 md:px-[7vw] flex items-end pb-16 md:pb-24">
        <div className="max-w-5xl">
          <motion.div
            className="flex items-center gap-4 mb-6"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .7, delay: .15 }}
          >
            <span className="h-px w-12 bg-white/55" />
            <span className="eyebrow text-white/75">Construction · Roofing</span>
          </motion.div>

          <motion.h1
            className="font-heading font-extrabold tracking-[-.055em] text-white text-[clamp(3rem,8.5vw,9rem)] leading-[.86] max-w-5xl"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .95, delay: .25, ease: [0.22,1,0.36,1] }}
          >
            We leave no
            <br />
            <span className="text-white/70">stone unturned.</span>
          </motion.h1>

          <motion.p
            className="mt-8 max-w-2xl text-white/80 text-base md:text-lg leading-relaxed"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .7, delay: .48 }}
          >
            Construction and roofing work delivered with practical execution,
            careful workmanship and a focus on the finished result.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .7, delay: .62 }}
          >
            <a href={WHATSAPP_QUOTE_LINK} target="_blank" rel="noreferrer" className="glass-cta group">
              Request a quote
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="glass-cta glass-cta-dark group">
              WhatsApp us
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#project-intro"
        className="absolute z-20 right-6 md:right-[7vw] bottom-8 md:bottom-10 text-white/75 hover:text-white transition-colors flex items-center gap-3"
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="eyebrow hidden sm:block">Explore the work</span>
        <span className="w-11 h-11 rounded-full border border-white/40 backdrop-blur-md flex items-center justify-center">
          <ArrowDownRight className="w-4 h-4" />
        </span>
      </motion.a>
    </section>
  );
}
