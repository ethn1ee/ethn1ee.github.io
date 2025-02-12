import sql from "@/lib/db";
import { Project } from "@/types/project";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function GET() {
  try {
    const projects: Project[] = await sql`SELECT * FROM projects`;
    return NextResponse.json(projects);
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Error fetching projects";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { title, slug, startDate, endDate, tags, content } =
      await request.json();

    // Insert new post into the database.
    const [post]: Project[] = await sql`
      INSERT INTO projects (title, slug, "startDate", "endDate", tags, content)
      VALUES (${title}, ${slug}, ${startDate}, ${endDate}, ${tags}, ${content})
      RETURNING *
    `;
    return NextResponse.json(post, { status: 201 });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Error creating project";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
