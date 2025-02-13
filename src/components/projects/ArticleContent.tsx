interface ArticleContentProps {
  contentHtml: string;
}

const ArticleContent = ({ contentHtml }: ArticleContentProps) => {
  return (
    <article
      className="w-full px-4 py-16 sm:px-[25%]"
      dangerouslySetInnerHTML={{ __html: contentHtml }}
    />
  );
};

export default ArticleContent;
