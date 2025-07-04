import BackButton from "~/shared/buttons/back-button";
import HomeButton from "~/shared/buttons/home-button"
import ButtonGroup from "~/shared/buttons/button-group";
import {Colour} from "~/constants/colour";



export default function Recipes() {
    return (
      <div className="pt-16 px-8 relative items-center">
        <BackButton prevHref={"/"}></BackButton>
        <div className="flex justify-center">
          <div className="w-max">
            <h3 style={{ textAlign: "center", marginBottom: "30px" }}>
              <b>Recipes</b>
            </h3>
            <p className="text-sm text-center text-gray-400 mb-5">
              Iron and calcium are very important
            </p>
            <div className="pb-4">
              <ButtonGroup text="Breakfast" colour={Colour.LightGrey}>
                <div className="mr-4">
                  <HomeButton
                    colour={Colour.Green}
                    text="Oatmeal"
                    href="oatmeal"
                  />
                </div>
                <HomeButton
                  colour={Colour.Green}
                  text="Spinach Omelette"
                  href="spinach"
                />
              </ButtonGroup>
            </div>
            <div className="pb-4">
              <ButtonGroup text="Lunch" colour={Colour.LightGrey}>
                <div className="mr-4">
                  <HomeButton
                    colour={Colour.Orange}
                    text="Stir-Fry"
                    href="stirfry"
                  />
                </div>
                <HomeButton
                  colour={Colour.Orange}
                  text="Lentil Stew"
                  href="lentil"
                />
              </ButtonGroup>
            </div>
            <div className="pb-4">
              <ButtonGroup text="Dinner" colour={Colour.LightGrey}>
                <div className="mr-4">
                  <HomeButton
                    colour={Colour.Blue}
                    text="Chickpea Curry"
                    href="chickpea"
                  />
                </div>
                <HomeButton
                  colour={Colour.Blue}
                  text="Protein Pasta"
                  href="pasta"
                />
              </ButtonGroup>
            </div>
          </div>
        </div>
      </div>
    );
  }