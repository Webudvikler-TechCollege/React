import { Route, Routes } from "react-router-dom";
import Home from '../../Pages/Home'
import About from '../../Pages/About'
import Products from '../../Pages/Products'
import FormElements from "../Examples/FormElements";
import { Staff, CityList } from "../../Pages/Staff/Staff";

const AppRouter = () => {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/products" element={<Products />} />
			<Route path="/form" element={<FormElements /> } />
			<Route path="/staff" element={<Staff />}>
				<Route index element={<CityList />}></Route>
				<Route path=":region_id" element={<CityList />}></Route>
			</Route>
		</Routes>
	)
}

export default AppRouter;
