import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Colour } from "~/constants/colour";
import TooltipIcon from "~/shared/buttons/tool-tip";
import "~/shared/checkboxes.scss";

interface TrackButtonProps {
  colour: Colour;
  text: string;
}

export default function OffCanvasSymptoms(props: TrackButtonProps) {
  const [show, setShow] = useState(false);
  const symptoms = [
    "Cramps",
    "Low Energy",
    "Mood Swings",
    "Feeling Uncomfortable",
  ];

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
        <TooltipIcon
          text="Here you can log your symptoms"
          colour={props.colour}
        />
      </div>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="bottom"
        className="h-50"
      >
        <Offcanvas.Header>
          <Offcanvas.Title>Log Symptoms</Offcanvas.Title>
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
          <div className="flex flex-col gap-2.5">
            {symptoms.map((item) => (
              <label key={item} className="w-58 ml-2">
                <input
                  type="checkbox"
                  className="custom-cross-checkbox"
                  name="allergies"
                  value={item}
                />
                <span className="text-sm ml-4">{item}</span>
              </label>
            ))}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
