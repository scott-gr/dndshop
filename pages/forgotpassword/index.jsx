const ForgetPasswordPage = () => {
  const [email, setEmail] = useState();

  function handleSubmit(event) {
    event.preventDefault();
    fetchSwal
      .post('/api/user/password/reset', { email })
      .then(resp => resp.ok !== false && redirectTo('/'));
  }

  return (
    <Layout>
      <Head>
        <title>Forgot password</title>
      </Head>
      <h2>Forgot your password?</h2>
      <form onSubmit={handleSubmit}>
        <p>No problem. Enter your email address below to request a password reset link.</p>
        <p>Password reset links will expire after 20 minutes.</p>
        <label htmlFor="email">
          <input
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </Layout>
  );
};