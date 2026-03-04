import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Artemiy Ivanov — Actor, Model, Creative Director",
  description:
    "Portfolio of Artemiy Ivanov — actor, model, and creative director based in Tbilisi, Georgia. Theater, fashion, and media.",
  openGraph: {
    title: "Artemiy Ivanov — Portfolio",
    description:
      "Actor, model, and creative director. Theater background, fashion editorial, media production.",
    type: "website",
    url: "https://artemiy.global-generations-edu.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
