"use client";

import { myEasing } from "@/app/_components/Easing";
import { motion, Variants } from "motion/react";
import { useCategoryContext } from "./contexts/CategoryContext";

interface ChipProps {
  text: string;
  size: "sm" | "md";
}

const CategoryChip = ({ text, size }: ChipProps) => {
  const { currentCategory, toggleCurrentCategory } = useCategoryContext();

  const highlightVariants: Variants = {
    default: {
      backgroundColor: "var(--color-gray-500)",
      color: "var(--color-white)",
      borderColor: "var(--color-gray-400)",
    },
    highlight: {
      backgroundColor: "var(--color-white)",
      color: "var(--color-black)",
      borderColor: "var(--color-gray-100)",
      transition: {
        duration: 0.3,
        ease: myEasing,
      },
    },
  };

  const highlight =
    (currentCategory === null && text.toLowerCase() === "all") ||
    currentCategory === text;

  const handleClick = () => {
    toggleCurrentCategory(text);
  };

  switch (size) {
    case "sm":
      return (
        <motion.span
          variants={highlightVariants}
          animate={highlight ? "highlight" : "default"}
          onClick={handleClick}
          className="relative -top-[1px] cursor-pointer rounded-full border px-2 py-0.5 text-xs leading-none"
        >
          {text.toUpperCase()}
        </motion.span>
      );
    case "md":
      return (
        <motion.span
          variants={highlightVariants}
          animate={highlight ? "highlight" : "default"}
          onClick={() => handleClick()}
          className="cursor-pointer rounded-full border px-3 py-1 text-sm"
        >
          {text.toUpperCase()}
        </motion.span>
      );

    default:
      break;
  }
};

export default CategoryChip;
