import React from "react";
import Image from "next/image";
import planes1 from "../../assets/img/png/Planes-1.png";
import planes2 from "../../assets/img/png/Planes-2.png";
import planes3 from "../../assets/img/png/Planes-3.png";
import { SliderStyle } from "../../styles/Slider.styled";

const PlanesSlider = () => {
  return (
    <SliderStyle>
      <section id="slider">
        <input type="radio" name="slider" id="s1" checked />
        <input type="radio" name="slider" id="s2" />
        <input type="radio" name="slider" id="s3" />
        <input type="radio" name="slider" id="s4" />
        <input type="radio" name="slider" id="s5" />

        <label htmlFor="s1" id="slide1">
          <Image src={planes1} width={235} height={350} alt="" />
        </label>
        <label htmlFor="s2" id="slide2">
          <Image src={planes2} width={235} height={350} alt="" />
        </label>
        <label htmlFor="s5" id="slide5">
          <Image src={planes3} width={235} height={350} alt="" />
        </label>
      </section>
    </SliderStyle>
  );
};

export default PlanesSlider;
