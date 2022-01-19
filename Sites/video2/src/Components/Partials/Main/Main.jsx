import styles from './Main.module.scss'

export const Main = props => {
	return (
	  <main className={styles.wrapper}>
		  {props.children}
	  </main>
	)
  }