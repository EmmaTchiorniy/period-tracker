import { useNavigate, useOutletContext } from "react-router";
import DeleteModal from "./delete-modal";
import type FlowLog from "../flowLog";

interface HistoryItemProps {
  log: FlowLog;
}

export default function HistoryItem(props: HistoryItemProps) {
  return (
    <div className="flex flex-row justify-between text-sm">
      <div className="flex flex-col justify-start">
        <p className="mb-1">
          {props.log.date.format("MMMM DD, YYYY").toString()}
        </p>
        <p className="m-0 text-gray-500 text-xs">{props.log.intensity}</p>
      </div>
      <DeleteModal log={props.log} />
    </div>
  );
}
