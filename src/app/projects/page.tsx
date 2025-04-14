"use client";

import { getAllProjects } from "@/lib/projects";
import { Project } from "@/types/project";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import ProjectCard from "./_components/ProjectCard";
import { myEasing } from "../_components/Easing";

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const allProjects = await getAllProjects();
      setProjects(allProjects);
    };
    fetchProjects();
  }, []);

  return (
    <div className="sm:ml-10">
      <header className="border-b border-gray-300 p-4 pt-[76px] sm:p-6 sm:pt-[84px]">
        <div className="mb-3 flex h-[30px] items-center sm:h-12">
          <motion.h2
            initial={{ height: "0%" }}
            animate={{ height: "100%" }}
            transition={{ delay: 0.3, duration: 1, ease: myEasing }}
            className="font-oswald overflow-hidden text-3xl leading-none font-bold tracking-tighter sm:text-5xl"
          >
            PROJECTS
          </motion.h2>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5, ease: myEasing }}
          className="text-sm text-gray-300 sm:text-base"
        >
          POWERED BY CURIOSITY & CAFFEINE
        </motion.p>
      </header>
      <main className="p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5, ease: myEasing }}
          className="flex flex-col gap-2 sm:gap-4"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
      </main>
    </div>
  );
};

export default Projects;
