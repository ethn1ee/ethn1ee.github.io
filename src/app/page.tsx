"use client";

import Cursor from "@/components/Cursor";
import { useEffect } from "react";

import Landing from "./landing/Landing";
import Projects from "./projects/Projects";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const scroll = new LocomotiveScroll({});
    })();
  });

  return (
    <>
      <Cursor />
      <main className="w-screen overflow-hidden">
        <Landing />
        <Projects />
      </main>
    </>
  );
}
