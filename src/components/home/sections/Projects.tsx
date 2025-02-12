"use client";

import projects from "@/data/projects.json";
import type Project from "@/types/project";
import { useState } from "react";

import ProjectCard from "../ProjectCard";

const data = projects as Project[];

const Projects = () => {
  const [hovered, setHovered] = useState<number>(-1);

  return (
    <section id="projects" className="h-screen w-screen">
      <ul className="relative ml-10 flex flex-col pt-6">
        {data.map((project: Project) => (
          <li
            onMouseEnter={() => setHovered(project.id)}
            onMouseLeave={() => setHovered(-1)}
            key={project.id}
          >
            <ProjectCard project={project} isHovered={hovered === project.id} />
          </li>
        ))}
        <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gray-300" />
      </ul>
    </section>
  );
};

export default Projects;
