"use client";

import { Lang } from "@/lib/types";
import { content } from "@/lib/content";
import ScrollReveal from "./ScrollReveal";

export default function WordsSection({ lang }: { lang: Lang }) {
  const t = content[lang].words;

  return (
    <section id="words" className="py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="section-label mb-16">{t.label}</p>
        </ScrollReveal>

        <div className="space-y-0">
          {t.quotes.map((quote, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <blockquote className="py-10 border-b border-[#e8e8e8] last:border-b-0">
                <p className="font-[family-name:var(--font-playfair)] italic text-xl md:text-2xl lg:text-3xl text-[#222] leading-snug mb-6">
                  &ldquo;{quote.text}&rdquo;
                </p>
                <div>
                  <p className="text-[13px] font-medium text-[#111]">
                    {quote.author}
                  </p>
                  <p className="text-[12px] text-[#999] mt-0.5">
                    {quote.role}
                  </p>
                </div>
              </blockquote>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
