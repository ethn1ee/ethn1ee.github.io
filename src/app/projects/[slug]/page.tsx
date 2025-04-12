interface ProjectProps {
  params: Promise<{ slug: string }>;
}

const Project = async ({ params }: ProjectProps) => {
  const { slug } = await params;

  return (
    <main className="h-screen w-screen pl-10">
      <iframe
        src={`/projects/${slug}/index.html`}
        className="h-full w-full border-0"
        title={slug}
      ></iframe>
    </main>
  );
};

export default Project;
