import React from "react";
import Converter from "../../components/Converter/Converter.jsx";
import styles from "./landingpage.module.css";

const LandingPage = () => {
	return (
			<div className={styles.container}>
				<header className={styles.header}>
					<h1>DnD Shop</h1>
				</header>
				<nav>
					<p>Nav buttons here?</p>
				</nav>
				<main>
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
				</main>
				<section className={styles.sidebar}>
					<Converter />
				</section>
				<footer>Made by Scott Griffin</footer>
			</div>
	);
};

export default LandingPage;
