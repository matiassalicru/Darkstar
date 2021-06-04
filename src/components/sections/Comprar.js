import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import swal from "sweetalert";
import emailjs from "emailjs-com";

//Imported components/Images
import { Footer } from "../common/Footer";

//Imported Actions
import { cleanCart } from "../../actions/cart";

//Imported custom hooks
import { useForm } from "../../hooks/useForm/useForm";
import { Navbar } from "../common/Navbar";
import { Template } from "../common/Template";

export const Comprar = () => {
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
    user_extra: "",
    user_CP: "",
  };

  const [formValues, handleInputChange, reset] = useForm(initialForm);

  useEffect(() => {
    //Setea el state "pedido" con el valor del string ya separado por <br/> para crear nuevas lineas luego de cada item.
    setPedido(newJoin);
  }, [newJoin, loading]);

  const {
    user_name,
    user_email,
    user_phone,
    user_localidad,
    user_extra,
    user_CP,
  } = formValues;

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


  if (cart.length === 0) {
    return <Redirect to='/' />
  }

  return (
    <Fragment>
      <Navbar />
      <section className="comprar__main">
        <Template />

        <div className="comprar__container">
          <h1 className="comprar__title">Enviar pedido</h1>
          {cart.length >= 1 ? (
            <form action="POST" className="comprar__form" onSubmit={sendForm}>
              <label>Nombre y Apellido</label>
              <input
                type="text"
                name="user_name"
                placeholder="Matías Salicrú"
                value={user_name}
                required
                onChange={handleInputChange}
              />
              <label>Email</label>
              <input
                type="email"
                name="user_email"
                placeholder="mattiassalicru@email.com"
                value={user_email}
                required
                onChange={handleInputChange}
              />
              <label>Número de Teléfono</label>
              <input
                type="tel"
                name="user_phone"
                placeholder="3834123456"
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
              <label>Localidad/Dirección</label>
              <input
                type="text"
                required
                name="user_localidad"
                placeholder="Valle viejo..."
                value={user_localidad}
                onChange={handleInputChange}
              />

              <label> Código Postal </label>
              <input
                type="number"
                required
                placeholder="4700..."
                name="user_CP"
                value={user_CP}
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

              <p className='comprar__disclaimer'>
                Importante: Para los envíos trabajamos con
                E-pick ($400 ARS Válido para Córdoba, Rosario y
                Buenos Aires) ó MercadoEnvíos y estos costos son a cargo del comprador (El precio final no
                incluye el envío)
              </p>

              <label>Algo más que nos quieras decir?</label>
              <textarea
                placeholder="Vengo de instagram por la promo de..."
                name="user_extra"
                cols="30"
                rows="5"
                value={user_extra}
                onChange={handleInputChange}
              ></textarea>

              <label>
                Calcula el costo de tú envío {" "}
                <a
                  style={{ textDecoration: 'underline' }}
                  href="https://articulo.mercadolibre.com.ar/MLA-912443521-aros-aesthetic-darkstarar-ig-_JM?searchVariation=79117308142#searchVariation=79117308142&position=43&type=item&tracking_id=3224dada-54dd-4e6f-a9db-51dc21852e2b"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Aquí
                </a>
              </label>

              <input
                type="submit"
                disabled={loading}
                className={loading ? "btn-disabled" : "btn btn__success"}
                value="Enviar pedido"
              />
            </form>
          ) : (
            <Fragment>
              Loading...
            </Fragment>
          )}
        </div>
        <Footer />
      </section>
    </Fragment>
  );
};
