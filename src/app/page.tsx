"use client";

import { useState } from "react";
import { Lang } from "@/lib/types";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CareerSection from "@/components/CareerSection";
import TheaterSection from "@/components/TheaterSection";
import LeadershipSection from "@/components/LeadershipSection";
import PortfolioSection from "@/components/PortfolioSection";
import EducationSection from "@/components/EducationSection";
import SportSection from "@/components/SportSection";
import SkillsSection from "@/components/SkillsSection";
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
        <CareerSection lang={lang} />
        <TheaterSection lang={lang} />
        <LeadershipSection lang={lang} />
        <PortfolioSection lang={lang} />
        <EducationSection lang={lang} />
        <SportSection lang={lang} />
        <SkillsSection lang={lang} />
        <WordsSection lang={lang} />
      </main>
      <ContactSection lang={lang} />
    </>
  );
}
