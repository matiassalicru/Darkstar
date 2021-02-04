import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { sendToView } from "../../actions/view";
import { ProductSlider } from "./ProductSlider";

export const ProductCard = ({data}) => {
  const dispatch = useDispatch();

  const { images_thumb, title, price, type } = data;

  const sendTo = () => {
    dispatch(sendToView(data));
  };

  return (
    <>
      {title ? (
        <div className="card__main">
          
          <div className="card__carousel">
            <ProductSlider slideImgs={images_thumb} />
          </div>


          {/* Acá este link que reemplaza la url con el tipo de producto y el producto en sí, quitando espacios y llevando todo a minúscula */}
          <Link
            className="card__description"
            to={`/tienda/${type.toLowerCase()}/${title
              .replace(/\s/g, "")
              .toLowerCase()}`}
            onClick={sendTo}
          >
            <h1 className="card__title">{title}</h1>
            <p className="card__price">$ {price}</p>
            <button className="card__btn">Ver detalle</button>
          </Link>
        </div>
      ) : null}
    </>
  );
};
