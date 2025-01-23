interface Project {
  id: number;
  title: string;
  time: string;
  tags: string[];
  desc: string;
  tech: string[];
  links: { name: string; href: string }[];
}

export default Project;