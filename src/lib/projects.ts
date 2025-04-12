"use server";

import type { Post } from "@/types/post";

import sql from "./db";

export async function getAllPosts(): Promise<Post[]> {
  return await sql`
    SELECT * FROM projects
    ORDER BY 
      end_date DESC,
      start_date DESC
  `;
}

export async function getAllSlugs(): Promise<Pick<Post, "slug">[]> {
  return await sql`SELECT slug FROM projects`;
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const result = await sql`
    SELECT * FROM projects
    WHERE slug = ${slug}
  `;
  return result[0] as Post;
}

export async function createPost(post: Post): Promise<void> {
  await sql`
    INSERT INTO projects ${sql(post, "title", "slug", "start_date", "end_date", "tags", "content")}
  `;
}

export async function updatePost(post: Post): Promise<void> {
  await sql`
    UPDATE projects
    SET ${sql(post, "title", "slug", "start_date", "end_date", "tags", "content")}
    WHERE slug = ${post.slug}
  `;
}
