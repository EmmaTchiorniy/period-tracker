import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Colour } from "~/constants/colour";
import "./home-slider.scss";
import { useState } from "react";
import { Link } from "react-router";
import { MdOutlineWaterDrop } from "react-icons/md";
import { IconContext } from "react-icons";

export default function HomeSlider() {
  const [activeSlide, setActiveSlide] = useState(0);

  const textFirstSlide = "You are curently in your";
  const textSecondSlide = "You should avoid";
  const textThirdSlide = "This could help";

  const texts: string[] = [textFirstSlide, textSecondSlide, textThirdSlide];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <></>,
    nextArrow: <></>,
    afterChange: (current: number) => setActiveSlide(current),
  };

  return (
    <div className="w-61.5 max-w-xl h-auto mx-auto">
      <p className="font-bold text-sm text-center">{texts[activeSlide]}</p>
      <Slider {...settings}>
        <div className="px-2">
          <div style={{ backgroundColor: Colour.Pink }} className="slide">
            <h6 className="mt-2 mb-2.5">menstrual phase</h6>
            <IconContext.Provider value={{ size: "32px", color: "white" }}>
              <div className="mb-1">
                <MdOutlineWaterDrop />{" "}
              </div>
            </IconContext.Provider>
            <p className="mb-1">Day 1-5</p>
            <Link
              to="/track/phases/menstrual"
              className="text-xs"
              style={{ color: Colour.PeriodRed }}
            >
              Learn more
            </Link>
          </div>
        </div>
        <div className="px-2">
          <div style={{ backgroundColor: Colour.Blue }} className="slide">
            <div className="text-slides">
              <p>alcohol</p>
              <p>caffeine</p>
              <p>cold food & beverages</p>
              <p className="mb-2">salty foods</p>
            </div>
            <Link
              to="/diet/dos-donts"
              className="text-xs"
              style={{ color: Colour.DarkBlue }}
            >
              Learn more
            </Link>
          </div>
        </div>
        <div className="px-2">
          <div style={{ backgroundColor: Colour.Green }} className="slide">
            <div className="text-slides">
              <p>dark chocolate</p>
              <p>fruit</p>
              <p>ginger</p>
              <p className="mb-2">water</p>
            </div>
            <Link
              to="/diet/dos-donts"
              className="text-xs"
              style={{ color: Colour.DarkGreen }}
            >
              Learn more
            </Link>
          </div>
        </div>
      </Slider>
    </div>
  );
}
