import {
  ModalsActionButton,
  ModalsContainer,
  ModalSections,
  ModalStyle,
} from "../styles/Modals.styled";

import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { RiLoader2Line } from "react-icons/ri";
import { GiPartyPopper } from "react-icons/gi";
import { IoBugOutline } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import Link from "next/link";

export const ModalsAccount = () => {
  return (
    <ModalStyle>
      <ModalsContainer>
        <ModalSections>
          <IoCheckmarkDoneOutline className="PrincipalIcon" />
          <p className="InfoText">Tu cuenta ha sido creada correctamente</p>
          <div className="FirstModalButton">
            <ModalsActionButton>
              <Link href="/dashboard">Continuar</Link>
            </ModalsActionButton>
          </div>
        </ModalSections>
      </ModalsContainer>
    </ModalStyle>
  );
};

export const ModalsLoader = () => {
  return (
    <ModalStyle>
      <ModalsContainer>
        <ModalSections>
          <RiLoader2Line className="LoaderIcon" />
          <p className="InfoTextPurchase">
            Estamos confirmando tu compra, tomará solo un minuto
          </p>
        </ModalSections>
      </ModalsContainer>
    </ModalStyle>
  );
};

export const ModalSuccess = () => {
  return (
    <ModalStyle>
      <ModalsContainer>
        <ModalSections>
          <GiPartyPopper className="SuccessIcon" />
          <h3 className="InfoText">
            ¡Ahora si!
            <p className="SuccessSubText">Disfruta de tu nueva experiencia</p>
          </h3>

          <ModalsActionButton>
            <Link href="/dashboard">Ver Resumen</Link>
          </ModalsActionButton>
        </ModalSections>
      </ModalsContainer>
    </ModalStyle>
  );
};

export const ModalError = () => {
  return (
    <ModalStyle>
      <ModalsContainer>
        <ModalSections>
          <button className="CloseButton">
            <MdClose />
          </button>
          <IoBugOutline className="ErrorIcon" />
          <h3 className="ErrorInfoText">
            ¡Oh wow!
            <p className="ErrorSubText">Parece que hubo un error</p>
          </h3>
          <ModalsActionButton>
            <Link href="/pago">Reintentar</Link>
          </ModalsActionButton>
        </ModalSections>
      </ModalsContainer>
    </ModalStyle>
  );
};
