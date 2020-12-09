import React from "react";
import swal from "sweetalert";
import { ProductSlider } from "./ProductSlider";

export const ProductCard = ({ imgs, title, price }) => {
  const mustBe = (title) => {
    swal(`Aca deberia salir una vista de ${title.toLowerCase()}`, "", "error");
  };

  return (
    <>
      {title ? (
        <div className="card__main">
          <div className="card__carousel">
            {/* <img src={img} alt="" className="card__img" /> */}
            <ProductSlider slideImgs={imgs} />
          </div>
          <div className="card__description" onClick={() => mustBe(title)}>
            <h1 className="card__title">{title}</h1>
            <p className="card__price">$ {price}</p>
            <button className="card__btn">Visitar</button>
          </div>
        </div>
      ) : null}
    </>
  );
};
