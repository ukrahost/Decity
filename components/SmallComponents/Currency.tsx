import { CurrencyStyle } from "../../styles/SecondScreen.styled";
import { BUSDCurrency, USDTCurrency } from "./Images";

const CurrencySelector = () => {
  return (
    <CurrencyStyle>
      <button className="ButtonCurrency">
        <USDTCurrency />
      </button>
      <button className="ButtonCurrency">
        <BUSDCurrency />
      </button>
    </CurrencyStyle>
  );
};

export default CurrencySelector;
