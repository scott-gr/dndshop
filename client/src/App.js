import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import LandingPage from "./pages/Landing/LandingPage";
import LoginPage from "./pages/Login/LoginPage";
import ProfilePage from "./pages/Profile/ProfilePage";
import SignupPage from "./pages/Signup/SignupPage";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <div className="App">
            < Route exact path="/" component={LandingPage} />
            < Route exact path="/login" component={LoginPage} />
            < Route exact path="/dashboard" component={DashboardPage} />
            < Route exact path="/profile" component={ProfilePage} />
            < Route exact path="/signup" component={SignupPage} />
          </div>

        </Switch>
      </Router>


    );
  }
}

export default App;