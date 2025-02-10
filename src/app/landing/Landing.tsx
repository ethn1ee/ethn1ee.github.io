"use client";

import { ABCFavorit } from "@/components/Fonts";
import InvisibleHeader from "@/components/InvisibleHeader";
import NoiseBG from "@/components/NoiseBG";
import SpinningText from "@/components/SpinningText";
import { useEffect } from "react";

import Clock from "./Clock";
import Nav from "./Nav";

const Landing = () => {
  useEffect(() => {}, []);

  return (
    <section
      id="landing"
      className="to-background flex h-screen flex-col bg-gradient-to-b from-[#131313] px-[20vw] pt-[20vh]"
    >
      <NoiseBG />
      <InvisibleHeader />

      {/* HEADER */}
      <div
        // data-scroll
        // data-scroll-speed="0.5"
        className={ABCFavorit.mono.className + " flex w-full justify-between"}
      >
        <div className="relative z-10 text-2xl font-bold leading-none sm:text-4xl">
          <div>
            <SpinningText>TAEHOON LEE</SpinningText>
          </div>
          <div className="text-gray-200">
            <SpinningText>CREATIVE DEVELOPER</SpinningText>
          </div>
          <div className="text-gray-300">
            <SpinningText>PORTFOLIO VOL.4</SpinningText>
          </div>
        </div>
        <div className="flex w-fit flex-col text-right text-gray-300">
          <span className="text-xs font-normal">
            <SpinningText>ATLANTA, GA</SpinningText>
          </span>
          <span className="text-xs font-normal">
            <Clock />
          </span>
        </div>
      </div>

      {/* NAV */}
      <Nav />
    </section>
  );
};

export default Landing;
