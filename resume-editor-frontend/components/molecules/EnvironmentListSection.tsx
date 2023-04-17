import { useMemo } from "react";
import { CareerEnvironmentList } from "@/../../../e-editor-backend/src/types/Career";
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
                <>
                  <EnvironmentLabel key={index} element={element} />
                  {index + 1 < elements.length && (
                    <span key={`${index}-d`}>、</span>
                  )}
                </>
              );
            })}
          </div>
        </section>
      ))}
    </>
  );
};
