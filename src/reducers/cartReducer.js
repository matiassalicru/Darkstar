import swal from 'sweetalert';
import { types } from '../types/types';

const initialState = {
	items: [],
	total: 0,
};

export const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		//Case para añadir item al carrito
		case types.addToCart:
			if (state.items.length === 0) {
				state.total = 0;
			}

			// Agarro el precio, la cantidad y calculo el precio final del item
			const precio = parseInt(action.payload.price);
			const cantidad = parseInt(action.payload.quantity);

			swal({
				title: 'Añadido al carrito',
				icon: 'success',
				className: 'sweetAlert',
			});
			const precioFinal = state.total + precio * cantidad;

			return {
				...state,
				total: precioFinal,
				items: [...state.items, action.payload],
			};

		//Limpia el carrito dejando el array de items vacío y el total en 0
		case types.cleanCart:
			return {
				items: [],
				total: 0,
			};

		//Actualiza el carrito
		case types.updateCart:
			const itemToUpdate = state.items.find(
				(cartItem) => cartItem.id === action.payload.item.id
			);

			const precioItemToUpdate = parseInt(itemToUpdate.price);
			let cantidadItemToUpdate = parseInt(itemToUpdate.quantity);

			if (action.payload.addOrRemove === 'add') {
				if(state.items.some(item => item === action.payload.item)) {
					swal({
						title: 'Se agregó una unidad más',
						className: 'sweetAlert',
						icon: 'success',
					})
				}
				if (itemToUpdate.quantity >= 5) {
					swal({
						title: 'No puedes agregar más de 5 items',
						className: 'sweetAlert',
						icon: 'error',
					});
				} else {
					itemToUpdate.quantity = cantidadItemToUpdate + 1;
					state.total += precioItemToUpdate;
				}
			} else if (action.payload.addOrRemove === 'remove') {
				// Si la cantidad es igual o menor a 1 se elimina el item del carrito.
				if (cantidadItemToUpdate <= 1) {
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
					itemToUpdate.quantity = cantidadItemToUpdate - 1;
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
