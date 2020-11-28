import React from "react";
import Converter from "../../components/Converter/Converter.jsx";
import Login from "../../components/Login/Login.jsx"
import styles from "./landingpage.module.css";

const LandingPage = () => {
	return (
			<div className={styles.container}>
				<header className={styles.header}>
					<img src="https://github.com/scott-gr/dndshop/blob/0255abd4bab158d441ab72a32189e2774d827a15/client/src/assets/dndshop-logo.png?raw=true" alt="dnd shop logo"/>
				</header>
				<nav>
					<p>Nav buttons here?</p>
				</nav>
				<main className={styles.main}>
					<p>
						The app is still in development. Follow the progress on{" "}
						<a
							href="https://github.com/scott-gr/dndshop"
							target="_blank"
							rel="noreferrer"
							alt="github page for this project"
						>
							GitHub
						</a>
					</p>
					< Login />
				</main>
				<section className={styles.sidebar}>
					< Converter />
				</section>
				<footer>Made by Scott Griffin</footer>
			</div>
	);
};

export default LandingPage;
