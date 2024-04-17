import React, { useState } from "react";
import style from "./styles/passwordInput.module.css";
import showEye from "../../../Assets/Images/Icons/eye.svg";
import hiddenEye from "../../../Assets/Images/Icons/close-eye.svg";

export default function PasswordInput({
  inputName,
  inputValue,
  inputPlaceholder,
  onChangeFunction,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassowrd = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={style.container}>
      <input
        type={showPassword ? "text" : "password"}
        name={inputName}
        value={inputValue}
        placeholder={inputPlaceholder}
        className={style.input}
        onChange={(e) => onChangeFunction(e)}
      />
      {!showPassword ? (
        <img
          alt="ocultar-contraseña"
          src={hiddenEye}
          className={style.eyeHiddenIcon}
          onClick={() => handleShowPassowrd()}
        />
      ) : (
        <img
          alt="mostrar-contraseña"
          src={showEye}
          className={style.eyeIcon}
          onClick={() => handleShowPassowrd()}
        />
      )}
    </div>
  );
}
