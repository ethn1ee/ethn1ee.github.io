"use client";

import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useEffect, useState } from "react";

import { myEasing } from "./Easing";

const Sidebar = () => {
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end start"],
  });
  const [scrollBarHeight, setScrollBarHeight] = useState<number>(100);
  const [scrollBarY, setScrollBarY] = useState<number>(0);

  // Adjust the scrollbar height and position based on the window height and scroll progress
  const handleResize = () => {
    setScrollBarHeight(
      (window.innerHeight / document.documentElement.scrollHeight) * 200,
    );
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  useMotionValueEvent(scrollYProgress, "change", () => {
    setScrollBarY(200 * scrollYProgress.get());
  });

  return (
    <div className="fixed flex h-screen w-10 flex-col items-center justify-end">
      <div className="absolute right-0 top-0 h-full w-[1px] bg-gray-300" />

      <div className="mb-6 h-[200px] w-[2px] justify-self-end overflow-hidden bg-gray-300">
        <motion.div
          animate={{ height: scrollBarHeight, y: scrollBarY }}
          transition={{ duration: 0.5, ease: myEasing }}
          className="w-full bg-white"
        />
      </div>
    </div>
  );
};

export default Sidebar;
