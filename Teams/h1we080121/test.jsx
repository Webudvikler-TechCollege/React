


const App = () => {
	return (
		<div>
			Hej verden
		</div>
	)
}

class App extends React.Component {
	render() {
		return (
			<div>
				Hej verden
			</div>
		)
	} 
}

export const PageHeader = (props) => {
    return (
        <header>
            <h1>{props.pagetitle}</h1>
        </header>
    )
}

<PageHeader pagetitle="My First React App" />