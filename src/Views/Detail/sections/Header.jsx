import React from "react";
import style from "../styles/header.module.css";

const Card = ({ name, data, dataType }) => {
  return (
    <div className={style.card}>
      <p className={style.cardName}>{name}</p>
      <div className={style.values}>
        {data && <p className={style.mainValue}>{data}</p>}
        {dataType && <p className={style.otherValue}>{dataType}</p>}
      </div>
    </div>
  );
};

export default function Header({ productName, price, image, attributes }) {
  return (
    <div className={style.container}>
      <div className={style.bg}></div>
      <div className={style.content}>
        <div className={style.title}>
          <h2>{productName}</h2>
          <h4>{price}$</h4>
        </div>
        <div className={style.data}>
          <div className={style.cardsContainer}>
            {attributes &&
              attributes.map((attribute) => (
                <Card
                  name={attribute.name}
                  data={attribute.value}
                  dataType={attribute.type}
                />
              ))}
          </div>
          <img src={image} alt={`Imagen ilustrativa de ${productName}`} />
        </div>
      </div>
    </div>
  );
}
