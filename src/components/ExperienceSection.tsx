"use client";

import { Lang } from "@/lib/types";
import { content } from "@/lib/content";
import ScrollReveal from "./ScrollReveal";

export default function ExperienceSection({ lang }: { lang: Lang }) {
  const t = content[lang].experience;

  return (
    <section id="experience" className="py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="section-label mb-12">{t.label}</p>
        </ScrollReveal>

        <div className="space-y-0">
          {t.items.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="group grid grid-cols-1 md:grid-cols-[140px_1fr] gap-2 md:gap-8 py-6 border-b border-[#e8e8e8]">
                <span className="text-[13px] font-mono text-[#999] group-hover:text-[#ff3d00] transition-colors">
                  {item.years}
                </span>
                <div>
                  <h3 className="text-[15px] font-medium text-[#111] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[13px] text-[#666] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
