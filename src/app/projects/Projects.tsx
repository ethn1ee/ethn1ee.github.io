"use client";

import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

import Project from "./Project";
import ProjectCard from "./ProjectCard";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { myEasing } from "@/components/Easing";
import projects from "@/data/projects.json";

gsap.registerPlugin(ScrollTrigger);

const data = projects as Project[];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const [borderLength, setBorderLength] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(carouselRef);

  useEffect(() => {
    const element = containerRef.current;
    const scrollAmount = Math.max(
      200 * projects.length + 320 - window.innerWidth,
      0
    );

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

      const handleResize = () => {
        const newBorderLength = Math.max(
          200 * projects.length + 320,
          window.innerWidth
        );
        setBorderLength(newBorderLength);
      };

      window.addEventListener("resize", handleResize);
      handleResize();

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <section ref={containerRef} id="projects" className="w-fit h-screen">
      {/* DATE DISPLAY */}
      <div className="h-8 w-full relative">
        {/* BORDER */}
        <motion.div
          animate={{ width: isInView ? borderLength : 0 }}
          transition={{ ease: myEasing, duration: 1, delay: 0.5 }}
          className="absolute bottom-0 left-0 h-[1px] bg-gray-300"
        />
      </div>

      {/* CAROUSEL */}
      <div
        ref={carouselRef}
        className="flex w-fit h-[calc(100%-32px)] relative overflow-visible"
      >
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
