import { useNavigate } from "react-router";
import {Colour} from "~/constants/colour";

interface AccountButtonProps {
 colour: Colour;
 text: string;
 href: string;
}

export default function AccountButton(props : AccountButtonProps) {
    let navigate = useNavigate();
    return (
        <button className="text-white p-3" style={{backgroundColor: props.colour, borderRadius: "10px", height: "165px", width: "165px"}} onClick={() => navigate(props.href)}>
            {props.text}
        </button>
  );
  }