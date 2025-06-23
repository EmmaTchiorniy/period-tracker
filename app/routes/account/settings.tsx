import BackButton from "~/shared/buttons/back-button";
import DropDownSelect from "./components/dropdown-select";
import { useOutletContext } from "react-router";
import { useState } from "react";
import { Colour } from "~/constants/colour";

export default function Settings() {
  const { name, setName }: any = useOutletContext();

  const languages = ["English", "German", "Italian", "French", "Spanish"];

  const [saved, setSaved] = useState(false);

  const [tempName, setTempName] = useState(name);

  return (
    <div className="pt-16 px-8 relative items-center">
      <BackButton prevHref={"/account"}></BackButton>
      <div className="w-initial flex justify-center">
        <div className="w-max flex flex-col justify-between self-center">
          <h3 className="mb-0" style={{ textAlign: "center" }}>
            <b>Settings</b>
          </h3>
          <div className="flex flex-col w-max mb-4">
            <div className="flex flex-row justify-between pt-5">
              <p className="mr-16 mb-0 text-sm self-center">Display Name</p>
              <input
                placeholder="First Last"
                style={{
                  overflow: "hidden",
                  resize: "none",
                  borderRadius: "10px",
                  border: "none",
                  backgroundColor: "#F5F5F5",
                  paddingLeft: "16px",
                  height: "30px",
                  width: "160px",
                  fontSize: "small",
                }}
                value={tempName}
                onChange={(e) => setTempName(e.target.value)}
              />
            </div>
            <div className="flex flex-row justify-between pt-4">
              <p className="mb-0 text-sm self-center">Language</p>
              <DropDownSelect options={languages} width="160px" />
            </div>
          </div>
          <button
            onClick={() => {
              setName(tempName);
              setSaved(true);
            }}
            className="text-white p-2 mt-4"
            style={{
              backgroundColor: Colour.DarkPink,
              borderRadius: "10px",
              height: "auto",
            }}
          >
            Save Changes
          </button>
          <p
            className="text-sm text-center mt-4 pb-0 w-full"
            style={{
              visibility: saved ? "visible" : "hidden",
              color: Colour.DarkPink,
            }}
          >
            Changes saved!
          </p>
        </div>
      </div>
    </div>
  );
}
