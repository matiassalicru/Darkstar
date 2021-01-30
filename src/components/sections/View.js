import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchData } from "../../actions/data";
import { sendToView } from "../../actions/view";
import { Footer } from "../common/Footer";
import { Loading } from "../common/Loading";
import { Navbar } from "../common/Navbar";
import { Template } from "../common/Template";
import { ProductSlider } from "../productGrid/ProductSlider";

export const View = () => {
  const dispatch = useDispatch();
  const [thereIsView, setThereIsView] = useState(false);
  const [cart, setCart] = useState([]);

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

    if( !item.quantity ) item.quantity = 1;

    alert('anadido')
    //Create a copy of the cart, avoid overwritting existing state
    let cartCopy = [...cart];

    //Get the ID of the item
    let ID = item.id;

    //Check if the item already is in the cart. Return true or false (I think)
    let existingItem = cartCopy.find((cartItem) => cartItem.id === ID);
    
    if (existingItem) {
      existingItem.quantity += 1; //Update Item.
    } else {
      //If it doesn't exist just add it.
      cartCopy.push(item);
    }

    //Set the new updated cart
    setCart(cartCopy);
    
    let stringCart = JSON.stringify(cartCopy);
    localStorage.setItem("cart", stringCart);
    console.log(cart);
  };
  



  return (
    <>
      <Navbar />
      <div className="view__main">
        <Template />
        {thereIsData && thereIsView ? (
          <>
            <div className="view__card">
              <button className="btn" onClick={() => window.history.back()}>
                Volver
              </button>
              <h1 className="view__title">{view.title}</h1>

              <div className="card__carousel">
                <ProductSlider slideImgs={view.images_big} />
              </div>
            </div>
            <div className="view__add">
              <h2 className="view__description">{view.description}</h2>
              <h2>{view.price}</h2>

              <button onClick={() => addItem(view)} className="btn">Agregar al carrito</button>
              <h2>{view.availability}</h2>
              <h3>{view.brand}</h3>
              <button onClick={() => alert("Esto todavia no esta disponible, gracias vuelva prontos")}className="btn__secundary">Ver carrito</button>
            </div>
          </>
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
