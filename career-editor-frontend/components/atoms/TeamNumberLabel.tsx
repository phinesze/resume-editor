import { useMemo } from "react";

type Props = { value: number | [number, number] };

export const TeamNumberLabel = ({ value }: Props) => {
  const teamNumberStr = useMemo(
    () => (Array.isArray(value) ? `${value[0]}~${value[1]}` : `${value}`),
    [value]
  );
  return <span>{teamNumberStr}</span>;
};
