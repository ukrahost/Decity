import DropdownTranslate from "./DropdownTranslate";
import { HeaderPlanStyle } from "../../styles/SecondScreen.styled";
import { FirstLogo, SecondLogo } from "./Images";

const HeaderPlanes = () => {
  return (
    <HeaderPlanStyle>
      <div className="container">
        <div className="LogoSection">
          <SecondLogo />
          <FirstLogo />
        </div>
        <div className="TranslateSection">
          <DropdownTranslate />
        </div>
      </div>
    </HeaderPlanStyle>
  );
};

export default HeaderPlanes;
