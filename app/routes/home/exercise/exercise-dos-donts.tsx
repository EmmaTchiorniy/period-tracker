import BackButton from "~/shared/buttons/back-button";

export default function ExerciseDosDonts() {
    return (
      <div className="pt-16 px-8 relative items-center">
        <BackButton prevHref={"/"}></BackButton>
        <div className="flex justify-center">
          <div className="w-max">
            <h3 style={{ textAlign: "center", marginBottom: "30px" }}>
              <b>Dos and Donts</b>
            </h3>
            <p className="text-sm text-center text-gray-400 mb-5">
              You should adjust your fitness level during your menstruation
            </p>
            <div className="text-start mb-5">
              <p className="font-semibold mb-1.5">Dos</p>
              <p className="mb-1">light cardio</p>
              <p className="mb-1">yoga</p>
              <p className="mb-1">stretching</p>
              <p className="mb-1">adjust intensity to your energy levels</p>
            </div>
            <div className="text-start">
              <p className="font-semibold mb-1.5">Donts</p>
              <p className="mb-1">push for PRs</p>
              <p className="mb-1">ignore pain or dizziness</p>
              <p className="mb-1">compare yourself to your other phases</p>
            </div>
          </div>
        </div>
      </div>
    );
  }