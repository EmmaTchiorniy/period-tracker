import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useOutletContext } from "react-router";
import { Colour } from "~/constants/colour";
import TooltipIcon from "~/shared/buttons/tool-tip";
import HistoryItem from "./history-item";
import FlowLog from "../flowLog";

interface TrackButtonProps {
  colour: Colour;
  text: string;
}

export default function OffCanvasHistory(props: TrackButtonProps) {
  const { flowLogs }: any = useOutletContext();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="flex flex-row">
        <button
          className="text-white mb-2"
          onClick={handleShow}
          style={{
            backgroundColor: props.colour,
            borderRadius: "10px",
            height: "28px",
            width: "322px",
            fontSize: "12px",
            textAlign: "left",
          }}
        >
          <p className="pl-2.5 mb-0">+ {props.text}</p>
        </button>
        <TooltipIcon text="Edit your logs here" colour={props.colour} />
      </div>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="bottom"
        className="h-50"
      >
        <Offcanvas.Header>
          <Offcanvas.Title>Edit History</Offcanvas.Title>
          <button
            onClick={handleClose}
            style={{
              background: "none",
              border: "none",
              color: Colour.DarkPink,
              fontSize: "14px",
              position: "absolute",
              right: "16px",
              top: "16px",
              cursor: "pointer",
            }}
          >
            Close
          </button>
        </Offcanvas.Header>
        <Offcanvas.Body className="overflow-scroll">
          {flowLogs.length != 0 ? (
            flowLogs
              .sort((a: FlowLog, b: FlowLog) => b.date.diff(a.date))
              .map((log: FlowLog) => (
                <div className="pb-1">
                  <HistoryItem log={log} key={log.date.toString()} />
                  <hr />
                </div>
              ))
          ) : (
            <p>Log your period to see some dates here!</p>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
