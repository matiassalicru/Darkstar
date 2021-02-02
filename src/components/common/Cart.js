import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeCart } from "../../actions/ui";

export const Cart = () => {
  const [cart, setCart] = useState([]);

  let localCart = localStorage.getItem("cart");

  useEffect(() => {
    //Turn the cart into Js
    localCart = JSON.parse(localCart);
    //If persisted cart exist set it into setCart.
    if (localCart) setCart(localCart);
    console.log(cart);
  }, []);

  const addItem = (item) => {
    //Create a copy of the cart, avoid overwritting existing state
    let cartCopy = [...cart];

    //Get the ID of the item
    let ID = item;

    //Check if the item already is in the cart. Return true or false (I think)
    let existingItem = cartCopy.find((cartItem) => cartItem.ID === ID);

    if (existingItem) {
      existingItem.quantity += item.quantity; //Update Item.
    } else {
      //If it doesn't exist just add it.
      cartCopy.push(item);
    }

    //Set the new updated cart
    setCart(cartCopy);

    let stringCart = JSON.stringify(cartCopy);
    localStorage.setItem("cart", stringCart);
  };

  const updateItem = (itemID, amount) => {
    let cartCopy = [...cart];

    //Check if the item already exist
    let existentItem = cartCopy.find((item) => item.ID === itemID);

    //If it doesn't exist, just quit the function.
    if (!existentItem) return;

    //Continue and update quantity
    existentItem.quantity += amount;

    //validate result
    if (existentItem.quantity <= 0) {
      //remove item by filtering it from cart array
      cartCopy = cartCopy.filter((item) => item.ID !== itemID);
    }

    //Again, update state, and localStorage.
    setCart(cartCopy);

    let cartString = JSON.stringify(cartCopy);
    localStorage.setItem("cart", cartString);
  };

  const removeItem = (itemID) => {
    let cartCopy = [...cart];

    //Remove the item by filtering it from the cart.
    cartCopy = cartCopy.filter((item) => item.ID !== itemID);

    //Set the updated cart
    setCart(cartCopy);

    let cartString = JSON.stringify(cartCopy);
    localStorage.setItem("cart", cartString);
  };

  const dispatch = useDispatch();

  const setCartClosed = () => {
    dispatch(closeCart());
  };

  return (
    <aside className="cart__main animate__animated animate__bounceInRight">
      <div className={`cart__exit`} onClick={setCartClosed}>
        <i className="fas fa-times"></i>
      </div>
      <h5 style={{ color: "000" }}>
        {/* {cart && (
          <>
            {cart[0].title}
            <img src={cart[0].images_thumb} />
          </>
        )} */}
      </h5>
    </aside>
  );
};
