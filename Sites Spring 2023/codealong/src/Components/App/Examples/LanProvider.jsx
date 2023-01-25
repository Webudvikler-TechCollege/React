import { createContext, useContext } from "react"

const LanContext = createContext()

const LanProvider = ({ children }) => {
	const lan = 'DK'

	return (
		<LanContext.Provider value={lan}>
			{children}
		</LanContext.Provider>
	)
}

const useLan = () => useContext(LanContext)

export { useLan, LanProvider }