import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { fetchData } from "../../actions/data";
import { sendToView } from "../../actions/view";
import { Footer } from "../common/Footer";
import { Loading } from "../common/Loading";
import { Navbar } from "../common/Navbar";
import { TemplateNoWave } from "../common/TemplateNoWave";
import { ProductSlider } from "../productGrid/ProductSlider";
import { addCart } from "../../actions/cart";
import { openCart } from "../../actions/ui";
import useWindowDimensions from "../../hooks/useWindowDimensions/useWindowDimensions";

//import images
import creditCard from "../../Assets/creditCard.png";
import arrow from "../../Assets/Arrow.png";

//Swiper
import { Swiper, SwiperSlide } from "swiper/react";

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
  const { width } = useWindowDimensions();

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
    if (existingItem) {
      swal({
        title: "Este accesorio ya se encuentra en tu carrito",
        text: "Si queres una unidad más agregala desde el carrito",
        icon: "warning",
        buttons: {
          openCart: "Ver Carrito",
          accept: "Aceptar",
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
      <div className="view__main ">
        <TemplateNoWave />
        {thereIsData && thereIsView ? (
          width > 480 ? (
            <section className="view__card animate__animated animate__bounceInLeft">
              <div className="view__btnTitle">
                <button
                  className="btn__secundary"
                  onClick={() => {
                    console.log(view.type);
                    history.replace(`/tienda/${view.type.toLowerCase()}`);
                  }}
                >
                  <img src={arrow} alt="volver atras" className="base__arrow" />
                </button>
              </div>
              <section className="view__product">
                <div className="card__carousel">
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
                  <p className={view.availability === 'in stock' ? 'view__inStock': 'view__outOfStock'}>{view.availability.toUpperCase()}</p>

                  <div className="view__buttons-box">
                    <button
                      onClick={() => addItem(view)}
                      className="btn"
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
            </section>
          ) : (
            <section className="view__cardMobile">
              <button
                className="base__backBtn"
                onClick={() => window.history.back()}
              >
                <img src={arrow} alt="arrow" className="base__arrow" />
              </button>
              <div className="view__headerMobile">
                <h1 className="view__typeMobile">{view.type}</h1>
              </div>
              <div className="view__swiperMobile">
                {view.images_big.length > 1 ? (
                  <Swiper spaceBetween={60} slidesPerView={1.4} zoom={true}>
                    {view.images_big.map((item, i) => (
                      <SwiperSlide key={i}>
                        <img
                          className="view__imageSliderMobile"
                          src={item}
                          alt="accesories"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                ) : (
                  <div className="view__imageNoSlider">
                    <img
                      src={view.images_big[0]}
                      alt="Accesorios"
                      className="view__imageSliderMobile"
                    />
                  </div>
                )}
              </div>
              <hr />
              <div className="view__descriptionMobile">
                <h1 className="view__titleMobile">{view.title}</h1>
                <p>{view.description}</p>
                <h1 className="view__precioMobile">$ {view.price}</h1>
                <div className="view__paymentMobile">
                  <img
                    className="view__paymentImgMobile"
                    src={creditCard}
                    alt="credit card"
                  />
                  <p className="view__paymentDescription">
                    <span>Aceptamos todos los medios de pago </span>
                    EFECTIVO/TRANSFERENCIA/DEPOSITO
                  </p>
                </div>
              </div>
              <button onClick={() => addItem(view, "mobile")} className="btn">
                Comprar
              </button>
            </section>
          )
        ) : (
          <div className="tienda__loading">
            <Loading />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};
