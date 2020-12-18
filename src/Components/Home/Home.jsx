import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
	return (
		<div className="home">
			<div className="technologies">
				<div className="tech-heading">Technologies</div>
				<div className="tech-content">
					I am familiar with HTML5, CSS3, Git, Javascript, NodeJS, ReactJs, Web Hosting, C++, Java and some
					knowledge of firebase and springboot.
				</div>
			</div>
			<div className="project">
				<div className="project-heading">Projects</div>
				<div className="project-content">
					I like to showcase my work and thus, you can see my projects hosted online.
				</div>
				<Link to="/projects" style={{ textDecoration: 'none', color: 'white' }}>
					<button className="project-button">See Projects</button>
				</Link>
			</div>
			<div className="technologies">
				<div className="tech-heading">Technologies</div>
				<div className="tech-content">
					I am familiar with HTML5, CSS3, Git, Javascript, NodeJS, ReactJs, Web Hosting, C++, Java and some
					knowledge of firebase and springboot.
				</div>
			</div>
		</div>
	);
}

export default Home;
