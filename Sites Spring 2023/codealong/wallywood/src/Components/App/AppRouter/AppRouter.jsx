import { Routes, Route } from 'react-router-dom';
import Home from '../../../Pages/Home/Home';
import Notfound from '../../../Pages/Notfound/Notfound';
import Plakater from '../../../Pages/Plakater/Plakater';

const AppRouter = () => {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path="/plakater" element={<Plakater />} />
			<Route path="*" element={<Notfound />} />
		</Routes>
	);
}

export default AppRouter;