import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { Calendar } from "@mantine/dates";
import { useOutletContext } from "react-router";
import "./calendar.css";
import type { MantineSize } from "@mantine/core";

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

  const size: MantineSize = "xs";

  return (
    <Calendar
      classNames={{
        levelsGroup: "levels",
        calendarHeader: "header",
        weekday: "weekday",
        day: "day",
        calendarHeaderLevel: "header-level",
      }}
      size={size}
      getDayProps={(date) => ({
        selected: selected.some((s) => dayjs(date).isSame(s, "date")),
        onClick: () => handleSelect(dayjs(date)),
      })}
    />
  );
}
