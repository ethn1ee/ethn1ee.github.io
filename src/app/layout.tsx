import "./globals.css";

import { ABCFavorit } from "../components/Fonts";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";

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
      "I am a Computer Science and Psychology student at Emory University with a passion for creating user-friendly, innovative software. I love working at the crossroads of technology and human behavior, combining my technical skills with insights into how people think and interact. From building AI-powered platforms at UrsaTech to enhancing e-commerce experiences at eStreamly, I’ve developed a knack for creating solutions that are both impactful and intuitive.",
    url: "https://www.taehoonlee.dev/",
    siteName: "Taehoon Lee - Creative Developer",
    images: [
      {
        url: "https://www.taehoonlee.dev/",
        width: 800,
        height: 800,
        alt: "Taehoon Lee - Creative Developer",
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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description ?? ""} />
        <meta
          name="keywords"
          content={
            Array.isArray(metadata.keywords) ? metadata.keywords.join(", ") : ""
          }
        />

        <meta property="og:title" content={String(metadata.title) ?? ""} />
        <meta property="og:description" content={metadata.description ?? ""} />
        <meta
          property="og:url"
          content={
            metadata.openGraph?.url ? metadata.openGraph.url.toString() : ""
          }
        />
        <meta
          property="og:image"
          content="https://www.taehoonlee.dev/taehoon.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@your_twitter_handle" />
        <meta name="twitter:title" content={String(metadata.title) ?? ""} />
        <meta name="twitter:description" content={metadata.description ?? ""} />
        <meta
          name="twitter:image"
          content="https://www.taehonlee.dev/taehoon.png"
        />
      </head>
      <body className={`${ABCFavorit.normal.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
