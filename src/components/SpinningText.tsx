"use client";

import { useEffect, useRef, useState } from "react";

import { motion } from "motion/react";
import { myEasing } from "./Easing";

interface SpinningTextProps {
  children: string;
}

const SpinningText = ({ children }: SpinningTextProps) => {
  const spanRef = useRef<HTMLSpanElement>(null);
  const [computedFontSize, setComputedFontSize] = useState<number>(16);

  useEffect(() => {
    if (spanRef.current === null) return;

    const handleResize = () => {
      const computedStyle = getComputedStyle(spanRef.current!);
      setComputedFontSize(parseFloat(computedStyle.fontSize));
    };
    handleResize(); // Initial call

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <span
      ref={spanRef}
      style={{ height: computedFontSize }}
      className={`inline-flex w-fit overflow-hidden`}
    >
      {children.split("").map((char, index) => (
        <SpinningCharacter
          key={index}
          char={char}
          fontSize={computedFontSize}
        />
      ))}
    </span>
  );
};

interface SpinningCharacterProps {
  char: string;
  fontSize: number;
}

const SpinningCharacter = ({ char, fontSize }: SpinningCharacterProps) => {
  const asciiString = String.fromCharCode(
    ...Array.from({ length: 59 }, (_, i) => i + 32)
  );
  const position = char.charCodeAt(0) - 32;

  return (
    <motion.span
      initial={{ y: 0 }}
      animate={{ y: -(fontSize + 4) * position }}
      transition={{ duration: 0.06 * position, ease: myEasing }}
      className={`inline-flex flex-col gap-1 leading-none text-inherit w-fit h-fit overflow-hidden`}
    >
      {asciiString.split("").map((letter, index) => (
        <span key={index}>{letter === " " ? <>&nbsp;</> : letter}</span>
      ))}
    </motion.span>
  );
};

export default SpinningText;
