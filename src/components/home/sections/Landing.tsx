"use client";

import { myEasing } from "@/components/global/Easing";
import { fonts } from "@/components/global/Fonts";
import Nav from "@/components/home/LandingNav";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { motion } from "motion/react";

import Clock from "../Clock";

const Landing = () => {
  return (
    <section id="landing" className="relative h-screen w-screen">
      {/* HEADER */}
      <header className="mb-6 flex items-center gap-4 border-b border-gray-300 pb-6 pl-16 pr-10 pt-4 leading-none tracking-tighter">
        <span className={fonts.oswald.className + " text-[10vw] font-bold"}>
          TAEHOON
        </span>
        <motion.div
          initial={{ flexGrow: 0 }}
          animate={{ flexGrow: 1 }}
          transition={{ duration: 1, ease: myEasing }}
          className="mt-4 flex justify-center border-b border-t border-gray-400 p-2"
        >
          <span
            className={
              fonts.playfair.className +
              " text-[6vw] font-black italic text-gray-400"
            }
          >
            Ethan
          </span>
        </motion.div>
        <span className={fonts.oswald.className + " text-[10vw] font-bold"}>
          LEE
        </span>
      </header>

      {/* CLOCK */}
      <div
        className={
          fonts.mono.className +
          " absolute left-3 mt-[150px] h-4 w-fit origin-top-left -rotate-90 text-xs text-gray-300"
        }
      >
        <span className="leading-none">ATLANTA, GA &nbsp;</span>
        <Clock />
      </div>

      {/* NAV */}
      <Nav />

      {/* SUBHEADING */}
      <div className="ml-16">
        <p className="text-gray-300">BUILDING WITH CURIOSITY & ORIGINALITY</p>
      </div>

      {/* ARROW */}
      <ArrowDownwardIcon className="absolute bottom-10 right-10 text-gray-200" />
    </section>
  );
};

export default Landing;
