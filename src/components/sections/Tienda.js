import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//Components
import { Navbar } from '../common/Navbar';
import { Template } from '../common/Template';
import { Loading } from '../common/Loading';
import { ProductGrid } from '../productGrid/ProductGrid';

//Actions
import { fetchData } from '../../actions/data';
import { useParams } from 'react-router-dom';

export const Tienda = () => {
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(true);
	const params = useParams();
	const { tipo } = params;

	const { data } = useSelector((state) => state);
	const url = window.location.href;

	//Efecto para mostrar la pantalla de cargando mientras no se esté mostrando la data correcta
	useEffect(() => {
		if (data.length === 0 || data[0].type.toLowerCase() !== tipo) {
			if (!loading) {
				//Condición que verifica que no se ejecute 2 veces la misma acción
				setLoading(true);
				if (url.includes('aros')) {
					dispatch(fetchData('aros'));
				} else if (url.includes('chokers')) {
					dispatch(fetchData('chokers'));
				} else if (url.includes('collares')) {
					dispatch(fetchData('collares'));
				} else if (url.includes('varios')) {
					dispatch(fetchData('varios'));
				}
			}
		} else {
			if (loading) {
				//Condición que verifica que no se ejecute 2 veces la misma acción
				setLoading(false);
			}
		}
	}, [loading, dispatch, data, tipo, url]);

	return (
		<Fragment>
			<Navbar />
			<div className="tienda__main">
				<Template />
				{loading ? (
					<div className="tienda__loading">
						<Loading />
					</div>
				) : (
					<Fragment>
						<ProductGrid swiperData={data} data={data} />
					</Fragment>
				)}
			</div>
		</Fragment>
	);
};
