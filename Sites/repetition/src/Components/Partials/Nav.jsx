import { NavLink } from 'react-router-dom'
import arrNavItems from '../../Assets/Data/arrNavItems'

export const Nav = () => {
	return (
		<nav className="bg-indigo-900 pl-5 py-2">
			<ul className="list-none">
				{arrNavItems.map((item, key) => {
					return (
						item.display ?
							<li key={key} className="text-white inline-block group ">
								<NavLink to={item.path} className="p-3 group-hover:bg-indigo-600 hover:rounded-sm">{item.title}</NavLink>
								{(item.children) ?
									<ul className="absolute invisible group-hover:visible bg-indigo-600 mt-2">
										{item.children?.map((subitem, subkey) => {
											const path = subitem.path ? `${item.path}/${subitem.path}` : item.path
											return (subitem.display) ? (
												<li key={subkey}>
													<NavLink to={path} className="block px-3 w-48 py-2">{subitem.title}</NavLink>
												</li>
											) : null
										})}
									</ul> 
								: null}
							</li>
							: null
					)
				})}
			</ul>
		</nav>
	)
}