import { types } from "../types/types";

const initialState = {
  items: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.addToCart:
      let existingItem = state.items.find((cartItem) => {
        return cartItem.id === action.payload.id;
      });

      if (existingItem) {
        action.payload = {
          ...action.payload,
          quantity: action.payload.quantity + 1,
        };

        let stringCart = JSON.stringify(state.items);
        localStorage.setItem("cart", stringCart);

        return {
          ...state,
          items: [...state.items],
        };
      } else {
        let stringCart = JSON.stringify(state.items);
        localStorage.setItem("cart", stringCart);
        
        return {
          ...state,
          items: [...state.items, action.payload],
        };
      }

    case types.removeFromCart:
      return state.filter((item) => item.id !== action.payload);

    default:
      return state;
  }
};
