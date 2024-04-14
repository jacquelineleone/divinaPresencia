import React from "react";
import style from "../styles/notFound.module.css";
import mascota from "../../../Assets/Images/Detail/mascota.svg";

export default function NotFound() {
  return (
    <div className={style.container}>
      <div className={style.bg}></div>
      <div className={style.content}>
        <div className={style.text}>
          <h2>Lo sentimos!</h2>
          <p>No encontramos el producto que estás buscando.</p>
        </div>
        <img src={mascota} />
      </div>
    </div>
  );
}
