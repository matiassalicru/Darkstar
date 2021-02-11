import swal from "sweetalert";
import { types } from "../types/types";

const initialState = {
  items: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    //Case para añadir item al carrito
    case types.addToCart:
      let existingItem = state.items.find((cartItem) => {
        return cartItem.id === action.payload.id;
      });

      //Si el item a agregar ya se encuentra entonces le suma en 1 la cantidad a ese item
      if (existingItem) {
        if (existingItem.quantity >= 5) {
          swal("No puedes agregar más de 5 items", "", "error");
        } else {
          swal({
            title: "Añadido al carrito",
            icon: "success",
          });
          existingItem.quantity += 1;
        }
        return {
          ...state,
          items: [...state.items],
        };
      } else {
        swal({
          title: "Añadido al carrito",
          icon: "success",
        });
        return {
          ...state,
          items: [...state.items, action.payload],
        };
      }

    case types.cleanCart:
      return {
        items: [],
      };

    case types.updateCart:
      const itemToUpdate = state.items.find(
        (cartItem) => cartItem.id === action.payload.itemID
      );

      if (action.payload.addOrRemove === "add") {
        if (itemToUpdate.quantity >= 5) {
          swal("No puedes agregar más de 5 items", "", "error");
        } else {
          itemToUpdate.quantity += 1;
        }
      } else {
        if (itemToUpdate.quantity <= 1) {
          const newArr = state.items.filter(
            (item) => item.id !== action.payload.itemID
          );
          return {
            items: newArr,
          };
        } else {
          itemToUpdate.quantity -= 1;
        }
      }

      return {
        items: [...state.items],
      };


    default:
      return state;
  }
};
