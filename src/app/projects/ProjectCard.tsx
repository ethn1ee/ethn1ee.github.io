"use client";

import { myEasing } from "@/components/Easing";
import Project from "@/types/Project";
import { motion } from "motion/react";
import { useState } from "react";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex h-[120px] w-full cursor-pointer flex-col items-center justify-between py-5"
    >
      {/* BORDER */}
      <div
        style={{
          background:
            "linear-gradient(90deg, var(--bg, #060606) 5%, #2E2E2E 50%, var(--bg, #060606) 100%)",
        }}
        className="absolute top-0 h-[1px] w-screen"
      />

      <div className="relative z-10 flex w-full items-center justify-between text-sm text-gray-300">
        <p>{project.tags[0].toUpperCase()}</p>
        <p>{project.time}</p>
      </div>

      <motion.h4
        animate={{
          fontWeight: isHovered ? 800 : 400,
          // color: isHovered ? "#ffffff" : "#d3d3d3",
        }}
        transition={{ duration: 0.5, ease: myEasing }}
        className="relative z-10 w-full text-3xl leading-none"
      >
        {project.title}
      </motion.h4>
    </div>
  );
};

export default ProjectCard;
