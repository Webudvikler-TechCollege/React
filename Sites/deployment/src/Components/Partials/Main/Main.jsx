import style from './Main.module.scss'

export const Main = (props) => {
	return (
	  <main className={style.container}>
		  {props.children}
	  </main>
	)
  }