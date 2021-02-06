import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Footer } from "../common/Footer";
import { Navbar } from "../common/Navbar";
import { useForm } from "../../hooks/useForm/useForm";



export const Comprar = () => {
  const cart = useSelector((state) => state.cart.items);

  const [values, handleInputChange, reset ] = useForm();

  const sendForm = (e) => {
    e.preventDefault();

    console.log(values);

  }

  console.log(values);

  console.log(cart[0]);

  return (
    <>
      <Navbar />
      <section className="comprar__main">
        <h1 className="comprar__title">Finalizar compra</h1>

        <Link to="/" className="btn link">
          Volver al inicio
        </Link>
        <div className="comprar__cartItems">
          <section className="comprar__items">
            {cart.length >= 1 &&
              cart.map((item) => (
                <div className="comprar__item" key={item.id}>
                  <img
                    className="item__image"
                    src={item.images_thumb}
                    alt="producto"
                  />
                  <div className="item__description">
                    <h2 className="item__title">{item.title}</h2>
                    <p> {item.price} </p>
                  </div>
                </div>
              ))}
          </section>
          <form
            action="POST"
            className="comprar__form"
            onSubmit={sendForm}
          >
            <label>Nombre y Apellido</label>
            <input type="text" onChange={handleInputChange} />
            <label>Email</label>
            <input type="email" name="email" onChange={handleInputChange} />
            <label>Número de Teléfono</label>
            <input type="number" name="phone" onChange={handleInputChange} />
            <label>Provincia</label>
            <select name="provincia">
              <option value="Córdoba">Córdoba</option>
              <option value="Catamarca">Catamarca</option>
              <option value="Buenos Aires">Buenos Aires</option>
            </select>
            <label>Localidad</label>
            <input type="text" onChange={handleInputChange} />
            <input type="submit"  value="Enviar pedido" />
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};
