import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import LandingPage from "./pages/Landing/LandingPage";
import ProfilePage from "./pages/Profile/ProfilePage";
import SignupPage from "./pages/Signup/SignupPage";
import firebase, { auth, provider } from './auth/firebase.js';
require("dotenv").config();

class App extends Component {
	constructor() {
    super();
		this.state = {
			username: "",
			characterName: "",
			groupId: "",
      user: null // <-- add this line
		};

	}
	render() {
		return (
			<Router>
				<Switch>
					<>
						<Route exact path="/" component={LandingPage} />
						<Route exact path="/dashboard" component={DashboardPage} />
						<Route exact path="/profile" component={ProfilePage} />
						<Route exact path="/signup" component={SignupPage} />
					</>
				</Switch>
			</Router>
		);
	}
}

export default App;
