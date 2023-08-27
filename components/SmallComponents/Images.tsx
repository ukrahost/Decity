import Image from "next/image";
import Logo from "../../assets/img/webp/Logo-Decity.webp";
import Logo2 from "../../assets/img/png/LogoHorizontal.png";
import Background from "../../assets/img/webp/Mask-group.webp";
import planes1 from "../../assets/img/png/Planes-1.png";
import planesv3 from "../../assets/img/png/Planes-v3.png";
import NEXT from "../../assets/img/png/next-image.png";
import PREV from "../../assets/img/png/prev-image.png";
import USDT from "../../assets/img/png/usdt-logo.png";
import BUSD from "../../assets/img/png/busd-logo.png";
import Insignia1 from "../../assets/img/png/Level1.png";

export const FirstLogo = () => {
  return <Image className="LogoImage" src={Logo} alt="Logo" />;
};

export const PayImage = () => {
  return (
    <Image
      className="ImagePlanPay"
      src={planes1}
      width={235}
      height={350}
      alt="Image Selected"
    />
  );
};

export const TagImage = () => {
  return (
    <Image
      className="Insignia"
      src={Insignia1}
      width={104}
      height={104}
      alt="Tag Plans"
    />
  );
};

export const ResumenImage = () => {
  return (
    <Image
      className="ResumenPlanImage"
      src={planesv3}
      width={205}
      height={222}
      alt="Image Selected"
    />
  );
};

export const SecondLogo = () => {
  return (
    <Image
      className="LogoHorizontal"
      src={Logo2}
      width={146}
      height={39}
      alt="Header Logo"
    />
  );
};

export const NextArrow = () => {
  return (
    <Image className="NextArrows" src={NEXT} width={32} alt="next button" />
  );
};

export const PrevArrow = () => {
  return (
    <Image className="PrevArrows" src={PREV} width={32} alt="prev button" />
  );
};

export const BackgroundImage = () => {
  return (
    <div className="imageBackground">
      <Image
        style={{ objectFit: "cover" }}
        src={Background}
        alt="background image"
      />
    </div>
  );
};

export const USDTCurrency = () => {
  return (
    <Image
      className="USDTCurrency"
      src={USDT}
      width={39}
      height={39}
      alt="usdt currency"
    />
  );
};

export const BUSDCurrency = () => {
  return (
    <Image
      className="currency"
      src={BUSD}
      width={39}
      height={39}
      alt="busd currency"
    />
  );
};
