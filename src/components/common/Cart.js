import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeCart } from "../../actions/ui";

export const Cart = () => {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.cart.items);

  const setCartClosed = () => {
    dispatch(closeCart());
  };

  return (
    <aside className="cart__main animate__animated animate__bounceInRight">
      <div className={`cart__exit`} onClick={setCartClosed}>
        <i className="fas fa-times"></i>
      </div>
      <h5 style={{ color: "000" }}>
        {items !== [] && (
          <>
            <h2>{items[0].title}</h2>
            <img src={items[0].images_thumb} alt="" srcset="" />
            <h2>{items[2].title}</h2>
            {/* <img src={items[2].images_thumb} alt="" srcset="" /> */}
          </>
        )}
      </h5>
    </aside>
  );
};
