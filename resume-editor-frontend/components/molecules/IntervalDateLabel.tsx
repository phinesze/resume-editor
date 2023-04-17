import { useMemo } from "react";
import { startedDevelopmentServer } from "next/dist/build/output";
import { DateLabel } from "@/components/atoms/DateLabel";

type Props = {
  value: {
    start: string;
    end?: string;
  };
};

export const IntervalDateLabel = ({ value: { start, end } }: Props) => {
  const months = useMemo(() => {
    const getMonthNum = (date: Date) =>
      date.getFullYear() * 12 + date.getMonth();
    if (!end) {
      return null;
    }
    const startDate = new Date(start);
    const endDate = new Date(end);
    return 1 + getMonthNum(endDate) - getMonthNum(startDate);
  }, [start, end]);

  const yearCount = useMemo(
    () => (months && months.value ? Math.floor(months.value / 12) : null),
    [start, end]
  );

  return (
    <div>
      <DateLabel value={start} />
      〜
      <DateLabel value={end} />
      {months ? (
        <div>{`(${yearCount ? `${yearCount}年` : ""}${months % 12}ヶ月)`}</div>
      ) : (
        <div>(進行中)</div>
      )}
    </div>
  );
};
