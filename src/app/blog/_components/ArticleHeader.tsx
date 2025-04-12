interface ArticleHeaderProps {
  title: string;
  date?: string;
  tags?: string[];
}

const ArticleHeader = ({ title, date, tags }: ArticleHeaderProps) => {
  return (
    <div className="flex w-full justify-center border-b border-gray-300 px-4 py-16">
      <div className="w-full sm:w-1/2 max-w-5xl">
        <h1 className="font-oswald mb-6 text-5xl font-bold leading-none">
          {title.toUpperCase()}
        </h1>

        {date && <DetailRow name="DATE" content={date} />}
        {tags && (
          <DetailRow name="TAGS" content={tags.join(", ").toUpperCase()} />
        )}
      </div>
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
