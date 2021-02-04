import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanCart } from "../../actions/cart";
import { closeCart } from "../../actions/ui";
import { CartItem } from "./CartItem";

export const Cart = () => {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.cart.items);

  const setCartClosed = () => {
    dispatch(closeCart());
  };

  const cleanCarrito = () => {
    dispatch( cleanCart() )
  }

  return (
    <aside className="cart__main animate__animated animate__bounceInRight">
      <div className={`cart__exit`} onClick={setCartClosed}>
        <i className="fas fa-times"></i>
      </div>
      <button onClick={cleanCarrito} className="btn">Limpiar Carrito</button>
      <div className="cart__items">
        {items !== [] && items.map((item) => <CartItem item={item} />)}
      </div>
    </aside>
  );
};
