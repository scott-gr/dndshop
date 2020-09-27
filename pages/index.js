import Layout from "../components/layout/layout.js";
import { connectToDatabase } from "../util/mongodb";

const Home = ({ isConnected }) => (
	<Layout>
		<h1>Next Auth App</h1>
		<p>
			This is a sample project that uses{" "}
			<a href={`https://github.com/iaincollins/next-auth`}>NextAuth.js</a> v2 to
			add authentication to <a href={`https://nextjs.org/`}>Next.js</a>.
		</p>
		<p>
			See <a href={`https://next-auth.js.org/`}>next-auth.js.org</a> for more
			information and documentation.
		</p>
		{isConnected ? (
			<h2 styleName="subtitle">You are connected to the database</h2>
		) : (
			<h2 styleName="subtitle">You are NOT connected to the database.</h2>
		)}
	</Layout>
);

export async function getServerSideProps(context) {
	const { client } = await connectToDatabase();

	const isConnected = await client.isConnected(); // Returns true or false

	return {
		props: { isConnected },
	};
}

export default Home;
