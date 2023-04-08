import { useMemo } from "react";
import { CareerTeamNumber } from "@backend/types/Career";

type Props = { value: CareerTeamNumber };

export const TeamNumberLabel = ({ value }: Props) => {
  const teamNumberStr = useMemo(
    () => (Array.isArray(value) ? `${value[0]}~${value[1]}` : `${value}`),
    [value]
  );
  return <span>{teamNumberStr}</span>;
};
