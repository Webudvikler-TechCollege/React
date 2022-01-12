import { ReactComponent as Logo } from '../../../Assets/images/logo.svg'

export const Main = () => {
	return (
	  <main>
		  <h2>My First React App</h2>
		  <p><img alt="REACT Logo" src={require('../../../Assets/images/logo.png')} /></p>
		  <Logo />
	  </main>
	)
  }