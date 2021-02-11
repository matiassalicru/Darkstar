import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartItem } from "../common/CartItem";
import { Footer } from "../common/Footer";
import { Navbar } from "../common/Navbar";
import { useHistory } from "react-router-dom";
import { cleanCart } from "../../actions/cart";

//images imports
import emptyBox from "../../Assets/emptyBox.svg";
import arrow from '../../Assets/Arrow.png';

export const ProductCart = () => {
  const cart = useSelector((state) => state.cart.items);
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <>
      <Navbar />
      <article className="productCart__main">
        <h1 className="productCart__title">Tus productos</h1>

        <button onClick={() => history.goBack()} className="base__backBtn">
          <img className="base__arrow" src={arrow} alt="volver atras" />
        </button>

        {cart.length >= 1 ? (
          <>
            {cart.map((item) => (
              <section key={item.id} className="productCart__card">
                <CartItem item={item} />
              </section>
            ))}

            <button className="btn" onClick={() => history.goBack()}>
              Seguir comprando
            </button>
            <button className="btn" onClick={() => dispatch(cleanCart())}>
              Limpiar carrito
            </button>
          </>
        ) : (
          <section className="cart__emptyCart">
            <h3>Aun no tienes accesorios en tu carrito ☹</h3>
            <img src={emptyBox} alt="carrito vacío" />
            <button className="btn productCart__buyBTN" onClick={() => history.goBack()}>
              Empezar a comprar!
            </button>
          </section>
        )}
        <footer>
          <Footer />
        </footer>
      </article>
    </>
  );
};
