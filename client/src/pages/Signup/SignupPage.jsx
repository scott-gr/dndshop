import React from "react";

const SignupPage = () => {
	return (
		<div>
			<div>
				<h2>Sign up</h2>
				<form
				// onSubmit={handleSubmit}
				>
					{/* {errorMsg ? <p style={{ color: "red" }}>{errorMsg}</p> : null} */}

					<label htmlFor="name">
						<input id="name" name="name" type="text" placeholder="Your name" />
					</label>
					<label htmlFor="role">
						<select id="role" name="role" type="text">
							<option value="Player">Player</option>
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
		</div>
	);
};

export default SignupPage;
