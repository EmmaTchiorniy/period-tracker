import BackButton from "~/shared/shared/back-button";
import type { Route } from "./+types/help";

export default function Help() {
    return (
      <div className="pt-16 px-8 relative items-center">
          <BackButton prevHref={"/account"}></BackButton>
        <h3 className="mb-0" style={{textAlign:"center"}}><b>Help</b></h3>
      </div>
    );
  }