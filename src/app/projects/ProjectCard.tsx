"use client";

import { ABCFavorit } from "../_components/Fonts";
import { motion } from "motion/react";
import Project from "./Project";
import NoiseBG from "../_components/NoiseBG";

interface ProjectCardProps {
  project: Project;
  setActiveIndex: (index: number) => void;
  activeIndex: number;
}

const ProjectCard = ({
  project,
  setActiveIndex,
  activeIndex,
}: ProjectCardProps) => {
  const isActive = project.id === activeIndex;

  return (
    <motion.div
      animate={{
        width: isActive ? 480 : 200,
        transition: {
          ease: "circOut",
          duration: 0.5,
        },
      }}
      onClick={() => setActiveIndex(isActive ? -1 : project.id)}
      className={
        ABCFavorit.extended.className +
        " p-4 shrink-0 w-[480px] h-screen relative cursor-pointer overflow-visible"
      }
    >
      {/* NOISE */}
      <motion.div
        whileHover={isActive ? {} : { opacity: 0.6 }}
        animate={{ opacity: isActive ? 0 : 0.3 }}
      >
        <NoiseBG />
      </motion.div>

      {/* DATE */}
      <motion.p
        animate={{ opacity: isActive ? 1 : 0 }}
        className={
          ABCFavorit.mono.className +
          " absolute -top-5 left-3 text-xs text-gray-200"
        }
      >
        {project.time}
      </motion.p>

      {/* BORDER */}
      <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-gray-300 to-transparent" />

      {/* CONTENT */}
      <div className="w-full h-full overflow-hidden">
        {/* HEADER */}
        <div className="flex justify-between w-full relative z-10">
          <motion.div
            layout
            style={{
              justifyContent: isActive ? "start" : "space-between",
            }}
            transition={{ ease: "circOut", duration: 0.5 }}
            className="flex w-full h-fit"
          >
            <span className="mr-4 text-gray-300 text-xs">{project.id + 1}</span>
            <h2 className="inline font-bold leading-none">{project.title}</h2>
          </motion.div>

          <motion.ul
            animate={{
              opacity: isActive ? 1 : 0,
              width: isActive ? "auto" : 0,
            }}
            transition={{ ease: "circOut", duration: 0.5 }}
            className={
              ABCFavorit.mono.className +
              " text-right text-xs text-gray-100 text-nowrap"
            }
          >
            {project.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </motion.ul>
        </div>

        {/* IMAGES */}
        {isActive && (
          <div className="bg-gray-800 w-full h-1/3 my-32 relative z-10"></div>
        )}

        {/* DESCRIPTION */}
        {isActive && (
          <div className="mx-6 flex flex-col gap-10 relative z-10">
            <div className="flex justify-between w-full">
              <h3 className="font-bold text-gray-300">ABOUT</h3>
              <p className="text-gray-100 text-xs w-3/5">{project.desc}</p>
            </div>

            <div className="flex justify-between w-full">
              <h3 className="font-bold text-gray-300">MADE WITH</h3>
              <p className="text-gray-100 text-xs w-3/5">
                {project.tech.map((tech, index) => (
                  <span key={index}>
                    {tech}
                    {index !== project.tech.length - 1 ? ", " : ""}
                  </span>
                ))}
              </p>
            </div>

            <div className="flex justify-between w-full">
              <h3 className="font-bold text-gray-300">VISIT</h3>
              <ul className="text-gray-100 text-xs w-3/5">
                {project.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
