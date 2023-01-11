import { Route, Routes } from "react-router-dom";
import Home from '../../Pages/Home'
import About from '../../Pages/About'
import Products from '../../Pages/Products'

const AppRouter = () => {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/products" element={<Products />} />
		</Routes>
	);
}

export default AppRouter;
