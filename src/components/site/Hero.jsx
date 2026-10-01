import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import { WHATSAPP_QUOTE_LINK, WHATSAPP_LINK } from "@/lib/site";

const HERO_IMG = "/ngenaz/hero-courtyard.png";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[720px] h-[100svh] w-full overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src={HERO_IMG}
          alt="Ngenaz Builders modern residential construction project"
          className="w-full h-full"
          fittingType="fill"
        />
      </motion.div>

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,7,8,.76)_0%,rgba(5,7,8,.42)_44%,rgba(5,7,8,.12)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(5,7,8,.62)_0%,transparent_42%,rgba(5,7,8,.18)_100%)]" />

      <div className="relative z-10 mx-auto max-w-[1600px] h-full px-6 md:px-[7vw] flex items-end pb-20 md:pb-24">
        <div className="max-w-5xl">
          <motion.div
            className="flex items-center gap-4 mb-6"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .7, delay: .15 }}
          >
            <span className="eyebrow text-white/75">Ngenaz Builders</span>
            <span className="h-px w-16 bg-white/45" />
            <span className="eyebrow text-white/55">Construction · Roofing</span>
          </motion.div>

          <motion.h1
            className="font-heading font-extrabold tracking-[-.055em] text-white text-[clamp(3.5rem,8.5vw,9rem)] leading-[.86] max-w-5xl"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .95, delay: .25, ease: [0.22,1,0.36,1] }}
          >
            Built for the
            <br />
            <span className="text-white/70">way forward.</span>
          </motion.h1>

          <motion.p
            className="mt-8 max-w-2xl text-white/78 text-base md:text-lg leading-relaxed"
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
            <a
              href={WHATSAPP_QUOTE_LINK}
              target="_blank"
              rel="noreferrer"
              className="glass-cta group"
            >
              Request a quote
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="glass-cta glass-cta-dark group"
            >
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
