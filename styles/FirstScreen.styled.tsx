import styled from "styled-components";

export const BodyStyle = styled.div`
  @media (min-width: 768px) {
    height: 900px;
  }
`;

export const FirstContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  .home-main-text {
    font-size: 34px;
    font-weight: bold;
    color: var(--white-text);
    text-align: center;
    font-family: "kallisto";
  }

  .imageBackground {
    z-index: 0;
    position: fixed;
    height: 100vh;
    opacity: 0.6;
  }

  @media (min-width: 768px) {
  }
`;

export const FirstSection = styled.section`
  display: grid;
  grid-column: 2;
  justify-items: center;
  height: 350px;
  margin-top: 20px;
  margin-bottom: 60px;
  z-index: 40;

  .LogoImage {
    margin-top: 50px;
    margin-bottom: 20px;
  }

  .FooterText {
    text-align: center;
    margin-top: 80px;
    font-family: "kallisto Regular";
    font-size: 15px;
    font-weight: 700;
    line-height: 18px;
    font-style: normal;
  }

  .InfoText {
    text-align: center;
    margin-top: 40px;
    font-family: "kallisto Regular";
    font-size: 18px;
    font-weight: 700;
    line-height: 20px;
    font-style: normal;
  }

  @media (min-width: 768px) {
    margin-top: 63px;
    .LogoImage {
      width: 203px;
      height: 298px;
      margin-top: 50px;
      margin-bottom: 20px;
    }
    .FooterText {
      font-size: 26px;
      line-height: 34px;
    }
    .InfoText {
      width: 420px;
      font-size: 30px;
      line-height: 36px;
    }
  }
`;

export const ActionButton = styled.button`
  width: 203px;
  height: 42px;
  color: var(--green-text);
  background-color: var(--background-grey);
  display: grid;
  align-items: center;
  font-weight: 700;
  font-size: 16px;
  font-family: "Kallisto Bold";
  font-style: normal;
  border-radius: 5px;
  border: 2px solid var(--background-grey);
  margin-top: 30px;
  :hover {
    background-color: var(--white-text);
    color: black;
    border: 2px solid var(--green-text);
    box-shadow: 0 0 18px var(--green-text);
  }
  @media (min-width: 768px) {
    width: 299px;
    height: 54px;
    font-size: 22px;
  }
`;

export const InputStyle = styled.div`
  margin-top: 30px;
  .search {
    width: 309px;
    color: var(--white-text);
    height: 41px;
    border: 2px solid var(--background-web);
    border-radius: 2em;
    overflow: hidden;
    font-size: 12px;
    display: flex;
    justify-content: center;
    flex-flow: row nowrap;
  }

  .search__input {
    background-color: var(--background-grey);
    color: var(--white-text);
    font-family: "Kallisto Regular";
    font-size: 12px;
    font-weight: 300;
    border: none;
    outline: none;
    padding: 1em;
    width: 85%;
    text-align: center;
    letter-spacing: 2px;
    color: var(--white-text);
    ::placeholder {
      color: var(--white-text);
      font-size: 12px;
      letter-spacing: 1px;
      font-family: "Kallisto Thin";
    }
  }
  @media (min-width: 768px) {
    .search {
      width: 394px;
      height: 46px;
    }
    .search__input {
      ::placeholder {
        font-size: 16px;
      }
    }
  }
`;

export const InputButton = styled.button`
  background-color: var(--background-grey);
  display: grid;
  font-family: "Kallisto Regular";
  font-size: 22px;
  font-weight: bold;
  width: 15%;
  padding-right: 0.5em;
  color: var(--green-text);
  place-content: center;
  border: none;
  outline: none;
  cursor: pointer;
  @media (min-width: 768px) {
    font-size: 25px;
  }
`;

export const DropStyle = styled.div`
  margin-top: 20px;
  .DropSelect {
  }

  .DropIcon {
  }
  @media (min-width: 768px) {
    margin-top: 10px;
    .DropSelect {
      width: 100px;
    }
  }
`;
