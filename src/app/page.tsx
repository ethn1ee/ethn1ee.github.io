"use client";

import InvisibleHeader from "@/components/home/InvisibleHeader";
import useLocomotiveScroll from "@/hooks/useLocomotiveScroll";

import Landing from "../components/home/sections/Landing";
import Projects from "../components/home/sections/Projects";

export default function Home() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const scrollRef = useLocomotiveScroll();

  return (
    <>
      <main className="w-screen overflow-hidden">
        <InvisibleHeader />
        <Landing />
        <Projects />
      </main>
    </>
  );
}
