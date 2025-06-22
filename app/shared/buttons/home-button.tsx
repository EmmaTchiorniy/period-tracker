import {Colour} from "~/constants/colour";
import { useNavigate } from "react-router";

interface HomeButtonProps {
 colour: Colour;
 text: string;
 href: string;
}

export default function HomeButton(props : HomeButtonProps) {
  let navigate = useNavigate();

    return (
        <button className="text-white" style={{backgroundColor: props.colour, borderRadius: "10px", height: "70px", width: "165px", fontSize: "11px", paddingTop: '36px', textAlign: 'right', paddingRight: '12px'}} onClick={() => navigate(props.href)}>
            {props.text}
        </button>
  );
  }

          