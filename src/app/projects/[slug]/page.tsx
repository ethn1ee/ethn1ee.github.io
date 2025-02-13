import type { Project } from "@/types/project";
import ArticleHeader from "@/components/projects/ArticleHeader";

import { markdownToHtml } from "../../../lib/markdown";
import { formatDate } from "@/lib/formatDate";
import { notFound } from "next/navigation";
import { getAllSlugs, getProjectBySlug } from "@/lib/projects";

import "./article.scss";
import ArticleContent from "@/components/projects/ArticleContent";

interface ProjectProps {
  params: Promise<{ slug: string }>;
}

export default async function Project({ params }: ProjectProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const contentHtml = await markdownToHtml(project.content);

  return (
    <main className="min-h-screen w-screen overflow-hidden pt-[60px]">
      <ArticleHeader
        title={project.title}
        date={formatDate(project.start_date, project.end_date)}
        tags={project.tags}
      />
      <ArticleContent contentHtml={contentHtml} />
    </main>
  );
}

export const generateStaticParams = async () => {
  const projects = await getAllSlugs();

  return projects.map((project) => ({
    slug: project.slug,
  }));
};
