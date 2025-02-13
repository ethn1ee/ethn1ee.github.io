interface ArticleContentProps {
  contentHtml: string;
}

const ArticleContent = ({ contentHtml }: ArticleContentProps) => {
  return contentHtml.length > 0 ? (
    <article
      className="w-full px-4 py-16 sm:px-[25%]"
      dangerouslySetInnerHTML={{ __html: contentHtml }}
    />
  ) : (
    <div className="flex h-full w-full items-center justify-center px-4 py-16 sm:px-[25%]">
      <p className="text-center text-xl font-bold text-gray-300">COMING SOON!</p>
    </div>
  );
};

export default ArticleContent;
