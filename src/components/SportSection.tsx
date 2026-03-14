"use client";

import { Lang } from "@/lib/types";
import { content } from "@/lib/content";
import ScrollReveal from "./ScrollReveal";

export default function SportSection({ lang }: { lang: Lang }) {
  const t = content[lang].sport;

  return (
    <section id="sport" className="py-16 md:py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="section-label mb-10">{t.label}</p>
        </ScrollReveal>

        <div className="space-y-0">
          {t.items.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="group grid grid-cols-1 md:grid-cols-[160px_1fr] gap-2 md:gap-8 py-6 border-b border-[#e8e8e8]">
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
                  {item.bullets && item.bullets.length > 0 && (
                    <ul className="mt-2 space-y-1">
                      {item.bullets.map((bullet, j) => (
                        <li
                          key={j}
                          className="text-[13px] text-[#555] leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[8px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-[#ddd]"
                        >
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
