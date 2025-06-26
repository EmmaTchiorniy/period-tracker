interface HomeIconProps {
  isActive: boolean;
}

export default function HomeIcon(props: HomeIconProps) {
  if (props.isActive) {
    return (
      <div className="self-center">
        <img
          src="resources/house-2-fill.svg"
          alt="home icon"
          height="25px"
          width="25px"
        />
      </div>
    );
  } else {
    return (
      <div className="self-center opacity-75">
        <img
          src="resources/house-2.svg"
          alt="home icon"
          height="25px"
          width="25px"
        />
      </div>
    );
  }
}
