import { createElement } from "react";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeReact from "rehype-react";

type Props = { document?: string };

const processor = unified()
  .use(remarkParse)
  .use(remarkRehype)
  .use(rehypeReact, { createElement });

export const MarkdownDocument = ({ document }: Props) => {
  return <section>{processor.processSync(document).result}</section>;
};
