import { NavLink } from 'react-router-dom'
import arrNavItems from '../../Assets/Data/arrNavItems'

export const NavFromArray = () => {


	return (
		<nav>
			<ul className="list-none">
				{arrNavItems.map((item, key) => {
					return (
						item.display ?
							<li key={key}>
								<NavLink to={item.path}>{item.title}</NavLink>
								{(item.children) ?
									<ul>
										{item.children?.map((subitem, subkey) => {
											const path = subitem.path ? `${item.path}/${subitem.path}` : item.path
											return (subitem.display) ? (
												<li key={subkey}>
													<NavLink to={path}>{subitem.title}</NavLink>
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