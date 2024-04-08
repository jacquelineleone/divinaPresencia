import React from "react";
import { useParams } from "react-router-dom";
import style from "./styles/detail.module.css";
import products from "../../Assets/Json/allProducts.json";
// sections
import Header from "./sections/Header";
import Description from "./sections/Description";

export default function Detail() {
  const { id } = useParams();
  const productId = parseInt(id);
  const product = products.find((product) => product.id === productId);

  console.log(product);

  if (!product) {
    // page de not found
    //return <div>Producto no encontrado</div>;
  }

  return (
    <div>
      <Header
        productName={product.name}
        price={product.price}
        image={product.image}
      />
      <Description />
    </div>
  );
}
