import React from 'react'
import img from '../../Assets/productImages/bigRound.png'

export const ProductCard = () => {
    return (
      <div className="card__main">
        <img src={img} alt="" className="card__img" />
        <h1 className="card__title">Article Title</h1>
        <p className="card__price">$ 599</p>
      </div>
    );
}
