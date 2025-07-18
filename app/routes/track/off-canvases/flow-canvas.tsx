import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Colour } from "~/constants/colour";
import TooltipIcon from "~/shared/buttons/tool-tip";
import DatePicker from "../date-picker";
import DropDownSelect from "~/routes/account/components/dropdown-select";
import dayjs from "dayjs";
import { useOutletContext } from "react-router";
import FlowLog from "../flowLog";

const containsLog = (a: FlowLog[], b: FlowLog) => {
  return a.some((l) => b.isSame(l));
};

const filterDuplicates = (a: FlowLog[], b: FlowLog) => {
  if (!containsLog(a, b)) a.push(b);
  return a;
};

const distinctLogs = (logs: FlowLog[]) => {
  var temp = logs.reduce(filterDuplicates, []);
  return temp;
};

interface TrackButtonProps {
  colour: Colour;
  text: string;
}

export default function OffCanvasFlow(props: TrackButtonProps) {
  const [show, setShow] = useState(false);
  const [log, setLog] = useState<FlowLog>(new FlowLog(dayjs()));
  const [intensity, setIntensity] = useState("Heavy");
  const { flowLogs, setFlowLogs }: any = useOutletContext();

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
        <TooltipIcon text="Log your flow here" colour={props.colour} />
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
            Close
          </button>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="flex flex-col">
            <div className="flex flex-row justify-between mb-4">
              <p className="text-sm self-center m-0">Date of flow</p>
              <DatePicker setLog={setLog} />
            </div>
            <div className="flex flex-row justify-between mb-4">
              <p className="text-sm self-center m-0">Amount of flow</p>
              <DropDownSelect
                setFunc={setIntensity}
                options={["Heavy", "Medium", "Light"]}
                width={"180px"}
              />
            </div>
            <button
              onClick={() => {
                let newLog = new FlowLog(log.date, intensity);
                setFlowLogs((current: FlowLog[]) =>
                  distinctLogs([...current, newLog])
                );

                handleClose();
              }}
              className="text-white p-2 mt-4"
              style={{
                backgroundColor: Colour.DarkPink,
                borderRadius: "10px",
                height: "auto",
              }}
            >
              Save Changes
            </button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
