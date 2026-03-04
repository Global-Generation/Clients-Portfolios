"use client";

import { motion } from "framer-motion";
import { Lang } from "@/lib/types";
import { content } from "@/lib/content";

export default function HeroSection({ lang }: { lang: Lang }) {
  const t = content[lang].hero;

  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      <img
        src="/images/hero.jpg"
        alt="Artemiy Ivanov"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />

      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      {/* Content at bottom */}
      <div className="absolute bottom-0 left-0 right-0 px-6 md:px-10 pb-12 md:pb-16">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="font-[family-name:var(--font-playfair)] text-6xl md:text-8xl lg:text-9xl text-white leading-none tracking-tight"
          >
            Artemiy
            <br />
            Ivanov
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="w-12 h-[1px] bg-white/60 mt-5 mb-3" />
            <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-white/80">
              {t.subtitle}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
