import React from "react";
import { useDispatch } from "react-redux";
import { updateItem } from "../../actions/cart";

export const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const updateAnItem = (itemID, addOrRemove) => {
    dispatch(updateItem(itemID, addOrRemove));
  };

  return (
    <div className="cartItem__main">
      <img src={item.images_thumb} alt="item" />
      <div className="cartItem__description">
        <h1 className="cartItem__title">{item.title}</h1>
        <section className="cartItem__subdescription">
          <div>
            <p> Precio: {item.price} </p>
            <p> Cantidad: {item.quantity} </p>
          </div>
          <div className="cartItem__buttons">
            <button
              onClick={() => updateAnItem(item.id, "remove")}
              className="btn__secundary"
            >
              Quitar
            </button>
            <button
              onClick={() => updateAnItem(item.id, "add")}
              className="btn__secundary"
            >
              Añadir
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};
