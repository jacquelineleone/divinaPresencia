import React from "react";
import style from "../styles/contact.module.css";
import logoInstagram from "../../../Assets/Images/Footer/instagram.svg";

export default function Contact() {
  return (
    <div className={style.container}>
      <h4>Seguinos en</h4>
      <div className={style.socialMedia}>
        <img src={logoInstagram} alt="Logo Instagram" />
        <p>ladivinapresencia01</p>
      </div>
    </div>
  );
}
