import React from "react";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Rutas from "./Routes";
import "./App.css";

function App() {
  return (
    <div className="general-container">
      <Navbar />
      <Rutas />
      <Footer />
    </div>
  );
}

export default App;
