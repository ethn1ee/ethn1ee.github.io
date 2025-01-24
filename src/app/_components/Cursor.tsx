/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { motion, useMotionValue } from "motion/react";
import { useEffect } from "react";

const Cursor = () => {
  const cursorCount = 20;

  const cursorSizes = Array.from(
    { length: cursorCount },
    (_, i) => 30 - (30 / cursorCount) * i
  );

  // Generate mouse array based on cursorSizes
  const mouse = cursorSizes.map(() => ({
    x: useMotionValue(-30),
    y: useMotionValue(-30),
  }));

  // // Generate smoothOptions array based on cursorSizes
  // const smoothOptions = cursorSizes.map((_, i) => ({
  //   damping: 10000 - i,
  //   stiffness: 100000 - i,
  //   mass: 1,
  // }));

  // // Generate smoothMouse array
  // const smoothMouse = mouse.map((m, i) => ({
  //   x: useSpring(m.x, smoothOptions[i]),
  //   y: useSpring(m.y, smoothOptions[i]),
  // }));

  const handleMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    mouse.forEach(({ x, y }, index) => {
      setTimeout(() => {
        x.set(clientX - cursorSizes[index] / 2);
        y.set(clientY - cursorSizes[index] / 2);
      }, index * 10);
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  });

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
          className={`fixed pointer-events-none opacity-[0.04] bg-white z-[5]`}
        />
      ))}
    </>
  );
};

export default Cursor;
