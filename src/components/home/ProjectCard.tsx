"use client";

import { myEasing } from "@/components/global/Easing";
import { fonts } from "@/components/global/Fonts";
import slugify from "@/lib/slugify";
import type { Project } from "@/types/project";
import { motion } from "motion/react";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
  isHovered: boolean;
}

const ProjectCard = ({ project, isHovered }: ProjectCardProps) => {
  const numberVariants = {
    hovered: {
      color: "#060606",
      y: 0,
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

  return (
    <Link
      href={"/projects/" + slugify(project.title)}
      className="relative flex h-[120px] w-full cursor-pointer overflow-hidden pl-6 pr-10"
    >
      {/* BORDER */}
      <div className="absolute left-0 top-0 h-[1px] w-full bg-gray-300" />

      {/* BG */}
      <motion.div
        animate={isHovered ? { height: "100%" } : { height: "0%" }}
        transition={{ duration: 0.5, ease: myEasing }}
        className="absolute bottom-0 left-0 -z-10 w-full bg-white"
      />

      <div className="h-full w-[180px] text-[130px] font-black leading-none tracking-tight">
        <motion.span
          variants={numberVariants}
          animate={isHovered ? "hovered" : "unhovered"}
          transition={{ duration: 0.3, ease: myEasing }}
          className="relative block"
        >
          {String(project.id + 1).padStart(2, "0")}
        </motion.span>
      </div>

      <div className="flex flex-grow flex-col justify-center gap-2 leading-none">
        <motion.div
          variants={subtitleVariants}
          animate={isHovered ? "hovered" : "unhovered"}
          transition={{ duration: 0.5, ease: myEasing }}
          className="flex w-full justify-between text-sm text-gray-300"
        >
          <span className="text-inherit">{project.tags[0].toUpperCase()}</span>
          <span className="text-inherit">{`${project.startDate} - ${project.endDate}`}</span>
        </motion.div>
        <motion.div
          variants={titleVariants}
          animate={isHovered ? "hovered" : "unhovered"}
          transition={{ duration: 0.5, ease: myEasing }}
          className={
            fonts.oswald.className + " text-3xl font-bold tracking-tight"
          }
        >
          {project.title.toUpperCase()}
        </motion.div>
      </div>
    </Link>
  );
};

export default ProjectCard;
