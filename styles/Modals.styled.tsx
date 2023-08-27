import styled from "styled-components";

export const ModalStyle = styled.div`
  display: grid;
  align-content: center;
  justify-content: center;
  padding: 120px 39px;
  @media (min-width: 768px) {
    height: 900px;
    transform: translatex(0px) translatey(0px);
  }
`;

export const ModalsContainer = styled.div`
  background: var(--gradient-background);
  aspect-ratio: 10/16;
  width: 250px;
  padding: 5px;
  border-radius: 5px;
  position: relative;
  @media (min-width: 768px) {
    width: 524px;
    height: 522px;
    transform: translatex(0px) translatey(0px);
  }
`;

export const ModalSections = styled.section`
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 2px;

  .PrincipalIcon,
  .LoaderIcon,
  .SuccessIcon,
  .ErrorIcon,
  .ResumenModalIcon {
    font-size: 102px;
    color: var(--green-text);
  }

  .InfoText {
    text-align: center;
    margin-top: 20px;
    font-family: "kallisto Bold";
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 2px;
    font-style: normal;
    padding: 0px 30px;
  }

  .ErrorInfoText {
    text-align: center;
    margin-top: 20px;
    font-family: "kallisto Bold";
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 1px;
    font-style: normal;
  }

  .InfoTextPurchase {
    text-align: center;
    margin-top: 20px;
    font-family: "kallisto Bold";
    font-size: 18px;
    line-height: 24px;
    font-style: normal;
    padding: 0 8px;
  }

  .InfoSubText,
  .SuccessSubText,
  .ErrorSubText,
  .ResumenSubText {
    font-size: 14px;
    font-family: "kallisto Thin";
  }

  .CloseButton {
    position: absolute;
    left: 82.67%;
    top: 3.12%;
    width: 30px;
    background: transparent;
    color: var(--green-text);
    font-size: 25px;
    cursor: pointer;
    border: none;
  }
  @media (min-width: 768px) {
    .PrincipalIcon {
      font-size: 242px;
      position: relative;
      top: -21px;
    }
    .InfoText {
      width: 325px;
      font-size: 32px;
      height: 108px;
      line-height: 1em;
      position: relative;
      top: -37px;
    }
    .LoaderIcon {
      top: -21;
      margin-top: 12px;
      margin-bottom: 2px;
      font-size: 232px;
    }
    .InfoTextPurchase {
      font-size: 24px;
      padding-bottom: 53px;
      line-height: 1.2em;
    }
    .SuccessIcon {
      margin-top: 51px;
      font-size: 232px;
      margin-bottom: 27px;
    }
    .SuccessSubText {
      font-size: 20px;
      position: relative;
      top: -9px;
    }
    .ErrorIcon {
      font-size: 174px;
    }
    .ErrorSubText {
      font-size: 24px;
    }
    .ErrorInfoText {
      font-size: 29px;
      padding-bottom: 27px;
    }
    .CloseButton {
      font-size: 43px;
      top: 24px;
      left: 433px;
      bottom: 450px;
    }
  }
`;

export const ModalsActionButton = styled.button`
  width: 203px;
  height: 42px;
  color: var(--green-text);
  background-color: var(--background-grey);
  display: grid;
  align-items: center;
  font-weight: 700;
  font-size: 16px;
  font-family: "Kallisto Bold";
  font-style: normal;
  border-radius: 5px;
  border: 2px solid var(--background-grey);
  margin-top: 0px;
  :hover {
    background-color: var(--white-text);
    color: black;
    border: 2px solid var(--green-text);
    box-shadow: 0 0 18px var(--green-text);
  }

  @media (min-width: 768px) {
    width: 400px;
    height: 53px;
    position: relative;
    top: -49px;
    font-size: 24px;
  }
`;
