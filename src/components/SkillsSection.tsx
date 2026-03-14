"use client";

import { Lang } from "@/lib/types";
import { content } from "@/lib/content";
import ScrollReveal from "./ScrollReveal";

export default function SkillsSection({ lang }: { lang: Lang }) {
  const t = content[lang].skills;

  return (
    <section id="skills" className="py-16 md:py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="section-label mb-10">{t.label}</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.categories.map((cat, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="border-t border-[#e8e8e8] pt-4">
                <h3 className="text-[13px] font-medium text-[#111] uppercase tracking-[0.1em] mb-3">
                  {cat.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item, j) => (
                    <span
                      key={j}
                      className="text-[12px] text-[#666] bg-[#f0f0f0] px-3 py-1.5 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
