import {Routes, Route} from 'react-router-dom'
import arrNavItems from '../../Assets/data/arrNavItems'

export const AppRouter = () => {
	return (
		<Routes>
			{arrNavItems.map((item, key) => {
				return (
					<Route key={key} path={item.path} element={item.element} />
				)
			})}
		</Routes>
	)
}

