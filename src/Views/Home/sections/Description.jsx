import React from "react";
import style from "../styles/description.module.css";
import productTypes from "../json/productTypes.json";

import item1 from "../../../Assets/Images/Home/Item1.svg";
import item2 from "../../../Assets/Images/Home/Item2.svg";

const ProductType = ({ category, caption, textItem1, textItem2, image }) => {
  return (
    <div
      className={`${style.productType} ${
        category === "Plumas de Wax" && style.rightElement
      }`}
    >
      <div className={style.info}>
        <div
          className={`${style.header} ${
            category === "Plumas de Wax" && style.rightElement
          }`}
        >
          <h6>{category}</h6>
          <p>{caption}</p>
        </div>
        <div className={style.items}>
          <div
            className={`${style.item} ${
              category === "Plumas de Wax" && style.rightElement
            }`}
          >
            <img src={item1} alt="Item 1" />
            <p>{textItem1}</p>
          </div>
          <div
            className={`${style.item} ${
              category === "Plumas de Wax" && style.rightElement
            }`}
          >
            <img src={item2} alt="Item 2" />
            <p>{textItem2}</p>
          </div>
        </div>
      </div>
      <img src={image} alt={`${category} - Imagen descriptiva`} />
    </div>
  );
};

export default function Description() {
  return (
    <div className={style.container}>
      <h4>Nuestros Productos</h4>
      <div className={style.productTypes}>
        {productTypes.map((type) => (
          <ProductType
            category={type.category}
            caption={type.caption}
            textItem1={type.textItem1}
            textItem2={type.textItem2}
            image={type.image}
          />
        ))}
      </div>
    </div>
  );
}
