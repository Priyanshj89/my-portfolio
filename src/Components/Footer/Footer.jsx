import React from 'react';
import './Footer.css';

function Footer() {
	return (
		<div className="footer">
			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<div>
					<div className="social">Social Media Presence</div>
					<div className="social-options">
						<a href="https://github.com/Priyanshj89" target="_blank" style={{ textDecoration: 'none' }}>
							<div className="social-option">GitHub</div>
						</a>
						<a
							href="https://www.linkedin.com/in/priyansh-jain-9416511a0/"
							target="_blank"
							style={{ textDecoration: 'none' }}
						>
							<div className="social-option">LinkedIn</div>
						</a>
					</div>
				</div>
				<div style={{ marginLeft: '15%' }}>
					<div className="social">Contact Details</div>
					<div className="contact">Phone No. - 9167973298</div>
					<div className="contact">Email - j.priyansh89@gmail.com</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
