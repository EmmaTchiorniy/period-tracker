import { ActionIcon } from "@mantine/core";
import { IconContext } from "react-icons";
import { BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router";
interface WelcomeProps {
  name: string;
  // icon
}

export default function Welcome(props: WelcomeProps) {
  return (
    <div className="w-max mt-12 mb-3 content-start ml-2 flex flex-row">
      <Link to="/account/settings">
        <IconContext.Provider value={{ size: "26px", color: "black" }}>
          <div className="mr-2 self-center">
            <BsFillPersonFill />
          </div>
        </IconContext.Provider>
      </Link>
      <p className="self-center mb-0" style={{ fontSize: "13px" }}>
        Welcome, {props.name}
      </p>
    </div>
  );
}
