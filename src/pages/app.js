import React from "react";
import { Router } from "@reach/router";
import Layout from "../components/layout";
import Profile from "../components/profile";
import Login from "../components/login";
import { Mongoose } from "mongoose";

const App = () => (
	<Layout>
		<Router>
			<Login path="/app/login" />
		</Router>
	</Layout>
);

export default App;
