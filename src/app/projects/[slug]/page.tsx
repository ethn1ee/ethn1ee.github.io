import type Project from "@/types/Project";
import Nav from "../../../components/global/Nav";
import ArticleHeader from "@/components/projects/ArticleHeader";
import getProjectBySlug from "@/lib/projects/getPostBySlug";

interface ProjectProps {
  params: Promise<{ slug: string }>;
}

export default async function Project({ params }: ProjectProps) {
  const project = await getProjectBySlug((await params).slug);

  return (
    <div className="min-h-screen w-screen overflow-hidden">
      <Nav />
      <main>
        <ArticleHeader
          title={project.title}
          date={project.date}
          tags={project.tags}
        />
      </main>
    </div>
  );
}

export const generateStaticParams = async () => {
  const params = [{ slug: "emory-hacks" }];

  return params;
};
