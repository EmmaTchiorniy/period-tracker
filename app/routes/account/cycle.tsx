import BackButton from "~/shared/buttons/back-button";
import './diet.scss';
import DropDownSelect from "./components/dropdown-select";

export default function Cycle() {
    const symptoms = ["Cramps", "Low Energy", "Mood Swings", "Feeling Uncomfortable"];
    const duration = ["3", "4", "5", "6", "7", "8"];

    return (
      <div className="pt-16 px-8 relative items-center">
              <BackButton prevHref={"/account"}></BackButton>
              <h3 className="mb-0" style={{textAlign:"center"}}><b>Diet</b></h3>
              <div className="flex flex-row justify-between pt-5">
                <p className="mb-0 text-sm self-center">Flow Duration</p>
                <div className="flex flex-row">
                  <DropDownSelect options={duration} width="64px"/>
                  <p className="mb-0 pl-4 text-sm self-center">days</p>
                </div>
              </div>
              <div className="flex flex-col gap-2.5">
                <p className="text-sm pt-4 mb-0">Symptoms</p>
                {symptoms.map((item) => (
                  <label key={item} className="w-58 ml-2">
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