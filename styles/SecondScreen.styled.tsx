import styled from "styled-components";

export const FirstContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  align-content: center;
  justify-content: center;
  @media (min-width: 1280px) {
    height: 700px;
  }
  @media (min-width: 1440px) {
    height: 904px;
  }
`;

export const FirstSection = styled.section`
  display: grid;

  grid-column: 2;
  justify-items: center;
  height: 410px;
  margin-top: 20px;
  margin-bottom: 60px;
  z-index: 40;

  .Division1,
  .Division2 {
    display: flex;
    align-content: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
  }

  .DivisionPay1,
  .DivisionPay2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .InfoText,
  .InfoPay {
    text-align: center;
    margin-top: 10px;
    font-family: "kallisto Regular";
    font-size: 14px;
    font-weight: 700;
    line-height: 14.4px;
    font-style: normal;
  }

  .InfoPay {
    font-size: 12px;
  }
  @media (min-width: 768px) {
    height: 800px;
    margin: 60px 0px;
    align-content: center;
    justify-content: center;
    .InfoText {
      width: 313px;
      font-size: 18px;
      line-height: 1.2em;
    }
    .InfoPay {
      font-size: 20px;
      line-height: 1.3em;
    }
    .ImagePlanPay {
      width: 269px;
      height: 401px;
    }
  }

  @media (min-width: 1280px) {
    grid-template-columns: 1fr 1fr;
    /* display: flex;
    align-items: center; */
    .Division1 {
      align-items: center;
    }
    .DivInfoText {
      width: 409px;
      display: flex;
      font-size: 24px;
      justify-content: center;
      align-items: center;
    }
    .DivisionPay2 {
      width: 336px;
      padding-top: 52px;
    }

    .DividerOutside1 {
      display: none;
    }
  }
`;

export const FirstSectionResume = styled.section`
  display: grid;

  grid-column: 2;
  justify-items: center;
  height: 410px;
  margin-top: 20px;
  margin-bottom: 60px;
  z-index: 40;

  .Division1,
  .Division2 {
    display: flex;
    align-content: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
  }

  .DivisionPay1,
  .DivisionPay2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .InfoText,
  .InfoPay {
    text-align: center;
    margin-top: 10px;
    font-family: "kallisto Regular";
    font-size: 14px;
    font-weight: 700;
    line-height: 14.4px;
    font-style: normal;
  }

  .InfoPay {
    font-size: 12px;
  }
  @media (min-width: 768px) {
    height: 800px;
    margin: 60px 0px;
    align-content: center;
    justify-content: center;
    .InfoText {
      width: 313px;
      font-size: 18px;
      line-height: 1.2em;
    }
    .InfoPay {
      font-size: 20px;
      line-height: 1.3em;
    }
    .ImagePlanPay {
      width: 269px;
      height: 401px;
    }

    .ResumenPlanImage {
      width: 277px;
      height: 277px;
    }
  }

  @media (min-width: 1280px) {
    display: flex;
    align-items: center;
    .Division1 {
      align-items: center;
    }
    .DivInfoText {
      width: 409px;
      display: flex;
      font-size: 24px;
      justify-content: center;
      align-items: center;
    }
    .DivisionPay2 {
      width: 336px;
      padding-top: 52px;
    }

    .DividerOutside1 {
      display: none;
    }

    .DivisionResumen1 {
      width: 473px;
      height: 531px;
      position: relative;
      left: -95px;
      top: 25px;
    }
    .ResumenPlanImage {
      width: 316px;
      height: 342px;
    }
  }
`;

export const CurrencyStyle = styled.div`
  text-align: center;

  .ButtonCurrency {
    background-color: transparent;
    border: none;
    cursor: pointer;
    margin: 5px 5px;
  }

  .USDTCurrency {
    background: #50af95;
    box-shadow: 0px 0px 13px #01f0a4;
    border-radius: 200px;
  }
  @media (min-width: 768px) {
    .USDTCurrency,
    .currency {
      width: 50px;
      height: 50px;
    }
  }
  @media (min-width: 1280px) {
    display: none;
  }
`;

export const PlanesButton = styled.div`
  margin-bottom: 25px;
  .ActionButton,
  .PayActionButton {
    width: 122px;
    height: 42px;
    background-color: var(--background-grey);
    margin: 0px auto;

    color: var(--green-text);
    font-weight: 700;
    font-size: 16px;
    font-family: "Kallisto Bold";
    font-style: normal;
    border-radius: 5px;
    border: 2px solid var(--background-grey);
    cursor: pointer;
    :hover {
      background-color: var(--white-text);
      color: black;
      border: 2px solid var(--green-text);
      box-shadow: 0 0 18px var(--green-text);
    }
  }

  .PayActionButton {
    width: 103px;
  }

  .First {
    margin-right: 5px;
  }
  .ArrowsButton {
    position: relative;
    top: 9px;
    background: transparent;
    border: none;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    .ContainerPlanesButton {
      display: inline-grid;
      grid-template-columns: 1fr 1fr 1fr;
      align-content: center;
      justify-content: center;
      width: 302px;
      position: relative;
      left: 10px;
    }
    .ArrowsButton {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .ActionButton {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      top: 9px;
      width: 173px;
    }
    .NextArrows,
    .PrevArrows {
      width: 40px;
      height: 40px;
    }

    .PayActionButtonContainer {
      display: grid;
      grid-template-columns: 1fr 1fr;
      width: 288px;
      align-content: center;
      justify-content: center;
    }
    .PayActionButton {
      width: 137px;
    }
  }
`;

export const HeaderPlanStyle = styled.div`
  display: inline-grid;

  .LogoImage {
    display: none;
  }

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 15px 0px;
  }

  .LogoSection {
    display: flex;
    justify-content: flex-start;
  }

  .TranslateSection {
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    position: relative;
    top: -10px;
    left: -1px;
  }
  @media (min-width: 768px) {
    width: 300px;
    .LogoImage {
      display: none;
    }
  }
  @media (min-width: 1280px) {
    .container {
      align-content: center;
      justify-content: center;
      display: flex;
    }

    .TranslateSection,
    .LogoHorizontal {
      display: none;
    }
    .LogoImage {
      display: block;
    }
  }
`;
