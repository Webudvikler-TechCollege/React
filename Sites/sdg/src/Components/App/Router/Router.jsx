import { Routes, Route } from 'react-router-dom'
import { Home } from '../../Pages/Home/Home'
import { GoalList } from '../../Pages/Goals/GoalList'
import { GoalDetails } from '../../Pages/Goals/GoalDetails'
import { NoPage } from '../../Pages/NoPage/NoPage'
import { Login } from '../../Pages/Login/Login'

export const AppRouter = () => {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path="/goals" element={<GoalList />}>
				<Route path=":id" element={<GoalDetails />} />
			</Route>
			<Route path="/login" element={<Login />} />
			<Route path="*" element={<NoPage />} />
		</Routes>
	)
}