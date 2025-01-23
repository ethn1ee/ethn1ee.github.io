import type { Metadata } from "next";
import "./globals.css";
import { ABCFavorit } from "./_components/Fonts";

export const metadata: Metadata = {
  title: "Taehoon's Portfolio",
  description: "Creative Developer",
  openGraph: {
    title: "Taehoon's Portfolio",
    description:
      "Hi there! I’m Taehoon Lee, a Computer Science student and aspiring software developer who loves creating cool and impactful digital experiences. From building AI-powered platforms to crafting interactive web designs, I’m all about turning creative ideas into reality. Check out my projects, explore my skills in Python, JavaScript, React, and more, and let’s connect to build something amazing together!",
    url: "https://ethn1ee.github.io",
    siteName: "Taehoon's Portfolio",
    images: [
      {
        url: "https://ethn1ee.github.io/taehoon.png",
        width: 800,
        height: 800,
        alt: "Taehoon's Portfolio",
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
        <meta name="description" content="Creative Developer" />
        <meta
          name="keywords"
          content="Creative Developer, Portfolio, Web Development, UI/UX Design, Taehoon, Taehoon Lee, Ethan, Ethan Lee, GitHub, Software, Developer, Projects, ethn1ee, ethn1ee.github.io"
        />

        <meta property="og:title" content="Taehoon's Portfolio" />
        <meta property="og:description" content="Creative Developer" />
        <meta property="og:url" content="https://ethn1ee.github.io" />
        <meta
          property="og:image"
          content="https://ethn1ee.github.io/taehoon.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@your_twitter_handle" />
        <meta name="twitter:title" content="Taehoon's Portfolio" />
        <meta name="twitter:description" content="Creative Developer" />
        <meta
          name="twitter:image"
          content="https://ethn1ee.github.io/taehoon.png"
        />
      </head>
      <body className={`${ABCFavorit.normal.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
