import React from "react";
import { useSelector } from "react-redux";
import { CartItem } from "../common/CartItem";
import { Footer } from "../common/Footer";
import { Navbar } from "../common/Navbar";
import { Template } from "../common/Template";

//images imports
import emptyBox from "../../Assets/emptyBox.svg";
import { Redirect, useHistory } from "react-router-dom";

export const ProductCart = () => {
  const cart = useSelector((state) => state.cart.items);
  const history = useHistory()

  return (
    <>
      <Navbar />
      <article className="productCart__main">
        <h1 className="productCart__title">Tus productos</h1>

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
          </>
        ) : (
          <section className="cart__emptyCart">
            <h3>Aun no tienes accesorios en tu carrito ☹</h3>
            <img src={emptyBox} alt="carrito vacío" />
          </section>
        )}
        <footer>
          <Footer />
        </footer>
      </article>
    </>
  );
};
