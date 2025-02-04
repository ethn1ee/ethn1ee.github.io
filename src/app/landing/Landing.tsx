"use client";

import { myEasing } from "@/components/Easing";
import { ABCFavorit } from "@/components/Fonts";
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

const InvisibleHeader = () => {
  const title = "Taehoon Lee - Creative Developer";
  const description = `Computer Science and Psychology student at Emory University, 
  passionate about building user-friendly, AI-powered, and innovative software. 
  With experience at UrsaTech and eStreamly, I specialize in merging technology with 
  human behavior to create intuitive, high-impact digital solutions. Explore my portfolio 
  to see how I design cutting-edge software that enhances user experiences.`;
  const keywords = [
    "Creative Developer",
    "Portfolio",
    "Web Development",
    "UI/UX Design",
    "Taehoon",
    "Taehoon Lee",
    "Ethan",
    "Ethan Lee",
    "Lee",
    "GitHub",
    "Software",
    "Developer",
    "Projects",
    "ethn1ee",
    "ethn1ee.github.io",
    "Taehoon Portfolio",
    "Taehoon Lee Portfolio",
    "Ethan Portfolio",
    "Ethan Lee Portfolio",
    "Developer",
    "Software",
    "Computer Science",
    "Psychology",
    "Emory",
    "이태훈",
    "태훈",
  ];

  return (
    <div className="absolute top-0 left-0 hidden">
      <h1>{title}</h1>
      <h2>{description}</h2>
      <p>
        {keywords.map((keyword, index) => (
          <span key={index}>{keyword}, </span>
        ))}
      </p>
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
          href={"https://www.linkedin.com/in/ethn1ee/"}
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
