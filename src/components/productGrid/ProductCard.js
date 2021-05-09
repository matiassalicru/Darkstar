import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { sendToView } from "../../actions/view";
import { ProductSlider } from "./ProductSlider";

//Images imports
import eye from "../../Assets/eye.png";
import { addCart, updateItem } from "../../actions/cart";
import swal from "sweetalert";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { images_thumb, title, price, type } = item;
  const items = useSelector((state) => state.cart.items);

  const sendTo = (e) => {
    dispatch(sendToView(item));

    if (e.target.id === "link" || "" || null) {
      return history.push(
        `/tienda/${type.toLowerCase()}/${title
          .replace(/\s/g, "")
          .toLowerCase()}`
      );
    }
  };

  const addToCart = (item, action) => {
    // REFACTOR. MANTENIMIENTO.

    swal({
      title: 'Sitio web en mantenimiento',
      text: 'Para cualquier pedido puedes contactarnos por nuestros instagram @darkstar.ar'
    })

    // const itemsExists = items.find((cartItem) => cartItem.id === item.id);

    // if (itemsExists) {
      // dispatch(updateItem(item, action));
    // } else {
      // dispatch(addCart(item));
    // }
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
            <strong
              className={
                item.availability !== "out of stock"
                  ? `card__inStock`
                  : `card__outOfStock`
              }
            >
              {item.availability}
            </strong>
            <div className="card__buttons">
              {/* Añade el item al carrito directamente */}
              <button className="card__btn" onClick={sendTo} id="link">
                <img src={eye} alt="detalles" onClick={sendTo} id="link" />
              </button>
              <button
                id="btn"
                className="card__btn"
                onClick={() => addToCart(item, "add")}
                disabled={item.availability === "out of stock" ? true : false}
              >
                Comprar
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ProductCard;
