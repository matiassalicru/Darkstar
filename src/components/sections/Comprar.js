import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Footer } from "../common/Footer";
import { useForm } from "../../hooks/useForm/useForm";
import swal from "sweetalert";
import { updateItem } from "../../actions/cart";
import emptyBox from "../../Assets/emptyBox.svg";
import emailjs from "emailjs-com";
import { cleanData } from "../../actions/data";
import logoDarkstar from "../../Assets/logos/Darkstar.ar.png";

export const Comprar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);
  const [pedido, setPedido] = useState("");

  const joins = []; // Crea un array vacío

  for (let i = 0; i < cart.length; i++) {
    joins.push("Producto: ", cart[i].title, "Cantidad: " + cart[i].quantity); //Mete los objetos del cart en un array
  }

  const newJoin = joins.join(" <br/> "); //Junta los items de array en un string separados por un <br/> para que cree una nueva linea luego de cada item.

  const [values, handleInputChange] = useForm({});

  useEffect(() => {
    setPedido(newJoin); //Setea el state "pedido" con el valor del string ya separado por <br/> para crear nuevas lineas luego de cada item.
  }, [newJoin]);

  const { name, email, phone, localidad } = values;

  const sendForm = (e) => {
    e.preventDefault();
    console.log(e.target);

    swal({
      title: "Recibimos tú pedido",
      text:
        "Estate atento que pronto te va a llegar un mail confirmando tú pedido",
      icon: "info",
      className: "sweetAlert"
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

  const update = (item, action) => {
    dispatch(updateItem(item, action));
  };

  return (
    <>
      <nav className="comprar__nav">
        <Link to="/" onClick={() => dispatch(cleanData())}>
          <img className="nav__logo" src={logoDarkstar} alt="Darkstar" />
        </Link>
      </nav>
      <section className="comprar__main">
        <h1 className="comprar__title">Finalizar compra</h1>

        <Link to="/" className="btn link">
          Volver al inicio
        </Link>
        <div className="comprar__container">
          <section className="comprar__items">
            <h1 className="comprar__tusProductosTitle">Tus productos</h1>
            {cart.length >= 1 ? (
              <>
                <h1 className="comprar__subtotal">Subtotal: ${total}</h1>

                {cart.map((item) => (
                  <div className="comprar__item" key={item.id}>
                    <img
                      className="item__image"
                      src={item.images_thumb}
                      alt="producto"
                    />
                    <div className="item__description">
                      <h2 className="item__title">{item.title}</h2>
                      <p>Cantidad: {item.quantity}</p>
                      <p> Precio: $ {item.price} </p>
                      <div className="item__buttons">
                        <button
                          className="btn"
                          onClick={() => update(item, "add")}
                        >
                          Añadir
                        </button>
                        <button
                          className="btn"
                          onClick={() => update(item, "remove")}
                        >
                          Quitar
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <section className="comprar__emptyCart">
                <h1>Tu carrito está vacío 😭</h1>
                <img src={emptyBox} alt="carrito vacio" />
                <button
                  className="btn"
                  onClick={() => history.push("/tienda/aros")}
                >
                  Empezá a añadir accesorios a tu carrito!
                </button>
              </section>
            )}
          </section>
          {cart.length >= 1 && (
            <form action="POST" className="comprar__form" onSubmit={sendForm}>
              <label>Nombre y Apellido</label>
              <input
                type="text"
                name="user_name"
                placeholder="Escribe tu nombre.."
                value={name}
                required
                onChange={handleInputChange}
              />
              <label>Email</label>
              <input
                type="email"
                name="user_email"
                placeholder="email@email.com"
                value={email}
                required
                onChange={handleInputChange}
              />
              <label>Número de Teléfono</label>
              <input
                type="phone"
                name="user_phone"
                required
                value={phone}
                onChange={handleInputChange}
              />
              <label>Provincia</label>
              <select
                name="user_provincia"
                onChange={handleInputChange}
                required
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
                required
                name="user_localidad"
                value={localidad}
                onChange={handleInputChange}
              />
              <input
                type="text"
                onChange={handleInputChange}
                name="user_pedido"
                required
                style={{ display: "none" }}
                value={pedido}
              />
              <input
                type="text"
                onChange={handleInputChange}
                name="user_total"
                required
                style={{ display: "none" }}
                value={total}
              />

              <input
                type="submit"
                required
                className="btn"
                value="Enviar pedido"
              />
            </form>
          )}
        </div>
        <Footer />
      </section>
    </>
  );
};
