import React from "react";
import style from "../styles/description.module.css";

export default function Description() {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <p>
          Cosmic Dream, es una cepa de dominancia sativa. Es un cruce de
          Blueberry y Haze. Cosmic Dream tiene notas dulces que recuerdan a las
          bayas frescas. Los terpenos principales son el alfa-pineno, el mirceno
          y el beta-cariofileno. 
        </p>
      </div>
    </div>
  );
}
