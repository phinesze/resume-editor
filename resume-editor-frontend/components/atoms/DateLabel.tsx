import { useMemo } from "react";

type Props = { value: string };

export const DateLabel = ({ value }: Props) => {
  const dateString = useMemo(() => {
    if (value) {
      const [year, month, day] = value.split("-");
      return `${Number(year)}年${Number(month)}月${
        day ? Number(day) + "日" : ""
      }`;
    } else {
      return null;
    }
  }, [value]);

  return <span>{dateString}</span>;
};
