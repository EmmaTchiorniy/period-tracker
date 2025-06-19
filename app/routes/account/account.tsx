import { Colour } from "~/constants/colour";
import AccountButton from "~/shared/buttons/account-button";
import ButtonGroup from "~/shared/buttons/button-group";

export default function Account() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4 flex-col">
      <div className="flex justify-center flex-col">
        <div className="mb-4">
          <ButtonGroup text="" colour={Colour.Black}>
            <div className="flex flex-col items-center">
              <div className="mb-3 flex flex-row justify-evenly">
                <div className="mr-4">
                  <AccountButton colour={Colour.Pink} text="Settings" href="account/settings"/>
                </div>
                <AccountButton colour={Colour.Blue} text="Cycle" href="account/cycle"/>
              </div>
              <div className="flex flex-row justify-evenly">
                <div className="mr-4">
                  <AccountButton colour={Colour.Green} text="Diet" href="account/diet"/>
                </div>
                <AccountButton colour={Colour.Purple} text="Fitness" href="account/fitness"/>
              </div>
            </div>
          </ButtonGroup>
        </div>
        <button className="text-white" style={{backgroundColor: Colour.Orange, borderRadius: "10px", height: "56px", width: "350px"}} onClick={() => location.href = "account/help"}>
            Help
        </button>
      </div>
    </main>
    );
}