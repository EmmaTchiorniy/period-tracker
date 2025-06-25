import { IconContext } from "react-icons";
import { BsFillPersonFill } from "react-icons/bs";
interface WelcomeProps {
  name: string;
  // icon
}

export default function Welcome(props: WelcomeProps) {
  return (
    <div className="w-max mt-12 mb-3 content-start ml-2 flex flex-row">
      <IconContext.Provider value={{ size: "26px" }}>
        <div className="mr-2 self-center">
          <BsFillPersonFill />{" "}
        </div>
      </IconContext.Provider>
      <p className="self-center mb-0" style={{ fontSize: "13px" }}>
        Welcome, {props.name}
      </p>
    </div>
  );
}
