import { Link } from "react-router";
interface WelcomeProps {
  name: string;
  // icon
}

export default function Welcome(props: WelcomeProps) {
  return (
    <div className="w-max mt-12 mb-3 content-start ml-2 flex flex-row">
      <Link to="/account/settings">
        <div className="mr-2 self-center">
          <img
            src="resources/user-filled.svg"
            alt="user icon"
            height="26px"
            width="26px"
          />
        </div>
      </Link>
      <p className="self-center mb-0" style={{ fontSize: "13px" }}>
        Welcome, {props.name}
      </p>
    </div>
  );
}
