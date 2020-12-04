import React from "react";

export const ProductCard = ({ img, title, price }) => {
  return (
    <>
      {title ? (
        <div className="card__main">
          <img src={img} alt="" className="card__img" />
          <h1 className="card__title">{title}</h1>
          <p className="card__price">$ {price}</p>
        </div> 
      ) : null}
    </>
  );
};
