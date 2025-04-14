"use client";

import { Project } from "@/types/project";
import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";
import {
  CodeBracketIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";
import { myEasing } from "@/app/_components/Easing";

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
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="cursor-default rounded-xl border border-gray-400 p-4 backdrop-blur-2xl"
    >
      <div className="mb-2 flex items-center justify-between">
        <p className="leading-none font-bold text-white">
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
        animate={{
          height: hovered ? "auto" : 0,
        }}
        transition={{ duration: 0.5, ease: myEasing }}
        className="overflow-hidden"
      >
        <p className="mt-2 font-sans text-gray-200">{project.description}</p>

        <div className="mt-2 flex items-center justify-end gap-2">
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              className="text-gray-200"
            >
              <motion.div
                whileHover={{
                  backgroundColor: "var(--color-white)",
                  color: "var(--color-black)",
                }}
                transition={{ duration: 0.5, ease: myEasing }}
                className="flex items-center justify-center rounded-lg p-1"
              >
                <CodeBracketIcon className="size-5" />
              </motion.div>
            </Link>
          )}
          {link && (
            <Link href={link} target="_blank" className="text-gray-200">
              <motion.div
                whileHover={{
                  backgroundColor: "var(--color-white)",
                  color: "var(--color-black)",
                }}
                transition={{ duration: 0.5, ease: myEasing }}
                className="flex items-center justify-center rounded-lg p-1"
              >
                <ArrowTopRightOnSquareIcon className="size-5" />
              </motion.div>
            </Link>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
