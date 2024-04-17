import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "../Components/ScrollToTop";

// Views
import Home from "../Views/Home/Home";
import Products from "../Views/Products/Products";
import Detail from "../Views/Detail/Detail";
import Auth from "../Views/Auth/Auth";

function Rutas() {
  const [loggedUser, setLoggedUser] = useState(false);

  /*
  useEffect(() => {
    // Verificar si el usuario está guardado en el localStorage
    const user = localStorage.getItem("user");
    if (user) {
      setUserLoggedIn(true);
    }
  }, []);*/

  return (
    <>
      <ScrollToTop>
        {loggedUser ? null : <Auth />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/producto/:id" element={<Detail />} />
        </Routes>
      </ScrollToTop>
    </>
  );
}

export default Rutas;
