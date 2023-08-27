import styled from "styled-components";

export const CardStyle = styled.div`
  display: grid;
  align-content: center;
  justify-content: center;
  padding: 15px 39px;
  @media (min-width: 1280px) {
  }
`;

export const CardsContainer = styled.div`
  background: var(--gradient-background);
  height: 530px;
  width: 250px;
  padding: 5px;
  border-radius: 5px;
  position: relative;
  @media (min-width: 768px) {
    width: 394px;
    height: 657px;
    .ResumenPlanImage {
      width: 276px;
      height: 284px;
    }
    @media (min-width: 1280px) {
      width: 985px;
      height: 578px;
    }
  }
`;

export const CardsSections = styled.section`
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 2px;

  .DivisionResumen1,
  .DivisionResumen2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

  .InfoSubText {
    font-size: 14px;
    font-family: "kallisto Thin";
    margin: 5px 0px;
  }

  .CongratsInfoText {
    text-align: center;
    margin-top: 20px;
    font-family: "kallisto Bold";
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 1px;
    font-style: normal;
  }

  .HorizontalDivider {
    width: 211px;
    height: 1px;
    background-color: #d9d9d9;
    display: inline-block;
  }

  /* .VerticalDivider {
    height: 200px;
    width: 1px;
    background-color: #d9d9d9;
    display: inline-block;
  } */

  @media (min-width: 768px) {
    .HorizontalDivider {
      width: 295px;
    }
    .InfoSubText {
      font-size: 17px;
      width: 244px;
    }

    .HorizontalDivider {
      display: block;
    }

    @media (min-width: 1280px) {
      flex-direction: row;
    }
  }
`;

export const CardsActionButton = styled.button`
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
  }
`;
