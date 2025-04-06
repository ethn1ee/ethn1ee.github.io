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
  animate?: boolean;
}

const LinkButton = ({ href, children, animate = true }: LinkButtonProps) => {
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
          {animate ? <SpinningText>{children}</SpinningText> : children}
        </Link>
      ) : isInternal ? (
        <Link href={href}>
          {animate ? <SpinningText>{children}</SpinningText> : children}
        </Link>
      ) : isSection ? (
        <span onClick={scrollToSection}>
          {animate ? <SpinningText>{children}</SpinningText> : children}
        </span>
      ) : animate ? (
        <SpinningText>{children}</SpinningText>
      ) : (
        children
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
