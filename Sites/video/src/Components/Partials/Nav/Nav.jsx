import styles from './Nav.module.scss'
import { NavLink } from 'react-router-dom'
import arrNavItems from './arrNavItems'

export const Nav = () => {
	return (
		<nav className={styles.navbar}>
			<ul>
				{arrNavItems && arrNavItems.map((item, key) => {
					return (
						<NavList key={key} path={item.path} title={item.title} />
					)
				})}
			</ul>
		</nav>
	)
}

const NavList = props => {
	return (
		<li>
			<NavLink to={props.path}>{props.title}</NavLink>
		</li>
	)
}