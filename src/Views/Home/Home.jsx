import React from "react";
import style from "./styles/home.module.css";
// Sections
import Header from "./sections/Header";
import Destacados from "./sections/Destacados";

export default function Home() {
  return (
    <div className={style.container}>
      <Header />
      <Destacados />
    </div>
  );
}
