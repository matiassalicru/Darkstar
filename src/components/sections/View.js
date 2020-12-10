import React from "react";
import { Navbar } from "../common/Navbar";
import { Template } from "../common/Template";

export const View = () => {
  return (
    <>
      <Navbar />
      <div className="view__main">
          <Template/>
        <h1>View</h1>
      </div>
    </>
  );
};
