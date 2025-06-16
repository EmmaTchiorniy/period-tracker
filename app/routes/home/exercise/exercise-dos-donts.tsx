import BackButton from "~/shared/navbar/back-button";

export default function ExerciseDosDonts() {
    return (
      <div className="pt-16 px-8 relative items-center">
        <BackButton prevHref={"/"}></BackButton>
        <h3 className="mb-0" style={{textAlign:"center"}}><b>Dos and Donts</b></h3>
      </div>
    );
  }