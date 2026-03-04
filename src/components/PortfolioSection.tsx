"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lang, PortfolioItem } from "@/lib/types";
import { content, portfolioItems } from "@/lib/content";
import LightboxModal from "./LightboxModal";
import ScrollReveal from "./ScrollReveal";

type Filter = "all" | "modeling" | "theater";

export default function PortfolioSection({ lang }: { lang: Lang }) {
  const t = content[lang].portfolio;
  const [filter, setFilter] = useState<Filter>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () =>
      filter === "all"
        ? portfolioItems
        : portfolioItems.filter((item) => item.category === filter),
    [filter]
  );

  const openLightbox = (index: number) => setLightboxIndex(index);

  const filters: { key: Filter; label: string }[] = [
    { key: "all", label: t.filters.all },
    { key: "modeling", label: t.filters.modeling },
    { key: "theater", label: t.filters.theater },
  ];

  return (
    <section id="portfolio" className="py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="section-label mb-8">{t.label}</p>
        </ScrollReveal>

        {/* Filters */}
        <ScrollReveal>
          <div className="flex gap-6 mb-10">
            {filters.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`text-[12px] tracking-[0.1em] uppercase font-medium transition-colors pb-1 ${
                  filter === key
                    ? "text-[#111] border-b border-[#111]"
                    : "text-[#999] hover:text-[#111]"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`relative overflow-hidden cursor-pointer group ${
                  item.span === 2 ? "md:col-span-2" : ""
                }`}
                onClick={() => openLightbox(i)}
              >
                <div
                  className={`photo-placeholder w-full ${
                    item.span === 2 ? "aspect-[21/9]" : "aspect-[4/5]"
                  } transition-transform duration-500 group-hover:scale-[1.02]`}
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 flex items-end p-6">
                  <p className="text-white text-[13px] tracking-[0.1em] uppercase opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    {item.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <LightboxModal
        items={filtered}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onPrev={() =>
          setLightboxIndex((prev) =>
            prev !== null ? (prev - 1 + filtered.length) % filtered.length : null
          )
        }
        onNext={() =>
          setLightboxIndex((prev) =>
            prev !== null ? (prev + 1) % filtered.length : null
          )
        }
      />
    </section>
  );
}
