import { Link } from "next/link";
import styles from'./dashbutton.css';


function Dashboard({ dashboard }) {
	return (
		<div>
			<main>
				<Link className="style.dashbtn" href="/party">
					<span>
						<img src="" className="style.dashicon" alt="party icon" />
					</span>
					<span className="style.dashbtntxt">Manage Party</span>
				</Link>
				<Link className="style.dashbtn" href="/myshops">
					<span>
						<img src="" className="style.dashicon" alt="shop icon" />
					</span>
					<span className="style.dashbtntxt">My Shops</span>
				</Link>
			</main>
		</div>
	);
}
// This function gets called at build time
export async function getStaticPaths() {
	// Call nextauth to get role
	const res = await fetch("https://.../dashboard");
	const dashboard = await res.json();

	// Get the paths we want to pre-render based on posts
	const paths = dashboard.map(user => `/dashboard/${user.role}`);

	// We'll pre-render only these paths at build time.
	// { fallback: false } means other routes should 404.
	return { paths, fallback: false };
}
export async function getStaticProps({ params }) {
	// params contains the post `id`.
	// If the route is like /posts/1, then params.id is 1
	const res = await fetch(`https://.../dashboard/${params.role}`);
	const post = await res.json();

	// Pass post data to the page via props
	return { props: { dashboard } };
}

export default Dashboard;
