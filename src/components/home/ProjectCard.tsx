"use client";

import { myEasing } from "@/components/global/Easing";
import { formatDate } from "@/lib/formatDate";
import slugify from "@/lib/slugify";
import type { Project } from "@/types/project";
import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const numberVariants = {
    hovered: {
      color: "#060606",
      y: -2,
    },
    unhovered: {
      color: "#AAAAAA",
      y: 20,
    },
  };

  const subtitleVariants = {
    hovered: {
      color: "#2E2E2E",
    },
    unhovered: {
      color: "#AAAAAA",
    },
  };

  const titleVariants = {
    hovered: {
      color: "#060606",
    },
    unhovered: {
      color: "#AAAAAA",
    },
  };

  const formattedDate = formatDate(project.start_date, project.end_date);

  return (
    <Link
      href={"/projects/" + slugify(project.title)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex h-[120px] w-full cursor-pointer gap-6 sm:gap-10 overflow-hidden pl-6 pr-10"
    >
      {/* BORDER */}
      <div className="absolute left-0 top-0 h-[1px] w-full bg-gray-300" />

      {/* BG */}
      <motion.div
        animate={isHovered ? { height: "100%" } : { height: "0%" }}
        transition={{ duration: 0.5, ease: myEasing }}
        className="absolute bottom-0 left-0 -z-10 w-full bg-white"
      />

      {/* NUMBER */}
      <div className="h-full w-fit text-[130px] font-black leading-none tracking-tight shrink-0">
        <motion.span
          variants={numberVariants}
          animate={isHovered ? "hovered" : "unhovered"}
          transition={{ duration: 0.3, ease: myEasing }}
          className="relative block"
        >
          {String(index + 1).padStart(2, "0")}
        </motion.span>
      </div>

      <div className="flex flex-grow flex-col justify-center gap-2 leading-none">
        {/* DETAILS */}
        <motion.div
          variants={subtitleVariants}
          animate={isHovered ? "hovered" : "unhovered"}
          transition={{ duration: 0.5, ease: myEasing }}
          className="hidden w-full justify-between text-sm text-gray-300 sm:flex"
        >
          <span className="text-inherit">{project.tags[0].toUpperCase()}</span>
          <span className="text-inherit">{formattedDate}</span>
        </motion.div>

        {/* TITLE */}
        <motion.div
          variants={titleVariants}
          animate={isHovered ? "hovered" : "unhovered"}
          transition={{ duration: 0.5, ease: myEasing }}
          className="font-oswald text-3xl font-bold tracking-tight"
        >
          {project.title.toUpperCase()}
        </motion.div>
      </div>
    </Link>
  );
};

export default ProjectCard;
