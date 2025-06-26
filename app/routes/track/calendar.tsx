import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { Calendar } from "@mantine/dates";
import { useOutletContext } from "react-router";

export default function TrackCalendar() {
  const { flowDates, setFlowDates }: any = useOutletContext();

  const [selected, setSelected] = useState<string[]>(flowDates);

  useEffect(() => {
    setSelected(() => flowDates);
  }, [flowDates]);

  const handleSelect = (date: string) => {
    const isSelected = selected.some((s) => dayjs(date).isSame(s, "date"));
    if (isSelected) {
      setFlowDates((current: string[]) =>
        current.filter((d) => !dayjs(d).isSame(date, "date"))
      );
    } else {
      setFlowDates((current: string[]) => [...current, date]);
    }
  };

  return (
    <Calendar
      getDayProps={(date) => ({
        selected: selected.some((s) => dayjs(date).isSame(s, "date")),
        onClick: () => handleSelect(date),
      })}
    />
  );
}
