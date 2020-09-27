import Link from "next/link";
import './header.css';

const Header = () => {
	return (
		<header styleName="header">
			<nav>
				<Link href="/">
					<span styleName="headerbrand">DNDSHOP</span>
				</Link>
				<button styleName="signInButton">Sign in</button>
			</nav>
		</header>
	);
};

export default Header;
