import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Projects from './Components/Projects/Projects';

function Routing() {
	return (
		<Switch>
			<Route exact path="/">
				<Header />
				<Home />
				<Footer />
			</Route>
			<Route exact path="/projects">
				<Header />
				<Projects />
				<Footer />
			</Route>
		</Switch>
	);
}

export default Routing;
