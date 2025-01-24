"use client";

import { motion, useMotionValue } from "motion/react";
import { useEffect } from "react";

const Cursor = () => {
  const cursorSize = 30;

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const handleMouseMove = (e: { clientX: number; clientY: number }) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  });

  return (
    <motion.div
      style={{
        x: mouse.x,
        y: mouse.y,
        width: cursorSize,
        height: cursorSize,
        borderRadius: cursorSize,
        backgroundImage:
          "radial-gradient(50% 50% at 50% 50%, #D3D3D3 0%, rgba(211, 211, 211, 0.00) 100%)",
      }}
      className="fixed pointer-events-none z-0 mix-blend-difference"
    ></motion.div>
  );
};

export default Cursor;
