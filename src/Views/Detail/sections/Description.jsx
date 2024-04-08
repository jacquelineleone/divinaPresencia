import React from "react";
import style from "../styles/description.module.css";

export default function Description({ info }) {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <p>
          {info}
        </p>
      </div>
    </div>
  );
}
