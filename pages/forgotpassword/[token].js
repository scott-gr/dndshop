const ResetPasswordTokenPage = ({ valid, token }) => {
	const [password, setPassword] = useState("");
	function handleSubmit(event) {
		event.preventDefault();
		fetchSwal
			.post(`/api/user/password/reset/${token}`, { password })
			.then(resp => resp.ok !== false && redirectTo("/"));
	}

	return (
		<Layout>
			<Head>
				<title>Forgot password</title>
			</Head>
			<h2>Forgot password? It's time for a new one.</h2>

      {/* checks if token is valid */}
			{valid ? (
        
				<>
					<p>Enter your new password.</p>
					<form onSubmit={handleSubmit}>
						<div>
							<input
								type="password"
								placeholder="New password"
								value={password}
								onChange={e => setPassword(e.target.value)}
							/>
						</div>
						<button type="submit">Save new password</button>
					</form>
				</>
			) : (
				<p>This link may have been expired</p>
			)}
		</Layout>
	);
};

ResetPasswordTokenPage.getInitialProps = async ctx => {
	const { token } = ctx.query;
	const valid = await fetch(
		`${process.env.WEB_URI}/api/user/password/reset/${token}`,
		{ method: "POST" }
	)
		.then(res => res.text())
		.then(bol => bol === "true");
	return { token, valid };
};

export default ResetPasswordTokenPage;
