import { Colour } from "~/constants/colour";

interface ButtonGroupProps {
    text: string;
   }
   
   export default function ButtonGroup(props : any) {
       return (
        <div>
            <p className="mb-4 text-gray-400" style={{fontSize: "small"}}>{props.text}</p>
            <div className="flex flex-row justify-between">
                {props.children}
            </div>
      </div>
     );
     }


        