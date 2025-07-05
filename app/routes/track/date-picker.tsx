import dayjs from "dayjs";
import { useState } from "react";
import { DatePickerInput } from "@mantine/dates";
import "./date-picker.css";
import FlowLog from "./flowLog";

interface DatePickerProps {
  setLog: any;
}

export default function StyledDatePicker(props: DatePickerProps) {
  const [value, setValue] = useState<string | null>(
    dayjs().format("YYYY-MM-DD").toString()
  );

  const onChange = (newValue: string | null) => {
    setValue(newValue);
    props.setLog(new FlowLog(dayjs(newValue?.toString())));
  };

  return (
    <DatePickerInput
      value={value}
      maxDate={dayjs().format("YYYY-MM-DD").toString()}
      onChange={onChange}
      label=" "
      placeholder={dayjs().format("MMM DD, YYYY").toString()}
      popoverProps={{ zIndex: 2000 }}
      classNames={{
        weekday: "weekday",
        day: "day",
        calendarHeaderLevel: "header-level",
        input: "input",
      }}
    />
  );
}
