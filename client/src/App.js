import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import LandingPage from "./pages/Landing/LandingPage";
import ProfilePage from "./pages/Profile/ProfilePage";
import SignupPage from "./pages/Signup/SignupPage";
import PasswordResetPage from "./pages/Password-Reset/PasswordResetPage"

require("dotenv").config();

// firebase auth
class App extends Component {
	render() {
		const user = null;
		return user ? (
			<DashboardPage />
		) : (
			<Router>
				<Switch>
					<>
						<Route exact path="/" component={LandingPage} />
						<Route exact path="/dashboard" component={DashboardPage} />
						<Route exact path="/profile" component={ProfilePage} />
						<Route exact path="/signup" component={SignupPage} />
						<Route exact path="/password-reset" component={PasswordResetPage} />
					</>
				</Switch>
			</Router>
		);
	}
}

export default App;
