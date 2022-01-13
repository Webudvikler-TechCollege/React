import styles from './Header.module.scss'

export const Header = (props) => {

	return (
		<div className={styles.wrapper}>
			<header>
				<h1>{(props.pagetitle) ? props.pagetitle : 'My New REACT App'}</h1>
			</header>
		</div>
	)
  }