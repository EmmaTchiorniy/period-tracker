import HomeButton from "~/shared/shared/buttons/home-button";
import type { Route } from "./+types/home";
import { Colour } from "~/constants/colour";
import ButtonGroup from "./components/button-group";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <main className="flex items-center justify-center pt-24 pb-4 flex-col mx-3">
    <h2 className="pb-16 flex justify-center">
        <b>Home</b>
      </h2>
      <div className="pb-16">
        <h3>Period Swiping Thing</h3>
      </div>
      <div className="pb-16">
        <h3>Cycle Overview</h3>
      </div>
      <div style={{width: "100%"}}>
        <div className="pb-4">
          <ButtonGroup text="Diet">
            <HomeButton colour={Colour.Green} text="Recipes" href="diet/recipes"/>
            <HomeButton colour={Colour.Green} text="Dos & Donts" href="diet/dos-donts"/>
          </ButtonGroup>
        </div>
        <ButtonGroup text="Exercise">
          <HomeButton colour={Colour.Blue} text="Workouts" href="exercise/recipes"/>
          <HomeButton colour={Colour.Blue} text="Dos & Donts" href="exercise/dos-donts"/>
        </ButtonGroup>
      </div>
  </main>
  );
}
