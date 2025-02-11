"use client";

import useLocomotiveScroll from "@/hooks/useLocomotiveScroll";
import { motion } from "motion/react";
import Link from "next/link";

import { fonts } from "./Fonts";
import SpinningText from "./SpinningText";

const Nav = () => {
  return (
    <nav className="z-10 mb-2 ml-16 mr-10 flex justify-between">
      <p
        className={
          fonts.playfair.className +
          " text-3xl font-bold italic leading-none text-gray-200"
        }
      >
        Creative Developer
      </p>
      <ul
        className={
          fonts.mono.className +
          " flex gap-10 leading-none tracking-tight text-gray-200"
        }
      >
        <li>
          <LinkButton href="#projects">PROJECTS</LinkButton>
        </li>
        <li>
          <LinkButton href="https://github.com/ethn1ee">GITHUB</LinkButton>
        </li>
        <li>
          <LinkButton href="https://www.linkedin.com/in/taehoon-ethan-lee/">
            LINKEDIN
          </LinkButton>
        </li>
      </ul>
    </nav>
  );
};

interface LinkButtonProps {
  href: string;
  children: string;
}

const LinkButton = ({ href, children }: LinkButtonProps) => {
  const isExternal = href.startsWith("http");

  const scrollRef = useLocomotiveScroll();

  const scrollToSection = () => {
    scrollRef.current?.scrollTo(href);
  };

  return (
    <motion.div whileHover={{ color: "#f6f6f6" }} className="cursor-pointer">
      {isExternal ? (
        <Link href={href} target="_blank" rel="noreferrer">
          <SpinningText>{children}</SpinningText>
        </Link>
      ) : (
        <span onClick={scrollToSection}>
          <SpinningText>{children}</SpinningText>
        </span>
      )}
    </motion.div>
  );
};

export default Nav;
