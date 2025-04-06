import { metadataObject } from "./Metadata";

const InvisibleHeader = () => {
  return (
    <div className="absolute left-0 top-0 hidden">
      <h1>{metadataObject.title}</h1>
      <h2>{metadataObject.description}</h2>
      <p>
        {metadataObject.keywords.map((keyword, index) => (
          <span key={index}>{keyword}, </span>
        ))}
      </p>
    </div>
  );
};

export default InvisibleHeader;
