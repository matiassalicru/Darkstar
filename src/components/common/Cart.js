import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeCart } from "../../actions/ui";
import { CartItem } from "./CartItem";

// import emptyBox from "../../Assets/emptyBox.svg";
import { Link } from "react-router-dom";

export const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);

  const setCartClosed = () => {
    dispatch(closeCart());
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
            <div className="">
            </div>
            <p className="cart__total">Tú compra: ${total} ARS</p>
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </>
        ) : (
          <section className="cart__emptyCart">
            <h3>Aun no tienes accesorios en tu carrito ☹</h3>
            {/* <img src={emptyBox} alt="carrito vacío" /> */}
          </section>
        )}
      </div>
    </aside>
  );
};
