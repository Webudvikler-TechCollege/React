import { Routes, Route } from 'react-router-dom';
import Home from '../../../Pages/Home/Home';
import Plakater from '../../../Pages/Plakater/Plakater';

const AppRouter = () => {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path="/plakater" element={<Plakater />} />
		</Routes>
	);
}

export default AppRouter;