import React from 'react';
import './Navbar.css';
import topaLogo from './images/topaLogo.png';
const Navbar = () => {
	return (
		<div className="header-brand">
			<a href="/">
				<img src={topaLogo} />
			</a>
		</div>
	);
};

export default Navbar;
