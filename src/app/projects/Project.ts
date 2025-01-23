interface Project {
  id: number;
  title: string;
  time: string;
  tags: string[];
  desc: string;
  tech: string[];
  links: { name: string; href: string }[];
  images: { src: string; alt: string; orientation: "landscape" | "portrait" }[];
}

export default Project;
