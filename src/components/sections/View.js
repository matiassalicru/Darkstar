import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { fetchData } from "../../actions/data";
import { sendToView } from "../../actions/view";
import { Footer } from "../common/Footer";
import { Loading } from "../common/Loading";
import { Navbar } from "../common/Navbar";
import { ProductSlider } from "../productGrid/ProductSlider";
import { addCart } from "../../actions/cart";
import { closeCart, closeSidebar, openCart } from "../../actions/ui";
import { Template } from '../common/Template'

//import images
import creditCard from "../../Assets/creditCard.png";
import arrow from "../../Assets/Arrow.png";

//Swiper

import SwiperCore, {
  Navigation,
  Pagination,
  EffectFade,
  Zoom,
  Autoplay,
} from "swiper";

//Import Swiper styles
import "swiper/swiper-bundle.css";
import "swiper/swiper.scss";
import swal from "sweetalert";

SwiperCore.use([Navigation, Pagination, EffectFade, Zoom, Autoplay]);

export const View = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [thereIsView, setThereIsView] = useState(false);

  let data = useSelector((state) => state.data);
  let thereIsData = false;

  const params = useParams();

  useEffect(() => {
    //Efecto para traer la data a traves de los params enviando el tipo de producto.
    if (!thereIsData) {
      dispatch(fetchData(params.tipo));
    }

    if (thereIsData) {
      dispatch(sendToView(data));
      setThereIsView(true);
    }

    return (() => {
      dispatch(closeSidebar());
      dispatch(closeCart());
    })
  }, [dispatch, params, data, thereIsData]);

  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    const elementTitle = element.title.replace(/ /g, "").toLowerCase();

    if (elementTitle === params.itemView) {
      data = data[i];
      thereIsData = true;
    }
  }

  const view = useSelector((state) => state.view);

  const cart = useSelector((state) => state.cart.items);

  let existingItem = cart.find((cartItem) => {
    return cartItem.id === view.id;
  });

  const addItem = (item, type) => {


    swal({
      title: "Sitio web en mantenimiento",
      text:
        "Para cualquier pedido puedes contactarnos por nuestros instagram @darkstar.ar",
    });

    if (existingItem) {
      swal({
        title: "Este accesorio ya se encuentra en tu carrito",
        text: "Si queres una unidad más agregala desde el carrito",
        icon: "warning",
        buttons: {
          openCart: "Ver Carrito",
          accept: "Cancelar",
        },
        className: "sweetAlert",
      }).then((value) => {
        switch (value) {
          case "openCart":
            if (type !== "mobile") {
              dispatch(openCart());
            } else {
              history.replace("/productCart");
            }

            break;
          case "accept":
            break;
          default:
            break;
        }
      });
    } else {
      dispatch(addCart(item));
    }
  };

  return (
    <>
      <Navbar />
      <div className="view__main">
        <Template />
        <div className="view__container">
          {thereIsData && thereIsView ? (
            <section className="view__card">
              <div className="card__carousel view__carousel">
                <ProductSlider slideImgs={view.images_big} />
              </div>
              <div className="view__description">
                <h1 className="view__title">{view.title}</h1>
                <h2 className="view__description__title">
                  {view.description}
                </h2>
                <h2 className="view__description__precio">${view.price}</h2>

                <div className="view__payment">
                  <img
                    className="view__paymentImg"
                    src={creditCard}
                    alt="credit card"
                  />
                  <p className="view__paymentDescription">
                    <span>Aceptamos todos los medios de pago </span>
                      EFECTIVO/TRANSFERENCIA/DEPOSITO
                    </p>
                </div>
                <p className={view.availability === 'in stock' ? 'view__inStock' : 'view__outOfStock'}>{view.availability.toUpperCase()}</p>

                <div className="view__buttons-box">
                  <button
                    className="btn"
                    onClick={() => {
                      console.log(view.type);
                      history.replace(`/tienda/${view.type.toLowerCase()}`);
                    }}
                  >
                    <img src={arrow} alt="volver atras" className="base__arrow" />
                  </button>
                  <button
                    onClick={() => addItem(view)}
                    className="btn btn__success"
                    disabled={
                      view.availability === "out of stock" ? true : false
                    }
                  >
                    Comprar
                    </button>

                  <button
                    onClick={() => dispatch(openCart())}
                    className="btn"
                  >
                    Ver carrito
                    </button>
                </div>
              </div>

            </section>
          ) : (
            <div className="tienda__loading">
              <Loading />
            </div>
          )}
          <Footer />

        </div>
      </div>
    </>
  );
};
