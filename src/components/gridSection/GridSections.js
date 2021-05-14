import React from "react";
import { GridCard } from "./GridCard";
import { homeBTN } from '../../data/data';

export const GridSections = () => {

  return (
    <div className="gridSections__main">
      {homeBTN.map((destacado, index) => (
        <GridCard key={index} title={destacado.type} bg={destacado.bg} />
      ))}
    </div>
  );
};

