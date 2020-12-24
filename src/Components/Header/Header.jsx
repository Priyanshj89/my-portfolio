import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Pj from './Pj.jpg';
import Resume from "./Priyansh's Resume(24-12-2020).pdf";
import DownloadLink from 'react-download-link';

function Header() {
	return (
		<div>
			<div className="header">
				<Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
					<img src={Pj} className="header-image  w3-animate-opacity"></img>
				</Link>
				<Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
					<div className="heading">Priyansh Jain</div>
				</Link>
				<div className="header-options">
					<Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
						<div className="header-option">Home</div>
					</Link>
					<Link to="/projects" style={{ textDecoration: 'none', color: 'white' }}>
						<div className="header-option">Projects</div>
					</Link>
					{/*<a download={Resume} style={{ alignSelf: 'center' }}>
						<button className="resume">Download Resume</button>
					</a>
					<DownloadLink label="Save" filename={Resume} exportFile={() => 'My cached data'} />
					*/}
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
