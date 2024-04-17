import React from "react";
import style from "./styles/formInput.module.css";

export default function FormInput({
  inputName,
  inputValue,
  inputPlaceholder,
  disabledItem,
  onChangeFunction,
  viewOnly,
}) {
  return (
    <input
      type="text"
      name={inputName}
      value={inputValue}
      placeholder={inputPlaceholder}
      disabled={disabledItem}
      className={style.formInput}
      onChange={(e) => onChangeFunction(e)}
      readOnly={viewOnly}
    />
  );
}
