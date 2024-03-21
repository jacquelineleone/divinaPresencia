import React from "react";
import style from "./styles/navbar.module.css";
import { Link } from "react-router-dom";

import logo from "../../Assets/Images/logo.png";
import search from "../../Assets/Images/Navbar/search.png";

export default function Navbar() {
  return (
    <div className={style.container}>
      <Link to={"/"}>
        <img
          src={logo}
          alt="Logo 'La Divina Presencia'"
          className={style.logo}
        />
      </Link>
      <img src={search} alt="Ícono búsqueda" className={style.searchImg} />
    </div>
  );
}
