import { Colour } from "~/constants/colour";

interface ButtonGroupProps {
    text: string;
    colour: Colour;
   }
   
   export default function ButtonGroup(props : any) {
       return (
        <div>
            <p className="mb-4" style={{fontSize: "small", color: props.colour}}>{props.text}</p>
            <div className="flex flex-row justify-between">
                {props.children}
            </div>
      </div>
     );
     }


        