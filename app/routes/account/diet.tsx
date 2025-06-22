import BackButton from "~/shared/buttons/back-button";
import DropDownSelect from "./components/dropdown-select";
import './diet.scss'

export default function Diet() {
    const preferences = ["None", "Vegan", "Vegetarian", "Keto", "Paleo"];
    return (
      <div className="pt-16 px-8 relative items-center">
        <BackButton prevHref={"/account"}></BackButton>
        <h3 className="mb-0" style={{textAlign:"center"}}><b>Diet</b></h3>
        <div className="flex flex-row justify-between pt-5">
          <p className="mb-0 text-sm self-center">Dietary Preference</p>
          <DropDownSelect options={preferences} width="max-content"/>
        </div>
        <div className="flex flex-col gap-2.5">
          <p className="text-sm pt-4 mb-0">Allergies</p>
          {["Nuts", "Soy", "Dairy", "Eggs", "Wheat"].map((item) => (
            <label key={item} className="w-20 ml-2">
              <input
                type="checkbox"
                className="custom-cross-checkbox"
                name="allergies"
                value={item}
              />
              <span className="text-sm ml-4">{item}</span>
            </label>
          ))}
        </div>
      </div>
    );
  }