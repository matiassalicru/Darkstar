import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

//Components
import { Sidebar } from '../sidebar/Sidebar';
import { Cart } from './Cart';
import { Footer } from './Footer';

export const Template = () => {
	const { ui } = useSelector((state) => state);

	return (
		<Fragment>
			{ui.isSidebarOpen ? <Sidebar /> : null}
			{ui.isCartOpen ? <Cart /> : null}

			<Footer />
		</Fragment>
	);
};
