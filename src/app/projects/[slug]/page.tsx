import { getAllProjectSlugs, getProjectBySlug } from "@/lib/projects";
import { notFound } from "next/navigation";

interface ProjectProps {
  params: Promise<{ slug: string }>;
}

const Project = async ({ params }: ProjectProps) => {
  const { slug } = await params;

  const project = await getProjectBySlug(slug);

  if (!project || !project.embed_link) {
    notFound();
  }

  return (
    <main className="h-screen w-screen pl-10">
      <iframe
        src={project.embed_link}
        className="h-full w-full border-0"
        title={slug}
      ></iframe>
    </main>
  );
};

export const generateStaticParams = async () => {
  const projects = await getAllProjectSlugs();

  return projects.map((project) => ({
    slug: project.slug,
  }));
};

export default Project;
