import { CartIconStyle } from "./CartIconStyle";
import { ReactComponent as CartIconSVG } from '../../../Assets/svg/icon_cart.svg';
import { useCartData } from "../../App/Providers/CartProvider";

const CartIcon = () => {
	const { cartData } = useCartData()

	return (
		<CartIconStyle>
			<CartIconSVG />
			<p>Du har {cartData.length} varer i kurven</p>
		</CartIconStyle>
	);
}

export default CartIcon;
