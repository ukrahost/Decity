import Link from "next/link";
import { PlanesButton } from "../../styles/SecondScreen.styled";
import { NextArrow, PrevArrow } from "./Images";

export const ActionPlanesButtons = () => {
  return (
    <PlanesButton>
      <div className="ContainerPlanesButton">
        <button className="ArrowsButton">
          <PrevArrow />
        </button>
        <button className="ActionButton">
          <Link href="/pago">Seleccionar</Link>
        </button>
        <button className="ArrowsButton">
          <NextArrow />
        </button>
      </div>
    </PlanesButton>
  );
};

export const PayPlanesButtons = () => {
  return (
    <PlanesButton>
      <div className="PayActionButtonContainer">
        <button className="PayActionButton First">
          <Link href="/planes">Volver</Link>
        </button>
        <button className="PayActionButton Second">
          <Link href="/resumen">Pagar</Link>
        </button>
      </div>
    </PlanesButton>
  );
};
