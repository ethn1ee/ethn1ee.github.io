"use client";

import { useEffect, useMemo, useState } from "react";
import { ABCFavorit } from "../_components/Fonts";
import NoiseBG from "../_components/NoiseBG";
import SpinningText from "../_components/SpinningText";

const Landing = () => {
  return (
    <section
      id="landing"
      className="flex items-center justify-center w-full h-screen"
    >
      <InvisibleHeader />

      <div className="opacity-40">
        <NoiseBG />
      </div>

      <div
        data-scroll
        data-scroll-speed="0.5"
        className={
          ABCFavorit.mono.className + " text-4xl font-bold leading-none"
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

const Clock = () => {
  const [time, setTime] = useState<Date>(new Date());
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedTime = useMemo<string>(() => {
    if (!mounted) return "";
    const hours = time.getHours().toString().padStart(2, "0");
    const minutes = time.getMinutes().toString().padStart(2, "0");
    const seconds = time.getSeconds().toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  }, [time, mounted]);

  return (
    <>
      <SpinningText fontSize={12}>{formattedTime}</SpinningText>
    </>
  );
};

const InvisibleHeader = () => {
  return (
    <div className="hidden">
      <h1>Taehoon&apos;s Portfolio</h1>
      <h2>Creative Developer</h2>
    </div>
  );
};

export default Landing;
