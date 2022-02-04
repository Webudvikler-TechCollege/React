import { Routes, Route, useNavigate } from 'react-router-dom'
import {Home} from '../Pages/Home/Home'
import {About} from '../Pages/About/About'
import { ProductDetails, ProductList, Products } from '../Pages/Products/Products'
import { useEffect } from 'react'

const Redirect = ({ to }) => {
	let navigate = useNavigate();
	useEffect(() => {
		navigate(to);
	});
	return null;
}

export const AppRouter = () => {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/products" element={<Products />}>
				<Route index element={<Redirect to='/products/1' />}></Route>
				<Route path=":category_id">
					<Route index element={<ProductList />}></Route>
					<Route path=":product_id" element={<ProductDetails />}></Route>
				</Route>
			</Route>
		</Routes>
	)
}

