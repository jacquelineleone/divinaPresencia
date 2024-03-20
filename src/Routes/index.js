import React from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "../Components/ScrollToTop";

// Views
import Home from "../Views/Home/Home";
import Products from "../Views/Products/Products";
import Detail from "../Views/Detail/Detail";

function Rutas() {
  return (
    <>
      <ScrollToTop>
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
