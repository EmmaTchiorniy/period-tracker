import BackButton from "~/shared/buttons/back-button";
import DropDownSelect from "./components/dropdown-select";
import InputField from "./components/input";

export default function Settings() {
  const languages = ["English", "German", "Italian", "French", "Spanish"];
    return (
      <div className="pt-16 px-8 relative items-center">
        <BackButton prevHref={"/account"}></BackButton>
        <div className="w-initial flex justify-center">
          <div className="w-max flex flex-col justify-between self-center">
            <h3 className="mb-0" style={{textAlign:"center"}}><b>Settings</b></h3>
            <div className="flex flex-row justify-between pt-5">
              <p className="mr-16 mb-0 text-sm self-center">Display Name</p>
                <InputField placeholder="First Last" width="160px" as="input"/>
            </div>
            <div className="flex flex-row justify-between pt-4">
              <p className="mb-0 text-sm self-center">Language</p>
              <DropDownSelect options={languages} width="160px"/>
            </div>
          </div>
        </div>
      </div>
    );
  }