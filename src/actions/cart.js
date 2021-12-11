import { types } from '../types/types';

export const addCart = (item) => {
	return {
		type: types.addToCart,
		payload: item,
	};
};

export const updateItem = (item, addOrRemove) => {
	return {
		type: types.updateCart,
		payload: { item, addOrRemove },
	};
};

export const cleanCart = () => {
	return {
		type: types.cleanCart,
	};
};
