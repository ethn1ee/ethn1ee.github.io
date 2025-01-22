import type { Metadata } from "next";
import "./globals.css";
import { ABCFavorit } from "./_components/Fonts";



export const metadata: Metadata = {
  title: "Taehoon Lee's Portfolio",
  description: "Creative Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ABCFavorit.normal.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
