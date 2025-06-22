import HomeButton from "~/shared/buttons/home-button";
import type { Route } from "./+types/home";
import { Colour } from "~/constants/colour";
import ButtonGroup from "../../shared/buttons/button-group";
import HomeSlider from "./home-slider";
import Welcome from "~/shared/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Period Tracker App" },
    { name: "description", content: "Welcome to Period Tracker!" },
  ];
}

export default function Home() {
  return (
    <main>
      <div className="w-max flex flex-col justify-center">
      <Welcome />
    <div className="flex items-center justify-center mt-3 pb-4 flex-col mx-4.5">
      <div className="pb-11 ">
        <HomeSlider/>
      </div>
      <div className="pb-2">
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
  </div>
  </div>
  </main>
  );
}
