import BackButton from "~/shared/buttons/back-button";
import DropDownSelect from "./components/dropdown-select";
import InputField from "./components/input";

export default function Settings() {
  const languages = ["English", "German", "Italian", "French", "Spanish"];
    return (
      <div className="pt-16 px-8 relative items-center">
        <BackButton prevHref={"/account"}></BackButton>
        <h3 className="mb-0" style={{textAlign:"center"}}><b>Settings</b></h3>
        <div className="flex flex-row justify-between pt-5">
          <p className="mb-0 text-sm self-center">Display Name</p>
          <InputField/>
        </div>
        <div className="flex flex-row justify-between pt-4">
          <p className="mb-0 text-sm self-center">Language</p>
          <DropDownSelect options={languages} />
        </div>
      </div>
    );
  }