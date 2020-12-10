import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Input from "../Input/Input"
import styles from "./login.module.css";

class Login extends Component {
	render() {
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
			}
		};

		return (
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
			</form>
		);
	}
}
export default Login;
