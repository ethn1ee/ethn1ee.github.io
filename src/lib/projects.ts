"use server";

import type { Project } from "@/types/project";

import sql from "./db";

async function setSearchPath() {
  await sql`SET search_path TO portfolio`;
}

export async function getAllProjects(): Promise<Project[]> {
  await setSearchPath();
  return await sql`
    SELECT * FROM projects
    ORDER BY 
      date DESC, title ASC;
  `;
}

export async function getAllProjectSlugs(): Promise<Pick<Project, "slug">[]> {
  await setSearchPath();
  return await sql`
    SELECT slug FROM projects
  `;
}

export async function getProjectBySlug(slug: string): Promise<Project> {
  await setSearchPath();
  const result = await sql`
    SELECT * FROM projects
    WHERE slug = ${slug}
  `;
  return result[0] as Project;
}

export async function createProject(project: Project): Promise<void> {
  await setSearchPath();
  await sql`
    INSERT INTO projects 
    ${sql(project, "slug", "title", "date", "category", "tags", "description", "github", "embed_link", "external_link")}
  `;
}

export async function updatePost(project: Project): Promise<void> {
  await setSearchPath();
  await sql`
    UPDATE projects
    SET ${sql(project, "slug", "title", "date", "category", "tags", "description", "github", "embed_link", "external_link")}
    WHERE slug = ${project.slug}
  `;
}
