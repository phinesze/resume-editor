import { useMemo } from "react";

type EnvironmentElement = string | [string, { version?: number | string }?];

type Props = { element: EnvironmentElement };

export const EnvironmentLabel = ({ element }: Props) => {
  const elementName = useMemo(() => {
    return typeof element === "string" ? element : element[0];
  }, [element]);

  const elementOptions = useMemo(() => {
    return typeof element === "string" ? undefined : element[1];
  }, [element]);

  return (
    <div className="inline-block">
      <span>{elementName}</span>
      {elementOptions && (
        <>{elementOptions.version && <i> (v{elementOptions.version}) </i>}</>
      )}
    </div>
  );
};
