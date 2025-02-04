/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { motion, useMotionValue } from "motion/react";
import { useEffect, useState } from "react";

const Cursor = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const cursorCount = 20;

  const cursorSizes = Array.from(
    { length: cursorCount },
    (_, i) => 30 - (30 / cursorCount) * i
  );

  const mouse = cursorSizes.map(() => ({
    x: useMotionValue(-30),
    y: useMotionValue(-30),
  }));

  useEffect(() => {
    const handleTouchStart = () => setIsTouchDevice(true);
    window.addEventListener("touchstart", handleTouchStart);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
    };
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      mouse.forEach(({ x, y }, index) => {
        setTimeout(() => {
          x.set(clientX - cursorSizes[index] / 2);
          y.set(clientY - cursorSizes[index] / 2);
        }, index * 10);
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [cursorSizes, isTouchDevice, mouse]);

  return (
    <>
      {cursorSizes.map((cursorSize, index) => (
        <motion.div
          key={index}
          style={{
            x: mouse[index].x,
            y: mouse[index].y,
            width: cursorSize,
            height: cursorSize,
            borderRadius: cursorSize,
          }}
          className={`fixed pointer-events-none opacity-[0.04] bg-white z-[5] ${
            isTouchDevice ? "hidden" : ""
          }`}
        />
      ))}
    </>
  );
};

export default Cursor;
