import HeaderPlanes from "./SmallComponents/Header";
import PlanesSlider from "./SmallComponents/PlanesSlider";
import CurrencySelector from "./SmallComponents/Currency";
import { BoxPay, TagsPlans } from "./SmallComponents/Boxes";
import { PayImage } from "./SmallComponents/Images";
import { ResumenCard } from "./Cards";
import { InfoText, InfoPay } from "./SmallComponents/InfoText";
import {
  FirstContainer,
  FirstSection,
  FirstSectionResume,
} from "../styles/SecondScreen.styled";
import {
  ActionPlanesButtons,
  PayPlanesButtons,
} from "./SmallComponents/ActionsButtons";

export const SecondScreen = () => {
  return (
    <FirstContainer>
      <FirstSection>
        <div className="Division1">
          <HeaderPlanes />
          <div className="DivInfoText">
            <InfoText />
          </div>

          <CurrencySelector />
        </div>

        <div className="Division2">
          <PlanesSlider />
          <ActionPlanesButtons />
        </div>
      </FirstSection>
    </FirstContainer>
  );
};

export const PayScreen = () => {
  return (
    <FirstContainer>
      <FirstSection>
        <div className="DivisionPay1">
          <HeaderPlanes />
          <InfoPay />
        </div>
        <div className="DivisionPay2">
          <PayImage />
          <TagsPlans />
          <BoxPay />
          <PayPlanesButtons />
        </div>
      </FirstSection>
    </FirstContainer>
  );
};

export const ResumenScreen = () => {
  return (
    <FirstContainer>
      <FirstSectionResume>
        <div className="DividerOutside1">
          <HeaderPlanes />
        </div>
        <div className="DividerOutside2">
          <ResumenCard />
        </div>
      </FirstSectionResume>
    </FirstContainer>
  );
};
