import BackButton from "~/shared/buttons/back-button";
import type { Route } from "./+types/help";
import DropDownSelect from "./components/dropdown-select";

export default function Fitness() {
  const fitnessOptions = ["Very Active", "Active", "Lightly Active", "Not Active"];
    return (
      <div className="pt-16 px-8 relative items-center">
        <BackButton prevHref={"/account"} />
        <div className="w-initial flex justify-center">
          <div className="w-max flex flex-col justify-between self-center">
            <h3 className="mb-0 text-center"><b>Fitness</b></h3>
            <div className="flex flex-row justify-between pt-5">
              <p className="mb-0 mr-12 text-sm self-center">Fitness Level</p>
              <DropDownSelect options={fitnessOptions} width={"max-content"}/>
            </div>
          </div>
        </div>
      </div>
    );
  }