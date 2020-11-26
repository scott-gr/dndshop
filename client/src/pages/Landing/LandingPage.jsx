import React from "react";
import Converter from "../../components/Converter/Converter.jsx";
import "./landingpage.css";

const LandingPage = () => {
	return (
		<div>
			<h1>DnD Shop</h1>
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

			<Converter />
		</div>
	);
};

export default LandingPage;
