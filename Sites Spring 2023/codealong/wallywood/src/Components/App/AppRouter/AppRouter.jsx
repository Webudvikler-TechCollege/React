import { Routes, Route } from 'react-router-dom';
import Cart from '../../../Pages/Cart/Cart';
import Home from '../../../Pages/Home/Home';
import Login from '../../../Pages/Login/Login';
import Notfound from '../../../Pages/Notfound/Notfound';
import { Posters } from '../../../Pages/Posters/Posters';
import { PosterList } from '../../../Pages/Posters/PosterList/PosterList'
import { PosterDetails } from '../../../Pages/Posters/PosterDetails/PosterDetails'

const AppRouter = () => {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path="/posters" element={<Posters />}>
				<Route path=":genre" element={<PosterList />} />
				<Route path=":genre/:poster" element={<PosterDetails />} />
			</Route>
			<Route path="/cart" element={<Cart />} />
			<Route path="/login" element={<Login />} />
			<Route path="*" element={<Notfound />} />
		</Routes>
	);
}

export default AppRouter;