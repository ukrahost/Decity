import Link from "next/link";
import { ResumenImage } from "./SmallComponents/Images";

import {
  CardsActionButton,
  CardsContainer,
  CardsSections,
  CardStyle,
} from "../styles/Cards.styled";
import { PackagesPlans } from "./SmallComponents/Boxes";
import { BoxStyle } from "../styles/Boxes.styled";

export const ResumenCard = () => {
  return (
    <BoxStyle>
      <CardsContainer>
        <CardsSections>
          <div className="DivisionResumen1">
            <ResumenImage />
            <PackagesPlans />
            <span className="HorizontalDivider"></span>
          </div>

          <div className="DivisionResumen2">
            <h4 className="CongratsInfoText">
              ¡Felicidades!
              <p className="InfoSubText">
                Ahora haces parte de la comunidad Decity
              </p>
            </h4>
            <CardsActionButton>
              <Link href="/dashboard">Ir a mi página</Link>
            </CardsActionButton>
          </div>
        </CardsSections>
      </CardsContainer>
    </BoxStyle>
  );
};
