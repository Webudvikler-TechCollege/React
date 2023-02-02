import { Routes, Route } from 'react-router-dom';
import Home from '../../../Pages/Home/Home';
import Notfound from '../../../Pages/Notfound/Notfound';
import {PosterDetails, PosterList, Posters} from '../../../Pages/Posters/Posters';

const AppRouter = () => {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path="/posters" element={<Posters />}>
				<Route path=":slug" element={<PosterList />} />
				<Route path=":slug/:id" element={<PosterDetails />} />
			</Route>
			<Route path="*" element={<Notfound />} />
		</Routes>
	);
}

export default AppRouter;