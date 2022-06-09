import { Routes, Route } from 'react-router-dom'
import { Comments } from '../../Pages/Comments/Comments'
import { Home } from '../../Pages/Home/Home'
import { NoPage } from '../../Pages/NoPage/NoPage'

export const AppRouter = () => {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path="/submenu">
				<Route index element={<Home />} />
				<Route path="comments" element={<Comments />} />
			</Route>
			<Route path="*" element={<NoPage />} />
		</Routes>
	)
}

