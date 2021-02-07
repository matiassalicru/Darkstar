import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Footer } from "../common/Footer";
import { Navbar } from "../common/Navbar";
import { useForm } from "../../hooks/useForm/useForm";
import swal from "sweetalert";
import { updateItem } from "../../actions/cart";
import emptyBox from "../../Assets/emptyBox.svg";
import emailjs from "emailjs-com";

export const Comprar = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const [pedido, setPedido] = useState("");

  const joins = []; // Crea un array vacío
  // const precioFinal = 

  for (let i = 0; i < cart.length; i++) {
    joins.push(cart[i].title, "cantidad:" + cart[i].price); //Mete los objetos del cart en un array
    // precioFinal
  }

  const newJoin = joins.join(" <br/> "); //Junta los items de array en un string separados por un <br/> para que cree una nueva linea luego de cada item.

  const [values, handleInputChange] = useForm({});

  useEffect(() => {
    setPedido(newJoin); //Setea el state "pedido" con el valor del string ya separado por <br/> para crear nuevas lineas luego de cada item.
    console.log(newJoin);
  }, []);

  const { name, email, phone, localidad } = values;

  const sendForm = (e) => {
    e.preventDefault();
    console.log(e.target);

    swal({
      title: "Recibimos tú pedido",
      text:
        "Estate atento que pronto te va a llegar un mail confirmando tú pedido",
      icon: "success",
    });

    emailjs
      .sendForm(
        "service_rbhhl9s",
        "nuevo_pedido",
        e.target,
        "user_K4IrELRUXZH27hX6lozBt"
      )
      .then((res) => {
        console.log(res.text);
      })
      .catch((e) => {
        console.log(e.text);
      });
  };

  const removeItem = (itemID, action) => {
    dispatch(updateItem(itemID, action));
  };

  return (
    <>
      <Navbar />
      <section className="comprar__main">
        <h1 className="comprar__title">Finalizar compra</h1>

        <Link to="/" className="btn link">
          Volver al inicio
        </Link>
        <div className="comprar__container">
          <section className="comprar__items">
            {cart.length >= 1 ? (
              cart.map((item) => (
                <div className="comprar__item" key={item.id}>
                  <img
                    className="item__image"
                    src={item.images_thumb}
                    alt="producto"
                  />
                  <div className="item__description">
                    <h2 className="item__title">{item.title}</h2>
                    <p>Cantidad: {item.quantity}</p>
                    <p> {item.price} </p>
                    <button
                      className="btn"
                      onClick={() => removeItem(item.id, "remove")}
                    >
                      Quitar
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <section className="comprar__emptyCart">
                <h1>Tu carrito está vacío 😭</h1>
                <img src={emptyBox} alt="carrito vacio" />
              </section>
            )}
          </section>
          {cart.length >= 1 ? (
            <form action="POST" className="comprar__form" onSubmit={sendForm}>
              <label>Nombre y Apellido</label>
              <input
                type="text"
                name="user_name"
                value={name}
                onChange={handleInputChange}
              />
              <label>Email</label>
              <input
                type="email"
                name="user_email"
                value={email}
                onChange={handleInputChange}
              />
              <label>Número de Teléfono</label>
              <input
                type="phone"
                name="user_phone"
                value={phone}
                onChange={handleInputChange}
              />
              <label>Provincia</label>
              <select
                name="user_provincia"
                onChange={handleInputChange}
                defaultValue="empty"
              >
                <option disabled value="empty">
                  -- Selecciona una --
                </option>
                <option value="Córdoba">Córdoba</option>
                <option value="Catamarca">Catamarca</option>
                <option value="Buenos Aires">Buenos Aires</option>
              </select>
              <label>Localidad</label>
              <input
                type="text"
                name="user_localidad"
                value={localidad}
                onChange={handleInputChange}
              />
              <input
                type="text"
                onChange={handleInputChange}
                name="user_pedido"
                style={{ display: "none" }}
                value={pedido}
              />

              <input type="submit" className="btn" value="Enviar pedido" />
            </form>
          ) : null}
        </div>
        <Footer />
      </section>
    </>
  );
};
