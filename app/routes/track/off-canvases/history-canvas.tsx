import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Colour } from "~/constants/colour";
import TooltipIcon from "~/shared/buttons/tool-tip";

interface TrackButtonProps {
  colour: Colour;
  text: string;
}

export default function OffCanvasHistory(props: TrackButtonProps) {
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
      <Offcanvas show={show} onHide={handleClose} placement="bottom">
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
            Done
          </button>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
