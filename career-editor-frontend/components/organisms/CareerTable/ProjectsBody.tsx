import { useMemo } from "react";
import { careers } from "@backend/constants/careers";
import { IntervalDateLabel } from "@/components/molecules/IntervalDateLabel";
import { MarkdownDocument } from "@/components/atoms/MarkdownDocument";
import { EnvironmentListSection } from "@/components/molecules/EnvironmentListSection";
import { TeamNumberLabel } from "@/components/atoms/TeamNumberLabel";

type Props = {};
const getRowSpan = (career: any) => {
  let rowSpan = 2;
  if (career.teams) {
    rowSpan += 2;
  }
  return rowSpan;
};

export const Projectbody = ({}: Props) => {
  return (
    <>
      {careers.map((company, index) => {
        return company.careers.map((career, index) => (
          <tbody key={career.id}>
            <tr>
              <td className="bg-gray-400" rowSpan={getRowSpan(career)}>
                {company.company}
              </td>
              <td className="bg-lime-300" rowSpan={getRowSpan(career)}>
                #{career.id}
              </td>
              <th className="p-2">期間</th>
              <td className="font-bold p-2 bg-cyan-100">{career.title}</td>
              <th className="p-2">言語・フレームワーク</th>
            </tr>
            <tr>
              <td>
                {career.times && <IntervalDateLabel value={career.times} />}
              </td>
              <td className="align-top" rowSpan={getRowSpan(career) - 1}>
                <MarkdownDocument document={career.main} />
              </td>
              <td className="align-top" rowSpan={getRowSpan(career) - 1}>
                {career.environments && (
                  <EnvironmentListSection environments={career.environments} />
                )}
              </td>
            </tr>
            {career.teams && (
              <>
                <tr className="h-10">
                  <th>チーム人数</th>
                </tr>
                <tr>
                  <td className="text-center">
                    <ul className="inline-block w-fit">
                      {Object.entries(career.teams).map(
                        ([team, teamNumber]) => {
                          return (
                            <li key={teamNumber} className="text-left">
                              {team}:
                              <TeamNumberLabel value={teamNumber} />
                            </li>
                          );
                        }
                      )}
                    </ul>
                  </td>
                </tr>
              </>
            )}
          </tbody>
        ));
      })}
    </>
  );
};
