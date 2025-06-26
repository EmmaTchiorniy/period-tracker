import * as React from "react";
import dayjs from "dayjs";
import { Stack } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

interface DatePickerProps {
  setDate: any;
}

export default function StyledDatePicker(props: DatePickerProps) {
  const [value, setValue] = React.useState(dayjs());

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={2}>
        <DatePicker
          value={value}
          onAccept={(value) => {
            props.setDate(value);
          }}
          onChange={(newValue) => {
            if (newValue != null) {
              setValue(newValue);
            }
          }}
          format="MMM D, YYYY"
          slotProps={{
            textField: {
              variant: "standard",
              InputProps: {
                disableUnderline: true,
              },
              sx: {
                backgroundColor: "#f5f5f5",
                borderRadius: "10px",
                width: "180px",
                height: "32px",
                padding: "0 12px",
                "& .MuiInputBase-root": {
                  backgroundColor: "#f5f5f5",
                  borderRadius: "10px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  "&:before": {
                    display: "none",
                  },
                  "&:after": {
                    display: "none",
                  },
                },
                "& .MuiInputBase-input": {
                  fontFamily: "mono",
                  fontSize: "14px",
                  color: "#333",
                  textAlign: "left",
                  lineHeight: "40px",
                },
                "& .MuiInputAdornment-root": {
                  marginLeft: "8px",
                  marginBottom: "4px",
                },
              },
            },
          }}
        />
      </Stack>
    </LocalizationProvider>
  );
}
