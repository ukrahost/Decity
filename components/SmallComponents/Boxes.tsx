import {
  BoxStyle,
  PackagesStyles,
  TagsPlanStyles,
} from "../../styles/Boxes.styled";
import { TagImage, USDTCurrency } from "./Images";

export const BoxPay = () => {
  return (
    <BoxStyle>
      <div className="BoxContainer">
        <div className="BoxPlans">
          <div className="PricingPlans">
            <h3>600</h3>
            <div className="CurrencyPlans">
              <h3>USDT</h3>
            </div>
            <div className="SymbolsPlans">
              <USDTCurrency />
            </div>
          </div>
        </div>
      </div>
    </BoxStyle>
  );
};

export const PackagesPlans = () => {
  return (
    <PackagesStyles>
      <div className="PackagesContainer">
        <div className="PackagesSection">
          <div className="PackagesCategory">
            <h3>Freelancer 2 Lotes</h3>

            <div className="PackagesPricing">
              <div className="Pricing">
                400 <p className="currency"> USD</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PackagesStyles>
  );
};

export const TagsPlans = () => {
  return (
    <TagsPlanStyles>
      <div className="TagsContainer">
        <div className="TagsSection">
          <div className="TagsCategory">
            <TagImage />

            <div className="TagsPricing">
              <div className="SectionPricing">
                <h3 className="TextPercent">
                  10% <p className="TextoLigero">en comisiones</p>
                </h3>
                <h4 className="Pricing">
                  400 <p className="currency"> USD</p>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TagsPlanStyles>
  );
};
