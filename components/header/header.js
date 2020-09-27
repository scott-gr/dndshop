import Link from "next/link";
import { signin, signout, useSession } from "next-auth/client";
import "./header.css";

const Header = () => {
	const [session, loading] = useSession();
	return (
		<header styleName="header">
			<nav>
				<Link href="/">
					<span styleName="headerbrand">DNDSHOP</span>
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
							<button styleName="signInButton">Sign in</button>
						</a>
					)}
					{session && (
						<>
							<Link href="/profile">
								<a>
									<span
										style={{ backgroundImage: `url(${session.user.image})` }}
										styleName="avatar"
									/>
								</a>
							</Link>
							<span styleName="email">{session.user.email}</span>
							<a
								href="/api/auth/signout"
								onClick={e => {
									e.preventDefault();
									signout();
								}}
							>
								<button styleName="signOutButton">Sign out</button>
							</a>
						</>
					)}
				</p>

				<button styleName="signInButton">Sign in</button>
			</nav>
		</header>
	);
};

export default Header;
