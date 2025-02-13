import { getAllProjects } from "@/lib/projects";

import ProjectCard from "../ProjectCard";

const Projects = async () => {
  const projects = await getAllProjects();

  return (
    <section id="projects" className="h-screen w-screen">
      <ul className="relative ml-0 sm:ml-10 flex flex-col pt-6">
        {projects.map((project, index) => (
          <li key={index}>
            <ProjectCard project={project} index={index} />
          </li>
        ))}
        <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gray-300" />
      </ul>
    </section>
  );
};

export default Projects;
