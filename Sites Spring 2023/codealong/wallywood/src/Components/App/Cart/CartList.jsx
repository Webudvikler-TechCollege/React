import { CartListStyle } from "./CartList.style";
import { useCartItems } from '../Providers/CartProvider'
import { ReactComponent as IconTrashSVG } from '../../../Assets/svg/icon_trash.svg'
import { useAuth } from "../Providers/AuthProvider";
import axios from "axios";

const CartList = () => {
	const { cartItems, setCartItems } = useCartItems()
	const { loginData } = useAuth()


	let sum = cartItems.reduce((prev, current) => {
		return prev + +current.poster.price
	}, 0)

	const handleTrashClick = async (id) => {
		const options = {
			headers: {
				Authorization: `Bearer ${loginData.access_token}`
			}
		}
		const endpoint = `http://localhost:4000/cart/${id}`
		const result = await axios.delete(endpoint, options)
		if(result.data) {
			const endpoint = `http://localhost:4000/cart`
			const newCartData = await axios.get(endpoint, options)
			setCartItems(newCartData.data)
		}
	}

	return (
		<CartListStyle>
			<div>
				<div>Produkt</div>
				<div>Antal</div>
				<div>Pris</div>
				<div>Handling</div>
			</div>
		{cartItems && cartItems.map(item => {
			return (
				<div key={item.id}>
					<div>{item.poster.name}</div>
					<div>{item.quantity}</div>
					<div>{item.poster.price},00 DKK</div>
					<div>
						<IconTrashSVG onClick={() => handleTrashClick(item.id)} />
					</div>
				</div>
			)
		})}
			<div>
				<div>Total</div>
				<div></div>
				<div>{sum},00 DKK</div>
			</div>	
		</CartListStyle>
	);
}

export default CartList;
