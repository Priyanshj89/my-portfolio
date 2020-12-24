import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import technology from './technology.jpg';

function Home() {
	return (
		<div className="home">
			<div className="home-intro">
				<img src={technology} className="home-tech w3-animate-opacity"></img>
				<div className="home-content w3-animate-right">
					<div style={{ fontSize: '28px', fontWeight: '700' }}>
						Interested in Software and Web Development
					</div>
					<br />I am a student at Manipal Institute Of Technology, Manipal pursuing the field of Computer and
					Communication Engineering with a CGPA of 9.27/10. I have a clear, logical mind with a practical
					approach to problem-solving and a drive to see things through to completion. I am eager to learn and
					enjoy overcoming challenges. I am currently looking for an opportunity to utilise my technical
					skills in a challenging working environment and become a valuable asset to the organisation that I
					work for.
				</div>
			</div>
			<div className="technologies w3-animate-zoom">
				<div className="tech-heading">Technologies</div>
				<div className="tech-content">
					I am familiar with HTML5, CSS3, Git, Javascript, NodeJS, ReactJs, Web Hosting, C++, Java and some
					knowledge of firebase and springboot.
				</div>
			</div>
			<div className="project">
				<div className="project-heading">Projects</div>
				<div className="project-contend">
					I like to showcase my work and thus, you can see my projects hosted online.
				</div>
				<Link to="/projects" style={{ textDecoration: 'none', color: 'white' }}>
					<button className="project-button">See Projects</button>
				</Link>
			</div>
			<div className="technologies">
				<div className="tech-heading">Others</div>
				<div className="tech-content">
					<strong>Coursera Certificates</strong> - You can see the Certificates using the given google drive
					link<br></br>
					<a
						href="https://drive.google.com/folderview?id=18cpPbF5zYL2LHDVqNzlMC0OBlUTt3Mn6"
						target="_blank"
						className="certificate-link"
					>
						View Certificates
					</a>
					<br />
					<br />
					<strong>Languages I know</strong> - English, Hindi
				</div>
			</div>
		</div>
	);
}

export default Home;
