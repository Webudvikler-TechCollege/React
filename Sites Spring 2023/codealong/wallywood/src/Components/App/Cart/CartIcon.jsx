import { CartIconStyle } from "./CartIcon.style";
import { ReactComponent as IconCartSVG } from '../../../Assets/svg/icon_cart.svg'
import { useCartItems } from "../Providers/CartProvider";
import { Link } from "react-router-dom";

const CartIcon = () => {
	const { cartItems } = useCartItems()

	return (
		<CartIconStyle>
			<Link to="/cart">
				<IconCartSVG />
			</Link>
			<p>
			<Link to="/cart">
				Du har {cartItems.length} varer i kurven
			</Link>	
			</p>
		</CartIconStyle>
	);
}

export default CartIcon;
