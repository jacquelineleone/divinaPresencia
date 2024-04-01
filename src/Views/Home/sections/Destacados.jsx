import React from "react";
import style from "../styles/destacados.module.css";
import productos from "../json/destacados.json";
import imagen from "../../../Assets/Images/Home/Producto01.png";

const Product = ({ image, name, description }) => {
  return (
    <div className={style.productContainer}>
      <img src={image} alt="" />
      <div className={style.content}>
        <h6>{name}</h6>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default function Destacados() {
  return (
    <div className={style.container}>
      <h4>Productos Destacados</h4>
      <div className={style.products}>
        {productos.map((producto) => (
          <Product
            image={producto.image}
            name={producto.name}
            description={producto.description}
          />
        ))}
      </div>
    </div>
  );
}
