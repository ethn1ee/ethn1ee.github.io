import type { Project } from "@/types/project";
import Nav from "../../../components/global/Nav";
import ArticleHeader from "@/components/projects/ArticleHeader";

import sql from "../../../lib/db";
import { markdownToHtml } from "../../../lib/markdown";

interface ProjectProps {
  params: Promise<{ slug: string }>;
}

export default async function Project({ params }: ProjectProps) {
  const { slug } = await params;
  const [project]: Project[] =
    await sql`SELECT * FROM projects WHERE slug = ${slug}`;

  if (!project) {
    return <div>Project not found</div>;
  }

  const contentHtml = await markdownToHtml(project.content);

  return (
    <div className="min-h-screen w-screen overflow-hidden">
      <Nav />
      <main>
        <ArticleHeader
          title={project.title}
          date={`${project.startDate} - ${project.endDate}`}
          tags={project.tags}
        />
        <article dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </main>
    </div>
  );
}

export const generateStaticParams = async () => {
  const projects: Pick<Project, "slug">[] =
    await sql`SELECT slug FROM projects`;

  return projects.map((project) => ({
    slug: project.slug,
  }));
};
