import { NavLink } from "react-router-dom";
import { NavBarPrimaryStyle } from "./NavBarPrimary.style";

const NavBarPrimary = () => {
	return (
		<NavBarPrimaryStyle>
			<ul>
				<li><NavLink to="/">HOME</NavLink></li>
				<li><NavLink to="/posters/drama">PLAKATER</NavLink></li>
				<li><NavLink to="/om_os">OM OS</NavLink></li>
				<li><NavLink to="/kontakt">KONTAKT</NavLink></li>
				<li><NavLink to="/cart">KURV</NavLink></li>
				<li><NavLink to="/login">LOGIN</NavLink></li>
			</ul>
		</NavBarPrimaryStyle>
	);
}

export default NavBarPrimary;
