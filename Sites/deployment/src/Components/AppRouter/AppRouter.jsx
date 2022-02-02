import { Routes, Route, useNavigate, Outlet } from 'react-router-dom'
import { Home } from '../Pages/Home/Home'
import { About } from '../Pages/About/About'
import { Products } from '../Pages/Products/Products'
import { useEffect } from 'react'

export const AppRouter = () => {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/products">
				<Outlet />
			</Route>
		</Routes>
	)
}

