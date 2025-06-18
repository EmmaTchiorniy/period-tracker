import {Colour} from "~/constants/colour";

interface HomeButtonProps {
 colour: Colour;
 text: string;
 href: string;
}

export default function HomeButton(props : HomeButtonProps) {
    return (
        <button className="text-white" style={{backgroundColor: props.colour, borderRadius: "10px", height: "70px", width: "165px", fontSize: "small"}} onClick={() => location.href = props.href}>
            {props.text}
        </button>
  );
  }