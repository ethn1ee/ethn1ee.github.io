"use client";

import { useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import projects from "@/app/_data/projects.json";
import Project from "./Project";
import { useInView, motion } from "motion/react";

const data = projects as Project[];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <section id="projects" className="w-screen h-screen overflow-scroll">
      {/* DATE DISPLAY */}
      <div className="h-8 w-full relative">
        {/* BORDER */}
        <motion.div
          animate={{ width: isInView ? "100%" : 0 }}
          transition={{ ease: "circOut", duration: 1, delay: 0.5 }}
          className="absolute bottom-0 left-0 h-[1px] bg-gray-300"
        />
      </div>

      {/* CAROUSEL */}
      <motion.div
        ref={ref}
        className="flex w-full h-[calc(100%-32px)] relative overflow-visible"
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
      </motion.div>
    </section>
  );
};

export default Projects;
