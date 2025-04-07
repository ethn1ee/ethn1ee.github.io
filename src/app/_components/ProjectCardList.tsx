"use client";

import type { Project } from "@/types/project";
import { stagger, useAnimate, useInView } from "motion/react";
import { useEffect } from "react";

import ProjectCard from "./ProjectCard";

interface ProjectCardListProps {
  projects: Project[];
}

const ProjectCardList = ({ projects }: ProjectCardListProps) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });

  useEffect(() => {
    if (isInView) {
      animate(
        "li",
        { opacity: 1 },
        {
          duration: 0.8,
          ease: "easeOut",
          delay: stagger(0.1, { startDelay: 0.5, ease: "easeOut" }),
        },
      );
    } else {
      animate(
        "li",
        { opacity: 0 },
        {
          duration: 0.8,
          ease: "easeOut",
        },
      );
    }
  }, [isInView, animate]);

  return (
    <ul ref={scope} className="relative ml-0 flex flex-col sm:ml-10">
      {projects.map((project, index) => (
        <li key={index} className="opacity-0">
          <ProjectCard project={project} index={index} />
        </li>
      ))}
      <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gray-300" />
    </ul>
  );
};

export default ProjectCardList;
