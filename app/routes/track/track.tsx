import { Colour } from "~/constants/colour";
import HomeButton from "~/shared/buttons/home-button";
import ButtonGroup from "../../shared/buttons/button-group";
import type { Route } from "./+types/track";
import TrackButton from "~/shared/buttons/track-button";


export default function Track() {
  return (
  <main className="flex items-center justify-center pt-16 pb-4 flex-col mx-4">
      <h2 className="pb-16 flex justify-center">
        <b>Track</b>
      </h2>
      <div className="pb-16 flex justify-center">
        <h3>Calendar Thing</h3>
      </div>
      <div className="pb-4 flex flex-col justify-center">
        <TrackButton colour={Colour.Pink} text="Flow"/>
        <TrackButton colour={Colour.Blue} text="Symptoms"/>
        <TrackButton colour={Colour.Green} text="Edit History"/>
      </div>
      <div style={{width: "100%"}}>
        <div style={{width: "100%"}} className="flex justify-center flex-col">
          <ButtonGroup text="Learn more about the mentrual cycle" color={Colour.Black}>
            <div className="flex flex-col items-center" style={{width: "100%"}}>
              <div className="mb-3 flex flex-row justify-between" style={{width: "100%"}}>
                <HomeButton colour={Colour.Pink} text="Menstrual Phase" href="phases/menstrual"/>
                <HomeButton colour={Colour.Blue} text="Luteal Phase" href="phases/luteal"/>
              </div>
              <div className="flex flex-row justify-between" style={{width: "100%"}}>
                <HomeButton colour={Colour.Green} text="Follicular Phase" href="phases/follicular"/>
                <HomeButton colour={Colour.Purple} text="Ovulation Phase" href="phases/ovulation"/>
              </div>
            </div>
          </ButtonGroup>
        </div>
      </div>
  </main>
  );
}