import React from "react";
import { Redirect } from "react-router-dom";
import { ProductSlider } from "./ProductSlider";

export const ProductCard = ({ imgs, title, price, type }) => {
  const mustBe = (title,type) => {
    <Redirect to={`/tieda/${type}/${title.trim(" ")}`} />;
    console.log(title.trim());
    console.log(type);
  };


  return (
    <>
      {title ? (
        <div className="card__main">
          <div className="card__carousel">
            <ProductSlider slideImgs={imgs} />
          </div>
          <div className="card__description" onClick={() => mustBe(title,type)}>
            <h1 className="card__title">{title}</h1>
            <p className="card__price">$ {price}</p>
            <button className="card__btn">Visitar</button>
          </div>
        </div>
      ) : null}
    </>
  );
};
