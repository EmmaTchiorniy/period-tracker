import { Colour } from "~/constants/colour";
interface ButtonGroupProps {
    colour: Colour;
    text: string;
    children: any;
}
   
export default function ButtonGroup(props : ButtonGroupProps) {
    return (
        <div>
            <p className="mb-4" style={{fontSize: "small", color: props.colour}}>{props.text}</p>
            <div className="flex flex-row justify-between">
                {props.children}
            </div>
        </div>
    );
}


        