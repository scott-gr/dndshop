import React, { useState, useEffect } from "react";
import Head from "next/head";
import Router from "next/router";
import { useUser } from "../../lib/hooks";
// import styles from './signup.module.css'

const SignupPage = () => {
	const [user, { mutate }] = useUser();
	const [errorMsg, setErrorMsg] = useState("");

	// call whenever user changes (like signing up successfully)
	useEffect(() => {
		// redirect to home page if user is authenticated
		if (user) Router.replace("/");
	}, [user]);

	const handleSubmit = async e => {
		e.preventDefault();
		const body = {
			email: e.currentTarget.email.value,
			name: e.currentTarget.name.value,
			role: e.currentTarget.role.value,
			password: e.currentTarget.password.value,
		};
		const res = await fetch("/api/users", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(body),
		});
		if (res.status === 201) {
			const userObj = await res.json();
			// writing our user object to the state
			mutate(userObj);
		} else {
			setErrorMsg(await res.text());
		}
	};

	return (
		<>
			<Head>
				<title>Sign up</title>
			</Head>
			<div>
				<h2>Sign up</h2>
				<form onSubmit={handleSubmit}>
					{errorMsg ? <p style={{ color: "red" }}>{errorMsg}</p> : null}
					<label htmlFor="name">
						<input id="name" name="name" type="text" placeholder="Your name" />
					</label>
					<label htmlFor="role">
						<input id="role" name="role" type="text" placeholder="Your name" />
					</label>
					<label htmlFor="role">
						<select id="role" name="role" type="text">
							<option value="player">Player</option>
							<option value="dm">DM</option>
						</select>
					</label>
					<label htmlFor="email">
						<input
							id="email"
							name="email"
							type="email"
							placeholder="Email address"
						/>
					</label>
					<label htmlFor="password">
						<input
							id="password"
							name="password"
							type="password"
							placeholder="Create a password"
						/>
					</label>
					<button type="submit">Sign up</button>
				</form>
			</div>
		</>
	);
};

export default SignupPage;
