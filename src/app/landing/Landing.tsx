"use client";

import { useEffect, useMemo, useState } from "react";
import { ABCFavorit } from "../_components/Fonts";

const Landing = () => {
  return (
    <section
      id="landing"
      className="flex items-center justify-center w-screen h-screen"
    >
      <div className={ABCFavorit.mono.className + " text-4xl font-bold"}>
        <h1>TAEHOON LEE</h1>
        <h2 className="text-gray-200">CREATIVE DEVELOPER</h2>
        <h2 className="text-gray-300">PORTFOLIO VOL.4</h2>
        <div className="flex justify-between w-full text-gray-300">
          <span className="text-xs font-normal">ATLANTA, GA</span>
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

  return <>{formattedTime}</>;
};

export default Landing;
