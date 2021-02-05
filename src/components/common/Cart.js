import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanCart } from "../../actions/cart";
import { closeCart } from "../../actions/ui";
import { CartItem } from "./CartItem";

import emptyBox from "../../Assets/emptyBox.svg";

export const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const setCartClosed = () => {
    dispatch(closeCart());
  };

  const cleanCarrito = () => {
    dispatch(cleanCart());
  };

  return (
    <aside className="cart__main animate__animated animate__fadeInRight">
      <div className={`cart__exit`} onClick={setCartClosed}>
        <i className="fas fa-times"></i>
      </div>

      <div className="cart__items">
        {items.length >= 1 ? (
          <>
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
            <button onClick={cleanCarrito} className="btn">
              Limpiar Carrito
            </button>
          </>
        ) : (
          <section className="cart__emptyCart">
            <h3>Aun no tienes accesorios en tu carrito ☹</h3>
            <img src={emptyBox} alt="carrito vacío" />
          </section>
        )}
      </div>
    </aside>
  );
};
