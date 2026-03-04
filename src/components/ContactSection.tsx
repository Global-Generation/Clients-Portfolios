"use client";

import { Lang } from "@/lib/types";
import { content } from "@/lib/content";
import ScrollReveal from "./ScrollReveal";

export default function ContactSection({ lang }: { lang: Lang }) {
  const t = content[lang].contact;

  return (
    <footer id="contact" className="py-16 md:py-20 px-6 md:px-10 border-t border-[#e8e8e8]">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <p className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-[#111] mb-4">
                Artemiy Ivanov
              </p>
              <p className="text-[12px] text-[#999] tracking-[0.1em] uppercase">
                {t.location}
              </p>
            </div>

            <div className="flex flex-col items-start md:items-end gap-3">
              <a
                href="mailto:artemiy@globalgeneration.ru"
                className="text-[14px] text-[#111] hover:text-[#ff3d00] transition-colors underline underline-offset-4 decoration-[#e8e8e8] hover:decoration-[#ff3d00]"
              >
                artemiy@globalgeneration.ru
              </a>
              <a
                href="https://instagram.com/artemiy.ivanov"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] text-[#111] hover:text-[#ff3d00] transition-colors underline underline-offset-4 decoration-[#e8e8e8] hover:decoration-[#ff3d00]"
              >
                Instagram
              </a>
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-16 pt-6 border-t border-[#e8e8e8]">
          <p className="text-[11px] text-[#ccc] tracking-[0.05em]">
            &copy; {new Date().getFullYear()} Artemiy Ivanov
          </p>
        </div>
      </div>
    </footer>
  );
}
