import React from 'react';
import { useDispatch } from 'react-redux';
// import { Link } from "react-router-dom";
import { updateItem } from '../../actions/cart';

export const CartItem = ({ item }) => {
	const dispatch = useDispatch();

	const { title, price, quantity, images_thumb } = item;

	const updateAnItem = (item, addOrRemove) => {
		dispatch(updateItem(item, addOrRemove));
	};

	return (
		<div className="cartItem__main">
			{/* <div className="cartItem__description"> */}
			<h1 className="cartItem__title">{title}</h1>
			<section className="cartItem__subdescription">
				<img src={images_thumb} alt="thumbnail" />
				<div>
					<p> Precio: ${price} </p>
					<p> Cantidad: {quantity} </p>
				</div>
				<div className="cartItem__buttons">
					<button
						onClick={() => updateAnItem(item, 'remove')}
						className="btn btn__danger"
					>
						Quitar
					</button>
					<button
						onClick={() => updateAnItem(item, 'add')}
						className="btn btn__success"
					>
						Añadir
					</button>
				</div>
			</section>
			{/* </div> */}
		</div>
	);
};
