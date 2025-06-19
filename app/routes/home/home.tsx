import HomeButton from "~/shared/buttons/home-button";
import type { Route } from "./+types/home";
import { Colour } from "~/constants/colour";
import ButtonGroup from "../../shared/buttons/button-group";
import HomeSlider from "./home-slider";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Period Tracker App" },
    { name: "description", content: "Welcome to Period Tracker!" },
  ];
}

export default function Home() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4 flex-col mx-4.5">
      <div className="pb-15">
        <HomeSlider/>
      </div>
      <div className="pb-4.5">
        <h3>Cycle Overview</h3>
      </div>
      <div>
        <div className="pb-4">
          <ButtonGroup text="Diet" colour={Colour.LightGrey}>
            <div className="mr-4">
              <HomeButton colour={Colour.Green} text="Recipes" href="diet/recipes"/>
            </div>
            <HomeButton colour={Colour.Green} text="Dos & Donts" href="diet/dos-donts"/>
          </ButtonGroup>
        </div>
        <ButtonGroup text="Exercise" colour={Colour.LightGrey}>
          <div className="mr-4">
            <HomeButton colour={Colour.Blue} text="Workouts" href="exercise/workouts"/>
          </div>
          <HomeButton colour={Colour.Blue} text="Dos & Donts" href="exercise/dos-donts"/>
        </ButtonGroup>
      </div>
  </main>
  );
}
