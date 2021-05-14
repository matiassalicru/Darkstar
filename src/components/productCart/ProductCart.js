import React from "react";
import { useSelector } from "react-redux";
import { CartItem } from "../common/CartItem";
import { Footer } from "../common/Footer";
import { Navbar } from "../common/Navbar";
import { Link, useHistory } from "react-router-dom";

export const ProductCart = () => {
  const cart = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);
  const history = useHistory();

  return (
    <>
      <Navbar />
      <article className="productCart__main">

        {cart.length >= 1 ? (
          <>
            <h1 className="productCart__title">Tus productos</h1>
            <Link className="btn link" to="/comprar">
              Finalizar compra
            </Link>
            <h2>Total a pagar: ${total} ARS</h2>
            <small>
              El método de pago se acuerda con la tienda una vez realizado el
              pedido.
            </small>

            {cart.map((item) => (
              <section key={item.id} className="productCart__card">
                <CartItem item={item} />
              </section>
            ))}

            <p className="productCart__mediosDePago">
              Acordate que podes abonar mediante transferencia bancaria,
              Efectivo o MercadoPago
              <span> (Ualá, Brubank, MercadoPago)</span>
            </p>

            <button className="btn" onClick={() => history.goBack()}>
              Seguir comprando
            </button>
          </>
        ) : (
          <section className="productCart__empty">
            <h3>Aun no tienes accesorios en tu carrito</h3>
            <button
              className="btn productCart__buyBTN"
              onClick={() => history.goBack()}
            >
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
