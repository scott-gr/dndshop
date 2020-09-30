import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useCurrentUser } from "../../lib/hooks";

const ProfilePage = () => {
	const [user] = useCurrentUser();
	const { name, email, character, profilePicture } = user || {};

	if (!user) {
		return <p>Please sign in</p>;
	}
	return (
		<div>
			<Head>
				<title>{name}</title>
			</Head>
			<div>
				{profilePicture ? (
					<img src={profilePicture} width="256" height="256" alt={name} />
				) : null}
				<section>
					<div>
						<h2>{name}</h2>
							<Link href="/profile/settings">
								<button type="button">Edit</button>
							</Link>
					</div>
					Character
					<p>{character}</p>
					Email
					<p>{email}</p>
				</section>
			</div>
		</div>
	);
};

export default ProfilePage;
