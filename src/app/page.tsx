"use client";

import Cursor from "@/components/Cursor";
import useLocomotiveScroll from "@/hooks/useLocomotiveScroll";

import Landing from "./landing/Landing";
import Projects from "./projects/Projects";

export default function Home() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const scrollRef = useLocomotiveScroll();

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
