"use client";

import { myEasing } from "@/components/global/Easing";
import { getAllProjects } from "@/lib/projects";
import { Project } from "@/types/project";
import { motion } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import ProjectCard from "./_components/ProjectCard";

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      setProjects(await getAllProjects());
    };
    fetchProjects();
  }, []);

  return (
    <div className="ml-10">
      <header className="border-b border-gray-300 p-6 pt-[84px]">
        <div className="mb-3 flex h-12 items-center">
          <motion.h2
            initial={{ height: "0%" }}
            animate={{ height: "100%" }}
            transition={{ delay: 0.3, duration: 1, ease: myEasing }}
            className="font-oswald overflow-hidden text-5xl leading-none font-bold tracking-tighter"
          >
            PROJECTS
          </motion.h2>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5, ease: myEasing }}
          className="text-gray-300"
        >
          POWERED BY CURIOSITY & CAFFEINE
        </motion.p>
      </header>
      <main className="p-6">
        <div className="flex flex-col gap-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Projects;
