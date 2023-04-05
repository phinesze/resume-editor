type Props = { path: string };

export const MarkdownDocument = ({ path }: Props) => {
  return <section>{"path = " + path}</section>;
};
