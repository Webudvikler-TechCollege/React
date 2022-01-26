import { createContext, useState, useContext } from "react"

const HeaderContext = createContext()

export const Headers = () => {
	const [user, setUser] = useState('Test')

	const Header2 = () => {
		return (
			<>
				<h2>Header2</h2>
				<Header3 />
			</>
		)
	}

	const Header3 = () => {
		return (
			<>
				<h3>Header3</h3>
				<Header4 />
			</>
		)
	}

	const Header4 = () => {
		const user = useContext(HeaderContext)
		return (
			<>
				<h4>Header4</h4>
				<p>Hello {user}</p>
			</>
		)
	}

	return (
		<HeaderContext.Provider value={user}>
			<h1>{`Hello ${user}`}</h1>
			<Header2  />
		</HeaderContext.Provider>
	)
}
