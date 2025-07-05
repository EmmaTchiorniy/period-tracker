import BackButton from "~/shared/buttons/back-button";
import ButtonGroup from "~/shared/buttons/button-group";
import WWWButton from "~/shared/buttons/www-button";
import { Colour } from "~/constants/colour";

export default function Workouts() {
    return (
      <div className="pt-16 px-8 relative items-center">
              <BackButton prevHref={"/"}></BackButton>
              <div className="flex justify-center">
                <div className="w-max">
                  <h3 style={{ textAlign: "center", marginBottom: "30px" }}>
                    <b>Workouts</b>
                  </h3>
                  <p className="text-sm text-center text-gray-400 mb-5">
                    It is important to take it slow
                  </p>
        <div className = "mt-5 mb-5">
          
          <div className="pb-4">
          <ButtonGroup text="Stretching" colour={Colour.LightGrey}>
                          
                            <WWWButton
                              colour={Colour.Green}
                              text="15 Min"
                              href="https://www.youtube.com/watch?v=2X78NWuRfJU&pp=ygUOcGVyaW9kIHdvcmtvdXQ%3D"
                            />
                  
                          <WWWButton
                            colour={Colour.Green}
                            text="20 Min"
                            href="https://www.youtube.com/watch?v=2X78NWuRfJU&pp=ygUOcGVyaW9kIHdvcmtvdXQ%3D"
                          />
                        </ButtonGroup>
                      </div>
                <div className="pb-4">
                <ButtonGroup text="Pilates" colour={Colour.LightGrey}>
                          
                            <WWWButton
                              colour={Colour.Orange}
                              text="10 Min"
                              href="https://www.youtube.com/watch?v=Y8m0HjV3eqw&pp=ygUOcGVyaW9kIHBpbGF0ZXM%3D"
                            />
                  
                          <WWWButton
                            colour={Colour.Orange}
                            text="30 Min"
                            href="https://www.youtube.com/watch?v=mfG0p1sv9OI&pp=ygUOcGVyaW9kIHBpbGF0ZXM%3D"
                          />
                        </ButtonGroup>
                        </div>
                        <div className="pb-4">
                <ButtonGroup text="Full Body" colour={Colour.LightGrey}>
                          <WWWButton
                            colour={Colour.PeriodRed}
                            text="15 Min"
                            href="https://www.youtube.com/watch?v=eKA0bzewO9I&pp=ygUYcGVyaW9kIGZ1bGwgYm9keSB3b3Jrb3V0"
                          />
                            <WWWButton
                              colour={Colour.PeriodRed}
                              text="20 Min"
                              href="https://www.youtube.com/watch?v=GB5uPT4W6p8&pp=ygUYcGVyaW9kIGZ1bGwgYm9keSB3b3Jrb3V00gcJCcEJAYcqIYzv"
                            />
                  
                          
                        </ButtonGroup>
                        </div>
        </div>
        </div>
        </div>
      </div>
    );
  }