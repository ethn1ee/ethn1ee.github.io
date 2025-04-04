"use server";

import type { Project } from "@/types/project";

import sql from "./db";

export async function getAllProjects(): Promise<Project[]> {
  return await sql`
    SELECT * FROM projects
    ORDER BY 
      end_date DESC,
      start_date DESC
  `;
}

export async function getAllSlugs(): Promise<Pick<Project, "slug">[]> {
  return await sql`SELECT slug FROM projects`;
}

export async function getProjectBySlug(slug: string): Promise<Project> {
  const result = await sql`
    SELECT * FROM projects
    WHERE slug = ${slug}
  `;
  return result[0] as Project;
}

export async function createProject(project: Project): Promise<void> {
  await sql`
    INSERT INTO projects ${sql(project, "title", "slug", "start_date", "end_date", "tags", "content")}
  `;
}

export async function updateProject(project: Project): Promise<void> {
  await sql`
    UPDATE projects
    SET ${sql(project, "title", "slug", "start_date", "end_date", "tags", "content")}
    WHERE slug = ${project.slug}
  `;
}
