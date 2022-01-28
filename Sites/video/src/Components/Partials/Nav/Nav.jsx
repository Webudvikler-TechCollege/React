import styles from './Nav.module.scss'
import { NavLink } from 'react-router-dom'
import arrNavItems from '../../../Assets/data/arrNavItems'

export const Nav = () => {
	return (
		<nav className={styles.navbar}>
			<ul>
				{arrNavItems.map((item, key) => {
					return (
						item.display ?
							<li key={key}>
								<NavLink to={item.path}>{item.title}</NavLink>
								{(item.subnav) ?
									<ul>
										{item.subnav?.map((subitem, subkey) => {
											const path = (subkey) ? `${item.path}/${subitem.path}` : item.path
											return (
												<li key={subkey}>
													<NavLink to={path}>{subitem.title}</NavLink>
												</li>
											)
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