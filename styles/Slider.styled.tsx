import styled from "styled-components";

export const SliderStyle = styled.div`
  body {
    margin: 0;
    user-select: none;
    font-family: sans-serif;
  }

  #slider {
    position: relative;
    width: 233px;
    height: 350px;
    margin: 15px auto;
    margin-bottom: 35px;
    font-family: "Helvetica Neue", sans-serif;
    perspective: 1400px;
    transform-style: preserve-3d;
  }

  input[type="radio"] {
    display: none;
    position: relative;
    top: 108%;
    left: 50%;
    width: 18px;
    height: 18px;
    margin: 0 15px 0 0;
    opacity: 0.4;
    transform: translateX(-83px);
    cursor: pointer;
  }

  input[type="radio"]:nth-child(5) {
    margin-right: 0px;
  }

  input[type="radio"]:checked {
    opacity: 1;
  }

  #slider label,
  #slider label img {
    position: absolute;
    width: 235px;
    height: 350px;
    left: 0;
    top: 0;
    color: white;
    font-size: 70px;
    font-weight: bold;
    border-radius: 3px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 400ms ease;
  }

  /* Slider Functionality */

  /* Active Slide */
  #s1:checked ~ #slide1,
  #s2:checked ~ #slide2,
  #s3:checked ~ #slide3,
  #s4:checked ~ #slide4,
  #s5:checked ~ #slide5 {
    box-shadow: 0 13px 26px rgba(0, 0, 0, 0.3), 0 12px 6px rgba(0, 0, 0, 0.2);
    transform: translate3d(0%, 0, 0px);
  }

  /* Next Slide */
  #s1:checked ~ #slide2,
  #s2:checked ~ #slide3,
  #s3:checked ~ #slide4,
  #s4:checked ~ #slide5,
  #s5:checked ~ #slide1 {
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3), 0 2px 2px rgba(0, 0, 0, 0.2);
    transform: translate3d(20%, 0, -100px);
  }

  /* Next to Next Slide */
  #s1:checked ~ #slide3,
  #s2:checked ~ #slide4,
  #s3:checked ~ #slide5,
  #s4:checked ~ #slide1,
  #s5:checked ~ #slide2 {
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
    transform: translate3d(40%, 0, -250px);
  }

  /* Previous to Previous Slide */
  #s1:checked ~ #slide4,
  #s2:checked ~ #slide5,
  #s3:checked ~ #slide1,
  #s4:checked ~ #slide2,
  #s5:checked ~ #slide3 {
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
    transform: translate3d(-60%, 0, -250px);
  }

  /* Previous Slide */
  #s1:checked ~ #slide5,
  #s2:checked ~ #slide1,
  #s3:checked ~ #slide2,
  #s4:checked ~ #slide3,
  #s5:checked ~ #slide4 {
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3), 0 2px 2px rgba(0, 0, 0, 0.2);
    transform: translate3d(-20%, 0, -100px);
  }

  @media (min-width: 768px) {
    #slider label,
    #slider label img {
      width: 264px;
      height: 384px;
    }
  }
`;
