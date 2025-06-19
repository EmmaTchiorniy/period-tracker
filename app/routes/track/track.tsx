import { Colour } from "~/constants/colour";
import HomeButton from "~/shared/buttons/home-button";
import ButtonGroup from "../../shared/buttons/button-group";
import TrackButton from "~/shared/buttons/track-button";
import TrackCalendar from "./calendar";

export default function Track() {
  return (
  <main className="flex items-center justify-center pt-18 pb-4 flex-col mx-4">
    <div className="pb-4 flex justify-center">
      <TrackCalendar />
    </div>
    <div className="pb-4 flex flex-col justify-center">
      <TrackButton colour={Colour.Pink} text="Flow"/>
      <TrackButton colour={Colour.Blue} text="Symptoms"/>
      <TrackButton colour={Colour.Green} text="Edit History"/>
    </div>
    <div>
      <div className="flex justify-center flex-col">
        <ButtonGroup text="Learn more about the mentrual cycle" colour={Colour.Black}>
          <div className="flex flex-col items-center" style={{width: "100%"}}>
            <div className="mb-3 flex flex-row justify-evenly">
              <div className="mr-4">
                <HomeButton colour={Colour.Pink} text="Menstrual Phase" href="phases/menstrual"/>
              </div>
              <HomeButton colour={Colour.Blue} text="Luteal Phase" href="phases/luteal"/>
            </div>
            <div className="flex flex-row justify-evenly">
              <div className="mr-4">
                <HomeButton colour={Colour.Green} text="Follicular Phase" href="phases/follicular"/>
              </div>
              <HomeButton colour={Colour.Purple} text="Ovulation Phase" href="phases/ovulation"/>
            </div>
          </div>
        </ButtonGroup>
      </div>
    </div>
  </main>
  );
}