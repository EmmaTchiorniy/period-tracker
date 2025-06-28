import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useOutletContext } from "react-router";
import { Colour } from "~/constants/colour";
import TooltipIcon from "~/shared/buttons/tool-tip";
import HistoryItem from "./history-item";
import type { Dayjs } from "dayjs";
import type dayjs from "dayjs";

interface TrackButtonProps {
  colour: Colour;
  text: string;
}

export default function OffCanvasHistory(props: TrackButtonProps) {
  const { flowDates }: any = useOutletContext<Dayjs[]>();

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
        <TooltipIcon text="Here you can edit your logs" colour={props.colour} />
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
          {flowDates.length != 0 ? (
            flowDates
              .sort((a: Dayjs, b: Dayjs) => b.diff(a))
              .map((date: dayjs.Dayjs) => (
                <div className="pb-1">
                  <HistoryItem date={date} key={date.toString()} />
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
