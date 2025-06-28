import { useNavigate, useOutletContext } from "react-router";
import DeleteModal from "./delete-modal";
import type dayjs from "dayjs";

interface HistoryItemProps {
  date: dayjs.Dayjs;
}

export default function HistoryItem(props: HistoryItemProps) {
  return (
    <div className="flex flex-row justify-between text-sm">
      <p className="m-0">{props.date.format("MMMM DD, YYYY").toString()}</p>
      <DeleteModal date={props.date} />
    </div>
  );
}
