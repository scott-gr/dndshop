import Link from "next/link";
import { signin, signout, useSession } from "next-auth/client";
import styles from "./header.module.css";

const Header = () => {
	const [session, loading] = useSession();
	return (
		<header className={styles.header}>
			<nav className={styles.navbar}>
				<Link href="/">
					<span className={styles.headerbrand}>DNDSHOP</span>
				</Link>

				<p>
					{!session && (
						<a
							href="/api/auth/signin"
							onClick={e => {
								e.preventDefault();
								signin();
							}}
						>
							<button className={styles.signInButton}>Sign in</button>
						</a>
					)}
					{session && (
						<>
							<Link href="/profile">
								<a>
									<span
										style={{ backgroundImage: `url(${session.user.image})` }}
										className={styles.avatar}
									/>
								</a>
							</Link>
							<span className={styles.email}>{session.user.email}</span>
							<a
								href="/api/auth/signout"
								onClick={e => {
									e.preventDefault();
									signout();
								}}
							>
								<button className="signOutButton">Sign out</button>
							</a>
						</>
					)}
				</p>

				<button className="signInButton">Sign in</button>
			</nav>
		</header>
	);
};

export default Header;
