import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanCart } from "../../actions/cart";
import { closeCart } from "../../actions/ui";
import { CartItem } from "./CartItem";

export const Cart = () => {
  const dispatch = useDispatch();
  const [carrito, setCarrito] = useState(false)
  const items = useSelector((state) => state.cart.items);

  useEffect(() => {
    if(items !== []) {
      setCarrito(true)
    } else {
      setCarrito(false)
    }
  }, [items])
  
  const setCartClosed = () => {
    dispatch(closeCart());
  };

  const cleanCarrito = () => {
    dispatch(cleanCart());
  };

  return (
    <aside className="cart__main animate__animated animate__bounceInRight">
      <div className={`cart__exit`} onClick={setCartClosed}>
        <i className="fas fa-times"></i>
      </div>

      <div className="cart__items">
        {carrito ? <>hay cosas</> : <> No hay cosas </>}

        {carrito ? (
          <>
            <button onClick={cleanCarrito} className="btn">
              Limpiar Carrito
            </button>
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </>
        ) : (
          <>
            <h1>Aun no tienes items en tu carrito</h1>
          </>
        )}
      </div>
    </aside>
  );
};
