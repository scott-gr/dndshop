import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useCurrentUser } from "../lib/hooks";

const Layout = ({ children }) => {
	const [user, { mutate }] = useCurrentUser();
	const handleLogout = async () => {
		await fetch("/api/auth", {
			method: "DELETE",
		});
		mutate(null);
	};
	return (
		<div>
			<Head>
				<title>DNDSHOP</title>
				<meta
					key="viewport"
					name="viewport"
					content="width=device-width, initial-scale=1, shrink-to-fit=no"
				/>
				<meta
					name="description"
					content="Store creator and party currency management app for tabletop games. Built primarily for D&D 5E."
				/>
				<meta property="og:title" content="DNDSHOP" />
				<meta
					property="og:description"
					content="Store creator and party currency management app for tabletop games. Built primarily for D&D 5E."
				/>
			</Head>
			<header>
				<nav>
					<Link href="/">
						<a>
							<h1>DNDSHOP</h1>
						</a>
					</Link>
					<div>
						{!user ? (
							<div>
								<Link href="/login">
									<button>Sign in</button>
								</Link>
								<Link href="/signup">
									<button>Sign up</button>
								</Link>
							</div>
						) : (
							<div>
								{/* <Link href="/user/[userId]" as={`/user/${user._id}`}> */}
                <Link href="/profile">
									<button>Profile</button>
								</Link>

								<button tabIndex={0} role="button" onClick={handleLogout}>
									Logout
								</button>
							</div>
						)}
					</div>
				</nav>
			</header>

			<main>{children}</main>
			<footer>FOOTER</footer>
		</div>
	);
};

export default Layout
