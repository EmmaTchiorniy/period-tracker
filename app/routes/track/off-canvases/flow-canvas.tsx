import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Colour } from "~/constants/colour";
import TooltipIcon from "~/shared/buttons/tool-tip";
import DatePicker from "../date-picker";
import DropDownNumber from "~/routes/account/components/number-dropdown";
import DropDownSelect from "~/routes/account/components/dropdown-select";

interface TrackButtonProps {
  colour: Colour;
  text: string;
}

export default function OffCanvasFlow(props: TrackButtonProps) {
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
        <TooltipIcon text="Here you can log your flow" colour={props.colour} />
      </div>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="bottom"
        className="h-50"
      >
        <Offcanvas.Header>
          <Offcanvas.Title>Log Flow</Offcanvas.Title>
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
          <div className="flex flex-col">
            <div className="flex flex-row justify-between mb-4">
              <p className="text-sm self-center m-0">Date of flow</p>
              <DatePicker />
            </div>
            <div className="flex flex-row justify-between">
              <p className="text-sm self-center m-0">Amount of flow</p>
              <DropDownSelect
                options={["Heavy", "Medium", "Light"]}
                width={"180px"}
              />
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
