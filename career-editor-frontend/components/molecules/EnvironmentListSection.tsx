import { useMemo } from "react";
import { CareerEnvironmentList } from "@/types/Career";
import { EnvironmentLabel } from "@/components/atoms/EnvironmentLabel";

type Props = { environments: CareerEnvironmentList };

export const EnvironmentListSection = ({ environments }: Props) => {
  return (
    <>
      {Object.entries(environments).map(([name, elements]) => (
        <section key={name} className="mb-3">
          <h4 className="font-bold">{`【${name}】`}</h4>
          <div>
            {elements?.map((element, index) => {
              return (
                <div key={index}>
                  <EnvironmentLabel element={element} />
                  {index + 1 < elements.length && <span>、</span>}
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </>
  );
};
