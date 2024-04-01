import React from "react";
import style from "../styles/header.module.css";

export default function Header() {
  return (
    <div className={style.container}>
      <div className={style.title}>
        <h1>La divina presencia</h1>
        <p>La mejor calidad, en un solo lugar.</p>
      </div>
    </div>
  );
}
