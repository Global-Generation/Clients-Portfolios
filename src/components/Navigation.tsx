"use client";

import { Lang } from "@/lib/types";
import { content } from "@/lib/content";
import { useEffect, useState } from "react";

export default function Navigation({
  lang,
  onToggleLang,
}: {
  lang: Lang;
  onToggleLang: () => void;
}) {
  const t = content[lang].nav;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: t.about },
    { href: "#career", label: t.career },
    { href: "#theater", label: t.theater },
    { href: "#leadership", label: t.leadership },
    { href: "#portfolio", label: t.portfolio },
    { href: "#education", label: t.education },
    { href: "#words", label: t.words },
    { href: "#contact", label: t.contact },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#fafafa]/90 backdrop-blur-md border-b border-[#e8e8e8]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-14">
        <a
          href="#"
          className={`font-[family-name:var(--font-playfair)] text-lg tracking-tight transition-colors duration-500 ${
            scrolled ? "text-[#111]" : "text-white"
          }`}
        >
          A.I.
        </a>

        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[10px] font-medium tracking-[0.12em] uppercase hover:text-[#ff3d00] transition-colors duration-500 ${
                scrolled ? "text-[#999]" : "text-white/90"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          onClick={onToggleLang}
          className={`text-[11px] font-medium tracking-[0.15em] uppercase hover:text-[#ff3d00] transition-colors duration-500 rounded-full px-3 py-1 ${
            scrolled ? "text-[#999] border border-[#e8e8e8]" : "text-white/90 border border-white/40"
          }`}
        >
          {lang === "en" ? "RU" : "EN"}
        </button>
      </div>
    </nav>
  );
}
