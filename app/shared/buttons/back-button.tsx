import {Colour} from "~/constants/colour";

export default function BackButton(props : any) {
    return (
        <button className="self-center h-7 absolute" style={{fontSize: "small", color: Colour.DarkPink}} onClick={() => location.href = props.prevHref}> 
            &lt; Back
        </button>
  );
}