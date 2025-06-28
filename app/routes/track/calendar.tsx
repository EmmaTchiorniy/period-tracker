import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { Calendar } from "@mantine/dates";
import { useOutletContext } from "react-router";
import "./calendar.css";

export default function TrackCalendar() {
  const { flowDates, setFlowDates }: any = useOutletContext();

  const [selected, setSelected] = useState<dayjs.Dayjs[]>(flowDates);

  useEffect(() => {
    setSelected(() => flowDates);
  }, [flowDates]);

  const handleSelect = (date: dayjs.Dayjs) => {
    const isSelected = selected.some((s) => dayjs(date).isSame(s, "date"));
    if (isSelected) {
      setFlowDates((current: dayjs.Dayjs[]) =>
        current.filter((d) => !dayjs(d).isSame(date, "date"))
      );
    } else {
      setFlowDates((current: dayjs.Dayjs[]) => [...current, date]);
    }
  };

  return (
    <Calendar
      classNames={{
        levelsGroup: "levels",
        calendarHeader: "header",
        weekday: "weekday",
        day: "day",
        calendarHeaderLevel: "header-level",
      }}
      getDayProps={(date) => ({
        selected: selected.some((s) => dayjs(date).isSame(s, "date")),
        onClick: () => handleSelect(dayjs(date)),
      })}
    />
  );
}
