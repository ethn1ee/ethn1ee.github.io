"use client";

import { myEasing } from "@/components/Easing";
import NoiseBG from "@/components/NoiseBG";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";

const Nav = () => {
  const [hovered, setHovered] = useState<number>(-1);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <nav
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative mt-[40vh] flex flex-col items-center text-lg leading-none"
    >
      <motion.div
        animate={{ opacity: isHovered ? 1 : 0, y: hovered * 40 }}
        transition={{ duration: 0.5, ease: myEasing }}
        className="pointer-events-none absolute z-0 h-10 w-screen bg-gray-500"
      >
        <NoiseBG />
      </motion.div>

      <motion.div
        animate={{
          color: isHovered && hovered === 0 ? "#d3d3d3" : "#7a7a7a",
          fontWeight: isHovered && hovered === 0 ? 700 : 400,
        }}
        onMouseEnter={() => setHovered(0)}
        className="relative z-10 flex w-full cursor-pointer items-center justify-between py-2"
      >
        PROJECTS
        <ArrowDownwardIcon />
      </motion.div>

      <motion.div
        animate={{
          color: isHovered && hovered === 1 ? "#d3d3d3" : "#7a7a7a",
          fontWeight: isHovered && hovered === 1 ? 700 : 400,
        }}
        onMouseEnter={() => setHovered(1)}
        className="w-full"
      >
        <Link
          href={"https://github.com/ethn1ee"}
          target="_blank"
          rel="noreferrer"
          className="relative z-10 flex w-full cursor-pointer items-center justify-between py-2"
        >
          GITHUb
          <ArrowForwardIcon />
        </Link>
      </motion.div>

      <motion.div
        animate={{
          color: isHovered && hovered === 2 ? "#d3d3d3" : "#7a7a7a",
          fontWeight: isHovered && hovered === 2 ? 700 : 400,
        }}
        onMouseEnter={() => setHovered(2)}
        className="w-full"
      >
        <Link
          href={"https://www.linkedin.com/in/taehoon-ethan-lee/"}
          target="_blank"
          rel="noreferrer"
          className="relative z-10 flex w-full cursor-pointer items-center justify-between py-2"
        >
          LINKEDIN
          <ArrowForwardIcon />
        </Link>
      </motion.div>
    </nav>
  );
};

export default Nav;
