"use client";

import { motion } from "motion/react";
import { ABCFavorit } from "../_components/Fonts";
import NoiseBG from "../_components/NoiseBG";
import SpinningText from "../_components/SpinningText";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";
import Clock from "./Clock";
import { myEasing } from "../_components/Easing";
import { metadata } from "../_components/Metadata";

const Landing = () => {
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
          " text-4xl font-bold leading-none relative z-10"
        }
      >
        <h2>
          <SpinningText fontSize={36}>TAEHOON LEE</SpinningText>
        </h2>
        <h2 className="text-gray-200">
          <SpinningText fontSize={36}>CREATIVE DEVELOPER</SpinningText>
        </h2>
        <h2 className="text-gray-300">
          <SpinningText fontSize={36}>PORTFOLIO VOL.4</SpinningText>
        </h2>
        <div className="flex justify-between w-full text-gray-300">
          <span className="text-xs font-normal">
            <SpinningText fontSize={12}>ATLANTA, GA</SpinningText>
          </span>
          <span className="text-xs font-normal">
            <Clock />
          </span>
        </div>
      </div>
    </section>
  );
};

const InvisibleHeader = () => {
  return (
    <div className="hidden">
      <h1>{metadata.title ?? ""}</h1>
      <h2>{metadata.description}</h2>
    </div>
  );
};

const SocialLinks = () => {
  return (
    <div className="absolute top-4 right-4 flex gap-4 z-10">
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
          href={"https://www.linkedin.com/in/taehoon-lee-/"}
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </Link>
      </motion.div>
    </div>
  );
};

export default Landing;
