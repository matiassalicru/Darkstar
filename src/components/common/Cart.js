import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanCart } from "../../actions/cart";
import { closeCart } from "../../actions/ui";
import { CartItem } from "./CartItem";

import emptyBox from "../../Assets/emptyBox.svg";
import { Link } from "react-router-dom";

export const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const total = useSelector(state => state.prices.total);

  const setCartClosed = () => {
    dispatch(closeCart());
  };

  const cleanCarrito = () => {
    dispatch(cleanCart());
  };

  return (
    <aside className="cart__main animate__animated animate__fadeInRight animate__faster">
      <div className={`cart__exit`} onClick={setCartClosed}>
        <i className="fas fa-times"></i>
      </div>

      <div className="cart__items">
        {items.length >= 1 ? (
          <>
            <Link
              className="btn"
              to="/comprar"
              onClick={() => dispatch(closeCart())}
            >
              Realizar compra
            </Link>
            <p>Total: {total}</p>
            <button onClick={cleanCarrito} className="btn cart__cleanBtn">
              Limpiar
            </button>
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
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
