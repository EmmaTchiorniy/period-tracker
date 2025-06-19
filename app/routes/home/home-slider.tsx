import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Colour } from "~/constants/colour";
import './home-slider.scss';
import { useState } from "react";

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
    afterChange: (current : number) => setActiveSlide(current)
  };

  return (
    <div className="w-61.5 max-w-xl h-auto mx-auto">
      <p className="font-bold text-sm text-center">{texts[activeSlide]}</p>
      <Slider {...settings}>
        <div className="px-2">
          <div style={{ backgroundColor: Colour.Pink }} className="slide">
            <h3 className="text-xl font-bold">1</h3>
          </div>
        </div>
        <div className="px-2">
          <div style={{ backgroundColor: Colour.Blue }} className="slide">
            <h3 className="text-xl font-bold">2</h3>
          </div>
        </div>
        <div className="px-2">
          <div style={{ backgroundColor: Colour.Green }} className="slide">
            <h3 className="text-xl font-bold">3</h3>
          </div>
        </div>
      </Slider>
    </div>
  );
}