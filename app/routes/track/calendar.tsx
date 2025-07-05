import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { Calendar } from "@mantine/dates";
import { useOutletContext } from "react-router";
import "./calendar.css";
import type { MantineSize } from "@mantine/core";
import FlowLog from "./flowLog";

export default function TrackCalendar() {
  const { flowLogs, setFlowLogs }: any = useOutletContext();
  const flowDates = () => flowLogs.map((log: FlowLog) => log.date);

  const [selected, setSelected] = useState<dayjs.Dayjs[]>(flowDates);

  useEffect(() => {
    setSelected(flowDates);
  }, [flowLogs]);

  const handleSelect = (date: dayjs.Dayjs) => {
    const isSelected = selected.some((s) => dayjs(date).isSame(s, "date"));
    if (isSelected) {
      setFlowLogs((current: FlowLog[]) =>
        current.filter((log) => !dayjs(log.date).isSame(date, "date"))
      );
    } else {
      setFlowLogs((current: FlowLog[]) => [...current, new FlowLog(date)]);
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
