import {
  ModalsAccount,
  ModalsLoader,
  ModalSuccess,
  ModalError,
} from "../components/Modals";
import { BodyStyle } from "../styles/FirstScreen.styled";

export default function ModalsPage() {
  return (
    <BodyStyle>
      <ModalsAccount />
      {/* <ModalsLoader /> */}
      {/* <ModalSuccess /> */}
      {/* <ModalError /> */}
    </BodyStyle>
  );
}
