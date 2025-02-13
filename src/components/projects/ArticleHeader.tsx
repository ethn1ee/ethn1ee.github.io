interface ArticleHeaderProps {
  title: string;
  date?: string;
  tags?: string[];
}

const ArticleHeader = ({ title, date, tags }: ArticleHeaderProps) => {
  return (
    <div className="w-full border-b border-gray-300 px-4 py-16 sm:px-[25%]">
      <h1 className="font-oswald mb-6 text-5xl font-bold leading-none">
        {title.toUpperCase()}
      </h1>

      {date && <DetailRow name="DATE" content={date} />}
      {tags && (
        <DetailRow name="TAGS" content={tags.join(", ").toUpperCase()} />
      )}
    </div>
  );
};

interface DetailRowProps {
  name: string;
  content: string;
}

const DetailRow = ({ name, content }: DetailRowProps) => {
  return (
    <small className="mb-2 flex gap-6 text-sm leading-none">
      <span className="font-bold text-gray-200">{name}</span>
      <span className="text-gray-300">{content}</span>
    </small>
  );
};

export default ArticleHeader;
