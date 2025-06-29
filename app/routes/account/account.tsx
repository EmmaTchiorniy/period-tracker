import { useNavigate, useOutletContext } from "react-router";
import { Colour } from "~/constants/colour";
import { IconState } from "~/constants/icon";
import AccountButton from "~/shared/buttons/account-button";
import ButtonGroup from "~/shared/buttons/button-group";
import Welcome from "~/shared/welcome";

export default function Account() {
  let navigate = useNavigate();
  const { name, setActiveIcon }: any = useOutletContext();

  setActiveIcon(IconState.Account);

  return (
    <main className="flex flex-col items-center">
      <div className="w-max">
        <Welcome name={name} />
        <div className="flex items-center justify-center pb-4 flex-col">
          <div className="flex justify-center flex-col">
            <div className="mb-4">
              <ButtonGroup text="" colour={Colour.Black}>
                <div className="flex flex-col items-center">
                  <div className="mb-3 flex flex-row justify-evenly">
                    <div className="mr-4.5">
                      <AccountButton
                        colour={Colour.Pink}
                        text="Settings"
                        href="settings"
                      />
                    </div>
                    <AccountButton
                      colour={Colour.Blue}
                      text="Cycle"
                      href="cycle"
                    />
                  </div>
                  <div className="flex flex-row justify-evenly">
                    <div className="mr-4.5">
                      <AccountButton
                        colour={Colour.Green}
                        text="Diet"
                        href="diet"
                      />
                    </div>
                    <AccountButton
                      colour={Colour.Purple}
                      text="Fitness"
                      href="fitness"
                    />
                  </div>
                </div>
              </ButtonGroup>
            </div>
            <button
              className="text-white"
              style={{
                backgroundColor: Colour.Orange,
                borderRadius: "10px",
                height: "56px",
                width: "350px",
              }}
              onClick={() => navigate("help")}
            >
              Help
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
