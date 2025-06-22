import BackButton from "~/shared/buttons/back-button";
import InputField from "./components/input";
import { useState } from "react";
import { Colour } from "~/constants/colour";

export default function Help() {
  const [message, setMessage] = useState("");

    return (
      <div className="pt-16 px-8 relative items-center">
        <BackButton prevHref={"/account"}></BackButton>
        <div className="w-initial flex justify-center">
          <div className="w-max flex flex-col justify-between self-center">
            <h3 className="mb-0" style={{textAlign:"center"}}><b>Help</b></h3>
            <div className="flex flex-row justify-between pt-5">
              <p className="mr-16 mb-0 text-sm self-center">Name</p>
                <InputField placeholder="First Last" width="160px" as="input"/>
            </div>
            <div className="flex flex-row justify-between pt-4">
              <p className="mb-0 mr-17 text-sm self-center">Email</p>
              <InputField placeholder="example@email.com" width="max-content" as="input"/>
            </div>
            <div className="flex flex-column justify-start pt-10">
              <p className="mb-3 mr-17 text-sm self-start">Your Question</p>
              <InputField placeholder="" width="inherit" as="textarea"/>
            </div>
            <button className="text-white p-2 mt-4" style={{backgroundColor: Colour.Orange, borderRadius: "10px", height: "auto"}}>
              Send
            </button>
          </div>
        </div>
      </div>
    );
  }