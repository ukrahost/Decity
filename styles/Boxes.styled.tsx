import styled from "styled-components";

export const BoxStyle = styled.div`
  display: grid;
  align-content: center;
  justify-content: center;
  padding: 15px 18px;

  .BoxContainer {
    background: var(--gradient-background);
    width: 225px;
    height: 70px;
    padding: 5px;
    border-radius: 5px;
    position: relative;
    display: inline-grid;
    align-content: center;
    justify-content: center;
    margin: 16px 0;
  }

  .BoxPlans {
    background-color: black;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    width: 220px;
    height: 64px;
    margin: 12px 0px;
  }

  .PricingPlans {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    position: relative;
    top: 2px;
    h3 {
      text-align: right;
      padding-right: 8px;
      font-family: "Kallisto Bold";
      font-size: 18px;
    }
  }

  .CurrencyPlans {
    display: flex;
    justify-content: flex-start;
  }

  .SymbolsPlans {
    display: flex;
    justify-content: center;
    align-items: center;
    border-left-color: #474747;
    border-left-width: 1px;
    border-left-style: solid;
  }
  @media (min-width: 768px) {
    width: 645px;
  }
  @media (min-width: 1280px) {
    width: 100%;
  }
  @media (min-width: 1440px) {
    width: 100%;
  }
`;

export const PackagesStyles = styled.div`
  .PackagesContainer {
  }
  .PackagesSection {
    width: 220px;
    height: 64px;
    margin: 12px 0px;
  }
  .PackagesCategory {
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    top: 2px;
    margin-top: -19px;
    h3 {
      text-align: left;
      padding-right: 8px;
      font-family: "Kallisto Bold";
      font-size: 18px;
    }
  }
  .PackagesPricing {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .Pricing {
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--gradient-background);
    width: 108px;
    height: 29px;
    text-align: center;
    border-radius: 3px;
    font-family: "kallisto Bold";
  }

  .currency {
    padding-left: 3px;
  }
  @media (min-width: 768px) {
    .PackagesCategory {
      width: 269px;
      left: -21px;
    }
  }
  @media (min-width: 1280px) {
    .PackagesCategory {
      width: 277px;
      top: -14px;
      margin-top: 19px;
    }
    .PackagesSection {
      width: 227px;
    }
  }
`;

export const TagsPlanStyles = styled.div`
  .TagsSection {
    width: 227px;
    height: 80px;
    margin: 12px 0px;
    backdrop-filter: blur(26px);
    transform: matrix(1, 0, 0, 1, 0, 0);
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  .TagsCategory {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    position: relative;
    top: 2px;
    margin-top: -98px;
    background-color: rgba(20, 20, 20, 0.23);
    width: 228px;
    left: -4px;
    align-content: center;
    justify-content: center;

    .TextPercent {
      text-align: left;
      padding-right: 8px;
      font-family: "Kallisto Bold";
      font-size: 14px;
      width: 135px;
      display: inline-block;
      height: 0px;
      left: 4px;
    }

    .TextoLigero {
      width: 65%;
      font-family: "Kallisto Thin";
      font-size: 12px;
      position: relative;
      top: -26px;
      left: 41px;
      font-size: 11px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
  }

  .TagsPricing {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .Pricing {
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--gradient-background);
    width: 108px;
    height: 29px;
    text-align: center;
    border-radius: 3px;
    font-family: "kallisto Bold";
    position: relative;
    top: -42px;
    left: 16px;
    width: 100px;
    height: 18px;
  }

  .currency {
    padding-left: 3px;
  }
  .SectionPricing {
    height: 65px;
    position: absolute;
    top: 4px;
    left: 95px;
  }

  .Insignia {
    width: 90px;
    height: 136px;
    position: absolute;
    top: -33px;
    left: 3px;
  }

  @media (min-width: 768px) {
    .TagsSection {
      width: 261px;
    }
    .SectionPricing {
      left: 124px;
    }
    .Insignia {
      width: 112px;
      height: 144px;
    }
  }
`;
