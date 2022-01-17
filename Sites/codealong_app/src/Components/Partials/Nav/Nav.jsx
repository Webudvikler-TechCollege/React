import styles from './Nav.module.scss'

export const Nav = props => {
	console.log(props);
	return (
		<nav className={styles.navbar}>
			<ul>
				{props && props.navItems && props.navItems.map((value, index) => {
					return (
						<li key={index}><a href={value.path}>{value.name}</a></li>
					)
				})}
			</ul>
		</nav>
	)
}