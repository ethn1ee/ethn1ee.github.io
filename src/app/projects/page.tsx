"use client";

import { getAllProjectCategories, getAllProjects } from "@/lib/projects";
import { Project } from "@/types/project";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { myEasing } from "../_components/Easing";
import ProjectCard from "./_components/ProjectCard";
import CategoryChip from "./_components/CategoryChip";
import { CategoryContextProvider } from "./_components/contexts/CategoryContext";

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const allProjects = await getAllProjects();
      setProjects(allProjects);
    };

    const fetchCategories = async () => {
      const allCategories = await getAllProjectCategories();
      setCategories(allCategories);
    };

    fetchProjects();
    fetchCategories();
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
        <CategoryContextProvider>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5, ease: myEasing }}
            className="mb-4 flex gap-2"
          >
            <CategoryChip text="All" size="md" />
            {categories.map((category, index) => (
              <CategoryChip key={index} text={category} size="md" />
            ))}
          </motion.div>

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
        </CategoryContextProvider>
      </main>
    </div>
  );
};

export default Projects;
