"use client";

import { myEasing } from "@/components/Easing";
import { ABCFavorit } from "@/components/Fonts";
import InvisibleHeader from "@/components/InvisibleHeader";
import NoiseBG from "@/components/NoiseBG";
import SpinningText from "@/components/SpinningText";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { motion } from "motion/react";
import Link from "next/link";
import { useEffect } from "react";

import Clock from "./Clock";

const Landing = () => {
  useEffect(() => {}, []);

  return (
    <section
      id="landing"
      className="flex items-center justify-center w-full h-screen"
    >
      <InvisibleHeader />
      <SocialLinks />

      <div className="opacity-40">
        <NoiseBG />
      </div>

      <div
        data-scroll
        data-scroll-speed="0.5"
        className={
          ABCFavorit.mono.className +
          " text-2xl sm:text-4xl font-bold leading-none relative z-10"
        }
      >
        <div>
          <SpinningText>TAEHOON LEE</SpinningText>
        </div>
        <div className="text-gray-200">
          <SpinningText>CREATIVE DEVELOPER</SpinningText>
        </div>
        <div className="text-gray-300">
          <SpinningText>PORTFOLIO VOL.4</SpinningText>
        </div>
        <div className="flex justify-between w-full text-gray-300">
          <span className="text-xs font-normal">
            <SpinningText>ATLANTA, GA</SpinningText>
          </span>
          <span className="text-xs font-normal">
            <Clock />
          </span>
        </div>
      </div>
    </section>
  );
};

const SocialLinks = () => {
  return (
    <nav className="absolute top-4 right-4 flex gap-4 z-10">
      {/* GITHUB */}
      <motion.div
        whileHover={{ color: "#ffffff" }}
        transition={{ duration: 0.3, ease: myEasing }}
        className="text-gray-200"
      >
        <Link
          href={"https://github.com/ethn1ee"}
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon />
        </Link>
      </motion.div>

      {/* LINKEDIN */}
      <motion.div
        whileHover={{ color: "#ffffff" }}
        transition={{ duration: 0.3, ease: myEasing }}
        className="text-gray-200"
      >
        <Link
          href={"https://www.linkedin.com/in/ethn1ee/"}
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </Link>
      </motion.div>
    </nav>
  );
};

export default Landing;
