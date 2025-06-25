import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { ActionIcon } from "@mantine/core";
import { CiCircleInfo } from "react-icons/ci";
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
        overlay={<Tooltip id={props.text}>{props.text}</Tooltip>}
      >
        <ActionIcon
          variant="transparent"
          color={props.colour}
          aria-label="Tooltip"
        >
          <IconContext.Provider value={{ size: "28px" }}>
            <div>
              <CiCircleInfo />
            </div>
          </IconContext.Provider>
        </ActionIcon>
      </OverlayTrigger>
    </>
  );
}

export default TooltipIcon;
