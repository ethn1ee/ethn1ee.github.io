"use client";

import ArticleHeader from "@/components/projects/ArticleHeader";
import { createProject, getAllSlugs, updateProject } from "@/lib/projects";
import slugify from "@/lib/slugify";
import { Project } from "@/types/project";
import { motion } from "motion/react";
import { FormEvent, useState } from "react";

type FormData = {
  title: string;
  start_date: string;
  end_date: string;
  tags: string;
  content: string;
};

export default function NewProject() {
  const [form, setForm] = useState<FormData>({
    title: "",
    start_date: "",
    end_date: "",
    tags: "",
    content: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const tagsArray = form.tags.split(",").map((tag) => tag.trim());

    const newProject = {
      ...form,
      start_date: new Date(form.start_date),
      end_date: new Date(form.end_date),
      slug: slugify(form.title),
      tags: tagsArray,
    } satisfies Project;

    const allSlugs = (await getAllSlugs()).map(
      (project: Pick<Project, "slug">) => project.slug,
    );

    if (allSlugs.includes(newProject.slug)) {
      updateProject(newProject).then(() => {
        setForm({
          title: "",
          start_date: "",
          end_date: "",
          tags: "",
          content: "",
        });
        alert("Project updated successfully!");
      });
    } else {
      createProject(newProject).then(() => {
        setForm({
          title: "",
          start_date: "",
          end_date: "",
          tags: "",
          content: "",
        });
        alert("Project created successfully!");
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const content = event.target?.result as string;
        setForm({ ...form, content });
      };
      reader.onerror = (error) => {
        console.error("File reading error:", error);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="min-h-screen pt-[60px]">
      <main>
        <ArticleHeader title="Create / Update Project" />

        <form onSubmit={handleSubmit} className="px-[25vw] pt-10">
          <Input
            type="text"
            placeholder="Title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
          <Input
            type="date"
            placeholder="Start Date"
            value={form.start_date}
            onChange={(e) => setForm({ ...form, start_date: e.target.value })}
          />
          <Input
            type="date"
            placeholder="End Date"
            value={form.end_date}
            onChange={(e) => setForm({ ...form, end_date: e.target.value })}
          />
          <Input
            type="text"
            placeholder="Tags (comma separated)"
            value={form.tags}
            onChange={(e) => setForm({ ...form, tags: e.target.value })}
          />
          <Input
            type="file"
            accept=".md"
            placeholder="Content"
            onChange={handleFileChange}
          />

          <motion.button
            type="submit"
            whileHover={{ opacity: 0.6 }}
            className="mt-4 w-full rounded bg-white p-4 font-bold text-black"
          >
            CREATE POST
          </motion.button>
        </form>
      </main>
    </div>
  );
}

interface InputProps {
  type: string;
  placeholder: string;
  value?: string;
  accept?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ type, placeholder, value, onChange }: InputProps) => {
  return (
    <>
      <label className="mb-2 block text-sm text-gray-200">
        {placeholder.toUpperCase()}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="mb-4 w-full rounded border border-gray-300 bg-transparent p-2"
      />
    </>
  );
};
