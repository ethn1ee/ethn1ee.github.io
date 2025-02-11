"use client";

import InvisibleHeader from "@/components/InvisibleHeader";
import useLocomotiveScroll from "@/hooks/useLocomotiveScroll";

import Landing from "./_sections/landing/Landing";
import Projects from "./_sections/projects/Projects";

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
