import swal from "sweetalert";
import { types } from "../types/types";

const initialState = {
  items: [],
  total: 0,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    //Case para añadir item al carrito
    case types.addToCart:
      // Agarro el precio, la cantidad y calculo el precio final del item
      const precio = parseInt(action.payload.price);
      const cantidad = parseInt(action.payload.quantity);
      const precioFinal = state.total + precio * cantidad;

      //Verifica si el item que quiero comprar ya está en el carrito
      let existingItem = state.items.find((cartItem) => {
        return cartItem.id === action.payload.id;
      });

      //Si el item a agregar ya se encuentra entonces le suma en 1 la cantidad a ese item
      if (existingItem) {
        //Si la cantidad es igual a 5 que no permita agregar más del mismo item
        if (existingItem.quantity >= 5) {
          swal("No puedes agregar más de 5 items", "", "error");
        } else {
          swal({
            title: "Añadido al carrito",
            icon: "success",
          });
        }
        return {
          ...state,
          total: precioFinal,
          items: [...state.items],
        };
      } else {
        swal({
          title: "Añadido al carrito",
          icon: "success",
        });

        return {
          ...state,
          total: precioFinal,
          items: [...state.items, action.payload],
        };
      }

      //Limpia el carrito dejando el array de items vacío y el total en 0
    case types.cleanCart:
      return {
        items: [],
        total: 0,
      };

    case types.updateCart:
      const itemToUpdate = state.items.find(
        (cartItem) => cartItem.id === action.payload.item.id
      );
      const precioItemToUpdate = parseInt(itemToUpdate.price);

      if (action.payload.addOrRemove === "add") {
        if (itemToUpdate.quantity >= 5) {
          swal("No puedes agregar más de 5 items", "", "error");
        } else {
          itemToUpdate.quantity += 1;
          state.total += precioItemToUpdate;
        }
      } else if (action.payload.addOrRemove === "remove") {
        // Si la cantidad es igual o menor a 1 se elimina el item del carrito.
        if (itemToUpdate.quantity <= 1) {
          const newArr = state.items.filter(
            (item) => item.id !== action.payload.item.id
          );
          //Resta del total el valor del item a eliminar
          state.total -= precioItemToUpdate;
          return {
            items: newArr,
            total: state.total,
          };
        } else {
          // resta en 1 la cantidad del mismo item, y resta el valor del precio del total.
          itemToUpdate.quantity -= 1;
          state.total -= precioItemToUpdate;
        }
      }

      return {
        ...state,
        items: [...state.items],
        total: state.total,
      };

    default:
      return state;
  }
};
