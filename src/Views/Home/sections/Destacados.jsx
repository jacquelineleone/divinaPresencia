import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import style from "../styles/destacados.module.css";
import productos from "../../../Assets/Json/allProducts.json";

const Product = ({ id, image, name, description, imgHeight }) => {
  return (
    <div className={style.productContainer}>
      <Link to={`/producto/${id}`}>
        <div className={style.image}>
          <img src={image} alt="" style={{ height: imgHeight }} />
        </div>
      </Link>
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
      <h4>Todos los productos</h4>
      <div className={style.products}>
        <Swiper className={style.swiper} loop={true}>
          {productos.map(
            (producto, index) =>
              index % 3 === 0 && (
                <SwiperSlide
                  className={style.swiperSlide}
                  key={index}
                  style={{ display: "flex" }}
                >
                  {productos.slice(index, index + 3).map((prod, i) => (
                    <div key={i}>
                      <Product
                        id={prod.id}
                        image={prod.image}
                        name={prod.name}
                        description={prod.reduceDescription}
                        imgHeight={prod.homeHeight}
                      />
                    </div>
                  ))}
                </SwiperSlide>
              )
          )}
        </Swiper>
      </div>
    </div>
  );
}
