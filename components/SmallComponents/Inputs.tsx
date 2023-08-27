import React from "react";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { AiOutlineCheckCircle } from "react-icons/ai";

import { InputButton, InputStyle } from "../../styles/FirstScreen.styled";

export const Inputs = () => {
  return (
    <InputStyle>
      <form className="search">
        <input
          className="search__input"
          type="text"
          id="search"
          placeholder="Ingresa tu código de referido"
        />
        <InputButton>
          <HiOutlineInformationCircle />
        </InputButton>
      </form>
    </InputStyle>
  );
};

export const InputCheck = () => {
  return (
    <InputStyle>
      <form className="search">
        <input
          className="search__input"
          type="text"
          id="search"
          placeholder="Insert Wallet"
        />
        <InputButton>
          <AiOutlineCheckCircle />
        </InputButton>
      </form>
    </InputStyle>
  );
};

export const InputUser = () => {
  return (
    <InputStyle>
      <form className="search">
        <input
          className="search__input"
          type="text"
          id="search"
          placeholder="UserName"
        />
        <InputButton>
          <AiOutlineCheckCircle />
        </InputButton>
      </form>
    </InputStyle>
  );
};

export const InputConnect = () => {
  return (
    <InputStyle>
      <form className="search">
        <input
          className="search__input"
          type="text"
          id="search"
          placeholder="0X074785962485965896525"
        />
        <InputButton></InputButton>
      </form>
    </InputStyle>
  );
};

export const InputConfirm = () => {
  return (
    <InputStyle>
      <form className="search">
        <input
          className="search__input"
          type="text"
          id="search"
          placeholder="0X074785962485965896525"
        />
        <InputButton>
          <AiOutlineCheckCircle />
        </InputButton>
      </form>
    </InputStyle>
  );
};

export const InputEmail = () => {
  return (
    <InputStyle>
      <form className="search">
        <input
          className="search__input"
          type="text"
          id="search"
          placeholder="Email Address"
        />
        <InputButton></InputButton>
      </form>
    </InputStyle>
  );
};
