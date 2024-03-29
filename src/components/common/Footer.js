import React from 'react';

export const Footer = () => {
	return (
		<div className="footer__main">
			<ul className="footer__list">
				<li className="footer__list-item">
					<a href="https://www.facebook.co m/DARKSTAR.arg">
						Facebook
					</a>
				</li>
				<li className="footer__list-item">
					<a href="https://goo.gl/maps/rznPYnMJVxiLsQhH8">
						Argentina
					</a>
				</li>
				<li className="footer__list-item">
					<a href="https://goo.gl/maps/x8tXHDPYBkp6PVRy6">Córdoba</a>
				</li>

				<li className="footer__list-item">
					<a href="https://www.instagram.com/darkstar.ar/">
						Instagram
					</a>
				</li>
			</ul>
			<small>
				<p className="footer__rights">
					Sitio web creado por
					<a href="http://matiassalicru.com"> @matiassalicru</a>
				</p>
			</small>
		</div>
	);
};
