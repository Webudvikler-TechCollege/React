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
						</li>
						: null
					)
				})}
			</ul>
		</nav>
	)
}