import { useMemo } from "react";
import { MarkdownDocument } from "@/components/atoms/MarkdownDocument";

type Props = {
  label: string;
  markdownPath: string;
};

export const DocumentBody = ({ label, markdownPath }: Props) => {
  return (
    <tbody>
      <tr>
        <th className="p-2" colSpan="2">
          {label}
        </th>
        <td className="p-4 align-top" colSpan="3">
          <MarkdownDocument path="{markdownPath}" />
        </td>
      </tr>
    </tbody>
  );
};
