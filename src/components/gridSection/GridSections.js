import React from "react";
import { GridCard } from "./GridCard";
import { rounds } from '../../data/data';

export const GridSections = () => {

  return (
    <div className="gridSections__main">
      {rounds.map((destacado, index) => (
        <GridCard key={index} title={destacado.type} bg={destacado.bg} />
      ))}
    </div>
  );
};

