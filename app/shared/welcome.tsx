interface WelcomeProps {
  name: string;
  // icon
}

export default function Welcome(props: WelcomeProps) {
  return (
    <div className="w-max mt-13 mb-3 content-start ml-2">
      <p style={{ fontSize: "13px" }}>Welcome, {props.name}</p>
    </div>
  );
}
