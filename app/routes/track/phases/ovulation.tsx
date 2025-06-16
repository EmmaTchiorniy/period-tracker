import BackButton from "~/shared/navbar/back-button";

export default function Ovulation() {
    return (
      <div className="pt-16 px-8 relative items-center">
        <BackButton prevHref={"/track"}></BackButton>
        <h4 className="mb-0" style={{textAlign:"center"}}><b>Ovulation Phase</b></h4>
      </div>
    );
  }