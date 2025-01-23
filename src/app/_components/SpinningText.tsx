"use client";

import { motion } from "motion/react";
import { myEasing } from "./Easing";

interface SpinningTextProps {
  children: string;
  fontSize: number;
}

const SpinningText = ({ children, fontSize }: SpinningTextProps) => {
  return (
    <span
      style={{ height: fontSize }}
      className={`inline-flex w-fit overflow-hidden`}
    >
      {children.split("").map((char, index) => (
        <SpinningCharacter key={index} char={char} fontSize={fontSize} />
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
