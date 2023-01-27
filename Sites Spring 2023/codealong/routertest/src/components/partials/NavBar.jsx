import { NavLink } from "react-router-dom";

const NavBar = () => {
	return (
		<nav>
			<ul>
				<li><NavLink to="/">Forside</NavLink></li>
				<li><NavLink to="/goals">Verdensmål</NavLink></li>
				<li><NavLink to="/about">Om os</NavLink></li>
			</ul>
		</nav>
	);
}

export default NavBar;
