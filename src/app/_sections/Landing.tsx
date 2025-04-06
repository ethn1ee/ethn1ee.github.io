"use client";

import { myEasing } from "@/components/Easing";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { motion } from "motion/react";
import Clock from "../_components/Clock";
import Nav from "../_components/LandingNav";

const Landing = () => {
  return (
    <section
      id="landing"
      className="relative flex h-screen w-screen flex-col pb-4"
    >
      {/* HEADER */}
      <header className="relative flex items-center gap-4 border-b border-gray-300 px-4 pb-2 pt-0 leading-none tracking-tighter sm:pb-6 sm:pl-16 sm:pr-10 sm:pt-4">
        <motion.span
          initial={{ height: "0%" }}
          animate={{ height: "100%" }}
          transition={{ delay: 0.3, duration: 1, ease: myEasing }}
          className="overflow-hidden font-oswald text-[10vw] font-bold"
        >
          TAEHOON
        </motion.span>

        <motion.div
          initial={{ flexGrow: 0, width: 0 }}
          animate={{ flexGrow: 1, width: "auto" }}
          transition={{ delay: 1, duration: 1.2, ease: myEasing }}
          className="mt-2 box-border flex justify-center overflow-hidden border-b border-t border-gray-400 py-2 sm:mt-4"
        >
          <span
            className={
              "font-playfair text-[6vw] font-black italic text-gray-400"
            }
          >
            Ethan
          </span>
        </motion.div>

        <motion.span
          initial={{ height: "0%" }}
          animate={{ height: "100%" }}
          transition={{ delay: 0.3, duration: 1, ease: myEasing }}
          className="overflow-hidden font-oswald text-[10vw] font-bold"
        >
          LEE
        </motion.span>
      </header>

      {/* CLOCK */}
      <div className="absolute left-3 top-[calc(155px+10vw+24px+40px)] hidden h-4 w-fit origin-top-left -rotate-90 font-mono text-xs text-gray-300 sm:block">
        <span className="leading-none">ATLANTA, GA &nbsp;</span>
        <Clock />
      </div>

      {/* NAV */}
      <Nav />

      {/* SUBHEADING */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1, ease: myEasing }}
        className="mx-4 mr-12 text-gray-300 sm:ml-16"
      >
        BUILDING WITH CURIOSITY & ORIGINALITY
      </motion.div>

      {/* ARROW */}
      <ArrowDownwardIcon className="absolute bottom-4 right-4 text-gray-200 sm:bottom-10 sm:right-10" />
    </section>
  );
};

export default Landing;
