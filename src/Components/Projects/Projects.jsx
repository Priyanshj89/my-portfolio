import React from 'react';
import './Projects.css';
import Proj from '../../project_image.jpg';

function Projects() {
	return (
		<div className="projects">
			<img src={Proj} alt="Projects" className="project-image"></img>
			<div className="projects-heading">SEE MY CODE</div>
			<div style={{ paddingLeft: '20%', marginBottom: '5%' }}>
				<div className="project-title">Basic Social Platform (MERN Stack)</div>
				May 2020 – Jun 2020
				<div className="project-content">
					This projects implements some of the basic features of Instagram
					<ul>
						<li>
							React is used in the frontend. React Hooks like useState, useReducer, useContext are used.
						</li>
						<li>State management is achieved using Hooks and Context.</li>
						<li>API calls are made to the backend node server using fetch().</li>
						<li>Authorization is done by assigning a JWT token.</li>
						<li>Cloudinary is used to store images.</li>
						<li>You can search for a user, like, comment on another user's post, and see their profile.</li>
						<li>Backend is responsible for manipulating data and giving responses.</li>
						<li>MongoDB database is storing all the data.</li>
					</ul>
				</div>
				<a href="https://instagramclone89.herokuapp.com/" target="_blank" style={{ textDecoration: 'none' }}>
					<button className="live-project-button">View Live Project</button>
				</a>
				<a href="https://github.com/Priyanshj89/MiniInsta" target="_blank" style={{ textDecoration: 'none' }}>
					<button className="source-project-button">View Source Code</button>
				</a>
			</div>
			<div style={{ paddingLeft: '20%', marginBottom: '5%' }}>
				<div className="project-title">Online-IDE</div>
				Nov 2020
				<div className="project-content">
					This projects is a simple online Editor/Compiler for programmers just Starting
					<ul>
						<li>A project made using ReactJS and NodeJS( using Express framework ).</li>
						<li>
							You can write code in Ace-react editor, give inputs, and output will be processed and
							displayed.
						</li>
						<li>Using JDoodle API</li>
						<li>Supports 3 languages, C++, Java, Python.</li>
						<li>Also, you can view some Basic codes for practice. Especially helpful for beginners.</li>
					</ul>
				</div>
				<a href="https://online-ide-3.herokuapp.com/" target="_blank" style={{ textDecoration: 'none' }}>
					<button className="live-project-button">View Live Project</button>
				</a>
				<a href="https://github.com/Priyanshj89/Online_ide" target="_blank" style={{ textDecoration: 'none' }}>
					<button className="source-project-button">View Source Code</button>
				</a>
			</div>
			<div style={{ paddingLeft: '20%', marginBottom: '5%' }}>
				<div className="project-title">Simple Timer Using ReactJS</div>
				Oct 2020
				<div className="project-content">
					A simple project implementing the basic features of Stopwatch/timer.
					<ul>
						<li>Precision of Mill-second. Hour shows up when minutes pass 60.</li>
						<li>3 buttons present- start, stop, reset. </li>
						<li>
							You can view the button history(one set of events) as well as the full history(all button
							history).
						</li>
						<li>History is displayed with the most recent event on the top</li>
						<li>History can also be cleared.</li>
						<li>useState hook is used to add React state to functional components.</li>
					</ul>
				</div>
				<a href="https://gallant-jones-166984.netlify.app/" target="_blank" style={{ textDecoration: 'none' }}>
					<button className="live-project-button">View Live Project</button>
				</a>
				<a
					href="https://github.com/Priyanshj89/Simple-timer"
					target="_blank"
					style={{ textDecoration: 'none' }}
				>
					<button className="source-project-button">View Source Code</button>
				</a>
			</div>
			<div style={{ paddingLeft: '20%', marginBottom: '5%' }}>
				<div className="project-title">Quotes and Fun Translations</div>
				Dec 2020
				<div className="project-content">
					A project made using HTML, CSS, and javascript only.
					<ul>
						<li>2 options available, Quotes Giver and Fun Translation.</li>
						<li>Quote giver gives random quotes as well as quotes based on tags/themes/keywords.</li>
						<li>Fun Translation translates the given text in the language of minion.</li>
						<li>fetch() is used in javascript to request the API for necessary Information.</li>
						<li>History can also be cleared.</li>
						<li>useState hook is used to add React state to functional components.</li>
					</ul>
				</div>
				<a href="https://pure-html-css-js.herokuapp.com/" target="_blank" style={{ textDecoration: 'none' }}>
					<button className="live-project-button">View Live Project</button>
				</a>
				<a
					href="https://github.com/Priyanshj89/pure-html-css-js-web"
					target="_blank"
					style={{ textDecoration: 'none' }}
				>
					<button className="source-project-button">View Source Code</button>
				</a>
			</div>
			<div style={{ paddingLeft: '20%', marginBottom: '5%' }}>
				<div className="project-title">UI Designs (Using ReactJs)</div>
				Nov 2020
				<div className="project-content">
					Some UI designs made Using ReactJS
					<ul>
						<li>Sign In screen along with a dashboard with dynamic UI as well</li>
					</ul>
					<a href="https://iosd-design.herokuapp.com/" target="_blank" style={{ textDecoration: 'none' }}>
						<button className="live-project-button">View Live Project</button>
					</a>
					<a
						href="https://github.com/Priyanshj89/Iosd_design"
						target="_blank"
						style={{ textDecoration: 'none' }}
					>
						<button className="source-project-button">View Source Code</button>
					</a>
					<ul>
						<li>A static Dashboard style UI page</li>
					</ul>
					<a
						href="https://inspiring-stonebraker-baf6dc.netlify.app/"
						target="_blank"
						style={{ textDecoration: 'none' }}
					>
						<button className="live-project-button">View Live Project</button>
					</a>
					<a
						href="https://github.com/Priyanshj89/NutureLabs_design"
						target="_blank"
						style={{ textDecoration: 'none' }}
					>
						<button className="source-project-button">View Source Code</button>
					</a>
				</div>
			</div>
			<div style={{ paddingLeft: '20%', marginBottom: '5%' }}>
				<div className="project-title">Simple Project Manager</div>
				Nov 2019 – Dec 2019
				<div className="project-content">
					Basic Project Handler which has the following features:
					<ul>
						<li>A springboot project along with inbuilt thymeleaf</li>
						<li>Allows register and login using inbuilt spring security classes</li>
						<li>Admin access available(Inbuilt in code itself)</li>
						<li>Admin can assign task to peers</li>
						<li>Everyone can talk via messages professionally</li>
						<li>
							An expense section where individuals can list their expenses incurred during project user
							friendly, easy to use
						</li>
					</ul>
				</div>
				<a
					href="https://github.com/Priyanshj89/Project-Manager-Springboot-Project"
					target="_blank"
					style={{ textDecoration: 'none' }}
				>
					<button className="source-project-button">View Source Code</button>
				</a>
			</div>
		</div>
	);
}

export default Projects;
