"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import projects from "@/app/_data/projects.json";
import Project from "./Project";

const data = projects as Project[];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  return (
    <section id="projects" className="w-screen h-screen overflow-hidden">
      {/* DATE DISPLAY */}
      <div className="h-8 w-full relative">
        {/* BORDER */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-300" />
      </div>

      {/* CAROUSEL */}
      <div className="flex w-full h-[calc(100%-32px)] relative overflow-visible">
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
