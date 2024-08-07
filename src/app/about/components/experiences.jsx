"use client";

import { customEase } from "@/utils/anim";
import { experiences } from "@/data/experiences";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import StickyWrapper from "@/components/stickyWrapper";

const Experiences = () => {
  const opacityGradient = {
    WebkitMaskImage:
      "linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,1) 33%, rgba(0,0,0,1) 67%, rgba(0,0,0,0))",
    maskImage:
      "linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,1) 33%, rgba(0,0,0,1) 67%, rgba(0,0,0,0))",
  };

  return (
    <div>
      {/* LINE */}
      <div
        style={opacityGradient}
        className="fixed top-[60px] right-ml w-[1px] h-[calc(100vh-60px)] bg-base-white"
      />

      {/* CONTENT */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: customEase }}
          className="ml-auto mr-ml w-[267px] flex flex-col items-end gap-[12vw] py-[45vh]"
        >
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const ExperienceCard = ({ experience, index }) => {
  const ref = useRef();
  const [isHovered, setIsHovered] = useState(false);
  const [intensity, setIntensity] = useState(1);

  const NAVBAR_HEIGHT = 60;

  const updateIntensity = () => {
    const position = ref.current?.getBoundingClientRect().top;
    const distanceFromCenter = Math.abs(
      position - (NAVBAR_HEIGHT + window.innerHeight * 0.45)
    );

    setIntensity(
      Math.max(0, 1 - distanceFromCenter / (window.innerHeight * 0.5))
    );
  };

  useEffect(() => {
    if (ref) {
      updateIntensity();
      window.addEventListener("scroll", updateIntensity);
      return () => {
        window.removeEventListener("scroll", updateIntensity);
      };
    }
  }, [ref]);

  return (
    <StickyWrapper cursorType={"experience-card"}>
      <div
        style={{
          opacity: Math.sqrt(intensity),
          scale: Math.pow(intensity, 0.2),
          transformOrigin: "right center",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="select-none flex flex-col items-end"
      >
        <motion.small
          ref={ref}
          animate={{ marginRight: isHovered ? "10px" : "0px" }}
          className="uppercase font-extrabold text-neutral-400 mb-m"
        >
          {experience.start}
          <span className="text-inherit mx-s">-</span>
          {experience.end}
        </motion.small>
        <div className="text-[24px] text-right mb-s">{experience.title}</div>
        <p className="text-right">{experience.company}</p>
      </div>
    </StickyWrapper>
  );
};

export default Experiences;
