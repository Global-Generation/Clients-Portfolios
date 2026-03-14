export type Lang = "en" | "ru";

export interface ExperienceItem {
  years: string;
  title: string;
  description: string;
  bullets?: string[];
}

export interface EducationItem {
  years: string;
  title: string;
  location: string;
  bullets: string[];
}

export interface LeadershipItem {
  years: string;
  title: string;
  location: string;
  bullets: string[];
}

export interface SkillCategory {
  label: string;
  items: string[];
}

export interface PortfolioItem {
  id: number;
  category: "modeling" | "theater";
  title: string;
  image: string;
  span: 1 | 2; // grid column span
}

export interface QuoteItem {
  text: string;
  author: string;
  role: string;
}

export interface Content {
  nav: {
    about: string;
    career: string;
    theater: string;
    leadership: string;
    portfolio: string;
    education: string;
    words: string;
    contact: string;
  };
  hero: {
    subtitle: string;
  };
  about: {
    label: string;
    paragraphs: string[];
  };
  career: {
    label: string;
    items: ExperienceItem[];
  };
  theater: {
    label: string;
    items: ExperienceItem[];
  };
  leadership: {
    label: string;
    items: LeadershipItem[];
  };
  portfolio: {
    label: string;
    filters: { all: string; modeling: string; theater: string };
  };
  education: {
    label: string;
    items: EducationItem[];
  };
  sport: {
    label: string;
    items: ExperienceItem[];
  };
  skills: {
    label: string;
    categories: SkillCategory[];
  };
  words: {
    label: string;
    quotes: QuoteItem[];
  };
  contact: {
    label: string;
    location: string;
    email: string;
    phone: string;
    cta: string;
  };
}
