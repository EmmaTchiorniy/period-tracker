import BackButton from "~/shared/buttons/back-button";

export default function Follicular() {
    return (
      <div className="pt-16 px-8 relative items-center">
        <BackButton prevHref={"/track"}></BackButton>
        <h4 className="mb-0" style={{textAlign:"center"}}><b>Follicular Phase</b></h4>
      </div>
    );
  }