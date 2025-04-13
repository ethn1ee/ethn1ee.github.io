import { markdownToHtml } from "../../../lib/markdown";
import { formatDate } from "@/lib/formatDate";
import { notFound } from "next/navigation";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";

import "./article.scss";
import ArticleHeader from "../_components/ArticleHeader";
import ArticleContent from "../_components/ArticleContent";

interface PostProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPost({ params }: PostProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const contentHtml = await markdownToHtml(post.content);

  return (
    <main className="min-h-screen w-screen overflow-hidden pt-[60px]">
      <ArticleHeader
        title={post.title}
        date={formatDate(post.start_date, post.end_date)}
        tags={post.tags}
      />
      <ArticleContent contentHtml={contentHtml} />
    </main>
  );
}

export const generateStaticParams = async () => {
  const posts = await getAllSlugs();

  return posts.map((post) => ({
    slug: post.slug,
  }));
};
