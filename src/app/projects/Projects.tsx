"use client";

import { myEasing } from "@/components/Easing";
import NoiseBG from "@/components/NoiseBG";
import projects from "@/data/projects.json";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

import Project from "../../types/Project";
import ProjectCard from "./ProjectCard";

const data = projects as Project[];

const Projects = () => {
  const [hovered, setHovered] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <section id="projects" className="relative h-screen px-[20vw] pt-[20vh]">
      <NoiseBG />

      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex flex-col"
      >
        {/* SELECTOR */}
        <motion.div
          animate={{ y: 120 * hovered, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.5, ease: myEasing }}
          className="pointer-events-none absolute left-0 h-[120px] w-screen"
        >
          <AnimatePresence>
            <motion.div
              key={hovered}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Image
                src={data[hovered]?.images[0].src}
                alt=""
                fill
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
          <div
            style={{
              background:
                "linear-gradient(90deg, var(--bg, #060606ff) 0%, #2E2E2Eaa 50%, var(--bg, #060606ff) 100%)",
            }}
            className="absolute left-0 top-0 size-full backdrop-blur-lg"
          />
          <NoiseBG />
        </motion.div>

        {data.map((project, index) => (
          <div key={index} onMouseEnter={() => setHovered(index)}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
