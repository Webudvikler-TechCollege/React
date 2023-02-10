import { HeaderStyle } from "./Header.style";
import NavBarPrimary from "./NavBarPrimary";
import { Link } from "react-router-dom";
import CartIcon from "../Pages/Cart/CartIcon";

const Header = () => {
	return (
		<HeaderStyle>
			<Link to="/">Wallywood</Link>
			<CartIcon />
			<NavBarPrimary />
		</HeaderStyle>		
	);
}

export default Header;
