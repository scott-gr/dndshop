import React
// , { useContext, useState } 
from "react";
import { Link } from 'react-router-dom';
// import axios from "axios";

const LoginPage = () => {
	return (
		<>

			<h2>Sign in</h2>
			<form 
			// onSubmit={onSubmit}
			>
				{/* {errorMsg ? <p style={{ color: "red" }}>{errorMsg}</p> : null} */}
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
				<button type="submit">Sign in</button>
				<Link href="/forget-password">
					Forget password
				</Link>
			</form>
		</>
	);
};

export default LoginPage;
