import { useMemo } from "react";
import { MarkdownDocument } from "@/components/atoms/MarkdownDocument";

type Props = {
  label: string;
  document: string;
};

export const DocumentBody = ({ label, document }: Props) => {
  return (
    <tbody>
      <tr>
        <th className="p-2" colSpan="2">
          {label}
        </th>
        <td className="p-4 align-top" colSpan="3">
          <MarkdownDocument document={document} />
        </td>
      </tr>
    </tbody>
  );
};
