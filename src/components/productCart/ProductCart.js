import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CartItem } from "../common/CartItem";
import { Footer } from "../common/Footer";
import { Navbar } from "../common/Navbar";
import { Link, useHistory } from "react-router-dom";
import ProductCard from "../productGrid/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Loading } from "../common/Loading";
import useWindowDimensions from "../../hooks/useWindowDimensions/useWindowDimensions";
import { Template } from "../common/Template";


export const ProductCart = () => {
  const cart = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);
  const history = useHistory();
  const [data, setData] = useState([])
  const { height, width } = useWindowDimensions();


  useEffect(() => {
    fetch('https://backend-darkstar.herokuapp.com/popu')
      .then(res => res.json())
      .then(data => setData(data)
      )
    return () => {
      setData([]);
    }
  }, [])

  return (
    <>
      <Navbar />
      <article className="productCart__main">
        <Template />
        {cart.length >= 1 ? (
          <>
            <section className="productCart__container">

              <h2>Total a pagar: ${total} ARS</h2>
              <Link className="btn btn__success btn__end link" to="/comprar">
                Finalizar compra
              </Link>
              <small>
                El método de pago se acuerda con la tienda una vez realizado el
                pedido.
              </small>

              <small>
                Acordate que podes abonar mediante transferencia bancaria,
                Efectivo o MercadoPago
                <span> (Ualá, Brubank, MercadoPago)</span>
              </small>

              <h1 className="productCart__title">Tus productos</h1>

              {cart.map((item) => (
                <section key={item.id} className="productCart__card">
                  <CartItem item={item} />
                </section>
              ))}


              <button className="btn" onClick={() => history.goBack()}>
                Seguir comprando
              </button>
            </section>
          </>
        ) : (
          <section className="productCart__empty">
            <h3>Aun no tienes accesorios en tu carrito</h3>
            <button
              className="productCart__btn"
              onClick={() => history.goBack()}
            >
              Volver atrás
            </button>
            <hr />
            <h3 className='productCart__title'> Productos recomendados </h3>
            {
              width < 700 ? (
                <article className="productCart__swiper">
                  <Swiper spaceBetween={10} slidesPerView={1.5} slidesPerGroupSkip={0}>
                    {data.length !== 0 ? data.map((item, i) => (
                      <SwiperSlide key={i}>
                        <ProductCard item={item} />
                      </SwiperSlide>
                    )) : (
                      <Loading />
                    )}
                  </Swiper>
                </article>) : (
                <div className='productCart__reco__container'>
                  {data.map((item, i) => (
                    <ProductCard key={i} item={item} />
                  ))}
                </div>
              )
            }
          </section>
        )}
        <Footer />
      </article>
    </>
  );
};
