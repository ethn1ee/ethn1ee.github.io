interface ArticleContentProps {
  contentHtml: string;
}

const ArticleContent = ({ contentHtml }: ArticleContentProps) => {
  return (
    <div className="flex justify-center px-4 py-16">
      {contentHtml.length > 0 ? (
        <article
          className="w-full sm:w-1/2 max-w-5xl"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      ) : (
        <em className="text-xl font-bold text-gray-300">COMING SOON!</em>
      )}
    </div>
  );
};

export default ArticleContent;
