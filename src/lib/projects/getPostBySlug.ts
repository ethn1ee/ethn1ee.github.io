import type Project from "@/types/Project";

const getProjectBySlug = async (slug: string): Promise<Project> => {
  console.log("Getting " + slug);
  return {
    id: 0,
    title: "Emory Hacks",
    date: "SEP 2024 - JAN 2025",
    tags: ["Web Development", "UI/UX Design"],
    desc: "Created Emory's inaugural hackathon website, featuring dynamic animations and space-themed graphics.",
    tech: ["Next.js", "JavaScript", "Motion for React", "GSAP"],
    links: [
      { name: "Emory Hacks", href: "https://www.emoryhacks.com/" },
      {
        name: "GitHub",
        href: "https://github.com/project-emory/emory-hacks.github.io",
      },
    ],
    images: [
      {
        src: "/images/projects/emory_hacks_1.png",
        alt: "Emory Hacks 1",
        orientation: "portrait",
      },
      {
        src: "/images/projects/emory_hacks_2.png",
        alt: "Emory Hacks 2",
        orientation: "landscape",
      },
    ],
  };
};

export default getProjectBySlug;