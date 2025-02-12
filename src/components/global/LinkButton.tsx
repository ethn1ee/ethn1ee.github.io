"use client";

import useLocomotiveScroll from "@/hooks/useLocomotiveScroll";
import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";

import { myEasing } from "./Easing";
import SpinningText from "./SpinningText";

interface LinkButtonProps {
  href: string;
  children: string;
}

const LinkButton = ({ href, children }: LinkButtonProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const isExternal = href.startsWith("http");

  const isInternal = href.startsWith("/");

  const isSection = href.startsWith("#");

  const scrollRef = useLocomotiveScroll();

  const scrollToSection = () => {
    scrollRef.current?.scrollTo(href);
  };

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={isHovered ? { color: "#f6f6f6" } : {}}
      transition={{ duration: 0.3, ease: myEasing }}
      className="relative cursor-pointer"
    >
      {isExternal ? (
        <Link href={href} target="_blank" rel="noreferrer">
          <SpinningText>{children}</SpinningText>
        </Link>
      ) : isSection ? (
        <span onClick={scrollToSection}>
          <SpinningText>{children}</SpinningText>
        </span>
      ) : (
        <Link href={href}>
          <SpinningText>{children}</SpinningText>
        </Link>
      )}

      <motion.div
        animate={{ width: isHovered ? "100%" : "0%" }}
        transition={{ duration: 0.3, ease: myEasing }}
        className="absolute -bottom-1 left-0 h-[1px] bg-white"
      />
    </motion.div>
  );
};

export default LinkButton;
