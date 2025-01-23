import "./globals.css";
import { ABCFavorit } from "./_components/Fonts";
import { metadata } from "./_components/Metadata";

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
          content={Array.isArray(metadata.keywords) ? metadata.keywords.join(", ") : ""}
        />

        <meta property="og:title" content={String(metadata.title) ?? ""} />
        <meta property="og:description" content={metadata.description ?? ""} />
        <meta property="og:url" content="https://ethn1ee.github.io" />
        <meta
          property="og:image"
          content="https://ethn1ee.github.io/taehoon.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@your_twitter_handle" />
        <meta name="twitter:title" content={String(metadata.title) ?? ""} />
        <meta name="twitter:description" content={metadata.description ?? ""} />
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
