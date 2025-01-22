"use client";

import Landing from "./landing/Landing";
import Projects from "./projects/Projects";
import { createRef, useEffect } from "react";

export default function Home() {
  const ref = createRef<HTMLElement>();

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      if (ref.current) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const scroll = new LocomotiveScroll({
          el: ref.current,
          smooth: true,
        });
      }
    })();
  });

  return (
    <main ref={ref}>
      <Landing />
      <Projects />
    </main>
  );
}
