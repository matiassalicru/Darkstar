import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../actions/cart";

export const CartItem = ({ item }) => {
  const dispatch = useDispatch()

  const deleteItem = (itemID) =>{
    dispatch( removeFromCart(itemID) )
  }
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
          <button onClick={() => deleteItem(item.id)} className="btn__secundary">Delete</button>
        </section>
      </div>
    </div>
  );
};
