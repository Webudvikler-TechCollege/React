import { Nav } from '../Nav/Nav'
import styles from './Header.module.scss'

export const Header = () => {
	return (
	  <header className={styles.header}>
		<h1>My First React App</h1>
		<Nav />
	  </header>
	)
  }
  