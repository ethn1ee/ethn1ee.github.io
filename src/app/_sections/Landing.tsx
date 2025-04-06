"use client";

import { myEasing } from "@/components/Easing";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { motion } from "motion/react";
import Clock from "../_components/Clock";

const Landing = () => {
  return (
    <section
      id="landing"
      className="relative flex h-screen w-screen flex-col pb-4 pt-[60px]"
    >
      {/* HEADER */}
      <header className="relative my-4 flex h-[10vw] items-center gap-4 px-4 sm:pl-16 sm:pr-10">
        <motion.span
          initial={{ height: "0%" }}
          animate={{ height: "100%" }}
          transition={{ delay: 0.3, duration: 1, ease: myEasing }}
          className="overflow-hidden font-oswald text-[10vw] font-bold leading-none tracking-tighter"
        >
          TAEHOON
        </motion.span>

        <motion.div
          initial={{ flexGrow: 0, width: 0 }}
          animate={{ flexGrow: 1, width: "auto" }}
          transition={{ delay: 1, duration: 1.2, ease: myEasing }}
          className="mt-2 flex h-[8vw] items-center justify-center overflow-hidden border-b border-t border-gray-400"
        >
          <span
            className={
              "h-[6vw] font-playfair text-[6vw] font-black italic leading-none tracking-tighter text-gray-400"
            }
          >
            Ethan
          </span>
        </motion.div>

        <motion.span
          initial={{ height: "0%" }}
          animate={{ height: "100%" }}
          transition={{ delay: 0.3, duration: 1, ease: myEasing }}
          className="overflow-hidden font-oswald text-[10vw] font-bold leading-none tracking-tighter"
        >
          LEE
        </motion.span>
      </header>

      {/* CLOCK */}
      <div className="absolute left-3 top-[calc(155px+60px+16px)] hidden h-4 w-fit origin-top-left -rotate-90 font-mono text-xs text-gray-300 sm:block">
        <span className="leading-none">ATLANTA, GA &nbsp;</span>
        <Clock />
      </div>

      {/* SUBHEADING */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1, ease: myEasing }}
        className="mt-4 text-gray-300 sm:ml-16"
      >
        BUILDING WITH CURIOSITY & ORIGINALITY
      </motion.div>

      {/* ARROW */}
      <ArrowDownwardIcon className="absolute bottom-4 right-4 text-gray-200 sm:bottom-10 sm:right-10" />
    </section>
  );
};

export default Landing;
