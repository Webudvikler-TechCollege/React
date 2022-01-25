import { NavLink } from 'react-router-dom'
import styles from './Nav.module.scss'

export const Nav = (props) => {
	return (
		<nav className={styles.navbar}>
			<ul>
				<li><NavLink to="/">Forside</NavLink></li>
				<li><NavLink to="/about">Om</NavLink></li>
				<li><NavLink to="/context">PropDrilling</NavLink></li>
				<li><NavLink to="/goals">17 mål</NavLink></li>
				<li><NavLink to="/timer">Timer</NavLink></li>
				<li><NavLink to="/threecounts">3 tællere</NavLink></li>
				<li><NavLink to="/products">Produkter</NavLink></li>
				<li><NavLink to="/jobs">Ledige stillinger</NavLink></li>
				<li><NavLink to="/contact">Kontakt</NavLink></li>
			</ul>
		</nav>
	)
}