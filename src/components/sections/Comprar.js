import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import swal from "sweetalert";
import emailjs from "emailjs-com";

//Imported components/Images
import { Footer } from "../common/Footer";
import emptyBox from "../../Assets/emptyBox.svg";
import logoDarkstar from "../../Assets/logos/Darkstar.ar.png";

//Imported Actions
import { updateItem, cleanCart } from "../../actions/cart";
import { cleanData } from "../../actions/data";

//Imported custom hooks
import { useForm } from "../../hooks/useForm/useForm";

export const Comprar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);
  const [loading, setLoading] = useState(false);
  const [pedido, setPedido] = useState("");

  const joins = []; // Crea un array vacío

  for (let i = 0; i < cart.length; i++) {
    joins.push(
      `Producto: ${cart[i].type} ${cart[i].title} - Cantidad: ${cart[i].quantity} - Precio por unidad: $${cart[i].price}`
    ); //Mete los objetos del cart en un array
  }

  const newJoin = joins.join(" <br/> "); //Junta los items de array en un string separados por un <br/> para que cree una nueva linea luego de cada item.

  const initialForm = {
    user_name: "",
    user_email: "",
    user_phone: "",
    user_localidad: "",
  };

  const [formValues, handleInputChange, reset] = useForm(initialForm);

  useEffect(() => {
    setPedido(newJoin); //Setea el state "pedido" con el valor del string ya separado por <br/> para crear nuevas lineas luego de cada item.
  }, [newJoin, loading]);

  const { user_name, user_email, user_phone, user_localidad } = formValues;

  const sendForm = (e) => {
    e.preventDefault();
    setLoading(true);

    swal({
      title: "Recibimos tú pedido",
      text:
        "Estate atento que pronto te va a llegar un mail confirmando tú pedido",
      icon: "info",
      className: "sweetAlert",
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
        setLoading(false);
        dispatch(cleanCart());
        reset();
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
                      <p>Precio: $ {item.price} </p>
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
                <h1>Tu carrito está vacío</h1>
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
                value={user_name}
                required
                onChange={handleInputChange}
              />
              <label>Email</label>
              <input
                type="email"
                name="user_email"
                placeholder="email@email.com"
                value={user_email}
                required
                onChange={handleInputChange}
              />
              <label>Número de Teléfono</label>
              <input
                type="tel"
                name="user_phone"
                minLength={6}
                required
                value={user_phone}
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
                <option value="Buenos Aires">Buenos Aires</option>
                <option value="Catamarca">Catamarca</option>
                <option value="Chaco">Chaco</option>
                <option value="Chubut">Chubut</option>
                <option value="Ciudad Autónoma de Buenos Aires">
                  Ciudad Autónoma de Buenos Aires
                </option>
                <option value="Córdoba">Córdoba</option>
                <option value="Corrientes">Corrientes</option>
                <option value="Entre Rios">Entre Rios</option>
                <option value="Formosa">Formosa</option>
                <option value="Jujuy">Jujuy</option>
                <option value="La Pampa">La Pampa</option>
                <option value="La Rioja">La Rioja</option>
                <option value="Mendoza">Mendoza</option>
                <option value="Misiones">Misiones</option>
                <option value="Neuquén">Neuquén</option>
                <option value="Río Negro">Río Negro</option>
                <option value="Salta">Salta</option>
                <option value="San Juan">San Juan</option>
                <option value="San Luis">San Luis</option>
                <option value="Santa Cruz">Santa Cruz</option>
                <option value="Santa Fe">Santa Fe</option>
                <option value="Santiago del estero">Santiago del estero</option>
                <option value="Tucuman">Tucuman</option>
              </select>
              <label>Localidad</label>
              <input
                type="text"
                required
                name="user_localidad"
                value={user_localidad}
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

              <label>Método de pago preferido</label>
              <select
                name="user_pago"
                onChange={handleInputChange}
                required
                defaultValue="empty"
              >
                <option disabled value="empty">
                  -- Selecciona un método --
                </option>
                <option value="Transferencia">Transferencia</option>
                <option value="Efectivo">Efectivo (Rapipago/Pago fácil)</option>
              </select>

              <p style={{ color: "violet" }}>
                Es importante que sepas que para los envíos trabajamos con
                Andreani, Correo argentino y/o E-pick y son a cargo del comprador (El precio final no incluye el envío)
              </p>

              <input
                type="submit"
                disabled={loading}
                className={loading ? "btn-disabled" : "btn"}
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
