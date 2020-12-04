import React from "react";
import { ProductCard } from "./ProductCard";

export const ProductGrid = ({ id, title, article }) => {
  return (
    <section className="grid__main" id={id}>
      <h2 className="grid__title">{title}</h2>

      <article className="grid__card-container">
        {article.map(({ image_link, title, id, price }) => {
          return (
            <ProductCard
              img={image_link}
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
