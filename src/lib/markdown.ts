import rehypeStringify from "rehype-stringify";
import { remark } from "remark";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";

export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(markdown);
  return result.toString();
}
