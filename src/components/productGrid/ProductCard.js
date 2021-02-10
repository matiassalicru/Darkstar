import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { sendToView } from "../../actions/view";
import { ProductSlider } from "./ProductSlider";

//Images imports
import eye from "../../Assets/eye.png";
import { addCart } from "../../actions/cart";

export const ProductCard = ({ data }) => {
  const dispatch = useDispatch();

  const { images_thumb, title, price, type } = data;

  const sendTo = () => {
    dispatch(sendToView(data));
  };

  const addToCart = (item) => {
    dispatch(addCart(item));
  };

  return (
    <>
      {title ? (
        <div className="card__main">
          <div className="card__carousel">
            <ProductSlider slideImgs={images_thumb} />
          </div>

          {/* Acá este link que reemplaza la url con el tipo de producto y el producto en sí, quitando espacios y llevando todo a minúscula */}
          <div className="card__description">
            <h1 className="card__title">{title}</h1>
            <p className="card__price">$ {price}</p>
            <div className="card__buttons">
              {/* Añade el item al carrito directamente */}
              <button className="card__btn" onClick={() => addToCart(data)}>
                Comprar
              </button>
              <Link
                to={`/tienda/${type.toLowerCase()}/${title
                  .replace(/\s/g, "")
                  .toLowerCase()}`}
                onClick={sendTo}
              >
                <button className="card__btn">
                  <img src={eye} alt="detalles" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
