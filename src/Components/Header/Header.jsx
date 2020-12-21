import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Pj from './Pj.jpg';

function Header() {
	return (
		<div>
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
			<div className="mobile-header">
				<img src={Pj} className="header-image"></img>
				<div className="heading">Priyansh Jain</div>

				<div className="header-dropdown">
					<button className="header-button">
						<i className="material-icons menu">menu</i>
					</button>
					<div className="header-content">
						<Link to="/" className="link">
							<div className="header-menu-options">Home</div>
						</Link>
						<Link to="/projects" className="link">
							<div className="header-menu-options">Projects</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
