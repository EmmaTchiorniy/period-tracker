import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { ActionIcon } from "@mantine/core";
import { GoInfo } from "react-icons/go";
import { IconContext } from "react-icons";

interface ToolTipProps {
  text: string;
  colour: string;
}

function TooltipIcon(props: ToolTipProps) {
  return (
    <>
      <OverlayTrigger
        placement="top"
        overlay={
          <Tooltip
            style={{
              fontFamily: "monospace",
              fontSize: "small",
            }}
            id={props.text}
          >
            {props.text}
          </Tooltip>
        }
      >
        <ActionIcon
          variant="transparent"
          color={props.colour}
          aria-label="Tooltip"
        >
          <IconContext.Provider value={{ size: "27px" }}>
            <div>
              <GoInfo />
            </div>
          </IconContext.Provider>
        </ActionIcon>
      </OverlayTrigger>
    </>
  );
}

export default TooltipIcon;
