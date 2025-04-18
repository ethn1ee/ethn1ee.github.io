"use client";

import { myEasing } from "@/app/_components/Easing";
import { Project } from "@/types/project";
import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";
import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import CategoryChip from "./CategoryChip";
import { useCategoryContext } from "./contexts/CategoryContext";
import Canvas from "@/app/_components/Canvas";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { currentCategory } = useCategoryContext();

  const [hovered, setHovered] = useState<boolean>(false);
  const isExternal = project.external_link !== null;
  const link = isExternal
    ? project.external_link
    : project.embed_link
      ? `/projects/${project.slug}`
      : null;

  if (currentCategory !== null && currentCategory !== project.category)
    return null;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: myEasing }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative overflow-hidden rounded-xl border border-gray-400 p-4 backdrop-blur-xl"
    >
      <Canvas />

      {/* HEADER */}
      <div className="mb-2 flex justify-between gap-4">
        <p className="leading-tight">
          <CategoryChip text={project.category} size="sm" />
          <span className="ml-2 font-bold text-white">
            {project.title.toUpperCase()}
          </span>
        </p>
        <p className="leading-tight text-nowrap text-gray-200">
          {project.date
            .toLocaleString("en-US", {
              month: "short",
              year: "numeric",
            })
            .toUpperCase()}
        </p>
      </div>
      {/* TAGS */}
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
        {/* DESCRIPTION */}
        {project.description && (
          <p
            className="mt-2 font-sans text-gray-200"
            dangerouslySetInnerHTML={{
              __html: project.description
                .replace(/\\n/g, "\n")
                .replace(/\n/g, "<br />"),
            }}
          />
        )}

        {/* LINKS */}
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
    </motion.div>
  );
};

export default ProjectCard;
