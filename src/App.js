import React from "react";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Rutas from "./Routes";
import { useLocation } from "react-router-dom";
import "./App.css";

function App() {
  const location = useLocation();
  const isProductPage = location.pathname.startsWith("/producto/");

  return (
    <div className="general-container">
      {!isProductPage && <Navbar />}
      <Rutas />
      <Footer />
    </div>
  );
}

export default App;
