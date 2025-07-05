import BackButton from "~/shared/buttons/back-button";

export default function DietDosDonts() {
  return (
    <div className="pt-16 px-8 relative items-center">
      <BackButton prevHref={"/"}></BackButton>
      <div className="flex justify-center">
        <div className="w-max">
          <h3 style={{ textAlign: "center", marginBottom: "30px" }}>
            <b>Dos and Donts</b>
          </h3>
          <p className="text-sm text-center text-gray-400 mb-5">
            Your diet can influence your symptoms
          </p>
          <div className="text-start mb-5">
            <p className="font-semibold mb-1.5">Dos</p>
            <p className="mb-1">dark chocolate</p>
            <p className="mb-1">fruit</p>
            <p className="mb-1">ginger</p>
            <p className="mb-1">loads of water</p>
            <p className="mb-0">brown sugar</p>
          </div>
          <div className="text-start">
            <p className="font-semibold mb-1.5">Donts</p>
            <p className="mb-1">caffeine</p>
            <p className="mb-1">cold food and beverages</p>
            <p className="mb-1">alcohol</p>
            <p className="mb-1">salty foods</p>
            <p className="mb-1">sugary foods</p>
          </div>
        </div>
      </div>
    </div>
  );
}
