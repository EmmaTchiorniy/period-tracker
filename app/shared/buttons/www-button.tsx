import {Colour} from "~/constants/colour";
import { useNavigate } from "react-router";

interface WWWButtonProps {
 colour: Colour;
 text: string;
 href: string;
}

export default function WWWButton(props : WWWButtonProps) {
  let navigate = useNavigate();

    return (
            <a className = "text-white" href={props.href} style={{backgroundColor: props.colour, borderRadius: "10px", height: "70px", width: "165px", fontSize: "11px", paddingTop: '36px', textAlign: 'right', paddingRight: '12px'}}>{props.text}</a>
  );
  }
