import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchData } from "../../actions/data";
import { sendToView } from "../../actions/view";
import { Footer } from "../common/Footer";
import { Loading } from "../common/Loading";
import { Navbar } from "../common/Navbar";
import { TemplateNoWave } from "../common/TemplateNoWave";
import { ProductSlider } from "../productGrid/ProductSlider";
import swal from "sweetalert";
import { addCart } from "../../actions/cart";
import { openCart } from "../../actions/ui";

export const View = () => {
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

  const addItem = (item) => {
    dispatch(addCart(item));
    swal({
      title: 'Añadido al carrito',
      icon: 'success'
    })
  };

  return (
    <>
      <Navbar />
      <div className="view__main">
        <TemplateNoWave />
        {thereIsData && thereIsView ? (
          <div className="view__card">
            <section className="view__product">
              <div className="card__carousel">
                <ProductSlider slideImgs={view.images_big} />
              </div>
              <div className="view__description">
                <h1 className="view__title">{view.title}</h1>
                <h2 className="view__description__title">{view.description}</h2>
                <h2>${view.price}</h2>

                <button onClick={() => addItem(view)} className="btn">
                  Agregar al carrito
                </button>
                <h3>Marca: {view.brand}</h3>
                <button
                  onClick={() => dispatch(  openCart() )}
                  className="btn"
                >
                  Ver carrito
                </button>
              </div>
            </section>
            <div className="view__btnTitle">
              <button
                className="btn__secundary"
                onClick={() => window.history.back()}
              >
                Volver
              </button>
            </div>
          </div>
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
