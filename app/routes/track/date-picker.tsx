import dayjs from "dayjs";
import { useState } from "react";
import { DateInput } from "@mantine/dates";
import "./date-picker.css";

interface DatePickerProps {
  setDate: any;
}

export default function StyledDatePicker(props: DatePickerProps) {
  const [value, setValue] = useState<string | null>(
    dayjs().format("YYYY-MM-DD").toString()
  );

  const onChange = (newValue: string | null) => {
    setValue(newValue);
    props.setDate(dayjs(newValue?.toString()));
  };

  return (
    <DateInput
      value={value}
      maxDate={dayjs().format("YYYY-MM-DD").toString()}
      onChange={onChange}
      label=" "
      placeholder={dayjs().format("MMM DD, YYYY").toString()}
      popoverProps={{ zIndex: 2000 }}
      classNames={{
        levelsGroup: "levels",
        calendarHeader: "header",
        weekday: "weekday",
        day: "day",
        calendarHeaderLevel: "header-level",
      }}
    />
  );
}
