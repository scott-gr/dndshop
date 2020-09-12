import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import styles from "./index.module.css";

//Large dashboard button
const DashBtn = props => (
	<Link className={styles.dashbtn} to={props.to}>
		<span>
			<img src={props.dashicon} className={styles.dashicon} alt={props.alt} />
		</span>
		<span className={styles.dashbtntxt}>{props.dashbtntxt}</span>
	</Link>
);

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<main className={styles.buttons}>
			<DashBtn dashicon="" dashbtntxt="Party" to="/party/" alt="party icon" />
			<DashBtn dashicon="" dashbtntxt="Shops" to="/shops/" alt="shop icon" />
		</main>
	</Layout>
);

export default IndexPage;
