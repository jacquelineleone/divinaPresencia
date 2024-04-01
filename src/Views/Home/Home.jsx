import React from "react";
import style from "./styles/home.module.css";
// Sections
import Header from "./sections/Header";
import Destacados from "./sections/Destacados";
import Description from "./sections/Description";

export default function Home() {
  return (
    <div className={style.container}>
      <Header />
      <Destacados />
      <Description />
    </div>
  );
}
