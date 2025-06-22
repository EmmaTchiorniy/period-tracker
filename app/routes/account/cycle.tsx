import BackButton from "~/shared/buttons/back-button";
import './checkboxes.scss';
import DropDownNumber from "./components/number-dropdown";

export default function Cycle() {
    const symptoms = ["Cramps", "Low Energy", "Mood Swings", "Feeling Uncomfortable"];
    const flowDuration = [2, 3, 4, 5, 6, 7, 8, ">8"];
    const cycleDuration = ["<21" ,21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, ">35"];

    return (
      <div className="pt-16 px-8 relative items-center">
              <BackButton prevHref={"/account"}></BackButton>
              <div className="w-initial flex justify-center">
              <div className="w-max flex flex-col justify-between self-center">
                <h3 className="mb-0" style={{textAlign:"center"}}><b>Cycle</b></h3>
                <div className="flex flex-row justify-between pt-5">
                  <p className="mb-0 mr-16 text-sm self-center">Cycle Duration</p>
                  <div className="flex flex-row">
                    <DropDownNumber options={cycleDuration} width="76px" average={28}/>
                    <p className="mb-0 pl-4 text-sm self-center">days</p>
                  </div>
                </div>
                <div className="flex flex-row justify-between pt-4 mb-8">
                  <p className="mb-0 mr-16 text-sm self-center">Flow Duration</p>
                  <div className="flex flex-row">
                    <DropDownNumber options={flowDuration} width="76px" average={5}/>
                    <p className="mb-0 pl-4 text-sm self-center">days</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2.5">
                  <p className="text-sm mb-0">Symptoms</p>
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
              </div>
            </div>
    );
  }