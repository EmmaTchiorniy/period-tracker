interface AccountIconProps {
  isActive: boolean;
}

export default function AccountIcon(props: AccountIconProps) {
  if (props.isActive) {
    return (
      <div className="self-center">
        <img
          src="/../resources/user-filled.svg"
          alt="user icon"
          height="26px"
          width="26px"
        />
      </div>
    );
  } else {
    return (
      <div className="self-center opacity-75">
        <img
          src="/../resources/user.svg"
          alt="user icon"
          height="26px"
          width="26px"
        />
      </div>
    );
  }
}
