import { useState } from "react"

export const PropDrilling = () => {
	const [user, setUser] = useState('Heinz K') 

	const Header1 = ({ user }) => {
		return (
			<>
				<h1>{`Hej ${user}!`}</h1>
				<Header2 user={user} />
			</>
		)
	}

	const Header2 = ({ user }) => {
		return (
			<>
				<h2>{`Hej ${user}!`}</h2>
				<Header3 user={user} />
			</>
		)
	}

	const Header3 = ({ user }) => {
		return (
			<>
				<h3>{`Hej ${user}!`}</h3>
				<Header4 user={user} />
			</>
		)
	}

	const Header4 = ({ user }) => {
		return (
			<>
				<h4>{`Hej ${user}!`}</h4>
			</>
		)
	}

	return (
		<>
			<Header1 user={user} />
		</>
	)
}