export type Lang = "en" | "ru";

export interface ExperienceItem {
  years: string;
  title: string;
  description: string;
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
    experience: string;
    portfolio: string;
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
  experience: {
    label: string;
    items: ExperienceItem[];
  };
  portfolio: {
    label: string;
    filters: { all: string; modeling: string; theater: string };
  };
  education: {
    label: string;
    text: string;
  };
  words: {
    label: string;
    quotes: QuoteItem[];
  };
  contact: {
    label: string;
    location: string;
    cta: string;
  };
}
