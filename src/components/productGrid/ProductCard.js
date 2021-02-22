import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { sendToView } from "../../actions/view";
import { ProductSlider } from "./ProductSlider";

//Images imports
import eye from "../../Assets/eye.png";
import { addCart, updateItem } from "../../actions/cart";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { images_thumb, title, price, type } = item;
  const items = useSelector((state) => state.cart.items);

  const sendTo = (e) => {
    dispatch(sendToView(item));

    

    if (e.target.id === "link" || '' || null) {
      console.log("mandame");
      return history.push(
        `/tienda/${type.toLowerCase()}/${title
          .replace(/\s/g, "")
          .toLowerCase()}`
      );
    }
  };

  const addToCart = (item, action) => {
    let exist = false;

    for (let i = 0; i < items.length; i++) {
      const id = items[i].id;

      if (item.id === id) {
        exist = true;
      } else {
        exist = false;
      }
    }

    if (exist === true) {
      dispatch(updateItem(item, action));
    } else {
      dispatch(addCart(item));
    }
  };

  return (
    <>
      {title ? (
        <div className="card__main">
          <div className="card__carousel">
            <ProductSlider slideImgs={images_thumb} />
          </div>

          {/* Acá este link que reemplaza la url con el tipo de producto y el producto en sí, quitando espacios y llevando todo a minúscula */}
          <div className="card__description" id="link" onClick={sendTo}>
            <h1 className="card__title">{title}</h1>
            <p className="card__price">$ {price}</p>
            <div className="card__buttons">
              {/* Añade el item al carrito directamente */}
              <button
                id="btn"
                className="card__btn"
                onClick={() => addToCart(item, "add")}
              >
                Comprar
              </button>
              <button className="card__btn" onClick={sendTo} id="link">
                <img src={eye} alt="detalles" onClick={sendTo} id="link" />
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ProductCard;
