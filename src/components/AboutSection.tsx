"use client";

import { Lang } from "@/lib/types";
import { content } from "@/lib/content";
import ScrollReveal from "./ScrollReveal";

export default function AboutSection({ lang }: { lang: Lang }) {
  const t = content[lang].about;

  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="section-label mb-12">{t.label}</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-16">
          {/* Text — 2 columns */}
          <div className="md:col-span-2 space-y-6">
            {t.paragraphs.map((p, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <p className="text-[15px] leading-relaxed text-[#333]">{p}</p>
              </ScrollReveal>
            ))}
          </div>

          {/* Photo placeholder — 3 columns */}
          <ScrollReveal className="md:col-span-3" delay={0.2}>
            <div className="photo-placeholder aspect-[3/4] md:aspect-[4/5] w-full" />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
