"use client";

import { useState } from "react";
import { Lang } from "@/lib/types";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import PortfolioSection from "@/components/PortfolioSection";
import EducationSection from "@/components/EducationSection";
import WordsSection from "@/components/WordsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");

  return (
    <>
      <Navigation
        lang={lang}
        onToggleLang={() => setLang((l) => (l === "en" ? "ru" : "en"))}
      />
      <main>
        <HeroSection lang={lang} />
        <AboutSection lang={lang} />
        <ExperienceSection lang={lang} />
        <PortfolioSection lang={lang} />
        <EducationSection lang={lang} />
        <WordsSection lang={lang} />
      </main>
      <ContactSection lang={lang} />
    </>
  );
}
