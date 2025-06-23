import { Colour } from "~/constants/colour";
import HomeButton from "~/shared/buttons/home-button";
import ButtonGroup from "../../shared/buttons/button-group";
import TrackCalendar from "./calendar";
import OffCanvasFlow from "./off-canvases/flow-canvas";
import OffCanvasSymptoms from "./off-canvases/symptoms-canvas";
import OffCanvasHistory from "./off-canvases/history-canvas";
import Welcome from "~/shared/welcome";
import { useOutletContext } from "react-router";

export default function Track() {
  const { name }: any = useOutletContext();

  return (
    <main className="flex flex-col items-center">
      <div className="w-max">
        <Welcome name={name} />
        <div className="flex items-center pb-4 flex-col">
          <div className="pb-4 flex justify-center mb-auto">
            <TrackCalendar />
          </div>
          <div>
            <div className="pb-4 flex flex-col justify-center">
              <OffCanvasFlow colour={Colour.Pink} text="Flow" />
              <OffCanvasSymptoms colour={Colour.Blue} text="Symptoms" />
              <OffCanvasHistory colour={Colour.Green} text="Edit History" />
            </div>
            <div>
              <div className="flex justify-center flex-col">
                <ButtonGroup
                  text="Learn more about the mentrual cycle"
                  colour={Colour.Black}
                >
                  <div
                    className="flex flex-col items-center"
                    style={{ width: "100%" }}
                  >
                    <div className="mb-3 flex flex-row justify-evenly">
                      <div className="mr-4">
                        <HomeButton
                          colour={Colour.Pink}
                          text="Menstrual Phase"
                          href="phases/menstrual"
                        />
                      </div>
                      <HomeButton
                        colour={Colour.Blue}
                        text="Luteal Phase"
                        href="phases/luteal"
                      />
                    </div>
                    <div className="flex flex-row justify-evenly">
                      <div className="mr-4">
                        <HomeButton
                          colour={Colour.Green}
                          text="Follicular Phase"
                          href="phases/follicular"
                        />
                      </div>
                      <HomeButton
                        colour={Colour.Purple}
                        text="Ovulation Phase"
                        href="phases/ovulation"
                      />
                    </div>
                  </div>
                </ButtonGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
