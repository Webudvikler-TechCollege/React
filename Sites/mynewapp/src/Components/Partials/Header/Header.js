export const Header = (props) => {

	return (
	  <header>
		<h1>{(props.pagetitle) ? props.pagetitle : 'My New REACT App'}</h1>
	  </header>
	)
  }