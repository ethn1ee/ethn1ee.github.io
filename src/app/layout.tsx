import "./globals.css";

import { fonts } from "@/components/global/Fonts";
import NoiseBG from "@/components/global/NoiseBG";
import Sidebar from "@/components/global/Sidebar";
import { metadataObject } from "@/components/home/Metadata";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = metadataObject;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="canonical" href="https://taehoonlee.dev/" key="canonical" />
      </Head>
      <body
        className={`${fonts.mono.className} relative bg-black text-white antialiased`}
      >
        <NoiseBG />
        <Sidebar />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
