"use client";

import { myEasing } from "@/components/global/Easing";
import { motion } from "motion/react";
import Clock from "../_components/Clock";
import GameOfLife from "../_components/GameOfLife";

const Landing = () => {
  return (
    <section
      id="landing"
      className="relative flex h-screen w-screen flex-col pt-[60px]"
    >
      {/* HEADER */}
      <header className="relative my-4 flex h-[10vw] items-center gap-4 px-4 sm:pr-10 sm:pl-16">
        <motion.span
          initial={{ height: "0%" }}
          animate={{ height: "100%" }}
          transition={{ delay: 0.3, duration: 1, ease: myEasing }}
          className="font-oswald overflow-hidden text-[10vw] leading-none font-bold tracking-tighter"
        >
          TAEHOON
        </motion.span>

        <motion.div
          initial={{ flexGrow: 0, width: 0 }}
          animate={{ flexGrow: 1, width: "auto" }}
          transition={{ delay: 1, duration: 1.2, ease: myEasing }}
          className="mt-2 flex h-[8vw] items-center justify-center overflow-hidden border-t border-b border-gray-400"
        >
          <span
            className={
              "font-playfair h-[6vw] text-[6vw] leading-none font-black tracking-tighter text-gray-400 italic"
            }
          >
            Ethan
          </span>
        </motion.div>

        <motion.span
          initial={{ height: "0%" }}
          animate={{ height: "100%" }}
          transition={{ delay: 0.3, duration: 1, ease: myEasing }}
          className="font-oswald overflow-hidden text-[10vw] leading-none font-bold tracking-tighter"
        >
          LEE
        </motion.span>
      </header>

      {/* CLOCK */}
      <div className="absolute top-[calc(155px+60px+16px)] left-3 hidden h-4 w-fit origin-top-left -rotate-90 font-mono text-xs text-gray-300 sm:block">
        <span className="leading-none">ATLANTA, GA &nbsp;</span>
        <Clock />
      </div>

      {/* GAME OF LIFE */}
      <GameOfLife />
    </section>
  );
};

export default Landing;
