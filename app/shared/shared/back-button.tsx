import {Colour} from "~/constants/colour";

export default function BackButton(props : any) {
    return (
        <button className={`text-[${Colour.DarkPink}] self-center h-7 absolute`} style={{fontSize: "small"}} onClick={() => location.href = props.prevHref}> 
            &lt; Back
        </button>
  );
  }