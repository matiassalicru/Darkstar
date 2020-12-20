import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { sendToView } from "../../actions/view";
import { Navbar } from "../common/Navbar";
import { Template } from "../common/Template";

export const View = () => {
  const dispatch = useDispatch()
  const view = useSelector((state) => state.view);

  const { tipo, itemView } = useParams();

  useEffect(() => {
    // dispatch( sendToView )
  }, []);

  return (
    <>
      <Navbar />
      <div className="view__main">
        <Template />
        <h1 className="view__title">{view.title}</h1>
      </div>
    </>
  );
};
