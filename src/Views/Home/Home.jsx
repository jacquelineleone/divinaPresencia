import React from "react";
import style from "./styles/home.module.css";
// Sections
import Header from "./sections/Header";
import Destacados from "./sections/Destacados";
import RotatingText from "../../Components/RotatingText/RotatingText";
import Description from "./sections/Description";

export default function Home() {
  return (
    <div className={style.container}>
      <Header />
      <Destacados />
      <RotatingText
        words={[
          "Momentos de tranquilidad -",
          "Relax -",
          "Chill -",
          "Momentos de tranquilidad -",
          "Relax -",
          "Chill -",
        ]}
      />
      <RotatingText
        words={[
          "Relax -",
          "Chill -",
          "Momentos de tranquilidad -",
          "Relax -",
          "Chill -",
          "Momentos de tranquilidad -",
        ]}
      />
      <Description />
    </div>
  );
}
