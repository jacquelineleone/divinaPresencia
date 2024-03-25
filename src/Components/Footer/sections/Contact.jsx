import React from "react";
import style from "../styles/contact.module.css";
import logoInstagram from "../../../Assets/Images/Footer/instagram.svg";

export default function Contact() {
  return (
    <div className={style.container}>
      <h2>Seguinos en</h2>
      <div className={style.socialMedia}>
        <img src={logoInstagram} alt="Logo Instagram" />
        <p>ladivinapresencia01</p>
      </div>
    </div>
  );
}
