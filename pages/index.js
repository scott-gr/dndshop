import { connectToDatabase } from "../util/mongodb";

export default function Home({ isConnected }) {
	return (
		<div>
				{isConnected ? (
					<h2 className="subtitle">You are connected to the database</h2>
				) : (
					<h2 className="subtitle">
						You are NOT connected to the database.
					</h2>
				)}
		</div>
	);
}

export async function getServerSideProps(context) {
	const { client } = await connectToDatabase();

	const isConnected = await client.isConnected(); // Returns true or false

	return {
		props: { isConnected },
	};
}
