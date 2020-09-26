// import { connectToDatabase } from "../util/mongodb";
import {DashBtn} from "../components/dashbutton";

export default function Dashboard(
	// { isConnected }
	){
  return (
    <div>
		<main
			// className={styles.buttons}
		>
			<DashBtn dashicon="" dashbtntxt="Party" to="/party/" alt="party icon" />
			<DashBtn dashicon="" dashbtntxt="Shops" to="/shops/" alt="shop icon" />
		</main>
	</div>
  );
}

// export async function getServerSideProps(context) {
// 	const { client } = await connectToDatabase();

// 	const isConnected = await client.isConnected(); // Returns true or false

// 	return {
// 		props: { isConnected },
// 	};
// }