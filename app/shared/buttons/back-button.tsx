import { useNavigate } from "react-router";
import {Colour} from "~/constants/colour";

export default function BackButton(props : any) {
    let navigate = useNavigate();
    return (
        <button className="self-center h-7 absolute" style={{fontSize: "small", color: Colour.DarkPink}} onClick={() => navigate(props.prevHref)}> 
            &lt; Back
        </button>
  );
}