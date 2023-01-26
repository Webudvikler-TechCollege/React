import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<nav>
			<ul>
				<li><Link to="/">Forside</Link></li>
				<li><Link to="/goals">Verdensmål</Link></li>
			</ul>
		</nav>
	);
}

export default NavBar;
