interface TrackIconProps {
  isActive: boolean;
}

export default function TrackIcon(props: TrackIconProps) {
  if (props.isActive) {
    return (
      <div className="self-center">
        <img
          src="resources/pen-writing-filled.svg"
          alt="tracking icon"
          height="25px"
          width="25px"
        />
      </div>
    );
  } else {
    return (
      <div className="self-center opacity-75">
        <img
          src="resources/pen-writing.svg"
          alt="tracking icon"
          height="25px"
          width="25px"
        />
      </div>
    );
  }
}
