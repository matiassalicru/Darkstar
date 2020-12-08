import React from "react";
import swal from "sweetalert";

export const ProductCard = ({ img, title, price }) => {

  const mustBe = (title) => {
    swal(`Aca deberia salir una vista de ${title.toLowerCase()}`, '', 'error')
  }

  return (
    <>
      {title ? (
        <div className="card__main" onClick={() => mustBe(title)}>
          <img src={img} alt="" className="card__img" />
          <h1 className="card__title">{title}</h1>
          <p className="card__price">$ {price}</p>
        </div> 
      ) : null}
    </>
  );
};
