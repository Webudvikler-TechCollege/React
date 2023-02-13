import CartList from "../../App/Cart/CartList";
import { ContentWrapper } from "../../App/Elements/ContentWrapper/ContentWrapper";

export const Cart = () => {
	return (
		<ContentWrapper title="Indkøbskurv">
			<CartList />
		</ContentWrapper>

	);
}