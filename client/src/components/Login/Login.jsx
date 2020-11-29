import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import styles from "./login.module.css";

class Login extends Component {
	constructor() {
		super();
		this.state = {
			username: "",
			characterName: "",
			groupId: "",
			money: [],
		};
	}
	render() {
		return (
			<form className={styles.loginForm}>
				<div className={styles.loginInputs}>
					<label htmlFor="email">
						<input
							id="email"
							type="email"
							name="email"
							placeholder="Email address"
						/>
					</label>
					<label htmlFor="password">
						<input
							id="password"
							type="password"
							name="password"
							placeholder="Password"
						/>
					</label>
				</div>
				<Button type="submit" value="Submit" text="Sign In"></Button>
				<Link href="/forgot-password"> Forgot password?</Link>
			</form>
		);
	}
}
export default Login;
