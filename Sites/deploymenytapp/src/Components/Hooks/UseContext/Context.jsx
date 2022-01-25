import { createContext, Provider, useContext } from "react"

const HeaderContext = createContext()

export const Header1 = () => {
	const [user, setUser] = useState('Heinz K')

	return (
		<HeaderContext.Provider value={user}>
			<h1>{`Hello ${user}`}</h1>
			<Header2 user={user} />
		</HeaderContext.Provider>
	)
}
