import React from "react";
import { ProductCard } from "./ProductCard";

export const ProductGrid = ({ data }) => {
  return (
    <section className="grid__main">
      <h2 className="grid__title">{data.length > 0 && data[0].type}</h2>

      <article className="grid__card-container">
        {data.map((data) => {
          return (
            <ProductCard
              data={data}
              key={data.id}
            />
          );
        })}
      </article>
    </section>
  );
};
