import { useMemo } from "react";
import { DateLabel } from "@/components/atoms/DateLabel";
import { DocumentBody } from "@/components/organisms/CareerTable/DocumentBody";
import { Projectbody } from "@/components/organisms/CareerTable/ProjectsBody";

type Props = {};

export const CareerTable = ({}: Props) => {
  return (
    <>
      <table className="table-fixed target-table">
        <caption className="relative mb-5">
          <div className="text-5xl">職務経歴書</div>
          <div className="absolute right-0 bottom-0 text-sm">
            <DateLabel value="2023-04-03" /> 更新
          </div>
        </caption>
        <colgroup>
          <col className="w-[8mm]" />
          <col className="w-0.5 w-[8mm]" />
          <col className="w-[21mm]" />
          <col className="w-[auto]" />
          <col className="w-[50mm]" />
        </colgroup>
        <DocumentBody label="自己PR" markdown-path="/about" />
        <DocumentBody label="主な経験" markdown-path="/frameworks" />
        <DocumentBody label="アカウント" markdown-path="/accounts" />
        <Projectbody />
        <DocumentBody label="一問一答" markdown-path="/supplement" />
      </table>
    </>
  );
};
