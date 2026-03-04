"use client";

import { Lang } from "@/lib/types";
import { content } from "@/lib/content";
import ScrollReveal from "./ScrollReveal";

export default function EducationSection({ lang }: { lang: Lang }) {
  const t = content[lang].education;

  return (
    <section id="education" className="py-16 md:py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="border-t border-b border-[#e8e8e8] py-8">
            <p className="section-label mb-4">{t.label}</p>
            <p className="text-[14px] text-[#444] leading-relaxed">{t.text}</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
