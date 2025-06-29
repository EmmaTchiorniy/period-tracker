import HomeButton from "~/shared/buttons/home-button";
import type { Route } from "./+types/home";
import { Colour } from "~/constants/colour";
import ButtonGroup from "../../shared/buttons/button-group";
import HomeSlider from "./home-slider";
import Welcome from "~/shared/welcome";
import { useOutletContext } from "react-router";
import "./home.css";
import CycleCircle from "./cycle-circle";
import dayjs from "dayjs";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Period Tracker App" },
    { name: "description", content: "Welcome to Period Tracker!" },
  ];
}

export default function Home() {
  const { name, flowDates }: any = useOutletContext();

  return (
    <main className="flex flex-col items-center">
      <div className="w-max">
        <Welcome name={name} />
        <div className="flex items-center justify-center pb-4 flex-col mt-4">
          <div className="pb-13 ">
            <HomeSlider />
          </div>
          <div>
            <div className="mb-3">
              <p
                className="mb-3"
                style={{ fontSize: "small", color: Colour.LightGrey }}
              >
                Cycle Overview
              </p>
              <div className="flex flex-row mb-4 justify-between mx-1">
                {Array(9)
                  .fill(null)
                  .map((_, i) => (
                    <CycleCircle day={dayjs().subtract(4 - i, "day")} key={i} />
                  ))}
              </div>
            </div>
            <div className="pb-4">
              <ButtonGroup text="Diet" colour={Colour.LightGrey}>
                <div className="mr-4">
                  <HomeButton
                    colour={Colour.Green}
                    text="Recipes"
                    href="diet/recipes"
                  />
                </div>
                <HomeButton
                  colour={Colour.Green}
                  text="Dos & Donts"
                  href="diet/dos-donts"
                />
              </ButtonGroup>
            </div>
            <ButtonGroup text="Exercise" colour={Colour.LightGrey}>
              <div className="mr-4">
                <HomeButton
                  colour={Colour.Blue}
                  text="Workouts"
                  href="exercise/workouts"
                />
              </div>
              <HomeButton
                colour={Colour.Blue}
                text="Dos & Donts"
                href="exercise/dos-donts"
              />
            </ButtonGroup>
          </div>
        </div>
      </div>
    </main>
  );
}
