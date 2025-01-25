"use client";

import { useEffect, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import projects from "@/app/_data/projects.json";
import Project from "./Project";
import { useInView, motion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { myEasing } from "../_components/Easing";

gsap.registerPlugin(ScrollTrigger);

const data = projects as Project[];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const [scrollAmount, setScrollAmount] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  useEffect(() => {
    const element = ref.current;
    setScrollAmount(Math.max(200 * projects.length + 320 - window.innerWidth, 0));

    if (element) {
      gsap.to(element, {
        x: -scrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: `+=${scrollAmount}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          // snap: {
          //   snapTo: [0, 1],
          //   duration: { min: 0.1, max: 0.3 },
          //   delay: 0,
          //   ease: "power2.inOut",
          // },
        },
      });
    }
  }, [scrollAmount]);

  useEffect(() => {
    const handleResize = () => {
      setScrollAmount(
        Math.max(200 * projects.length + 320 - window.innerWidth, 0)
      );
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section id="projects" ref={ref} className="w-fit h-screen">
      {/* DATE DISPLAY */}
      <div className="h-8 w-full relative">
        {/* BORDER */}
        <motion.div
          animate={{
            width: isInView
              ? scrollAmount > 0
                ? 200 * projects.length + 320
                : "100vw"
              : 0,
          }}
          transition={{ ease: myEasing, duration: 1, delay: 0.5 }}
          className="absolute bottom-0 left-0 h-[1px] bg-gray-300"
        />
      </div>

      {/* CAROUSEL */}
      <div className="flex w-fit h-[calc(100%-32px)] relative overflow-visible">
        {/* CARDS */}
        {data.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
