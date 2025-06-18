import {Colour} from "~/constants/colour";

interface TrackButtonProps {
 colour: Colour;
 text: string;
}

export default function TrackButton(props : TrackButtonProps) {
    return (
        <button className="text-white mb-2" style={{backgroundColor: props.colour, borderRadius: "10px", height: "28px", width: "350px", fontSize: "small", textAlign: "left"}}>
            <p className="pl-2.5 mb-0">+ {props.text}</p>
        </button>
  );
  }