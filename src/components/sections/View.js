import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchData } from "../../actions/data";
import { sendToView } from "../../actions/view";
import { Navbar } from "../common/Navbar";
import { Template } from "../common/Template";

export const View = () => {
  const dispatch = useDispatch();

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

  // console.log(view);

  return (
    <>
      <Navbar />
      <div className="view__main">
        <Template />
        {thereIsData ? (
          <div>
            <h1 className="view__title">{view.title}</h1>
            <div className="view__productImage">
              <img src={view.images_big} alt="ilustracion" />
            </div>
          </div>
        ) : (
          <h1> Loading </h1>
        )}
      </div>
    </>
  );
};
