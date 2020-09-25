//gatsby stuff.. update for nextjs
import React from "react";
import { Link } from "next";
import styles from "../styles/dashboard.module.css";

//Large dashboard button
const DashBtn = props => (
	<Link className={styles.dashbtn} to={props.to}>
		<span>
			<img src={props.dashicon} className={styles.dashicon} alt={props.alt} />
		</span>
		<span className={styles.dashbtntxt}>{props.dashbtntxt}</span>
	</Link>
);

const DashboardPage = () => (
	<div>
		<main className={styles.buttons}>
			<DashBtn dashicon="" dashbtntxt="Party" to="/party/" alt="party icon" />
			<DashBtn dashicon="" dashbtntxt="Shops" to="/shops/" alt="shop icon" />
		</main>
	</div>
);

export default DashboardPage;
