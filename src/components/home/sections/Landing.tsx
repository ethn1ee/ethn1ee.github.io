"use client";

import { myEasing } from "@/components/global/Easing";
import Nav from "@/components/home/LandingNav";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { motion } from "motion/react";

import Clock from "../Clock";

const Landing = () => {
  return (
    <section
      id="landing"
      className="relative flex h-screen w-screen flex-col pb-4"
    >
      {/* HEADER */}
      <header className="relative flex items-center gap-4 border-b border-gray-300 px-4 pb-6 pt-4 leading-none tracking-tighter sm:pl-16 sm:pr-10">
        <span className="font-oswald text-[10vw] font-bold">TAEHOON</span>
        <motion.div
          initial={{ flexGrow: 0 }}
          animate={{ flexGrow: 1 }}
          transition={{ duration: 1, ease: myEasing }}
          className="mt-4 flex justify-center border-b border-t border-gray-400 p-2"
        >
          <span
            className={
              "font-playfair text-[6vw] font-black italic text-gray-400"
            }
          >
            Ethan
          </span>
        </motion.div>
        <span className={"font-oswald text-[10vw] font-bold"}>LEE</span>
      </header>

      {/* CLOCK */}
      <div className="absolute left-3 top-[calc(151px+15vw)] hidden h-4 w-fit origin-top-left -rotate-90 font-mono text-xs text-gray-300 sm:block">
        <span className="leading-none">ATLANTA, GA &nbsp;</span>
        <Clock />
      </div>

      {/* NAV */}
      <Nav />

      {/* SUBHEADING */}
      <div className="mx-4 text-gray-300 sm:ml-16 mr-12">
        BUILDING WITH CURIOSITY & ORIGINALITY
      </div>

      {/* ARROW */}
      <ArrowDownwardIcon className="absolute bottom-4 right-4 text-gray-200 sm:bottom-10 sm:right-10" />
    </section>
  );
};

export default Landing;
