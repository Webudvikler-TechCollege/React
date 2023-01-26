import styles from './Header.module.scss'

const Header = props => {
	return (
		<header className={styles.siteheader}>
			<h1>{props.pageTitle}</h1>
		</header>
	)
}

export default Header