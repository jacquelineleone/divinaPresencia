import React from "react";
import style from "./styles/rotatingText.module.css";

export default function RotatingText({ words }) {
  return (
    <div className={style.textContainer}>
      <div className={style.text}>
        {words.map((word, index) => (
          <h4 key={index}>{word}</h4>
        ))}
      </div>
    </div>
  );
}
