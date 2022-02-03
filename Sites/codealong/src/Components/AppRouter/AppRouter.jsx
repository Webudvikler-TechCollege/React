import { useEffect } from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom'
import { About } from '../Pages/About/About'
import { Home } from '../Pages/Home/Home'
import { Login } from '../Pages/Login/Login'
import { ProductDetails, ProductList, Products } from '../Pages/Products/Products'

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
				<Route index element={<Redirect to="/products/1" />}></Route>
				<Route path=":cat_id">
					<Route index element={<ProductList />}></Route>
					<Route path=":id" element={<ProductDetails />} />
				</Route>
			</Route>
			<Route path="/login" element={<Login />} />
		</Routes>
	)
}

