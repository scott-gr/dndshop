import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Input from "../Input/Input";
import styles from "./login.module.css";

const Login = () => {
		const [email, setEmail] = useState("");
		const [password, setPassword] = useState("");
		const [error, setError] = useState(null);
		const signInWithEmailAndPasswordHandler = (event, email, password) => {
			event.preventDefault();
		};

		const onChangeHandler = event => {
			const { name, value } = event.currentTarget;

			if (name === "userEmail") {
				setEmail(value);
			} else if (name === "userPassword") {
				setPassword(value);
			} else {
				setError(value)
			}
		};

		return (
			<div>
				{error !== null && <div className = {styles.error}>{error}</div>}
				<form className={styles.loginform}>
					<label htmlFor="userEmail">Email:</label>
					<Input
						type="email"
						className={styles.emailinput}
						name="userEmail"
						value={email}
						placeholder="E.g: wisewizard20@email.com"
						id="userEmail"
						onChange={event => onChangeHandler(event)}
					/>
					<label htmlFor="userPassword">Password:</label>
					<Input
						type="password"
						className={styles.passwordinput}
						name="userPassword"
						value={password}
						placeholder="Your Password"
						id="userPassword"
						onChange={event => onChangeHandler(event)}
					/>
					<Button
						className={styles.loginbtn}
						onClick={event => {
							signInWithEmailAndPasswordHandler(event, email, password);
						}}
						text="Sign In"
					/>
				</form>
				<p>or</p>
				<Button className={styles.googlebtn} text="Sign in With Google" />
				<p>
					Don't have an account?{" "}
					<Link to="signUp" className={styles.signuplink}>
						Sign up here
					</Link>{" "}
					<br />{" "}
					<Link
						to="passwordReset"
						className={styles.resetpwlink}
					>
						Forgot Password?
					</Link>
				</p>
			</div>
		);
	}
export default Login;
