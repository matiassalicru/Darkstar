import React from "react";

export const CartItem = ({ item }) => {
  return (
    <div className="cartItem__main">
      <img src={item.images_thumb} alt="item" />
      <div className="cartItem__description">
        <h1 className="cartItem__title">{item.title}</h1>
        <p> Presio {item.price} </p>
        <p> Cantidad: {item.quantity} </p>
      </div>
    </div>
  );
};
