import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import styles from "./index.module.css";

const DashBtn = props => (
	<button className={styles.dashbtn}>
		<span>
			<img src={props.dashicon} className={styles.dashicon} alt="button icon" />
		</span>
		<span className={styles.dashbtntxt}>{props.dashbtntxt}</span>
	</button>
);

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />

		<main className={styles.buttons}>

			<DashBtn dashicon="" dashbtntxt="Party" />
			<Link to="/shops/"><DashBtn dashicon="" dashbtntxt="Shops" /></Link>
			


		</main>
	</Layout>
);

export default IndexPage;
