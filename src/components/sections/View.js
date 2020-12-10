import React from "react";
import { useSelector } from "react-redux";
import { Navbar } from "../common/Navbar";
import { Template } from "../common/Template";

export const View = () => {

  const view = useSelector(state => state.view)

  console.log(view);
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
