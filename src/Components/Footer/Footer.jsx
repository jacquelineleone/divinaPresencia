import React from "react";
import style from "./styles/footer.module.css";

//Sections
import Contact from "./sections/Contact";
import Nav from "./sections/Nav";
import Copyright from "./sections/Copyright";

export default function Footer() {
  return (
    <div className={style.generalContainer}>
      <div className={style.container}>
        <Contact />
        <hr />
        <Nav />
        <hr />
        <Copyright />
      </div>
    </div>
  );
}
