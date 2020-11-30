import React from "react";
import { ProductCard } from "./ProductCard";

export const ProductGrid = ( {id, title, articles} ) => {

  return (
    <section className="grid__main" id={id}>
      <h2 className="grid__title">{title}</h2>

      {/* <article className="grid__card-container">
        {articles.map((art, i) => {
          return <ProductCard key={i} />;
        })}
      </article> */}
    </section>
  );
};
