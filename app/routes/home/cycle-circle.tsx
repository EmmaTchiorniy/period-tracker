import dayjs from "dayjs";
import "./home.css";
import { useOutletContext } from "react-router";
import { Colour } from "~/constants/colour";
import { useEffect, useState } from "react";
import type FlowLog from "../track/flowLog";

interface CycleCircleProps {
  day: dayjs.Dayjs;
}

export default function CycleCircle(props: CycleCircleProps) {
  const { flowLogs }: any = useOutletContext();
  const [colour, setColour] = useState(Colour.LightLightGrey);

  useEffect(() => {
    if (flowLogs.some((log: FlowLog) => props.day.isSame(log.date, "date"))) {
      if (dayjs().diff(props.day) < 0) {
        setColour(() => Colour.LightPink);
      } else {
        setColour(() => Colour.Pink);
      }
    } else {
      setColour(() => Colour.LightLightGrey);
    }
  }, [flowLogs]);

  return (
    <div className="flex flex-col items-center">
      <span className="circle mb-2" style={{ backgroundColor: colour }} />
      <p
        style={{
          fontSize: "10px",
          color: props.day.isSame(dayjs(), "day") ? "black" : Colour.LightGrey,
        }}
      >
        {props.day.date()}
      </p>
    </div>
  );
}
