"use client";
import { myEasing } from "@/components/global/Easing";

import { Project } from "@/types/project";
import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";
import {
  CodeBracketIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [hovered, setHovered] = useState<boolean>(false);
  const isExternal = project.external_link !== null;
  const link = isExternal
    ? project.external_link
    : project.embed_link
      ? `/projects/${project.slug}`
      : null;

  console.log(project);

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={
        {
          // borderColor: hovered
          //   ? "var(--color-gray-200)"
          //   : "var(--color-gray-400)",
        }
      }
      className="cursor-default rounded-xl border border-gray-400 p-4 backdrop-blur-2xl"
    >
      <div className="mb-2 flex items-center justify-between">
        <p className="leading-none font-medium text-white">
          {project.title.toUpperCase()}
        </p>
        <p className="leading-none text-gray-200">
          {project.date
            .toLocaleString("en-US", {
              month: "short",
              year: "numeric",
            })
            .toUpperCase()}
        </p>
      </div>
      <p className="text-xs leading-none text-gray-300">
        {project.tags?.join(", ").toUpperCase()}
      </p>

      <motion.div
        animate={{ height: hovered ? "auto" : 0 }}
        transition={{ duration: 0.5, ease: myEasing }}
        className="overflow-hidden"
      >
        <p className="mt-4 text-gray-200">{project.description}</p>
        <div className="mt-2 flex items-center justify-end gap-4">
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              className="text-gray-200"
            >
              <CodeBracketIcon className="size-5" />
            </Link>
          )}
          {link && (
            <Link href={link} target="_blank" className="text-gray-200">
              <ArrowTopRightOnSquareIcon className="size-5" />
            </Link>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
