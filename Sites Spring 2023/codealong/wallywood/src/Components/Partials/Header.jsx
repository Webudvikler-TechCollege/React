import { HeaderStyle } from "./Header.style";
import NavBarPrimary from "./NavBarPrimary";

const Header = () => {
	return (
		<HeaderStyle>
			<h1>Wallywood</h1>
			<NavBarPrimary />
		</HeaderStyle>		
	);
}

export default Header;
