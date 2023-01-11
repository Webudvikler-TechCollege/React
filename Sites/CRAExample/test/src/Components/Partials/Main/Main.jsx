import styles from './Main.module.scss'

const Main = props => {
	return (
		<main className={styles.sitemain}>
			{props.children}
		</main>
	);
}

export default Main;
