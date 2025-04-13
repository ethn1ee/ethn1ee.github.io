import { fontVariables } from "@/components/global/Fonts";
import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata } from "next";
import Head from "next/head";
import { metadataObject } from "./_components/Metadata";
import NoiseBG from "@/components/global/NoiseBG";

import Sidebar from "@/components/global/Sidebar";
import Nav from "@/components/global/Nav";

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
        <link rel="icon" sizes="192x192" href="/logo.png" />
        <link rel="apple-touch-icon" sizes="192x192" href="/logo.png" />
      </Head>
      <body
        className={`${fontVariables} relative bg-black font-mono text-white antialiased min-h-screen`}
      >
        <NoiseBG />
        <Nav />
        <Sidebar />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
