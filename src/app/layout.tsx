import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata } from "next";

import { ABCFavorit } from "../components/Fonts";

export const metadata: Metadata = {
  title: "Taehoon Lee - Creative Developer",
  description:
    "I am a Computer Science and Psychology student at Emory University with a passion for creating user-friendly, innovative software. I love working at the crossroads of technology and human behavior, combining my technical skills with insights into how people think and interact. From building AI-powered platforms at UrsaTech to enhancing e-commerce experiences at eStreamly, I’ve developed a knack for creating solutions that are both impactful and intuitive.",
  keywords: [
    "Creative Developer",
    "Portfolio",
    "Web Development",
    "UI/UX Design",
    "Taehoon",
    "Taehoon Lee",
    "Ethan",
    "Ethan Lee",
    "Lee",
    "GitHub",
    "Software",
    "Developer",
    "Projects",
    "ethn1ee",
    "ethn1ee.github.io",
    "Taehoon's Portfolio",
    "Taehoon Lee Portfolio",
    "Ethan's Portfolio",
    "Ethan Lee Portfolio",
    "Developer",
    "Software",
    "Computer Science",
  ],

  openGraph: {
    title: "Taehoon Lee - Creative Developer",
    description:
      "Computer Science and Psychology student at Emory University with a passion for creating user-friendly, innovative software. I love working at the crossroads of technology and human behavior, combining my technical skills with insights into how people think and interact. From building AI-powered platforms at UrsaTech to enhancing e-commerce experiences at eStreamly, I’ve developed a knack for creating solutions that are both impactful and intuitive.",
    url: "https://taehoonlee.dev/",
    siteName: "Taehoon Lee - Creative Developer",
    images: [
      {
        url: "https://taehoonlee.dev/taehoon.png",
        width: 800,
        height: 800,
        alt: "Taehoon Lee",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ABCFavorit.normal.className} antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
