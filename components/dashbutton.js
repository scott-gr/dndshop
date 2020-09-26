//gatsby stuff.. update for nextjs
import React from "react";
import { Link } from "next";
import styles from "../styles/dashbutton.module.css";

//Large dashboard button
const DashBtn = props => (
	<Link className={styles.dashbtn} to={props.to}>
		<span>
			<img src={props.dashicon} className={styles.dashicon} alt={props.alt} />
		</span>
		<span className={styles.dashbtntxt}>{props.dashbtntxt}</span>
	</Link>
);


export {DashBtn};
