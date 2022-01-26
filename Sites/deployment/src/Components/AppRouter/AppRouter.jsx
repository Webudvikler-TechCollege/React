import { Routes, Route } from 'react-router-dom'
import arrNavItems from '../../Assets/data/arrNavItems'

export const AppRouter = () => {
	return (
		<Routes>
			{arrNavItems.map((item, key) => {
				return (
					item.subnav ?
						<Route
							key={key}
							path={item.path}
						>
							{item.subnav?.map((subitem, subkey) => {
								return (
									(!subkey) ?
										<Route
											key={subkey}
											index
											element={subitem.element}
										/> :
										<Route
											key={subkey}
											path={subitem.path}
											element={subitem.element}
										/>
								)
							})}
						</Route> :
						<Route
							key={key}
							path={item.path}
							element={item.element}
						/>
				)
			})}
		</Routes>
	)
}

