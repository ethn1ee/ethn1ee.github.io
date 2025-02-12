// app/admin/new-post.tsx
"use client";

import slugify from "@/lib/slugify";
import { FormEvent, useState } from "react";

type FormData = {
  title: string;
  startDate: string;
  endDate: string;
  tags: string;
  content: string;
};

export default function NewPostForm() {
  const [form, setForm] = useState<FormData>({
    title: "",
    startDate: "",
    endDate: "",
    tags: "",
    content: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const tagsArray = form.tags.split(",").map((tag) => tag.trim());

    const res = await fetch("/api/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: form.title,
        slug: slugify(form.title),
        start_date: form.startDate,
        end_date: form.endDate,
        tags: tagsArray,
        content: form.content,
      }),
    });

    const data = await res.json();
    if (res.ok) {
      console.log("Post created:", data);
      // Optionally clear the form or redirect.
    } else {
      console.error("Error creating post:", data.error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <input
        type="date"
        placeholder="Start Date"
        value={form.startDate}
        onChange={(e) => setForm({ ...form, startDate: e.target.value })}
      />
      <input
        type="date"
        placeholder="End Date"
        value={form.endDate}
        onChange={(e) => setForm({ ...form, endDate: e.target.value })}
      />
      <input
        type="text"
        placeholder="Tags (comma separated)"
        value={form.tags}
        onChange={(e) => setForm({ ...form, tags: e.target.value })}
      />
      <textarea
        placeholder="Markdown content"
        value={form.content}
        onChange={(e) => setForm({ ...form, content: e.target.value })}
      />
      <button type="submit">Create Post</button>
    </form>
  );
}
