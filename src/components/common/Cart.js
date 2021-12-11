import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeCart } from '../../actions/ui';
import { CartItem } from './CartItem';

export const Cart = () => {
	const dispatch = useDispatch();
	const items = useSelector((state) => state.cart.items);
	const total = useSelector((state) => state.cart.total);

	const onCloseCart = () => {
		dispatch(closeCart());
	};

	return (
		<aside className="cart__main animate__animated animate__fadeInRight animate__faster">
			<div className="cart__exit" onClick={onCloseCart}>
				<i className="fas fa-times"></i>
			</div>

			<div className="cart__items">
				{!!items.length ? (
					<>
						<p className="cart__total">Tú pedido: ${total} ARS</p>
						{items.map((item) => (
							<CartItem key={item.id} item={item} />
						))}
					</>
				) : (
					<section className="cart__emptyCart">
						<h3>Aun no tienes accesorios en tu carrito</h3>
					</section>
				)}
			</div>
		</aside>
	);
};
