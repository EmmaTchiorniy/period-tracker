import BackButton from "~/shared/shared/back-button";

export default function Recipes() {
    return (
      <div className="pt-16 px-8 relative items-center">
        <BackButton prevHref={"/"}></BackButton>
        <h3 className="mb-0" style={{textAlign:"center"}}><b>Recipes</b></h3>
      </div>
    );
  }