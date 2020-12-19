import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Pj from './Pj.jpg';

function Header() {
	return (
		<div className="header">
			<img src={Pj} className="header-image"></img>
			<div className="heading">Priyansh Jain</div>
			<div className="header-options">
				<Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
					<div className="header-option">Home</div>
				</Link>
				<Link to="/projects" style={{ textDecoration: 'none', color: 'white' }}>
					<div className="header-option">Projects</div>
				</Link>
				{/*<div className="header-option">Journey</div>
				 */}
			</div>
		</div>
	);
}

export default Header;
