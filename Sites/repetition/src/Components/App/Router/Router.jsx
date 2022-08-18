import { Routes, Route } from 'react-router-dom'
import { Comments } from '../../Pages/Comments/Comments'
import { Home } from '../../Pages/Home/Home'
import { Login } from '../../Pages/Login/Login'
import { ProductList } from '../../Pages/Products/ProductList'
import { NoPage } from '../../Pages/NoPage/NoPage'

export const AppRouter = () => {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path="/submenu">
				<Route index element={<Home />} />
				<Route path="comments" element={<Comments />}>
					<Route path=":id" element={<Comments />} />
				</Route>
			</Route>
			<Route path="/products" element={<ProductList />} />
			<Route path="/login" element={<Login />} />
			<Route path="*" element={<NoPage />} />
		</Routes>
	)
}

