import React from "react";
import Button from "../../components/Button/Button";
import styles from "./profilepage.module.css";

const ProfilePage = () => {
	return (
		<div>
			{/* {profilePicture ? (
					<img src={profilePicture} width="256" height="256" alt={name} />
				) : null} */}
			Role: <p></p>
			<section>
				<div>
					<h2>name</h2>
					{/* <Link href="/profile/settings">
								<button type="button">Edit</button>
							</Link> */}
				</div>
				Character
				<p></p>
				Email
				<p></p>
			</section>{" "}
			<Button className={styles.signoutBtn} text="Sign Out" />
		</div>
	);
};

export default ProfilePage;
