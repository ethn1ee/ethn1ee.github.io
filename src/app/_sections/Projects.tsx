import { getAllProjects } from "@/lib/projects";
import ProjectCardList from "../_components/ProjectCardList";

const Projects = async () => {
  const projects = await getAllProjects();

  return (
    <section id="projects" className="h-screen w-screen">
      <ProjectCardList projects={projects} />
    </section>
  );
};

export default Projects;
