import Link from "next/link";
import FooterText from "../components/SmallComponents/FooterText";
import { FirstLogo, BackgroundImage } from "./SmallComponents/Images";
import DropdownTranslate from "../components/SmallComponents/DropdownTranslate";

import {
  ActionButton,
  FirstContainer,
  FirstSection,
} from "../styles/FirstScreen.styled";

import {
  Inputs,
  InputEmail,
  InputConfirm,
  InputConnect,
  InputUser,
} from "./SmallComponents/Inputs";

export const FirstScreen = () => {
  return (
    <FirstContainer>
      <BackgroundImage />
      <FirstSection>
        <DropdownTranslate />
        <FirstLogo />
        <ActionButton>
          <Link href="/connect-wallet">Iniciar con mi Wallet</Link>
        </ActionButton>
        <ActionButton>
          <Link href="/refcode">Crear Cuenta</Link>
        </ActionButton>
        <FooterText />
      </FirstSection>
    </FirstContainer>
  );
};

export const ReferralPage = () => {
  return (
    <FirstContainer>
      <BackgroundImage />
      <FirstSection>
        <DropdownTranslate />
        <FirstLogo />
        <Inputs />
        <ActionButton>
          <Link href="/register">Continuar</Link>
        </ActionButton>
        <FooterText />
      </FirstSection>
    </FirstContainer>
  );
};

export const ConnectWallet = () => {
  return (
    <FirstContainer>
      <BackgroundImage />
      <FirstSection>
        <DropdownTranslate />
        <FirstLogo />
        <InputConnect />
        <ActionButton>
          <Link href="/confirm-wallet">Conectar Wallet</Link>
        </ActionButton>
        <FooterText />
      </FirstSection>
    </FirstContainer>
  );
};

export const ConfirmWallet = () => {
  return (
    <FirstContainer>
      <BackgroundImage />
      <FirstSection>
        <DropdownTranslate />
        <FirstLogo />
        <InputConfirm />
        <ActionButton>
          <Link href="/dashboard">Continuar</Link>
        </ActionButton>
        <FooterText />
      </FirstSection>
    </FirstContainer>
  );
};

export const Register = () => {
  return (
    <FirstContainer>
      <BackgroundImage />
      <FirstSection>
        <DropdownTranslate />
        <FirstLogo />
        <p className="InfoText">
          ¡Hola! Es hora de crear una cuenta. ¿Tienes dudas?
        </p>
        <InputUser />
        <InputEmail />
        <ActionButton>
          <a href="/planes">Continuar</a>
        </ActionButton>
      </FirstSection>
    </FirstContainer>
  );
};
