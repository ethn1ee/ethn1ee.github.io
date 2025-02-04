const InvisibleHeader = () => {
  const title = "Taehoon Lee - Creative Developer";
  const description = `Computer Science and Psychology student at Emory University, 
  passionate about building user-friendly, AI-powered, and innovative software. 
  With experience at UrsaTech and eStreamly, I specialize in merging technology with 
  human behavior to create intuitive, high-impact digital solutions. Explore my portfolio 
  to see how I design cutting-edge software that enhances user experiences.`;
  const keywords = [
    "Creative Developer",
    "Portfolio",
    "Web Development",
    "UI/UX Design",
    "Taehoon",
    "Taehoon Lee",
    "Ethan",
    "Ethan Lee",
    "Lee",
    "GitHub",
    "Software",
    "Developer",
    "Projects",
    "ethn1ee",
    "ethn1ee.github.io",
    "Taehoon Portfolio",
    "Taehoon Lee Portfolio",
    "Ethan Portfolio",
    "Ethan Lee Portfolio",
    "Developer",
    "Software",
    "Computer Science",
    "Psychology",
    "Emory",
    "이태훈",
    "태훈",
  ];

  return (
    <div className="absolute top-0 left-0 hidden">
      <h1>{title}</h1>
      <h2>{description}</h2>
      <p>
        {keywords.map((keyword, index) => (
          <span key={index}>{keyword}, </span>
        ))}
      </p>
    </div>
  );
};

export default InvisibleHeader;
