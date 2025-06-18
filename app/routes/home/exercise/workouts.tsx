import BackButton from "~/shared/buttons/back-button";

export default function Workouts() {
    return (
      <div className="pt-16 px-8 relative items-center">
        <BackButton prevHref={"/"}></BackButton>
        <h3 className="mb-0" style={{textAlign:"center"}}><b>Workouts</b></h3>
      </div>
    );
  }