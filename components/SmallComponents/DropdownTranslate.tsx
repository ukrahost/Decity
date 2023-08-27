import { DropStyle } from "../../styles/FirstScreen.styled";

const DropdownTranslate = () => {
  const options = [
    {
      value: "en",
      label: "English",
    },
    {
      value: "es",
      label: "Español",
    },
  ];
  return (
    <DropStyle>
      <select className="DropSelect">
        <option className="Language" value="spanish">
          ESP
        </option>
        <option className="Language" value="english">
          EN
        </option>
      </select>
    </DropStyle>
  );
};

export default DropdownTranslate;
