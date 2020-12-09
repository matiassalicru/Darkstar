import React from "react";
import { ProductCard } from "./ProductCard";

export const ProductGrid = ({ data }) => {
  return (
    <section className="grid__main">
      <h2 className="grid__title">{data.length > 0 && data[0].type}</h2>

      <article className="grid__card-container">
        {data.map(({ images_thumb, title, id, price }) => {
          return (
            <ProductCard
              imgs={images_thumb}
              title={title}
              price={price}
              key={id}
            />
          );
        })}
      </article>
    </section>
  );
};
