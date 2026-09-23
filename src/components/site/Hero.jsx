import { motion } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { Image } from "@/components/ui/image";
import { WHATSAPP_QUOTE_LINK, WHATSAPP_LINK, WHATSAPP_NUMBER } from "@/lib/site";

const HERO_IMG = "https://media.base44.com/images/public/6ab396a02522124dc8a9aa2a/660aa0201_generated_e457e164.jpg";

export default function Hero() {
  return (
    <section id="top" className="relative h-screen min-h-[620px] w-full overflow-hidden bg-foreground">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src={HERO_IMG}
          alt="Modern Zimbabwean building with a strong charcoal metal roof under African sunlight"
          className="w-full h-full"
          fittingType="fill"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/45 to-foreground/30" />

      <div className="relative h-full mx-auto max-w-[1600px] px-6 md:px-[8vw] flex flex-col justify-end pb-16 md:pb-24">
        <motion.p
          className="eyebrow text-background/70 mb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Construction / Roofing
        </motion.p>
        <motion.h1
          className="display text-background text-[15vw] md:text-[8vw] leading-[0.92]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          Built properly.
          <br />
          <span className="text-accent">Roofed right.</span>
        </motion.h1>
        <motion.p
          className="mt-7 max-w-xl text-background/80 text-base md:text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
        >
          Professional construction and roofing solutions for property owners and building projects.
        </motion.p>
        <motion.div
          className="mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          <a
            href={WHATSAPP_QUOTE_LINK}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-7 h-14 text-[0.72rem] uppercase tracking-[0.2em] font-semibold hover:bg-background hover:text-foreground transition-colors"
          >
            Request a Quote
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-background/40 text-background px-7 h-14 text-[0.72rem] uppercase tracking-[0.2em] font-semibold hover:bg-background hover:text-foreground transition-colors"
          >
            WhatsApp Us
          </a>
        </motion.div>
        <p className="mt-6 eyebrow text-background/50">{WHATSAPP_NUMBER}</p>
      </div>

      <motion.div
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-background/60"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="w-5 h-5" />
      </motion.div>
    </section>
  );
}